import { describe, it, expect } from 'vitest'

type Grid = boolean[][]

describe('Grid Behavior', () => {
  describe('nextGeneration', () => {
    describe('Grid boundary behavior', () => {
      it('treats cells outside grid boundaries as dead', () => {
        // Single live cell at edge should die (only 0 neighbors)
        const grid: Grid = [
          [true, false],
          [false, false]
        ]
        
        const nextGrid = nextGeneration(grid)
        
        expect(nextGrid).toEqual([
          [false, false],
          [false, false]
        ])
      })

      it('maintains grid dimensions after generation', () => {
        const grid: Grid = [
          [true,  false, true],
          [false, true,  false],
          [true,  false, true]
        ]
        
        const nextGrid = nextGeneration(grid)
        
        expect(nextGrid.length).toBe(3)
        expect(nextGrid[0].length).toBe(3)
        expect(nextGrid[1].length).toBe(3)
        expect(nextGrid[2].length).toBe(3)
      })
    })

    describe('Pure function properties', () => {
      it('does not mutate the original grid', () => {
        const originalGrid: Grid = [
          [true,  true,  false],
          [true,  false, false],
          [false, false, false]
        ]
        
        const originalCopy = originalGrid.map(row => [...row])
        const nextGrid = nextGeneration(originalGrid)
        
        expect(originalGrid).toEqual(originalCopy)
        expect(nextGrid).not.toBe(originalGrid)
      })

      it('produces same output for same input (deterministic)', () => {
        const grid: Grid = [
          [true,  false, true],
          [false, true,  false],
          [true,  false, true]
        ]
        
        const result1 = nextGeneration(grid)
        const result2 = nextGeneration(grid)
        
        expect(result1).toEqual(result2)
      })

      it('handles empty grid correctly', () => {
        const emptyGrid: Grid = [
          [false, false, false],
          [false, false, false],
          [false, false, false]
        ]
        
        const nextGrid = nextGeneration(emptyGrid)
        
        expect(nextGrid).toEqual([
          [false, false, false],
          [false, false, false],
          [false, false, false]
        ])
      })
    })

    describe('Single generation transitions', () => {
      it('applies rules simultaneously to all cells', () => {
        // Blinker pattern: should rotate 90 degrees
        const grid: Grid = [
          [false, true,  false],
          [false, true,  false],
          [false, true,  false]
        ]
        
        const nextGrid = nextGeneration(grid)
        
        expect(nextGrid).toEqual([
          [false, false, false],
          [true,  true,  true],
          [false, false, false]
        ])
      })

      it('handles single cell correctly (should die)', () => {
        const grid: Grid = [
          [false, false, false],
          [false, true,  false],
          [false, false, false]
        ]
        
        const nextGrid = nextGeneration(grid)
        
        expect(nextGrid).toEqual([
          [false, false, false],
          [false, false, false],
          [false, false, false]
        ])
      })

      it('handles overcrowded situation correctly', () => {
        // All cells should die from overcrowding
        const grid: Grid = [
          [true, true, true],
          [true, true, true],
          [true, true, true]
        ]
        
        const nextGrid = nextGeneration(grid)
        
        expect(nextGrid).toEqual([
          [false, false, false],
          [false, false, false],
          [false, false, false]
        ])
      })
    })

    describe('Edge cases', () => {
      it('handles 1x1 grid', () => {
        const grid: Grid = [[true]]
        const nextGrid = nextGeneration(grid)
        expect(nextGrid).toEqual([[false]])
      })

      it('handles 2x2 grid', () => {
        const grid: Grid = [
          [true,  true],
          [true,  false]
        ]
        
        const nextGrid = nextGeneration(grid)
        
        // Each cell should be evaluated based on its neighbors
        expect(nextGrid).toEqual([
          [true,  false],
          [true,  false]
        ])
      })
    })
  })
})

// Function signature - implementation will be in src/
function nextGeneration(grid: Grid): Grid {
  throw new Error('Not implemented')
}