import {
  doc,
  updateDoc,
  arrayUnion,
  increment,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp,
  where,
  Timestamp,
} from 'firebase/firestore'
import { db } from './firebase'
import type { UserProfile } from './auth'

const LEVEL_THRESHOLDS = [
  { min: 0, niveau: 'Explorateur' as const },
  { min: 100, niveau: 'Voyageur' as const },
  { min: 300, niveau: 'Ambassadeur' as const },
  { min: 700, niveau: 'Gardien du Dahomey' as const },
]

export function computeLevel(xp: number): UserProfile['niveau'] {
  return [...LEVEL_THRESHOLDS].reverse().find(l => xp >= l.min)!.niveau
}

export async function addXP(uid: string, amount: number, currentXP: number) {
  const newXP = currentXP + amount
  const niveau = computeLevel(newXP)
  await updateDoc(doc(db, 'users', uid), { xp: newXP, niveau })
  return { xp: newXP, niveau }
}

export async function awardBadge(uid: string, badge: string) {
  await updateDoc(doc(db, 'users', uid), { badges: arrayUnion(badge) })
}

export async function recordQuizResult(uid: string, score: number, total: number) {
  await addDoc(collection(db, 'users', uid, 'quiz_history'), {
    score,
    total,
    at: serverTimestamp(),
  })
}

export async function markPodcastDone(uid: string, episodeId: string) {
  await updateDoc(doc(db, 'users', uid), {
    podcasts_done: arrayUnion(episodeId),
  })
}

export type Itinerary = {
  days: number
  group: string
  interests: string[]
  budget: string
  period: string
  content: string
  createdAt?: Timestamp
}

export async function saveItinerary(uid: string, it: Omit<Itinerary, 'createdAt'>) {
  return addDoc(collection(db, 'users', uid, 'itineraries'), {
    ...it,
    createdAt: serverTimestamp(),
  })
}

export async function listItineraries(uid: string) {
  const q = query(
    collection(db, 'users', uid, 'itineraries'),
    orderBy('createdAt', 'desc'),
    limit(20),
  )
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...(d.data() as Itinerary) }))
}

export type Post = {
  id?: string
  uid: string
  author: string
  avatar: string
  content: string
  likes: number
  createdAt?: Timestamp
}

export async function createPost(p: Omit<Post, 'createdAt' | 'likes' | 'id'>) {
  return addDoc(collection(db, 'posts'), {
    ...p,
    likes: 0,
    createdAt: serverTimestamp(),
  })
}

export async function listPosts(max = 30) {
  const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'), limit(max))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...(d.data() as Post) }))
}

export async function togglePostLike(postId: string, delta: 1 | -1) {
  await updateDoc(doc(db, 'posts', postId), { likes: increment(delta) })
}

export async function markAlertRead(uid: string, alertId: string) {
  await updateDoc(doc(db, 'users', uid), {
    alerts_read: arrayUnion(alertId),
  })
}
