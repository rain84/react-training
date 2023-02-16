import { Link } from 'react-router-dom'

export const Home = () => (
  <>
    <p>HOME</p>
    <Link to="parent-child-rerender">parent-child-rerender</Link>
  </>
)
