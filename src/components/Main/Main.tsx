import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {Book} from "./Book/Book";
import {NewReleasesBooks} from "./NewReleasesBooks/NewReleasesBooks";


export function Main() {

  type items = {
    title: string
    subtitle: string
    authors: string
    publisher: string
    isbn10: number
    isbn13: number
    pages: number
    year: number
    rating: number
    desc: string
    price: number
    image: string
    pdf: object
  }

  const [items, setItems] = React.useState<items>({title: '', subtitle: '', authors: '',
    publisher: '', isbn10: 0, isbn13: 0, pages: 0, year: 0, rating: 0, desc: '', price: 0, image: '',
    pdf: {}});

  React.useEffect(() => {
    fetch('https://api.itbook.store/1.0/books/9781617294136')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        setItems(json)
      })
  }, []);

  return (
    <div className="main">
      <Link to='1'>NewReleasesBooks</Link>
      <Link to='2'>Book1</Link>
      <Routes>
          <Route path='1' element={<NewReleasesBooks
            title={items.title}
            subtitle={items.subtitle}
            authors={items.authors}
            publisher={items.publisher}
            isbn10={items.isbn10}
            isbn13={items.isbn13}
            pages={items.pages}
            year={items.year}
            rating={items.rating}
            desc={items.desc}
            price={items.price}
            image={items.image}
            pdf={items.pdf} />
          }/>
        <Route path='2' element={<Book
            title={items.title}
            subtitle={items.subtitle}
            authors={items.authors}
            publisher={items.publisher}
            isbn10={items.isbn10}
            isbn13={items.isbn13}
            pages={items.pages}
            year={items.year}
            rating={items.rating}
            desc={items.desc}
            price={items.price}
            image={items.image}
            pdf={items.pdf} />
          }/>
      </Routes>
    </div>
  );
}