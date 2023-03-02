import React, { useState } from 'react'
import IconDivide from '../assets/divide.svg'
import IconEqualsResult from '../assets/equals_result.svg'
import IconEquals from '../assets/equals.svg'
import IconMinus from '../assets/minus.svg'
import IconMultiply from '../assets/multiply.svg'
import IconPercent from '../assets/percent.svg'
import IconPlusMinus from '../assets/plus_minus.svg'
import IconPlus from '../assets/plus.svg'
import './Calculator.css'

const Calculator = () => {

  const [num, setNum] = useState(0)
  const [oldNum, setOldNum] = useState(0)
  const [operator, setOperator] = useState()
  const [lastCalc, setLastCalc] = useState('')

  const inputNum = (e) => {
    const numValue = e.target.value
    if (num === 0) {
      setNum(numValue)
    } else {
      setNum(num + numValue)

    }
  }

  const clearAll = () => {
    setNum(0)
  }

  const percentage = () => {
    setNum(num / 100)
  }

  const changeSign = () => {
    setNum(num * -1)
  }

  const operatorHandler = (operatorInput) => {
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
  }

  const calculate = () => {
    if (operator === '/') {
      setNum(oldNum / num)
    }

    if (operator === 'x') {
      setNum(oldNum * num)
    }

    if (operator === '-') {
      setNum(oldNum - num)
    }

    if (operator === '+') {
      setNum(parseFloat(oldNum) + parseFloat(num))
    }

    setLastCalc(oldNum + operator + num)

    console.log(`operator: ${operator}`)
    console.log(`lastCalc: ${lastCalc}`)

  }

  return (
    <div>

      <div id="calculator">

        <div id="display">
          <div id="last-calc">{lastCalc}</div>
          <div id="result">
            <img src={IconEquals} alt="igual" />
            <span>{num}</span>
          </div>
        </div>

        <div id="keyboard">

          <button onClick={clearAll} className="secondary">AC</button>
          <button onClick={clearAll}>C</button>
          <button onClick={percentage}><img src={IconPercent} alt="porcentagem" /></button>
          <button onClick={() => operatorHandler('/')} className="tertiary"><img src={IconDivide} alt="divisão" /></button>

          <button onClick={inputNum} value={7}>7</button>
          <button onClick={inputNum} value={8}>8</button>
          <button onClick={inputNum} value={9}>9</button>
          <button onClick={() => operatorHandler('x')} className="tertiary"><img src={IconMultiply} alt="multiplicação" /></button>

          <button onClick={inputNum} value={4}>4</button>
          <button onClick={inputNum} value={5}>5</button>
          <button onClick={inputNum} value={6}>6</button>
          <button onClick={() => operatorHandler('-')} className="tertiary"><img src={IconMinus} alt="subtração" /></button>

          <button onClick={inputNum} value={1}>1</button>
          <button onClick={inputNum} value={2}>2</button>
          <button onClick={inputNum} value={3}>3</button>
          <button onClick={() => operatorHandler('+')} className="tertiary"><img src={IconPlus} alt="adição" /></button>

          <button onClick={changeSign}><img src={IconPlusMinus} alt="mais ou menos" /></button>
          <button onClick={inputNum} value={0}>0</button>
          <button onClick={inputNum} value={"."}>,</button>
          <button onClick={calculate} className="quartiary"><img src={IconEqualsResult} alt="igual" /></button>

        </div>

      </div>

    </div>
  )
}

export default Calculator
