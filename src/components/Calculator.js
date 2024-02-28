import './App.scss';
import React, {useState} from "react";
import { Container } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";

// updated

function Calculator() {
const [calculation, setCalculation]=useState('')
    const [output, setOutput]=useState('')
    const actions = ['/', '*', '+', '-', '.']
    const updateCalculation=value=>{

    if(
        actions.includes(value) & calculation === '' ||
        actions.includes(value) & actions.includes(calculation.slice(-1))
    ){
        return
    }
    setCalculation(calculation+value)

        if (!actions.includes(value)){
            setOutput(eval(calculation+value).toString())
        }

    }
   const createDigits =()=>{
       const digits=[]

       for (let i=1;i<10; i++){
           digits.push(
               <button onClick={()=>updateCalculation(i.toString())} key={i}>{i}</button>
           )
       }
       return digits
   }
const calculate=()=>{
    setCalculation(eval(calculation).toString())
}
    const clear=()=>{
        if(calculation === ''){
            return
        }
        const value=calculation.slice(0,-1)
        setCalculation(value)
    }

  return (
      <Container>
        <div className='calculator-body'>
        <br />
    <center> <h1 className='h1'>Calculator <a href='https://github.com/oyuldash/calculator/blob/main/src/App.js'>
    <FaGithub />

        </a></h1> 
    </center>

          <div className="calc-grid">
      <div className='output'>
          {calculation||'0'}
          
          {/* {output ? <span className="preRes">{output}</span>:''} */}


      </div>

<div>
        <div className='ops'>

        <button className='cal-btn' onClick={()=>{updateCalculation('/')}} >/</button>
        <button className='cal-btn' onClick={()=>{updateCalculation('*')}}>*</button>
        <button className='cal-btn' onClick={()=>{updateCalculation('+')}}>+</button>
        <button className='cal-btn' onClick={()=>{updateCalculation('-')}}>-</button>
        <button className='cal-btn' onClick={clear}> <img  width={40} height={40} src="https://cdn-icons-png.flaticon.com/512/159/159805.png" /></button>
        </div>
        <div className='dig'>

            {createDigits()}

        <button className='cal-btn' onClick={()=>{updateCalculation('.')}}>.</button>
        <button className='cal-btn' onClick={()=>{updateCalculation('0')}}>0</button>
        <button className='cal-btn' onClick={calculate}>=</button>
    </div>
    </div>


    </div>
      </div>
      </Container>
  );
}

export default Calculator;