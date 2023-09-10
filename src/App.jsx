import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState('');
  const [curOption, setOption] = useState(0);
  const [curOption2, setOption2] = useState(0);
  const tip = amount * ((curOption + curOption2) / 2) / 100

  return (
    <>
      <div className='inputContainer'>
        <InputText amount={amount} setAmount={setAmount} />
        < InputSelect curOption={curOption} setOption={setOption}>How Did you like the service ?</InputSelect>
        <InputSelect curOption={curOption2} setOption={setOption2} >How Did your friend like the service ? </InputSelect>
        {amount && <Calculations amount={amount} tip={tip} />}
      </div>
    </>
  )
}

export default App;

function InputText({ amount, setAmount }) {
  return <label htmlFor="billValue">
    How much was the bill ?
    <input name='billValue' className='input-field' type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder='Enter bill amount' />
  </label>
}

function InputSelect({ curOption, setOption, children }) {

  return <label htmlFor="">
    {children}
    <select className='input-field' value={curOption} onChange={(e) => setOption(Number(e.target.value))}>
      <option value="0">Disstatisfied(0%)</option>
      <option value="5">It was Okay(5%)</option>
      <option value="10">It was good(10%)</option>
      <option value="20">Absolutely Amazing(20%)</option>
    </select>
  </label>

}

function Calculations({ amount, tip }) {
  return <div>
    You pay ${amount} (${amount} + ${tip} tip) = ${amount + tip}
  </div>
}
