import React, { FC } from 'react';
import { Route, Routes as RoutesSource } from 'react-router-dom';

import { Book, Main } from '../../pages';

export const Routes: FC = () => {
  return (
    <RoutesSource>
      <Route path='/' element={<Main />} />
      {/*Добавили в path параметр для useParams - чтобы открывать разные книги*/}
      <Route path='/:isbn13' element={<Book />} />
    </RoutesSource>
  );
};
