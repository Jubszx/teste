// src/pages/CadastroProdutos.jsx
import React, { useContext, useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import NavBarr from '../components/NavBarr.jsx';
// import ModalCadastrar from '../components/ModalCadastrar.jsx';

import ModalCadastrar from '../components/ModalCadastrar';

const url = "http://localhost:5000/produtos";


const CadastroProduto = () => {
  const { produtos, setProdutos } = useState([]);
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState('');

  const handleCadastrar = async () => {
      const novoProduto = { nome, categoria, preco };
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoProduto),
      });
      
      setNome('');
      setCategoria('');
      setPreco('');
  };

    return (
        <div>
            <NavBarr />
            <Row>
                <Form.Label column="lg" lg={2}>Nome Produto</Form.Label>
                <Col>
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder="ex: Carne"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </Col>
            </Row>
            <br />
            <Row>
                <Form.Label column lg={2}>Categoria</Form.Label>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Alimento"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    />
                </Col>
            </Row>
            <br />
            <Row>
                <Form.Label column="sm" lg={2}>Preço</Form.Label>
                <Col>
                    <Form.Control
                        size="sm"
                        type="text"
                        placeholder="ex: R$10,00"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                </Col>
                <Button variant="outline-warning" onClick={handleCadastrar}>
                    Adicionar
                </Button>
            </Row>
        </div>
    );
};

export default CadastroProduto