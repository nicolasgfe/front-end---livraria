import { BookDto } from "../../dto"
import { useState, useCallback, useEffect } from 'react'
import { bookService } from "../../service"
import { useNavigate } from "react-router-dom"

const ListBook = () => {
  const [errorMassage, setErrorMassege] = useState('')
  const [books, setBooks] = useState<BookDto[]>([])

  const navigate = useNavigate()

  const loadBooks = useCallback(async () => {
    try {
      const result = await bookService.getBooks()
      setBooks(result)
    } catch (error: Error | any) {
      setErrorMassege(error.message)
    }
  }, [])

  const addNewBook = () => {
    navigate('/register')
  }

  useEffect(() => {
    loadBooks();
  }, [loadBooks])



  return (
    <>
      <body>
        Arquivo para listar livros
      </body>

      <table width={'90%'} border={1}>
        <thead>
          <tr>
            <th style={{ width: '30%'}}>Titulo</th>
            <th style={{ width: '30%'}}>Autor</th>
            <th style={{ width: '30%'}}>Edicao</th>
            <th style={{ width: '30%'}}>Paginas</th>
            <th style={{ width: '30%'}}>Sumario</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map(book => (
              <tr key={book.Id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.edicao}</td>
                <td>{book.pages}</td>
                <td>{book.summary}</td>
              </tr>
            ))
          }

        </tbody>
      </table>
      <div>
        {errorMassage}
      </div>
      <input type='button' value='Adicionar novo livro' onClick={addNewBook} />


    </>
  )
}

export default ListBook