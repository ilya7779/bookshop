import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './index.css'; // глобальные стили
import './assets/fonts/fonts.css'; // шрифты

import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

export const AppRoot = () => {
  return (
    <BrowserRouter>
      <div className={styles.app__wrapper}>
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
