import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './index.css'; // глобальные стили
import './assets/fonts/fonts.css'; // шрифты

import { AppLayout } from './layout/';

export const AppRoot = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};
