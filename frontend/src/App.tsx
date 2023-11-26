import { gql, useQuery } from '@apollo/client';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
    }
  }
`;

function App() {
  // const { data } = useQuery(GET_BOOKS);
  // console.log(data)
  return (
    <>
      <h1>Bun monorepo</h1>
      <div>Books:</div>
      {/* {data.books.map((book: any) => {
        return(
          <div>{book.title}</div>
        )
      })} */}
    </>
  )
}

export default App
