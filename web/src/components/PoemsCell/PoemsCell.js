import PoemPreview from '../PoemPreview/PoemPreview'

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
    <PoemPreview
      title={poem.title}
      authorName={poem.author.name}
      body={poem.body}
      authorId={poem.author.id}
    />
  ))
}
