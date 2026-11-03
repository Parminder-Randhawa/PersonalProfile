import { create } from 'zustand'

const useLaptopStore = create((set) => ({
    activeScreen: 'me',
    setActiveScreen: (screen) => set({activeScreen: screen})
}))

export default useLaptopStore;