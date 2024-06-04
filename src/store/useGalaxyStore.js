import { create } from "zustand"

export const useGalaxyStore = create((set) => ({
  galaxy: false,
  setGalaxy: (value) => set(() => ({ galaxy: value })),
}))
