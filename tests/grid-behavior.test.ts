import { describe, it, expect } from 'vitest'
import { nextGeneration, type Grid } from '../src/game-of-life'

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
        // Corner cells have 3 neighbors (reproduction), edges have 5 (overpopulation), center has 8 (overpopulation)
        const grid: Grid = [
          [true, true, true],
          [true, true, true],
          [true, true, true]
        ]
        
        const nextGrid = nextGeneration(grid)
        
        expect(nextGrid).toEqual([
          [true,  false, true],
          [false, false, false],
          [true,  false, true]
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
        
        // (0,0): 2 neighbors → survives, (0,1): 2 neighbors → survives
        // (1,0): 2 neighbors → survives, (1,1): 3 neighbors → becomes alive
        expect(nextGrid).toEqual([
          [true,  true],
          [true,  true]
        ])
      })
    })
  })
})

