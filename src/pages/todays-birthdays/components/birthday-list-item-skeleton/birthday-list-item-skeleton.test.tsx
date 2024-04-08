import { UseQueryResult } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { vi } from 'vitest'

import { useGetTodaysBirthdaysQuery } from '../../queries/use-get-todays-birthdays-query'
import { BirthdayList } from '../birthday-list'

vi.mock('@/pages/todays-birthdays/queries/use-get-todays-birthdays-query', () => ({
  useGetTodaysBirthdaysQuery: vi.fn(),
}))

const mockUseGetTodaysBirthdaysQuery = vi.mocked(useGetTodaysBirthdaysQuery)

// Loading placeholder array
const loadingItemCount = Array.from({ length: 9 }, (_, i) => i)

describe('BirthdayListItemSkeleton', () => {
  test('renders birthday list sekeleton items correctly', async () => {
    mockUseGetTodaysBirthdaysQuery.mockReturnValue({
      isFetched: false,
      isFetching: true,
      isLoading: true,
      error: null,
      data: [],
    } as unknown as UseQueryResult<
      Array<{ image: string; name: string; year: number; text: string }>,
      Error
    >)
    render(<BirthdayList />)

    const items = await screen.findAllByTestId('birthday-list-item-skeleton')
    expect(items.length).toBe(loadingItemCount.length)
  })
})
