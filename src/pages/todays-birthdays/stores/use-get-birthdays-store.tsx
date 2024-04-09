import { create } from 'zustand'

import { BIRTHDAYS_PER_PAGE } from '../constants/values'
import { BirthdayListItemType } from '../types'

type GetBirthdaysStoreState = {
  fetchEnabled: boolean
  setEnableFetch: (newValue: boolean) => void
  isError: boolean
  setIsError: (isError: boolean) => void
  birthdaysFrom: number
  setBirthdaysFrom: (birthdaysFrom: number) => void
  birthdaysTo: number
  setBirthdaysTo: (birthdaysTo: number) => void
  birthdays: BirthdayListItemType[] | undefined
  setBirthdays: (birthdays: BirthdayListItemType[] | undefined) => void
}

export const useGetBirthdaysStore = create<GetBirthdaysStoreState>(set => ({
  fetchEnabled: false,
  setEnableFetch: fetchEnabled => set({ fetchEnabled }),
  isError: false,
  setIsError: isError => set({ isError }),
  birthdaysFrom: 0,
  setBirthdaysFrom: birthdaysFrom => set({ birthdaysFrom }),
  birthdaysTo: BIRTHDAYS_PER_PAGE,
  setBirthdaysTo: birthdaysTo => set({ birthdaysTo }),
  birthdays: [],
  setBirthdays: birthdays => set({ birthdays: birthdays }),
}))
