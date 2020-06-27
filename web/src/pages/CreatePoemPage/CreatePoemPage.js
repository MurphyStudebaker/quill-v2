import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
  useMutation,
} from '@redwoodjs/web'

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
    console.log(data)
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <TextField name="title" />
        <TextAreaField name="body" />
        <Submit>Publish</Submit>
      </Form>
    </div>
  )
}

export default CreatePoemPage
