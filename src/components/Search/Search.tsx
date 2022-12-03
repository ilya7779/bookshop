import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

import styles from './Search.module.css';
import { IconSearch } from '../../assets';
import { setSearchTermAC, useAppDispatch } from '../../store';

export const Search = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');

  const setSearchTerm = useCallback(
    debounce((value: string) => {
      dispatch(setSearchTermAC(value));
    }, 600),
    [],
  );

  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className={styles.form}>
        <form className={styles.search__form}>
          <input
            className={styles.search__input}
            placeholder='Search'
            type='text'
            value={value}
            onChange={(e) => searchHandler(e)}
          />
          <IconSearch />
        </form>
      </div>
      <div className={styles.books}>
      </div>
    </div>
  );
};
