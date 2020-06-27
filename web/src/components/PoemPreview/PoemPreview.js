import { Link, routes } from '@redwoodjs/router'

const PoemPreview = (params) => {
  return (
    <div className="pb-10">
      <h1 className="font-bold">{params.title}</h1>
      <p className="pb-3">
        by
        <Link to={routes.author({ id: params.authorId })}>
          {params.authorName}
        </Link>
      </p>
      <p>{params.body}</p>
    </div>
  )
}

export default PoemPreview
