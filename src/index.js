import React from 'react'
import ReactDOM from 'react-dom'

const books = [
  {
    img:
      'https://images-eu.ssl-images-amazon.com/images/I/91Cz5v-GSjL._AC_UL200_SR200,200_.jpg',
    title: 'First Title',
    auther: 'First Auther',
  },

  {
    img:
      'https://images-eu.ssl-images-amazon.com/images/I/91Cz5v-GSjL._AC_UL200_SR200,200_.jpg',
    title: 'Second Title',
    auther: 'Second Auther',
  },

  {
    img:
      'https://images-eu.ssl-images-amazon.com/images/I/91Cz5v-GSjL._AC_UL200_SR200,200_.jpg',
    title: 'Third Title',
    auther: 'Third Auther',
  },
]
const BookList = () => {
  return (
    <div>
      {books.map((book) => {
        return <Book singleBook={book}></Book>
      })}
    </div>
  )
}

const Book = (props) => {
  const { img, title, auther } = props.singleBook
  return (
    <div>
      <img src={img} alt=''></img>
      <h1>{title}</h1>
      <h4>{auther}</h4>
    </div>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))

//For Auto Reload
if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept()
}
