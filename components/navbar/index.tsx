import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dropdown } from '@nextui-org/react'

const menuItems = [
    { key: 'new', name: 'New File', link: '/new' },
    { key: 'copy', name: 'Copy Link', link: '/copy' },
    { key: 'edit', name: 'Edit File', link: '/edit' },
    { key: 'delete', name: 'Delete File', link: '/delete' },
]

interface MenuItemProps {
    key: string
    name: string
    link: string
}

const MenuItem: React.FC<MenuItemProps> = ({ key, name }) => (
    <div key={key}>
        <span>{name}</span>
    </div>
)

const Navbar: React.FC = () => {
    const [authtoken, setAuthtoken] = useState<string>('')
    useEffect(() => {
        const token = localStorage.getItem('fleetology-user')
        const jwt = require('jsonwebtoken')
        const decoded = jwt.decode(token)
        if (token) {
            setAuthtoken(token)
            console.log(authtoken)
            //window.location.href = decoded.user_type === 'manager' ? '/manager' : '/driver'
        }
    }, [])
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const router = useRouter()
    const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen)
    return (
        <>
            <nav className="bg-gray-900 border-gray-700 fixed top-0 w-full z-[1000] mb-20">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            Fleetology
                        </span>
                    </Link>

                    <button
                        data-collapse-toggle="navbar-multi-level"
                        onClick={handleMenuToggle}
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                        aria-controls="navbar-multi-level"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                        </svg>
                    </button>

                    <div
                        className={`w-full md:flex md:w-auto ${
                            isMenuOpen ? 'block' : 'hidden'
                        }`}
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 md:mt-2 md:border-0   bg-gray-800 md:bg-gray-900  border-gray-700">
                            <li>
                                <Link
                                    href="/"
                                    className="block mt-2 py-2 pl-3 pr-4  rounded md:bg-transparent md:text-blue-700 md:p-0 md: text-blue-500  bg-blue-600 md: bg-transparent"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="text-left">
                                <Dropdown>
                                    <Dropdown.Button
                                        color={'default'}
                                        style={{
                                            color: 'white',
                                            marginTop: '2px',
                                            fontSize: '16px',
                                        }}
                                        light
                                    >
                                        {' '}
                                        Menu
                                    </Dropdown.Button>

                                    <Dropdown.Menu
                                        aria-label="Dynamic Actions"
                                        items={menuItems}
                                        variant="light"
                                    >
                                        {menuItems.map((item) => (
                                            <Dropdown.Item key={item.key}>
                                                <Link href={`/${item.link}`}>
                                                    {' '}
                                                    {item.name}{' '}
                                                </Link>
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>

                                <div className="z-10 hidden font-normal  divide-y  rounded-lg shadow w-44  bg-gray-700  divide-gray-600">
                                    <ul className="py-2 text-sm text-gray-400">
                                        <li className="mt-5">
                                            <Link
                                                href="/"
                                                className="block px-4 py-2  hover:bg-gray-600  hover:text-white"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="flex items-center justify-between w-full px-4 py-2  hover:bg-gray-600  hover:text-white"
                                            >
                                                Dropdown
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
                                                </svg>
                                            </button>
                                            <div
                                                id="doubleDropdown"
                                                className="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-44  bg-gray-700"
                                            >
                                                <ul className="py-2 text-sm  text-gray-200">
                                                    <li>
                                                        <Link
                                                            href="/"
                                                            className="block mt-2 px-4 py-2  hover:bg-gray-600  text-gray-400  hover:text-white"
                                                        >
                                                            Overview
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/"
                                                            className="block mt-2 px-4 py-2  hover:bg-gray-600  text-gray-400  hover:text-white"
                                                        >
                                                            My downloads
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/"
                                                            className="block mt-2 px-4 py-2  hover:bg-gray-600  text-gray-400  hover:text-white"
                                                        >
                                                            Billing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/"
                                                            className="block mt-2 px-4 py-2  hover:bg-gray-600  text-gray-400  hover:text-white"
                                                        >
                                                            Rewards
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <Link
                                                href="/"
                                                className="block mt-2 px-4 py-2  hover:bg-gray-600  hover:text-white"
                                            >
                                                Earnings
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <Link
                                            href="/logout"
                                            className="block px-4 py-2 text-sm  hover:bg-gray-600  text-gray-400  hover:text-white"
                                        >
                                            Sign out
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="block mt-2 py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  text-white md:  hover:bg-gray-700  hover:text-white md: hover:bg-transparent"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="block mt-2 py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  text-white md:  hover:bg-gray-700  hover:text-white md: hover:bg-transparent"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="block mt-2 py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  text-white md:  hover:bg-gray-700  hover:text-white md: hover:bg-transparent"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className="mx-[130px]">&nbsp;</div>

                        {authtoken ? (
                            <div className="flex items-center justify-between">
                                <button
                                    className="text-white"
                                    onClick={() => router.push('/logout')}
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center justify-between">
                                <button
                                    className="text-white"
                                    onClick={() => router.push('/signin')}
                                >
                                    Sign in
                                </button>
                                <button
                                    className="ml-4 text-white"
                                    onClick={() => router.push('/signup')}
                                >
                                    Sign up
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default Navbar
