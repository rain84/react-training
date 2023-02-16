import { Item } from './item.shell'
import type { Page } from 'pages'

type Props = {
  items: ({
    count?: number
    isActive?: boolean
  } & Page)[]
}

export const Sidebar = ({ items }: Props) => {
  /* 
  Sidebar starts 
  Remove className [ hidden ] and replace [ sm:flex ] with [ flex ] 
  */

  return (
    <>
      <div className="w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex min-h-screen">
        <div className="px-8">
          <div className="h-16 w-full flex items-center">
            <span className="w-full justify-between text-gray-300 items-center text-lg">
              React Training
            </span>
          </div>

          <ul className="mt-12">
            {items?.map(({ name, count, href: to, isActive }) => (
              <li
                key={name}
                className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"
              >
                <Item to={to} count={count}>
                  {name}
                </Item>
              </li>
            ))}
          </ul>

          {/* <Search /> */}
        </div>

        {/* <Footer /> */}
      </div>
    </>
  )
}

function Footer() {
  return (
    <div className="px-8 border-t border-gray-700">
      <ul className="w-full flex items-center justify-between bg-gray-800">
        <li className="cursor-pointer text-white pt-5 pb-3">
          <button
            aria-label="show notifications"
            className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-bell"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
              <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
            </svg>
          </button>
        </li>
        <li className="cursor-pointer text-white pt-5 pb-3">
          <button
            aria-label="open chats"
            className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-messages"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
              <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
            </svg>
          </button>
        </li>
        <li className="cursor-pointer text-white pt-5 pb-3">
          <button
            aria-label="open settings"
            className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-settings"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </li>
        <li className="cursor-pointer text-white pt-5 pb-3">
          <button
            aria-label="open logs"
            className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-archive"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <rect x="3" y="4" width="18" height="4" rx="2"></rect>
              <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"></path>
              <line x1="10" y1="12" x2="14" y2="12"></line>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  )
}

function Search() {
  return (
    <div className="flex justify-center mt-48 mb-4 w-full">
      <div className="relative">
        <div className="text-gray-300 absolute ml-4 inset-0 m-auto w-4 h-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="21" y1="21" x2="15" y2="15"></line>
          </svg>
        </div>
        <input
          className="bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-100 rounded w-full text-sm text-gray-300 placeholder-gray-400 bg-gray-100 pl-10 py-2"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  )
}
