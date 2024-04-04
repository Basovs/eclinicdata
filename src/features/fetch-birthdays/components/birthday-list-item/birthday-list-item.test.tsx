import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { vi } from "vitest"
import { useGetTodaysBirthdaysQuery } from "../../queries/use-get-todays-birthdays-query"
import { UseQueryResult } from "@tanstack/react-query"
import { BirthdayList } from "../birthday-list"

vi.mock(
  "@/features/fetch-birthdays/queries/use-get-todays-birthdays-query",
  () => ({
    useGetTodaysBirthdaysQuery: vi.fn(),
  })
)

const mockUseGetTodaysBirthdaysQuery = vi.mocked(useGetTodaysBirthdaysQuery)

test("renders birthday list correctly", async () => {
  const mockBirthdays = [
    { name: "John Doe", year: 1990, image: "", text: "" },
    { name: "Jane Doe", year: 1992, image: "", text: "" },
  ]
  mockUseGetTodaysBirthdaysQuery.mockReturnValue({
    isFetched: true,
    isLoading: false,
    error: null,
    data: mockBirthdays,
  } as unknown as UseQueryResult<typeof mockBirthdays, Error>)
  render(<BirthdayList />)

  const items = await screen.findAllByTestId("birthday-list-item")
  expect(items.length).toBe(mockBirthdays.length)
})
