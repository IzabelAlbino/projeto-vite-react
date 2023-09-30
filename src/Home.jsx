import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Renomeando a função v4 para uuidv4
import { AddButton, Container, Product, Lixeira } from './styles';

function Home() {
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();

  function deletar(id) {
    setProdutos(produtos.filter(produto => produto.id !== id));
  }
  

  function cliqueiNoBotao() {
    setProdutos([{ id: uuidv4(), nome: inputRef.current.value }, ...produtos]); // Chamando uuidv4 como uma função
    inputRef.current.value = ''
  }

  return (
    <Container>
      <h1>Lista de compras</h1>
      <input placeholder="produto..." ref={inputRef} />
      <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>

      {produtos.map(produto => (
        <Product>
        <p t key={produto.id}>{produto.nome}</p>
        <Lixeira  onClick={() => deletar(produto.id)}>🚮</Lixeira>
        </Product>

      ))}
    </Container>
  );
}

export default Home;
