// import { Inter } from 'next/font/google'
import { useState } from 'react'
import Pessoa from '../components/Pessoa'

// const inter = Inter({ subsets: ['latin'] })
export default function Home() {
const [idadePessoa, setIdadePessoa] = useState(20);
const incrementaIdade = () => {
  setIdadePessoa(idadePessoa + 1);
}
  return (
    <>
    <h1>Hello World!</h1>  
    <Pessoa nome="Eduardo" idade={idadePessoa}/>
    <button onClick={incrementaIdade}>Incrementa a idade</button>
    </>
  )
}
