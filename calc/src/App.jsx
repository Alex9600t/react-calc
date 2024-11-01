import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [expression, setCount] = useState('')
  const sim1 = '(';
  const sim2 = ')';

  return (
    <>
      <div className="calc">
        <div className="res">
          {expression}
        </div>
        <div className="UI">
        <button onClick={() => setCount((expression) => expression = '')} className="item class7">
            <span>C</span>
          </button>
          <button onClick={() => setCount((expression) => expression += '(')} className="item class7">
            <span>{sim1}</span>
          </button>
          <button onClick={() => setCount((expression) => expression += ')')} className="item class7">
            <span>{sim2}</span>
          </button>
          <button onClick={() => setCount((expression) => expression = expression.slice(0, -1))} className="item class0">
            <span>←</span>
          </button>
          <button onClick={() => setCount((expression) => expression += '7')} className="item class7">
            <span>7</span>
          </button>
          <button onClick={() => setCount((expression) => expression += '8')} className="item class8">
            <span>8</span>
          </button>
          <button onClick={() => setCount((expression) => expression += '9')} className="item class9">
            <span>9</span>
          </button>
          <button onClick={() => setCount((expression) => expression += '-')} className="item minus">
            <span>-</span>
          </button>
          <button onClick={() => setCount((expression) => expression += '4')} className="item class4">
            <span>4</span>
          </button>
          <button onClick={() => setCount((expression) => expression += '5')} className="item class5">
            <span>5</span>
          </button>
          <button onClick={() => setCount((expression) => expression += '6')} className="item class6">
            <span>6</span>
          </button>
          <button onClick={() => setCount((expression) => expression += '+')} className="item plus">
            <span>+</span>
          </button>
          <button onClick={() => setCount((expression) => expression += '1')} className="item class1" >
            <span>1</span>
          </button>
          <button onClick={() => setCount((expression) => expression += '2')} className="item class2">
            <span>2</span>
          </button>
          <button onClick={() => setCount((expression) => expression += '3')} className="item class3">
            <span>3</span>
          </button>
          <button onClick={() => setCount((expression) => expression += '*')} className="item multiply">
            <span>*</span>
          </button>
          <button onClick={() => setCount((expression) => expression += '0')} className="item class0">
            <span>0</span>
          </button>
          <button onClick={() => setCount((expression) => expression += '.')} className="item class0">
            <span>.</span>
          </button>
          <button onClick={() => setCount((expression) => expression += '/')} className="item divide">
            <span>/</span>
          </button>
          <button onClick={() => setCount((expression) => eval(expression))} className="item equals">
            <span>=</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
