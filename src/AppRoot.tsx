import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {AppLayout} from './layout/';

import './index.css'; // глобальные стили
import './assets/fonts/fonts.css'; // шрифты


export const AppRoot = () => {
  return (
    <BrowserRouter>
      <AppLayout/>
    </BrowserRouter>
  );
};

