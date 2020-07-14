import PoemsCell from 'src/components/PoemsCell'
import { Link, routes, navigate } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import BasicLayout from 'src/layouts/BasicLayout/BasicLayout'

const HomePage = () => {
  const { isAuthenticated, logIn, logOut, currentUser } = useAuth()

  if (isAuthenticated && currentUser.name == null) {
    // user recently signed up and needs to add a name
    navigate(routes.finishProfile())
  }

  return (
    <BasicLayout>
      <PoemsCell />
    </BasicLayout>
  )
}

export default HomePage
