import { Link, routes } from '@redwoodjs/router'

const PoemPreview = (params) => {
  return (
    <div className="pb-10">
      <h1 className="font-bold">{params.title}</h1>
      <p className="pb-3">
        by
        <Link
          className="font-semibold underline"
          to={routes.author({ id: params.authorId })}
        >
          {params.authorName}
        </Link>
      </p>
      <div className="whitespace-pre-wrap">{params.body}</div>
    </div>
  )
}

export default PoemPreview
