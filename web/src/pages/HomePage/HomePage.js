import PoemsCell from 'src/components/PoemsCell'
import { Link, routes } from '@redwoodjs/router'

import BasicLayout from 'src/layouts/BasicLayout/BasicLayout'

const HomePage = () => {
  return (
    <BasicLayout>
      <PoemsCell />
    </BasicLayout>
  )
}

export default HomePage
