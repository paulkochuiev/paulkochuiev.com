import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import MobileNav from './MobileNav'
import { NAV_ITEMS } from '../constants'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <MobileNav />
    </MemoryRouter>
  )
}

const toggle = () =>
  screen.getByRole('button', { name: /toggle navigation menu/i })

describe('MobileNav', () => {
  it('labels the toggle with the current page', () => {
    renderAt('/awards')
    expect(toggle()).toHaveTextContent('Awards')
  })

  it('keeps the menu closed until toggled', () => {
    renderAt('/about')
    expect(screen.queryByRole('link', { name: 'Projects' })).toBeNull()
  })

  it('reveals every enabled nav item when opened', () => {
    renderAt('/about')
    fireEvent.click(toggle())
    for (const item of NAV_ITEMS.filter((i) => i.enabled)) {
      expect(screen.getByRole('link', { name: item.label })).toBeInTheDocument()
    }
  })

  it('shows disabled items as non-interactive', () => {
    renderAt('/about')
    fireEvent.click(toggle())
    const disabled = NAV_ITEMS.find((i) => !i.enabled)!
    expect(screen.queryByRole('link', { name: disabled.label })).toBeNull()
    expect(screen.getByText(disabled.label)).toHaveAttribute('aria-disabled', 'true')
  })
})
