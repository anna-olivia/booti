import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styles from './styles/Colors.module.css';

const App = () => {
  return (
    <div className={styles.customText}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
