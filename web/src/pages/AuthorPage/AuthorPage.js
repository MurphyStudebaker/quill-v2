import AuthorCell from 'src/components/AuthorCell'

import BasicLayout from 'src/layouts/BasicLayout/BasicLayout'

const AuthorPage = ({ id }) => {
  return (
    <BasicLayout>
      <AuthorCell id={id} />
    </BasicLayout>
  )
}

export default AuthorPage
