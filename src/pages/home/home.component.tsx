import { Link } from 'react-router-dom'

export const Home = () => (
  <>
    <p className="text-center text-red-400 text-xl">HOME</p>
    <Link to="parent-child-rerender">parent-child-rerender</Link>
    <Link to="gsap" className='text-green'>GSAP</Link>
  </>
)
