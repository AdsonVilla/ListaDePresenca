import React,{useState, useEffect} from 'react'

import './style.css'
import {Card, CardProps} from '../../Components/Card'

type APIResponse = {
  name: string;
  avatar_url: string;
}

type User = {
  name: string;
  avatar: string;
}

export function Home() {
  const [studentName, setStudentName] = useState('') // const = [estado, função que atualiza o estado]
  const [students, setStudents] = useState<CardProps[]>([]) // aplicando a tipagem
  const [user, setUser] = useState<User>({} as User)

  function addStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    setStudents(prevState => [...prevState, newStudent])
  }
 
useEffect(() => {
    async function fetchData() {
    const response = await fetch("https://api.github.com/users/adsonvilla");
    const data = await response.json() as APIResponse;
    
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
}

fetchData()
}, [])

  return (
    <div className='container'>
    <header>
      <h1>Lista de presença</h1>
      <div>
        <strong>Usuário: {user.name}</strong>
        <img src={user.avatar} alt="Foto de perfil" />
      </div>
    </header>
    <input 
    type="text" 
    placeholder="Digite seu nome"
    onChange={e => setStudentName(e.target.value)}/> 
  
    <button type="button" onClick={addStudent}>
      Adicionar
    </button>

    {
      students.map(student => (
      <Card 
      key={student.time}
      name={student.name} 
      time={student.time}/>
      ))
    }
    
    </div>

  )
}
