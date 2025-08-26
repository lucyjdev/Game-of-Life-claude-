export type Grid = boolean[][]

export function countNeighbors(grid: Grid, row: number, col: number): number {
  let count = 0
  const rows = grid.length
  const cols = grid[0].length
  
  // Check all 8 directions: top-left, top, top-right, left, right, bottom-left, bottom, bottom-right
  for (let deltaRow = -1; deltaRow <= 1; deltaRow++) {
    for (let deltaCol = -1; deltaCol <= 1; deltaCol++) {
      // Skip the center cell (the cell we're counting neighbors for)
      if (deltaRow === 0 && deltaCol === 0) {
        continue
      }
      
      const neighborRow = row + deltaRow
      const neighborCol = col + deltaCol
      
      // Check if neighbor is within grid boundaries
      if (neighborRow >= 0 && neighborRow < rows && 
          neighborCol >= 0 && neighborCol < cols) {
        // If the neighbor cell is alive, increment count
        if (grid[neighborRow][neighborCol]) {
          count++
        }
      }
      // Cells outside grid boundaries are considered dead (no increment)
    }
  }
  
  return count
}

export function applyCellRule(isAlive: boolean, neighborCount: number): boolean {
  if (isAlive) {
    // Live cell rules
    if (neighborCount < 2) {
      return false // Dies from underpopulation
    } else if (neighborCount === 2 || neighborCount === 3) {
      return true  // Survives
    } else {
      return false // Dies from overpopulation
    }
  } else {
    // Dead cell rules
    if (neighborCount === 3) {
      return true  // Becomes alive from reproduction
    } else {
      return false // Stays dead
    }
  }
}

export function nextGeneration(grid: Grid): Grid {
  const rows = grid.length
  const cols = grid[0].length
  
  // Create a new grid to store the next generation
  const newGrid: Grid = Array(rows).fill(null).map(() => Array(cols).fill(false))
  
  // Apply rules to each cell simultaneously
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const currentCell = grid[row][col]
      const neighborCount = countNeighbors(grid, row, col)
      newGrid[row][col] = applyCellRule(currentCell, neighborCount)
    }
  }
  
  return newGrid
}