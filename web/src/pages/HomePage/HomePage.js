import PoemsCell from 'src/components/PoemsCell'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import BasicLayout from 'src/layouts/BasicLayout/BasicLayout'

const HomePage = () => {
  const { isAuthenticated, logIn, logOut, currentUser } = useAuth()

  if (currentUser.name == null) {
    console.log('no profle')
    alert('You must finish your profile!')
  }

  return (
    <BasicLayout>
      <PoemsCell />
    </BasicLayout>
  )
}

export default HomePage
