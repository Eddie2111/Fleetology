import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Dropdown } from '@nextui-org/react'

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const router = useRouter()
    const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen)
    const menuItems = [
        { key: 'new', name: 'New File' },
        { key: 'copy', name: 'Copy Link' },
        { key: 'edit', name: 'Edit File' },
        { key: 'delete', name: 'Delete File' },
    ]
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 w-full z-[1000]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center">
                        {/*  Image here !!*/}

                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            WeRide
                        </span>
                    </Link>

                    <button
                        data-collapse-toggle="navbar-multi-level"
                        onClick={handleMenuToggle}
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-2 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link
                                    href="/"
                                    className="block mt-2 py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
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
                                        {(item) => (
                                            <Dropdown.Item
                                                key={item.key}
                                                color={
                                                    item.key === 'delete'
                                                        ? 'error'
                                                        : 'default'
                                                }
                                            >
                                                {item.name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>

                                <div className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                                        <li className="mt-5">
                                            <Link
                                                href="/"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
                                                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                            >
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                    <li>
                                                        <Link
                                                            href="/"
                                                            className="block mt-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                                        >
                                                            Overview
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/"
                                                            className="block mt-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                                        >
                                                            My downloads
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/"
                                                            className="block mt-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                                        >
                                                            Billing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/"
                                                            className="block mt-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
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
                                                className="block mt-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Earnings
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <Link
                                            href="/"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                        >
                                            Sign out
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="block mt-2 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="block mt-2 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="block mt-2 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className="mx-[130px]">&nbsp;</div>
                        <div className="flex items-center justify-between">
                            <button
                                className="text-white"
                                onClick={() => signIn()}
                            >
                                Sign in
                            </button>
                            <button className="ml-4 text-white">Sign up</button>
                        </div>
                    </div>
                </div>
            </nav>
            <br />
            <br />
            <br />
        </>
    )
}

export default Navbar
