import { joinClasses } from './helpers'

describe('join classes - helper function', () => {
    test('return corect string', () => {
        expect(joinClasses('primary', [])).toBe('primary')
        expect(joinClasses('primary', ['secondary'])).toBe('primary secondary')
        expect(joinClasses('primary', ['secondary', 'third'])).toBe('primary secondary third')
        expect(joinClasses('primary', ['secondary', 'third', 'fourth'])).toBe('primary secondary third fourth')
    })

    test('return empty value', () => {
        expect(joinClasses('')).toBe('')
        expect(joinClasses('', '')).toBe('')
    })
})