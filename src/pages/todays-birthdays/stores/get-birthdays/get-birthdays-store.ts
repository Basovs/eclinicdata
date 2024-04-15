import { create } from 'zustand'

import { type GetBirthdaysStore, getBirthdaysStoreCreator } from './get-birthdays-store-creator'

export const useGetBirthdaysStore = create<GetBirthdaysStore>()(getBirthdaysStoreCreator)
