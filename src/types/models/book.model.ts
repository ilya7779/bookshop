export type Book = {
  image: string,
  isbn13: string,
  price: string,
  subtitle: string,
  title: string,
  url: string,
}

export type BookFull = {
  authors: string,
  desc: string,
  error: string,
  image: string,
  isbn10: string,
  isbn13: string,
  language: string,
  pages: string,
  pdf?: { ['Free eBook']: string }
  price: string,
  publisher: string,
  rating: string,
  subtitle: string,
  title: string,
  url: string,
  year: string,
}
