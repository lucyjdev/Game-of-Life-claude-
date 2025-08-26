import { useState, useEffect, useCallback, useRef } from 'react'
import { Grid } from './components/Grid'
import { Controls } from './components/Controls'
import { nextGeneration, type Grid as GridType } from '../../backend/src/game-of-life'
import './App.css'

const GRID_SIZE = 30
const DEFAULT_SPEED = 200

function App() {
  const [grid, setGrid] = useState<GridType>(() => 
    Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(false))
  )
  const [isRunning, setIsRunning] = useState(false)
  const [speed, setSpeed] = useState(DEFAULT_SPEED)
  const [generation, setGeneration] = useState(0)
  
  const intervalRef = useRef<number | null>(null)

  const resetGrid = useCallback(() => {
    setGrid(Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(false)))
    setGeneration(0)
  }, [])

  const randomizeGrid = useCallback(() => {
    setGrid(
      Array(GRID_SIZE).fill(null).map(() => 
        Array(GRID_SIZE).fill(null).map(() => Math.random() > 0.7)
      )
    )
    setGeneration(0)
  }, [])

  const stepGeneration = useCallback(() => {
    setGrid(prevGrid => nextGeneration(prevGrid))
    setGeneration(prev => prev + 1)
  }, [])

  const toggleCell = useCallback((row: number, col: number) => {
    if (isRunning) return
    
    setGrid(prevGrid => {
      const newGrid = prevGrid.map(r => [...r])
      newGrid[row][col] = !newGrid[row][col]
      return newGrid
    })
  }, [isRunning])

  const play = useCallback(() => {
    setIsRunning(true)
  }, [])

  const pause = useCallback(() => {
    setIsRunning(false)
  }, [])

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(stepGeneration, speed)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning, speed, stepGeneration])

  return (
    <div className="app">
      <header className="app-header">
        <h1>Conway's Game of Life</h1>
        <p>Click cells to toggle them, then press play to watch evolution!</p>
      </header>

      <main>
        <Controls
          isRunning={isRunning}
          onPlay={play}
          onPause={pause}
          onStep={stepGeneration}
          onReset={resetGrid}
          onRandom={randomizeGrid}
          speed={speed}
          onSpeedChange={setSpeed}
          generation={generation}
        />

        <Grid 
          grid={grid} 
          onCellClick={toggleCell}
          cellSize={16}
        />
      </main>

      <footer className="app-footer">
        <p>
          Built with React, TypeScript, and Test-Driven Development • 
          <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener noreferrer">
            Learn about Conway's Game of Life
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App