import PoemPreview from 'src/components/PoemPreview'

export const QUERY = gql`
  query($id: Int!) {
    poemsByUser(id: $id) {
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

export const Success = ({ poemsByUser }) => {
  console.log(poemsByUser)
  return (
    <div className="pt-8">
      <h2 className="text-lg">{poemsByUser.length} published poems</h2>
      <div className="my-3 border-b w-full"></div>
      {poemsByUser.map((poem) => (
        <div className="pb-10">
          <h1 className="text-2xl font-bold">{poem.title}</h1>
          <div className="whitespace-pre-wrap">{poem.body}</div>
        </div>
      ))}
    </div>
  )
}
