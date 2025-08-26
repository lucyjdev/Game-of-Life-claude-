import { describe, it, expect } from 'vitest'

describe('Cell Rules', () => {
  describe('applyCellRule', () => {
    describe('Live cell rules', () => {
      it('live cell with fewer than 2 neighbors dies (underpopulation)', () => {
        expect(applyCellRule(true, 0)).toBe(false)
        expect(applyCellRule(true, 1)).toBe(false)
      })

      it('live cell with 2 neighbors survives', () => {
        expect(applyCellRule(true, 2)).toBe(true)
      })

      it('live cell with 3 neighbors survives', () => {
        expect(applyCellRule(true, 3)).toBe(true)
      })

      it('live cell with more than 3 neighbors dies (overpopulation)', () => {
        expect(applyCellRule(true, 4)).toBe(false)
        expect(applyCellRule(true, 5)).toBe(false)
        expect(applyCellRule(true, 6)).toBe(false)
        expect(applyCellRule(true, 7)).toBe(false)
        expect(applyCellRule(true, 8)).toBe(false)
      })
    })

    describe('Dead cell rules', () => {
      it('dead cell with exactly 3 neighbors becomes alive (reproduction)', () => {
        expect(applyCellRule(false, 3)).toBe(true)
      })

      it('dead cell with fewer than 3 neighbors stays dead', () => {
        expect(applyCellRule(false, 0)).toBe(false)
        expect(applyCellRule(false, 1)).toBe(false)
        expect(applyCellRule(false, 2)).toBe(false)
      })

      it('dead cell with more than 3 neighbors stays dead', () => {
        expect(applyCellRule(false, 4)).toBe(false)
        expect(applyCellRule(false, 5)).toBe(false)
        expect(applyCellRule(false, 6)).toBe(false)
        expect(applyCellRule(false, 7)).toBe(false)
        expect(applyCellRule(false, 8)).toBe(false)
      })
    })

    describe('Edge cases', () => {
      it('handles maximum neighbor count correctly', () => {
        expect(applyCellRule(true, 8)).toBe(false)
        expect(applyCellRule(false, 8)).toBe(false)
      })

      it('handles minimum neighbor count correctly', () => {
        expect(applyCellRule(true, 0)).toBe(false)
        expect(applyCellRule(false, 0)).toBe(false)
      })
    })
  })
})

// Function signature - implementation will be in src/
function applyCellRule(isAlive: boolean, neighborCount: number): boolean {
  throw new Error('Not implemented')
}