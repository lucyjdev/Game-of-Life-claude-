import { describe, it, expect } from 'vitest'

type Grid = boolean[][]

describe('Pattern Recognition', () => {
  describe('Still Life patterns', () => {
    it('block pattern remains unchanged', () => {
      const block: Grid = [
        [false, false, false, false],
        [false, true,  true,  false],
        [false, true,  true,  false],
        [false, false, false, false]
      ]
      
      const nextGrid = nextGeneration(block)
      expect(nextGrid).toEqual(block)
    })

    it('beehive pattern remains unchanged', () => {
      const beehive: Grid = [
        [false, false, false, false, false, false],
        [false, false, true,  true,  false, false],
        [false, true,  false, false, true,  false],
        [false, false, true,  true,  false, false],
        [false, false, false, false, false, false]
      ]
      
      const nextGrid = nextGeneration(beehive)
      expect(nextGrid).toEqual(beehive)
    })

    it('loaf pattern remains unchanged', () => {
      const loaf: Grid = [
        [false, false, false, false, false, false],
        [false, false, true,  true,  false, false],
        [false, true,  false, false, true,  false],
        [false, false, true,  false, true,  false],
        [false, false, false, true,  false, false],
        [false, false, false, false, false, false]
      ]
      
      const nextGrid = nextGeneration(loaf)
      expect(nextGrid).toEqual(loaf)
    })
  })

  describe('Oscillator patterns', () => {
    it('blinker oscillates correctly (period 2)', () => {
      const blinkerVertical: Grid = [
        [false, false, false, false, false],
        [false, false, true,  false, false],
        [false, false, true,  false, false],
        [false, false, true,  false, false],
        [false, false, false, false, false]
      ]
      
      const blinkerHorizontal: Grid = [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, true,  true,  true,  false],
        [false, false, false, false, false],
        [false, false, false, false, false]
      ]
      
      const gen1 = nextGeneration(blinkerVertical)
      expect(gen1).toEqual(blinkerHorizontal)
      
      const gen2 = nextGeneration(gen1)
      expect(gen2).toEqual(blinkerVertical)
    })

    it('toad oscillates correctly (period 2)', () => {
      const toadPhase1: Grid = [
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, true,  true,  true,  false],
        [false, true,  true,  true,  false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false]
      ]
      
      const toadPhase2: Grid = [
        [false, false, false, false, false, false],
        [false, false, false, true,  false, false],
        [false, true,  false, false, true,  false],
        [false, true,  false, false, true,  false],
        [false, false, true,  false, false, false],
        [false, false, false, false, false, false]
      ]
      
      const gen1 = nextGeneration(toadPhase1)
      expect(gen1).toEqual(toadPhase2)
      
      const gen2 = nextGeneration(gen1)
      expect(gen2).toEqual(toadPhase1)
    })

    it('beacon oscillates correctly (period 2)', () => {
      const beaconPhase1: Grid = [
        [false, false, false, false, false, false],
        [false, true,  true,  false, false, false],
        [false, true,  true,  false, false, false],
        [false, false, false, true,  true,  false],
        [false, false, false, true,  true,  false],
        [false, false, false, false, false, false]
      ]
      
      const beaconPhase2: Grid = [
        [false, false, false, false, false, false],
        [false, true,  true,  false, false, false],
        [false, true,  false, false, false, false],
        [false, false, false, false, true,  false],
        [false, false, false, true,  true,  false],
        [false, false, false, false, false, false]
      ]
      
      const gen1 = nextGeneration(beaconPhase1)
      expect(gen1).toEqual(beaconPhase2)
      
      const gen2 = nextGeneration(gen1)
      expect(gen2).toEqual(beaconPhase1)
    })
  })

  describe('Spaceship patterns', () => {
    it('glider moves correctly (first step)', () => {
      const gliderGen0: Grid = [
        [false, false, false, false, false, false, false],
        [false, false, true,  false, false, false, false],
        [false, false, false, true,  false, false, false],
        [false, true,  true,  true,  false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false]
      ]
      
      const gliderGen1: Grid = [
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, true,  false, true,  false, false, false],
        [false, false, true,  true,  false, false, false],
        [false, false, true,  false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false]
      ]
      
      const result = nextGeneration(gliderGen0)
      expect(result).toEqual(gliderGen1)
    })
  })

  describe('Complex patterns', () => {
    it('r-pentomino evolves correctly (first generation)', () => {
      const rPentomino: Grid = [
        [false, false, false, false, false],
        [false, false, true,  true,  false],
        [false, true,  true,  false, false],
        [false, false, true,  false, false],
        [false, false, false, false, false]
      ]
      
      const rPentominoGen1: Grid = [
        [false, false, false, false, false],
        [false, false, true,  true,  false],
        [false, true,  false, true,  false],
        [false, false, true,  true,  false],
        [false, false, false, false, false]
      ]
      
      const result = nextGeneration(rPentomino)
      expect(result).toEqual(rPentominoGen1)
    })
  })

  describe('Death patterns', () => {
    it('dead grid stays dead', () => {
      const deadGrid: Grid = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
      ]
      
      const nextGrid = nextGeneration(deadGrid)
      expect(nextGrid).toEqual(deadGrid)
    })

    it('unstable pattern dies out completely', () => {
      const unstablePattern: Grid = [
        [false, false, false, false, false],
        [false, true,  false, true,  false],
        [false, false, false, false, false],
        [false, true,  false, true,  false],
        [false, false, false, false, false]
      ]
      
      const deadGrid: Grid = [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false]
      ]
      
      const result = nextGeneration(unstablePattern)
      expect(result).toEqual(deadGrid)
    })
  })
})

// Function signature - implementation will be in src/
function nextGeneration(grid: Grid): Grid {
  throw new Error('Not implemented')
}