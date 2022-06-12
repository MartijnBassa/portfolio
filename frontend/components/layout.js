import Link from 'next/Link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {

    const menuItems = [
        {
            href: '/about',
            title: 'About',
        },
        {
            href: '/skills',
            title: 'My Skills',
        },
        {
            href: '/work',
            title: 'Work',
        },
        {
            href: '/contact',
            title: 'Contact',
        },
    ];

    return (
        <div className="flex flex-col justify-between w-36 bg-[#181818] overflow-hidden min-h-[100vh]">
            {/* Logo */}
            <a href="/">
                <div className="text-[#909096] text-center bg-[#141414] leading-[3.5rem]">
                    <img className="w-auto h-auto" src="https://i.ibb.co/Xz7B5h0/logo.png" alt="logo martijn" />
                    <span>Martijn Bassa</span>
                </div>
            </a>

            {/* Info about me */}
            <div className="text-[16px] leading-[3.5rem] text-[#909096] text-center">
                {menuItems.map(({ href, title }) => (

                    <div className="border-b-[1px] border-[#282828] border-t-[1px] hover:text-[#88E2AB] cursor-pointer transition-colors duration-[0.3s]">
                        <a href={href}>
                            {title}
                        </a>
                    </div>
                ))}
            </div>

            {/* Socials */}
            < div >
                <div className="w-4 block m-auto h-64">
                    <a className="text-[#909096] hover:text-[#88E2AB] transition-colors duration-[0.3s]" href="">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512" className="svg-inline--fa fa-linkedin-in fa-w-14 fa-5x">
                            <path fill="currentColor"
                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                            >
                            </path>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Page content  */}
            <main className="flex flex-row">
                {children}
            </main>
        </div >
    );
}