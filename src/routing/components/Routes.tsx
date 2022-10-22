import React, { FC } from 'react';
import { Route, Routes as RoutesSource } from 'react-router-dom';

import { Book, Main } from '../../pages';

export const Routes: FC = () => {
  return (
    <RoutesSource>
      <Route path='/' element={<Main />} />
      <Route path='/books/9781617294136' element={<Book />} />
    </RoutesSource>
  );
};
