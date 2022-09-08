import * as React from 'react'
import GridLayout from "react-grid-layout"

const cellStyle = { 'border': '1px solid rgba(0,255,0,0.3)' }

// const MyGridCell = ({ i }) =>
//  <div style={cellStyle} >{i}</div>

const BoardGrid = () => {

  const rows=4
  const columns=6
  const layout0 = Array(rows).fill(
    Array(columns).fill(
      { i: 'a', x: 0, y: 0, w: 1, h: 1, static: true }
    )
  )
  
  const layout1 = layout0.map((row, irow)=> {
    const row2 = row.map((cell, icol)=> {
      const cell2=
      { ...cell, 
        x: icol,
        y: irow,
        i: String.fromCharCode(97 + irow * columns + icol)
      }
      return cell2
    })
    return row2
  })

  const layout = layout1.reduce((prev, next)=>
    prev.concat(next)
  )

  

  return (
    <GridLayout 
      className="layout"
      layout={layout}
      cols={columns}
      rowHeight={30}
      width={400}
    >

      {layout.map(cell=>(
        <div style={cellStyle} key={cell.i} >{cell.i}</div>
        
      ))}

    </GridLayout>
  )
}

const App = ({ initialData }) => {
  return (
    <div>
      <BoardGrid />
    </div>
  )
}

export default App
