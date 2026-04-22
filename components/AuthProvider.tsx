'use client'
import { useEffect } from 'react'
import { watchAuth, fetchProfile } from '@/lib/auth'
import { useStore } from '@/store/useStore'

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const setUser = useStore(s => s.setUser)
  const setAuthReady = useStore(s => s.setAuthReady)

  useEffect(() => {
    const unsub = watchAuth(async (fbUser) => {
      if (fbUser) {
        const profile = await fetchProfile(fbUser.uid)
        setUser(profile)
      } else {
        setUser(null)
      }
      setAuthReady(true)
    })
    return () => unsub()
  }, [setUser, setAuthReady])

  return <>{children}</>
}
