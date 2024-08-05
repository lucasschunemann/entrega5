import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 2rem;
    color: #007bff;
  }
`;

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Container>
      <Header>
        <h1>Lista de Contatos</h1>
      </Header>
      {children}
    </Container>
  );
};

export default Layout;
