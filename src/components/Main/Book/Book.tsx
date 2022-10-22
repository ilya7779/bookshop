import { useEffect, useState } from 'react';

import styles from './Book.module.css';
import {
  IconArrowLeft,
  IconArrowLongLeft,
  IconArrowRight,
  IconChevronDown,
  IconFacebook,
  IconHeart,
  IconTwitter,
} from '../../../assets';
import { Newsletter } from '../NewReleasesBooks/Newsletter';
import { Copyright } from '../NewReleasesBooks/Copyright';

export function Book (props: any) {

  const [items, setItems] = useState({
    title: '',
    subtitle: '',
    authors: '',
    publisher: '',
    isbn10: 0,
    isbn13: '',
    pages: 0,
    year: 0,
    rating: 0,
    desc: '',
    price: 0,
    image: '',
    pdf: {},
  });

  useEffect(() => {
    fetch('https://api.itbook.store/1.0/books/9781617294136').then((response) => {
      return response.json();
    }).then((json) => {
      setItems(json);
    });
  }, []);

  return (
    <div className={styles.book}>
      <IconArrowLongLeft />
      <h1 className={styles.book__title}>{items.title}, </h1>
      <div className={styles.book__information}>
        <div className={styles.photo__conainer}>
          <div className={styles.photo__like}>
            <IconHeart />
          </div>
          <div className={styles.photo}><img src={items.image} alt='BookImg' /></div>
        </div>
        <div className={styles.book__details}>
          <div className={styles.details__price}>
            <div className={styles.details__priceTitle}>{items.price}</div>
            <div className={styles.details__stars}>{items.rating}&#9733;&#9733;&#9733;&#9733;
              <span className={styles.details__greyStar}>&#9733;</span>
            </div>
          </div>
          <div className={styles.details__description}>
            <div className={styles.details__descriptionTitle}>Authors</div>
            <div className={styles.details__descriptionName}>{items.authors}</div>
          </div>
          <div className={styles.details__description}>
            <div className={styles.details__descriptionTitle}>Publisher</div>
            <div className={styles.details__descriptionName}>{items.publisher}, {items.year}</div>
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
      <div className={styles.description__text}>{items.desc}</div>
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
              <div className={styles.bookColumns__photo}><img src={items.image} alt='' /></div>
            </div>
            <div className={styles.bookColumns__title}>{items.title}</div>
            <div className={styles.bookColumns__authors}>by {items.authors}, {items.publisher} {items.year}</div>
            <div className={styles.bookColumns__price}>
              <div className={styles.bookColumns__priceTitle}>{items.price}</div>
              <div className={styles.bookColumns__stars}>{items.rating}&#9733;&#9733;&#9733;&#9733;
                <span className={styles.bookColumns__greyStar}>&#9733;</span>
              </div>
            </div>
          </div>
          <div className={styles.bookColumns__book}>
            <div className={styles.bookColumns__photoContainer}>
              <div className={styles.bookColumns__photo}><img src={items.image} alt='' /></div>
            </div>
            <div className={styles.bookColumns__title}>{items.title}</div>
            <div className={styles.bookColumns__authors}>by {items.authors}, {items.publisher} {items.year}</div>
            <div className={styles.bookColumns__price}>
              <div className={styles.bookColumns__priceTitle}>{items.price}</div>
              <div className={styles.bookColumns__stars}>{items.rating}&#9733;&#9733;&#9733;&#9733;
                <span className={styles.bookColumns__greyStar}>&#9733;</span>
              </div>
            </div>
          </div>
          <div className={styles.bookColumns__book}>
            <div className={styles.bookColumns__photoContainer}>
              <div className={styles.bookColumns__photo}><img src={props.image} alt='' /></div>
            </div>
            <div className={styles.bookColumns__title}>{props.title}</div>
            <div className={styles.bookColumns__authors}>by {props.authors}, {props.publisher} {props.year}</div>
            <div className={styles.bookColumns__price}>
              <div className={styles.bookColumns__priceTitle}>{props.price}</div>
              <div className={styles.bookColumns__stars}>{props.rating}&#9733;&#9733;&#9733;&#9733;
                <span className={styles.bookColumns__greyStar}>&#9733;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
}
