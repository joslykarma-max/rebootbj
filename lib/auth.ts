import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  User as FbUser,
} from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from './firebase'

export type UserProfile = {
  uid: string
  prenom: string
  nom: string
  email: string
  whatsapp?: string
  pays?: string
  interet?: string
  niveau: 'Explorateur' | 'Voyageur' | 'Ambassadeur' | 'Gardien du Dahomey'
  xp: number
  badges: string[]
  premium: boolean
  dateInscription: number
}

export type SignupInput = {
  prenom: string
  nom: string
  email: string
  password: string
  whatsapp?: string
  pays?: string
  interet?: string
}

export async function signup(input: SignupInput): Promise<UserProfile> {
  const cred = await createUserWithEmailAndPassword(auth, input.email, input.password)
  await updateProfile(cred.user, { displayName: `${input.prenom} ${input.nom}` })

  const profile: UserProfile = {
    uid: cred.user.uid,
    prenom: input.prenom,
    nom: input.nom,
    email: input.email,
    whatsapp: input.whatsapp || '',
    pays: input.pays || '',
    interet: input.interet || '',
    niveau: 'Explorateur',
    xp: 0,
    badges: ['first_step'],
    premium: false,
    dateInscription: Date.now(),
  }

  await setDoc(doc(db, 'users', cred.user.uid), {
    ...profile,
    createdAt: serverTimestamp(),
  })

  return profile
}

export async function login(email: string, password: string): Promise<UserProfile> {
  const cred = await signInWithEmailAndPassword(auth, email, password)
  const snap = await getDoc(doc(db, 'users', cred.user.uid))
  if (!snap.exists()) throw new Error('Profil utilisateur introuvable')
  return snap.data() as UserProfile
}

export async function logout() {
  await signOut(auth)
}

export function watchAuth(cb: (user: FbUser | null) => void) {
  return onAuthStateChanged(auth, cb)
}

export async function fetchProfile(uid: string): Promise<UserProfile | null> {
  const snap = await getDoc(doc(db, 'users', uid))
  return snap.exists() ? (snap.data() as UserProfile) : null
}
