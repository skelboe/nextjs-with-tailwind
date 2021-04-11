import { render, screen } from '@testing-library/react'
import App from '../../pages/index'

describe('App', () => {
    it('renders without crashing', () => {
        render(<App />)

        const elem = screen.getByRole('heading', { name: 'My premium project with Next.js' })
        expect(elem).toBeInTheDocument()
    })
})
