# Conway's Game of Life - Backend Implementation

A Test-Driven Development (TDD) implementation of Conway's Game of Life in TypeScript.

## Project Structure

```
├── src/                 # Source code (to be implemented)
├── tests/              # Test files
│   ├── neighbor-counting.test.ts    # Phase 1: Neighbor counting tests
│   ├── cell-rules.test.ts           # Phase 1: Cell rule tests  
│   ├── grid-behavior.test.ts        # Phase 2: Grid integration tests
│   ├── pattern-recognition.test.ts  # Phase 3: Known pattern tests
│   └── index.test.ts               # Test runner
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vitest.config.ts    # Vitest configuration
└── README.md           # This file
```

## TDD Implementation Plan

### Phase 1: Foundation Tests ✅
- **Neighbor Counting**: Tests for accurate 8-directional neighbor detection
- **Cell Rules**: Tests for the four Game of Life transition rules

### Phase 2: Integration Tests ✅  
- **Grid Behavior**: Tests for boundary conditions and pure function properties
- **Grid Transformation**: Tests for simultaneous rule application

### Phase 3: Pattern Recognition Tests ✅
- **Still Life**: Block, beehive, loaf patterns
- **Oscillators**: Blinker, toad, beacon patterns  
- **Spaceships**: Glider movement
- **Complex Patterns**: R-pentomino evolution

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Tests
```bash
npm test                # Run all tests
npm run test:watch      # Run tests in watch mode
npm run test:coverage   # Run tests with coverage report
```

### Development Workflow

Following TDD principles:

1. **Red**: Run tests to see them fail (all tests currently fail)
2. **Green**: Implement minimal code to make tests pass
3. **Refactor**: Improve code while keeping tests green

### Next Steps

The test suite is complete and ready. Now implement the source code in `src/` to make the tests pass:

1. Start with `countNeighbors()` function
2. Implement `applyCellRule()` function  
3. Create `nextGeneration()` function
4. Refactor and optimize as needed

### Game Rules

Conway's Game of Life follows these rules:
- Live cell with < 2 neighbors dies (underpopulation)
- Live cell with 2-3 neighbors survives  
- Live cell with > 3 neighbors dies (overpopulation)
- Dead cell with exactly 3 neighbors becomes alive (reproduction)

## Testing Strategy

- **Unit Tests**: Individual function behavior
- **Integration Tests**: Grid-level operations
- **Pattern Tests**: Known Game of Life patterns
- **Edge Cases**: Boundary conditions and error states