import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const BasicLayout = ({ children }) => {
  const { isAuthenticated, logIn, logOut, currentUser } = useAuth()
  console.log(currentUser)
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between align-center px-10 py-5">
        <Link className="font-black text-xl" to={routes.home()}>
          quill
        </Link>
        <button
          onClick={async () => {
            if (isAuthenticated) {
              await logOut()
            } else {
              await logIn()
            }
          }}
        >
          {isAuthenticated ? 'Log out' : 'Log in'}
        </button>
        <Link
          className="border px-5 py-2 hover:background-grey-100"
          to={routes.createPoem()}
        >
          Write
        </Link>
      </header>
      <main className="flex-grow px-10">{children}</main>
      <footer className="px-10 py-5 text-center bg-gray-200">
        Created by a Queer Woman
      </footer>
    </div>
  )
}

export default BasicLayout
