import { describe, it, expect } from 'vitest'
import { countNeighbors, type Grid } from '../src/game-of-life'

describe('Neighbor Counting', () => {
  describe('countNeighbors', () => {
    it('returns correct count for center cell with all neighbors alive', () => {
      const grid: Grid = [
        [true,  true,  true],
        [true,  false, true],
        [true,  true,  true]
      ]
      
      expect(countNeighbors(grid, 1, 1)).toBe(8)
    })

    it('returns correct count for center cell with no neighbors alive', () => {
      const grid: Grid = [
        [false, false, false],
        [false, true,  false],
        [false, false, false]
      ]
      
      expect(countNeighbors(grid, 1, 1)).toBe(0)
    })

    it('returns correct count for center cell with mixed neighbors', () => {
      const grid: Grid = [
        [true,  false, true],
        [false, true,  false],
        [true,  false, true]
      ]
      
      expect(countNeighbors(grid, 1, 1)).toBe(4)
    })

    it('handles top-left corner cell correctly', () => {
      const grid: Grid = [
        [true,  true,  false],
        [true,  false, false],
        [false, false, false]
      ]
      
      expect(countNeighbors(grid, 0, 0)).toBe(2)
    })

    it('handles top-right corner cell correctly', () => {
      const grid: Grid = [
        [false, true,  true],
        [false, false, true],
        [false, false, false]
      ]
      
      expect(countNeighbors(grid, 0, 2)).toBe(2)
    })

    it('handles bottom-left corner cell correctly', () => {
      const grid: Grid = [
        [false, false, false],
        [true,  false, false],
        [true,  true,  false]
      ]
      
      expect(countNeighbors(grid, 2, 0)).toBe(2)
    })

    it('handles bottom-right corner cell correctly', () => {
      const grid: Grid = [
        [false, false, false],
        [false, false, true],
        [false, true,  true]
      ]
      
      expect(countNeighbors(grid, 2, 2)).toBe(2)
    })

    it('handles edge cells correctly - top edge', () => {
      const grid: Grid = [
        [true,  true,  true],
        [false, true,  false],
        [false, false, false]
      ]
      
      expect(countNeighbors(grid, 0, 1)).toBe(3)
    })

    it('handles edge cells correctly - right edge', () => {
      const grid: Grid = [
        [false, false, true],
        [false, false, true],
        [false, false, true]
      ]
      
      expect(countNeighbors(grid, 1, 2)).toBe(2)
    })

    it('handles edge cells correctly - bottom edge', () => {
      const grid: Grid = [
        [false, false, false],
        [false, true,  false],
        [true,  true,  true]
      ]
      
      expect(countNeighbors(grid, 2, 1)).toBe(3)
    })

    it('handles edge cells correctly - left edge', () => {
      const grid: Grid = [
        [true,  false, false],
        [true,  false, false],
        [true,  false, false]
      ]
      
      expect(countNeighbors(grid, 1, 0)).toBe(2)
    })
  })
})

