import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './Book.module.css';
import {
  IconArrowLeft,
  IconArrowLongLeft,
  IconArrowRight,
  IconChevronDown,
  IconFacebook,
  IconHeart,
  IconTwitter,
} from '../../assets';
import { Newsletter } from '../../components';
import { fullBookSelector, getFullBookTC, setFullBookAC, useAppDispatch } from '../../store';

export const Book = () => {
  // Здесь берем из адресной строки переменную-параметр, которую передавали в navigate
  const { isbn13 } = useParams<{ isbn13: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const book = useSelector(fullBookSelector);

  useEffect(() => {
    dispatch(getFullBookTC(isbn13 || ''));

    return () => {
      dispatch(setFullBookAC(null));
    };
  }, []);

  const backHandler = () => {
    navigate('/');
  };

  return (
    <div className={styles.book}>
      <button className={styles.book__arrowLongLeft} onClick={() => backHandler()}>
        <IconArrowLongLeft />
      </button>

      <h1 className={styles.book__title}>{book?.title}, </h1>
      <div className={styles.book__information}>
        <div className={styles.photo__container}>
          <div className={styles.photo__like}>
            <IconHeart />
          </div>
          <div className={styles.photo}><img src={book?.image} alt='BookImg' /></div>
        </div>
        <div className={styles.book__details}>
          <div className={styles.details__price}>
            <div className={styles.details__priceTitle}>{book?.price}</div>
            <div className={styles.details__stars}>{book?.rating}&#9733;&#9733;&#9733;&#9733;
              <span className={styles.details__greyStar}>&#9733;</span>
            </div>
          </div>
          <div className={styles.details__description}>
            <div className={styles.details__descriptionTitle}>Authors</div>
            <div className={styles.details__descriptionName}>{book?.authors}</div>
          </div>
          <div className={styles.details__description}>
            <div className={styles.details__descriptionTitle}>Publisher</div>
            <div className={styles.details__descriptionName}>{book?.publisher}, {book?.year}</div>
          </div>
          <div className={styles.details__description}>
            <div className={styles.details__descriptionTitle}>Language</div>
            <div className={styles.details__descriptionName}>English</div>
          </div>
          <div className={styles.details__description}>
            <div className={styles.details__descriptionTitle}>Format</div>
            <div className={styles.details__descriptionName}>Paper book / ebook (PDF)</div>
          </div>
          <div className={styles.details__moreDetails}>
            <div className={styles.moreDetails__title}>More detailse</div>
            <div className={styles.moreDetails__arrowToDown}>
              <IconChevronDown />
            </div>
          </div>
          <button className={styles.details__addToCart}>ADD TO CART</button>
          <div className={styles.details__previewBook}>Preview book</div>
        </div>
      </div>
      <div className={styles.book__detailedDescription}>
        <div className={styles.detailedDescription__title}>Description</div>
        <div className={styles.detailedDescription__title}>Authors</div>
        <div className={styles.detailedDescription__title}>Reviews</div>
      </div>
      <div className={styles.description__text}>{book?.desc}</div>
      <div className={styles.socialNetworks__icons}>
        <div className={styles.socialNetworks__facebook}>
          <IconFacebook />
        </div>
        <div className={styles.socialNetworks__twitter}>
          <IconTwitter />
        </div>
        <div className={styles.socialNetworks__dots}>
          <div className={styles.socialNetworks__dot}></div>
          <div className={styles.socialNetworks__dot}></div>
          <div className={styles.socialNetworks__dot}></div>
        </div>
      </div>

      <Newsletter />

      <div className={styles.similarBooks}>
        <div className={styles.similarBooks__titleContainer}>
          <div className={styles.similarBooks__title}>SIMILAR BOOKS</div>
          <div className={styles.similarBooks__arrows}>
            <div className={styles.similarBooks__leftArrow}>
              <IconArrowLeft />
            </div>
            <div className={styles.similarBooks__rightArrow}>
              <IconArrowRight />
            </div>
          </div>
        </div>
        <div className={styles.similarBooks__bookColumns}>
          <div className={styles.bookColumns__book}>
            <div className={styles.bookColumns__photoContainer}>
              <div className={styles.bookColumns__photo}><img src={book?.image} alt='' /></div>
            </div>
            <div className={styles.bookColumns__title}>{book?.title}</div>
            <div className={styles.bookColumns__authors}>by {book?.authors}, {book?.publisher} {book?.year}</div>
            <div className={styles.bookColumns__price}>
              <div className={styles.bookColumns__priceTitle}>{book?.price}</div>
              <div className={styles.bookColumns__stars}>{book?.rating}&#9733;&#9733;&#9733;&#9733;
                <span className={styles.bookColumns__greyStar}>&#9733;</span>
              </div>
            </div>
          </div>
          <div className={styles.bookColumns__book}>
            <div className={styles.bookColumns__photoContainer}>
              <div className={styles.bookColumns__photo}><img src={book?.image} alt='' /></div>
            </div>
            <div className={styles.bookColumns__title}>{book?.title}</div>
            <div className={styles.bookColumns__authors}>by {book?.authors}, {book?.publisher} {book?.year}</div>
            <div className={styles.bookColumns__price}>
              <div className={styles.bookColumns__priceTitle}>{book?.price}</div>
              <div className={styles.bookColumns__stars}>{book?.rating}&#9733;&#9733;&#9733;&#9733;
                <span className={styles.bookColumns__greyStar}>&#9733;</span>
              </div>
            </div>
          </div>

          <div className={styles.bookColumns__book}>
            <div className={styles.bookColumns__photoContainer}>
              <div className={styles.bookColumns__photo}><img src={book?.image} alt='' /></div>
            </div>
            <div className={styles.bookColumns__title}>{book?.title}</div>
            <div className={styles.bookColumns__authors}>by {book?.authors}, {book?.publisher} {book?.year}</div>
            <div className={styles.bookColumns__price}>
              <div className={styles.bookColumns__priceTitle}>{book?.price}</div>
              <div className={styles.bookColumns__stars}>{book?.rating}&#9733;&#9733;&#9733;&#9733;
                <span className={styles.bookColumns__greyStar}>&#9733;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
