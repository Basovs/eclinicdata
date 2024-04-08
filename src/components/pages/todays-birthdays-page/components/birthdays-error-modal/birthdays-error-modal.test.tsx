import { render, screen } from '@testing-library/react'

import { BirthdaysErrorModal } from './birthdays-error-modal.component'

vi.mock('../../stores/use-get-birthdays-store', () => ({
  useGetBirthdaysStore: vi.fn(() => ({
    isError: true,
    setIsError: vi.fn(),
    setEnableFetch: vi.fn(),
  })),
}))

describe('BirthdaysErrorModal', () => {
  test("Does 'Todays Birthdays Error Modal' component render", async () => {
    render(<BirthdaysErrorModal />)

    const title = screen.getByRole('heading')

    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Error')

    screen.debug()
  })
})
