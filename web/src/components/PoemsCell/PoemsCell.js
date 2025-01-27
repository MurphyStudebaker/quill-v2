import PoemPreview from '../PoemPreview/PoemPreview'

export const QUERY = gql`
  query {
    poems {
      id
      title
      body
      snaps
      author {
        id
        name
        email
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
      key={poem.id}
      id={poem.id}
      title={poem.title}
      authorName={poem.author.name || poem.author.email}
      body={poem.body}
      snaps={poem.snaps}
      authorId={poem.author.id}
    />
  ))
}
