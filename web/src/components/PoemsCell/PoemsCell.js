export const QUERY = gql`
  query {
    poems {
      id
      title
      body
      author {
        id
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ poems }) => {
  return poems.map((poem) => (
    <div>
      <h1>{poem.title}</h1>
      <p>by {poem.author.name}</p>
      <p>{poem.body}</p>
    </div>
  ))
}
