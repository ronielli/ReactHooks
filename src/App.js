import React, { useState, useEffect, useMemo, useCallback } from 'react';

// import { Container } from './styles';

export default function App() {
  const [tech, setTech] = useState([])
  const [newtech, setNewTech] = useState("")
  const handleAdd = useCallback(() => {
    setTech([...tech, newtech])
  }, [newtech, tech])

  useEffect(() => {
    const dados = localStorage.getItem("tech")
    if (dados) {
      setTech(JSON.parse(dados))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("tech", JSON.stringify(tech))

  }, [tech])
  const techSize = useMemo(() => tech.length, [tech])
  return (
    <>
      <strong>Item Total {techSize}</strong>
      <ul>
        {tech.map(item => <li>{item}</li>)}
        <input
          value={newtech}
          onChange={e => setNewTech(e.target.value)} />
        <button onClick={handleAdd}>Adicionar</button>
      </ul>
      ￼</>
  );
}
