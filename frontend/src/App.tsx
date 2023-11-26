import { gql, useQuery } from '@apollo/client';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
    }
  }
`;

function App() {
  const { data } = useQuery(GET_BOOKS);
  
  return (
    <>
      <h1>Bun monorepo</h1>
      <div>Books:</div>
      {data?.books.map((book: any) => {
        return(
          <div key={book.id}>{book.title} | {book.author}</div>
        )
      })}
    </>
  )
}

export default App
