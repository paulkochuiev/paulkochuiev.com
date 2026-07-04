import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, useLocation } from 'react-router-dom'
import { AppRoutes, ROUTE_PATHS } from './routes'
import { NAV_ITEMS } from './constants'

function LocationProbe() {
  return <div data-testid="loc">{useLocation().pathname}</div>
}

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
      <LocationProbe />
    </MemoryRouter>
  )
}

describe('routing', () => {
  it('redirects "/" to /about', () => {
    renderAt('/')
    expect(screen.getByTestId('loc')).toHaveTextContent('/about')
  })

  it('redirects unknown paths to /about', () => {
    renderAt('/does-not-exist')
    expect(screen.getByTestId('loc')).toHaveTextContent('/about')
  })

  it('has a matching route for every nav item path', () => {
    for (const item of NAV_ITEMS) {
      expect(ROUTE_PATHS).toContain(item.path)
    }
  })
})

describe('nav config', () => {
  it('marks the Experience tab as disabled', () => {
    const experience = NAV_ITEMS.find((i) => i.path === '/experience')
    expect(experience?.enabled).toBe(false)
  })
})
