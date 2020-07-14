import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
  useMutation,
} from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

const UPDATE_USER = gql`
  mutation UpdateUserMutation($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
    }
  }
`

const FinishProfilePage = () => {
  const [update] = useMutation(UPDATE_USER)
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    const id = currentUser.id
    update({
      variables: {
        input: {
          id: id,
          name: data.name,
        },
      },
    })
    navigate(routes.home())
  }

  return (
    <div>
      <h1>Welcome to Quill!</h1>
      <p>
        We need some more info before you can start publishing to our inclusive
        community.
      </p>
      <Form onSubmit={onSubmit} className="flex flex-col w-full">
        <label htmlFor="name" className="mt-5">
          Name
        </label>
        <TextField name="name" className="border p-3" />
        <Submit className="border mt-5 p-3 text-gray-100 bg-black">
          Publish
        </Submit>
      </Form>
    </div>
  )
}

export default FinishProfilePage
