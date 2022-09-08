import * as React from 'react'
import GridLayout from "react-grid-layout"

const BoardGrid = () => {
  // const layout = [
  //   { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
  //   { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  //   { i: "c", x: 4, y: 0, w: 1, h: 2 }
  // ]
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
      console.log(cell2)
      return cell2
    })
    //console.log(row2)
    return row2
  })

  const layout = layout1.reduce((prev, next)=>
    prev.concat(next)
  )

  console.log(layout)  

  const gridStyle = { 'border': '1px solid rgba(0,255,0,0.3)' }

  return (
    <GridLayout 
      className="layout"
      layout={layout}
      cols={columns}
      rowHeight={30}
      width={400}
    >
      {layout.map(cell=>(
        <div style={gridStyle} key={cell.i} >{cell.i}</div>
      ))}

    </GridLayout>
  )
}

const App = ({ initialData }) => {
  //const [count, setCount] = React.useState(0)
  return (
    <div>
      <BoardGrid />
    </div>
  )
}

export default App
