import { type StateCreator } from 'zustand'

import { BIRTHDAYS_PER_PAGE } from '../../constants/values'
import { BirthdayListItemType } from '../../types'

export type GetBirthdaysStore = {
  isFetchEnabled: boolean
  setIsFetchEnabled: (newValue: boolean) => void
  isError: boolean
  setIsError: (isError: boolean) => void
  birthdaysFrom: number
  setBirthdaysFrom: (birthdaysFrom: number) => void
  birthdaysTo: number
  setBirthdaysTo: (birthdaysTo: number) => void
  birthdays: BirthdayListItemType[] | undefined
  setBirthdays: (birthdays: BirthdayListItemType[] | undefined) => void
  date: Date
  setDate: (date: Date) => void
}

export const getBirthdaysStoreCreator: StateCreator<GetBirthdaysStore> = set => ({
  isFetchEnabled: false,
  setIsFetchEnabled: isFetchEnabled => set({ isFetchEnabled }),
  isError: false,
  setIsError: isError => set({ isError }),
  birthdaysFrom: 0,
  setBirthdaysFrom: birthdaysFrom => set({ birthdaysFrom }),
  birthdaysTo: BIRTHDAYS_PER_PAGE,
  setBirthdaysTo: birthdaysTo => set({ birthdaysTo }),
  birthdays: [],
  setBirthdays: birthdays => set({ birthdays: birthdays }),
  date: new Date(),
  setDate: date => set({ date }),
})
