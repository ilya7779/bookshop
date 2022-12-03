import { FC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Pagination.module.css';
import { IconArrowLeft, IconArrowRight } from '../../assets';
import { searchTermSelector } from '../../store';

type PaginationProps = {
  total: number
  fetchNewData: (pageNumber: number) => void
};

export const Pagination: FC<PaginationProps> = (props) => {
  const { total, fetchNewData } = props;

  const searchTerm = useSelector(searchTermSelector)

  // pagination values
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // столько приходит по умолчанию с сервера
  const totalPages = Math.ceil(total / pageSize);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // styles calculation
  const getPageClassName = useCallback((activeCondition: boolean) => {
    if (activeCondition) {
      return `${styles.pageNumber} ${styles.activePage}`;
    } else {
      return styles.pageNumber;
    }
  }, []);
  const getNavigationBtnClassName = (disabledCondition: boolean) => {
    if (disabledCondition) {
      return `${styles.navigationButtonTitle} ${styles.disabled}`;
    } else {
      return styles.navigationButtonTitle;
    }
  };

  // callbacks
  const setPageNumber = useCallback((pageNumber: number) => {
    if (currentPage === pageNumber) return;

    setCurrentPage(pageNumber);
    fetchNewData(pageNumber);
  }, [currentPage]);

  const navigateHandler = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setPageNumber(currentPage - 1);
      return;
    }

    if (direction === 'next') {
      setPageNumber(currentPage + 1);
      return;
    }
  };

  // elements calculation
  let pages: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pages = [...pages, i];
  }
  const pagesElements = pages.map((page) => {
    return <button
      key={page}
      className={getPageClassName(page === currentPage)}
      onClick={() => setPageNumber(page)}
    >
      {page}
    </button>;
  });

  return (
    <div className={styles.paginationWrapper}>

      <button
        className={styles.navigationButton}
        disabled={currentPage === 1}
        onClick={() => navigateHandler('prev')}
      >
        <IconArrowLeft />
        <span className={getNavigationBtnClassName(currentPage === 1)}>Prev</span>
      </button>

      <div className={styles.pageNumbersWrapper}>
        {pagesElements}
      </div>

      <button
        className={styles.navigationButton}
        disabled={currentPage === totalPages}
        onClick={() => navigateHandler('next')}
      >
        <span className={getNavigationBtnClassName(currentPage === totalPages)}>Next</span>
        <IconArrowRight />
      </button>
    </div>
  );
};

