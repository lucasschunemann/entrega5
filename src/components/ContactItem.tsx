import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeContact, editContact } from "../features/contacts/contactsSlice";
import styled from "styled-components";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  animation: slideIn 0.5s ease-in-out;

  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Info = styled.div`
  flex: 1;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:last-child {
    background-color: #dc3545;

    &:hover {
      background-color: #c82333;
    }
  }
`;

const ModalContent = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  max-width: 500px;
  margin: 40px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

const ModalButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

interface ContactItemProps {
  contact: {
    id: number;
    name: string;
    email: string;
    phone: string;
  };
}

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  const handleEdit = () => {
    setModalIsOpen(true);
  };

  const handleSave = () => {
    dispatch(editContact({ id: contact.id, name, email, phone }));
    setModalIsOpen(false);
  };

  return (
    <>
      <Item>
        <Info>
          <p>
            <strong>{contact.name}</strong>
          </p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </Info>
        <Buttons>
          <Button onClick={handleEdit}>Editar</Button>
          <Button onClick={handleRemove}>Remover</Button>
        </Buttons>
      </Item>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Editar Contato"
      >
        <ModalContent>
          <h2>Editar Contato</h2>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome completo"
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telefone"
          />
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
          >
            <ModalButton onClick={() => setModalIsOpen(false)}>
              Cancelar
            </ModalButton>
            <ModalButton onClick={handleSave}>Salvar</ModalButton>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactItem;
