import { create } from 'zustand'

interface InitialServiceUnitState {
  home: {
    title: string
  }
  setTitle: ({ title }: { title: string }) => void
  resetTitle: () => void
}

type InitialState = { home: InitialServiceUnitState['home'] }

const initialState: InitialState = {
  home: {
    title: 'Home'
  }
}

export const useServiceUnit = create<InitialServiceUnitState>()(set => ({
  ...initialState,
  setTitle: ({ title }) => set(state => ({ home: { ...state.home, title } })),
  resetTitle: () => set(state => ({ home: { ...state.home, title: 'Home' } }))
}))
