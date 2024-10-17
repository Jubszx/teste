// src/components/ModalCadastrar.jsx
import React, { useContext, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


const ModalCadastrar = ({ show, onHide }) => {
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [preco, setPreco] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const novoProduto = {
            nome,
            categoria,
            preço: preco,
        };

        // Chama a função de cadastro e reseta os campos do formulário
        setNome('');
        setCategoria('');
        setPreco('');
        onHide(); // Fecha o modal
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Cadastrar Produto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formNome">
                        <Form.Label>Nome do Produto</Form.Label>
                        <Form.Control
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formCategoria">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control
                            type="text"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formPreco">
                        <Form.Label>Preço</Form.Label>
                        <Form.Control
                            type="number"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Cadastrar
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalCadastrar