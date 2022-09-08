import * as React from 'react'
import GridLayout from "react-grid-layout"

const MyFirstGrid = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 }
  ]
  const gridStyle = { 'border': '1px solid rgba(0,255,0,0.3)' }

  return (
    <GridLayout 
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      <div style={gridStyle} key="a">a</div>
      <div style={gridStyle} key="b">b</div>
      <div style={gridStyle} key="c">c</div>
    </GridLayout>
  )
}

const App = ({ initialData }) => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <h1>{initialData.appName}</h1>
      This is a sample stateful and server-side rendered React application.
      <br />
      <br />
      Here is a button that will track how many times you click it:
      <br />
      <br />
      <button title="increment" onClick={() => setCount(count + 1)}>
        {count}
      </button>
 
      <MyFirstGrid />
 
    </div>
  )
}

export default App
