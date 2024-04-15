import { render, renderHook, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { useGetBirthdaysStore } from '../../stores/get-birthdays/get-birthdays-store'
import { BirthdaysErrorModal } from './birthdays-error-modal.component'

describe('BirthdaysErrorModal', () => {
  it("Does 'Todays Birthdays Error Modal' component render", async () => {
    const { result } = renderHook(() => useGetBirthdaysStore())

    console.log('result.current.isError 111 -> ', result.current.isError)

    act(() => {
      result.current.setIsError(true)
    })

    console.log('result.current.isError 222 -> ', result.current.isError)

    expect(result.current.isError).toEqual(true)

    render(<BirthdaysErrorModal />)
    const errorModalTitle = await screen.findByTestId('fetch-birthdays-error-modal-title')
    expect(errorModalTitle).toHaveTextContent(/error/i)
  })
})
