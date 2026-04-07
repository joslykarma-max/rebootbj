// store/useStore.ts
// Store Zustand — état global de navigation, destination, curseur

import { create } from 'zustand'

type CursorMode = 'default' | 'poi' | 'btn'

interface RebootStore {
  // Navigation
  layer: 0 | 1 | 2
  animating: boolean
  scrollAcc: number

  // Destination
  activeDest: string | null
  panelOpen: boolean

  // Cursor
  cursorMode: CursorMode
  cursorLabel: string

  // Actions
  setLayer: (n: 0 | 1 | 2) => void
  setAnimating: (v: boolean) => void
  addScroll: (delta: number) => void
  resetScroll: () => void
  openDest: (id: string) => void
  closeDest: () => void
  setCursorMode: (mode: CursorMode, label?: string) => void
}

export const useStore = create<RebootStore>((set) => ({
  layer: 0,
  animating: false,
  scrollAcc: 0,

  activeDest: null,
  panelOpen: false,

  cursorMode: 'default',
  cursorLabel: '',

  setLayer: (n) => set({ layer: n, scrollAcc: 0 }),
  setAnimating: (v) => set({ animating: v }),
  addScroll: (delta) => set((s) => ({ scrollAcc: s.scrollAcc + delta })),
  resetScroll: () => set({ scrollAcc: 0 }),

  openDest: (id) => set({ activeDest: id, panelOpen: true }),
  closeDest: () => set({ activeDest: null, panelOpen: false }),

  setCursorMode: (mode, label = '') => set({ cursorMode: mode, cursorLabel: label }),
}))
