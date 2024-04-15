import { act, render, renderHook, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { RootProvider } from '@/providers/root-provider'

import { useGetBirthdaysStore } from '../../stores/get-birthdays/get-birthdays-store'
import { BirthdayFetchButton } from './birthday-fetch-button.component'

const renderBirthdayFetchButton = () => {
  return render(
    <RootProvider>
      <BirthdayFetchButton />
    </RootProvider>,
  )
}

describe('BirthdayFetchButton', () => {
  it('should render with initial state of isFetchEnabled = false', async () => {
    renderBirthdayFetchButton()

    const fetchButton = await screen.findByTestId('fetch-todays-birthdays-button')

    expect(fetchButton).toHaveTextContent(/fetch/i)
  })

  it('clicking on button is triggering isFetchEnabled state update to true', async () => {
    const { result } = renderHook(() => useGetBirthdaysStore())

    renderBirthdayFetchButton()

    const user = userEvent.setup()

    const fetchButton = await screen.findByTestId('fetch-todays-birthdays-button')

    await act(async () => {
      await user.click(fetchButton)
    })

    expect(result.current.isFetchEnabled).toEqual(true)
  })
})
