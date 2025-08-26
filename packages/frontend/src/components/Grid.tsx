import { type FC } from 'react'
import './Grid.css'

export interface GridProps {
  grid: boolean[][]
  onCellClick: (row: number, col: number) => void
  cellSize?: number
}

export const Grid: FC<GridProps> = ({ 
  grid, 
  onCellClick, 
  cellSize = 20 
}) => {
  const rows = grid.length
  const cols = grid[0]?.length || 0

  return (
    <div 
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        width: cols * cellSize,
        height: rows * cellSize,
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`cell ${cell ? 'alive' : 'dead'}`}
            style={{
              width: cellSize,
              height: cellSize,
            }}
            onClick={() => onCellClick(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  )
}