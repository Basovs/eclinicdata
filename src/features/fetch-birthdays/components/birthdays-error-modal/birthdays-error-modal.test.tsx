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

    const errorModalTitle = await screen.getByTestId('error-modal-title')

    expect(errorModalTitle).toBeInTheDocument()
    expect(errorModalTitle).toHaveTextContent('Error')

    screen.debug()
  })
})
