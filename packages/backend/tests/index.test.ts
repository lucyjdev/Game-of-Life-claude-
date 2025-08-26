import { describe, it } from 'vitest'

// Import all test suites to ensure they run together
import './neighbor-counting.test'
import './cell-rules.test'
import './grid-behavior.test'
import './pattern-recognition.test'

describe('Game of Life Test Suite', () => {
  it('should run all test phases', () => {
    // This serves as a meta-test to ensure all test files are loaded
    // The actual tests are in the imported files above
  })
})