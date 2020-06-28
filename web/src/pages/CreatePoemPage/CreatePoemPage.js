import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
  useMutation,
} from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'

const CREATE_POEM = gql`
  mutation CreatePeomMutation($input: CreatePoemInput!) {
    createPoem(input: $input) {
      id
    }
  }
`

const CreatePoemPage = () => {
  const [create] = useMutation(CREATE_POEM)

  const onSubmit = (data) => {
    create({
      variables: {
        input: {
          title: data.title,
          body: data.body,
          authorId: 1,
          published: true,
        },
      },
    })
    navigate(routes.home())
    console.log(data)
  }

  return (
    <div className="px-10">
      <h1 className="font-bold pt-5"> New Poem </h1>
      <Form onSubmit={onSubmit} className="flex flex-col w-full">
        <label htmlFor="title" className="mt-5">
          Title
        </label>
        <TextField name="title" className="border p-3" />
        <label htmlFor="body" className="mt-5">
          Poem
        </label>
        <TextAreaField name="body" className="border p-3 h-48" />
        <Submit className="border mt-5 p-3 text-gray-100 bg-black">
          Publish
        </Submit>
      </Form>
    </div>
  )
}

export default CreatePoemPage
