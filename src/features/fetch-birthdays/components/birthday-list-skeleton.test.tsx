import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { vi } from "vitest"
import { BirthdayList } from "./birthday-list"
import { useGetTodaysBirthdaysQuery } from "../queries/use-get-todays-birthdays-query"
import { UseQueryResult } from "@tanstack/react-query"

vi.mock(
  "@/features/fetch-birthdays/queries/use-get-todays-birthdays-query",
  () => ({
    useGetTodaysBirthdaysQuery: vi.fn(),
  })
)

const mockUseGetTodaysBirthdaysQuery = vi.mocked(useGetTodaysBirthdaysQuery)

test("displays loading skeleton when loading", async () => {
  mockUseGetTodaysBirthdaysQuery.mockReturnValue({
    error: null,
    isError: false,
    isLoading: true,
    isFetching: false,
    isSuccess: false,
    data: [],
  } as unknown as UseQueryResult<
    Array<{ image: string; name: string; year: number; text: string }>,
    Error
  >)
  render(<BirthdayList />)

  const skeleton = await screen.findByTestId("birthday-list-skeleton")
  expect(skeleton).toBeDefined()
})
