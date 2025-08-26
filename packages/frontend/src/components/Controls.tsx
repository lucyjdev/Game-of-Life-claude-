import { type FC } from 'react'
import './Controls.css'

export interface ControlsProps {
  isRunning: boolean
  onPlay: () => void
  onPause: () => void
  onStep: () => void
  onReset: () => void
  onRandom: () => void
  speed: number
  onSpeedChange: (speed: number) => void
  generation: number
}

export const Controls: FC<ControlsProps> = ({
  isRunning,
  onPlay,
  onPause,
  onStep,
  onReset,
  onRandom,
  speed,
  onSpeedChange,
  generation,
}) => {
  return (
    <div className="controls">
      <div className="control-group">
        <button
          onClick={isRunning ? onPause : onPlay}
          className={`btn primary ${isRunning ? 'running' : ''}`}
        >
          {isRunning ? '⏸️ Pause' : '▶️ Play'}
        </button>
        
        <button onClick={onStep} disabled={isRunning} className="btn">
          ⏭️ Step
        </button>
        
        <button onClick={onReset} className="btn">
          🔄 Reset
        </button>
        
        <button onClick={onRandom} className="btn">
          🎲 Random
        </button>
      </div>

      <div className="control-group">
        <label htmlFor="speed">Speed: {speed}ms</label>
        <input
          id="speed"
          type="range"
          min="50"
          max="1000"
          step="50"
          value={speed}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          className="speed-slider"
        />
      </div>

      <div className="stats">
        <span className="generation">Generation: {generation}</span>
      </div>
    </div>
  )
}