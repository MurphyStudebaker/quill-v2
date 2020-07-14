import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

const SNAP = gql`
  mutation SnapMutation($input: UpdatePoemInput!) {
    updatePoem(input: $input) {
      id
      snaps
    }
  }
`

const PoemPreview = (params) => {
  const [update] = useMutation(SNAP)

  const snap = () => {
    update({
      variables: {
        input: {
          id: params.id,
          snaps: params.snaps + 1,
        },
      },
    })
  }
  return (
    <div className="pb-10">
      <h1 className="text-2xl font-bold">{params.title}</h1>
      <p className="pb-3">
        by{' '}
        <Link
          className="font-semibold underline"
          to={routes.author({ id: params.authorId })}
        >
          {params.authorName}
        </Link>
      </p>
      <div className="whitespace-pre-wrap">{params.body}</div>
      <div className="flex justify-start">
        <span>{params.snaps}</span>
        <button onClick={snap}>Snap</button>
      </div>
    </div>
  )
}

export default PoemPreview
