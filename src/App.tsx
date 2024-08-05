import React from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <ContactForm />
        <ContactList />
      </Layout>
    </>
  );
};

export default App;
