import { Link, routes } from '@redwoodjs/router'

const BasicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between align-center px-10 py-5">
        <Link className="font-bold" to={routes.home()}>
          quill
        </Link>
        <Link
          className="border px-5 py-2 hover:background-grey-100"
          to={routes.createPoem()}
        >
          Write
        </Link>
      </header>
      <main className="flex-grow px-10">{children}</main>
      <footer className="px-10"> Created by a Queer Woman </footer>
    </div>
  )
}

export default BasicLayout
