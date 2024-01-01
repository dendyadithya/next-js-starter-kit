/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { UseBoundStore } from 'zustand'

export const useHydration = (store: UseBoundStore<any>) => {
  const [hydrated, setHydrated] = React.useState(false)

  React.useEffect(() => {
    const unsubHydrate = store.persist.onHydrate(() => setHydrated(false))

    const unsubFinishHydration = store.persist.onFinishHydration(() => setHydrated(true))

    setHydrated(store.persist.hasHydrated())

    return () => {
      unsubHydrate()
      unsubFinishHydration()
    }
  }, [])

  return hydrated
}
