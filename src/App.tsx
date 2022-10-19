import React from 'react';
import styles from './App.module.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.app__wrapper}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
