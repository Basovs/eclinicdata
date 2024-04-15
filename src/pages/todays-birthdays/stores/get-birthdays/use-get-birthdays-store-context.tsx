import { type PropsWithChildren, createContext, useContext, useRef } from 'react'
import { type StoreApi, createStore } from 'zustand'
import { shallow } from 'zustand/shallow'
import { useStoreWithEqualityFn } from 'zustand/traditional'

import { GetBirthdaysStore, getBirthdaysStoreCreator } from './get-birthdays-store-creator'

export const createGetBirthdaysStore = () => {
  return createStore<GetBirthdaysStore>(getBirthdaysStoreCreator)
}

export const GetBirthdaysStoreContext = createContext<StoreApi<GetBirthdaysStore>>(null as never)

export type GetBirthdaysStoreProviderProps = PropsWithChildren

export const GetBirthdaysStoreProvider = ({ children }: GetBirthdaysStoreProviderProps) => {
  const getBirthdaysStoreRef = useRef(createGetBirthdaysStore())

  return (
    <GetBirthdaysStoreContext.Provider value={getBirthdaysStoreRef.current}>
      {children}
    </GetBirthdaysStoreContext.Provider>
  )
}

export type UseGetBirthdaysStoreContextSelector<T> = (store: GetBirthdaysStore) => T

export const useGetBirthdaysStoreContext = <T,>(
  selector: UseGetBirthdaysStoreContextSelector<T>,
): T => {
  const getBirthdaysStoreContext = useContext(GetBirthdaysStoreContext)

  if (getBirthdaysStoreContext === undefined) {
    throw new Error('getBirthdaysStoreContext must be used within GetBirthdaysStoreProvider')
  }

  return useStoreWithEqualityFn(getBirthdaysStoreContext, selector, shallow)
}
