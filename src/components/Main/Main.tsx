import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {Book} from "./Book/Book";
import {NewReleasesBooks} from "./NewReleasesBooks/NewReleasesBooks";


export function Main() {

  return (
    <div className="main">
      <Link to='/books/1.0/new'>NewReleasesBooks</Link>
      <Link to='/books/9781617294136'>Book1</Link>
      <Routes>
          <Route path='/books/1.0/new' element={<NewReleasesBooks/>
          }/>
        <Route path='/books/9781617294136' element={<Book/>
          }/>
      </Routes>
    </div>
  );
}