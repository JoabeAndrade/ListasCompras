import { useRef, useState } from "react"
import { v4 } from "uuid"
import { AddButton, Container, Product } from "./styles"

function Home() {
  const inputRef = useRef()
  const [products, setProducts] = useState([])
  
  function buttonClick(){
    setProducts([{id: v4(), name: inputRef.current.value}, ...products])
    inputRef.current.value = ""
  }

  function deleteProduct(id){
    setProducts(products.filter(produto => produto.id !== id))
  }

  return (
    <Container>
      <h1>Lista de compras</h1>
      <input placeholder="produto..." ref={inputRef}/>
      <AddButton onClick={buttonClick}>Adicionar</AddButton>
      {products.map((produto) => (
        <Product key={produto.id}>
          <p>{produto.name}</p>
          <button onClick={() => deleteProduct(produto.id)}>🗑️</button>
        </Product>
        
      ))}
    </Container>
  )
}

export default Home
