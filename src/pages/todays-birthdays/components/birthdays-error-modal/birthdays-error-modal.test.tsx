import { render, renderHook, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { useGetBirthdaysStore } from '../../stores/get-birthdays/get-birthdays-store'
import { BirthdaysErrorModal } from './birthdays-error-modal.component'

describe('BirthdaysErrorModal', () => {
  it("Does 'Todays Birthdays Error Modal' component render", async () => {
    render(<BirthdaysErrorModal />)

    const {
      result: {
        current: { isError, setIsError },
      },
    } = renderHook(() => useGetBirthdaysStore())
    console.log('isErrorisError -> ', isError)

    act(() => setIsError(true))
    console.log('isErrorisError222 -> ', isError)

    const title = await screen.findByTestId('fetch-birthdays-error-modal-title')

    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Error')

    screen.debug()
  })
})
