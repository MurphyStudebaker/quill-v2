import PoemsByAuthorCell from 'src/components/PoemsByAuthorCell'

export const QUERY = gql`
  query($id: Int!) {
    user(id: $id) {
      id
      name
      email
      poems {
        title
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ user }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">{user.name}</h1>
      <p>{user.email}</p>
      <PoemsByAuthorCell id={parseInt(user.id)} />
    </div>
  )
}
