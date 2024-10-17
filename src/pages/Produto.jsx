import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Table from "react-bootstrap/Table";
import ModalCadastrar from "../components/ModalCadastrar";

import { useState, useEffect } from "react";
import NavBarr from "../components/NavBarr";
const url = "http://localhost:5000/produtos";

const Produto = () => {
  const [produtos, setProdutos] = useState([]);

  const [modalCadastrar, setModalCadastrar] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const users = await res.json();
        setProdutos(users);
      } catch (error) {
        console.log(error.messagem);
      }
    }
    fetchData();
    console.log(produtos);
  }, []);

  return (
    <div>
      <NavBarr/>
      <Container>
        <h1>Lista de Produto</h1>
        <div className="d-grid col-5">
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
          {produtos.map((produtos)=>(
        <tr key={produtos.idProdutos}>
          <td>{produtos.id}</td>
          <td>{produtos.nome}</td>
          <td>{produtos.categoria}</td>
          <td>{produtos.preco}</td>
                <td>
                  <ButtonGroup size="sm">
                    <Button variant="danger" onClick={async () => { const res = await fetch(`http://localhost:5000/produtos/${produtos.id}`, {
                      method: "DELETE",
                      headers: {"Contente-Type": "application/json"}
                    })
                    const funcionarioRemovido = await res.json()
                    alert(`Usúario ${funcionarioRemovido.nome} foi excluido`)
                    }}>Excluir</Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ModalCadastrar
          show={modalCadastrar}
          onHide={() => {
            setModalCadastrar(false);
          }}
        />
      </Container>
    </div>
  )
}

export default Produto