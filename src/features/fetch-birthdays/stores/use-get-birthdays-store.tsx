import { create } from "zustand"

type GetBirthdaysStoreState = {
  fetchEnabled: boolean
  setEnableFetch: (newValue: boolean) => void
  isError: boolean
  setIsError: (isError: boolean) => void
}

export const useGetBirthdaysStore = create<GetBirthdaysStoreState>((set) => ({
  fetchEnabled: false,
  setEnableFetch: (fetchEnabled) => set({ fetchEnabled }),
  isError: false,
  setIsError: (isError) => set({ isError }),
}))
