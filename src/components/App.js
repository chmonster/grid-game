/* eslint-disable no-console */
import * as React from 'react'
import GridLayout from 'react-grid-layout'

const defaultCellStyle = { border: '1px solid rgba(0,255,0,0.3)' }

// const startCellStyle = { 'backgroundColor': 'yellow' }
// const removedCellStyle = { 'backgroundColor': 'black' }
// const occupiedCellStyle = { 'backgroundColor': 'purple' }
// const availableCellStyle = { 'backgroundColor': 'purple' }
// const startSquares=[[1,3], [8,4]]

// const MyGridCell = ({ i }) =>
//  <div style={cellStyle} >{i}</div>

const BoardGrid = () => {
  const rows = 6
  const columns = 8
  const boardInit = Array(rows).fill(
    Array(columns).fill({ i: 'a', x: 0, y: 0, w: 1, h: 1, static: true })
  )

  const board = boardInit.map((row, irow) => {
    const row2 = row.map((cell, icol) => {
      const cell2 = {
        ...cell,
        x: icol,
        y: irow,
        i: String.fromCharCode(71 + irow * columns + icol),
        cellStyle: defaultCellStyle,
      }
      return cell2
    })
    return row2
  })

  const layout = board.reduce((prev, next) =>
    // const prev2 = {...prev, style: defaultCellStyle}
    prev.concat(next)
  )

  // console.log(layout)

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={columns}
      rowHeight={40}
      width={400}
    >
      {layout.map(cell => (
        <div style={cell.cellStyle} key={cell.i}>
          {cell.i}
        </div>
      ))}
    </GridLayout>
  )
}

const App = () => (
  <div>
    <BoardGrid />
  </div>
)

export default App
