import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import ContactItem from "./ContactItem";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  animation: fadeIn 1s ease-in-out;
`;

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts);

  return (
    <List>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};

export default ContactList;
