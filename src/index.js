import React from 'react'
import ReactDOM from 'react-dom'

const BookList = () => {
  return (
    <div>
      <Book />
    </div>
  )
}

const Book = () => {
  const title = 'Book Name'
  return (
    <div>
      <img
        src='https://images-eu.ssl-images-amazon.com/images/I/91Cz5v-GSjL._AC_UL200_SR200,200_.jpg'
        alt=''
      ></img>
      <h1>{title}</h1>
      <h4>Auther Name</h4>
    </div>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))

//For Auto Reload
if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept()
}
