import { useState } from "react";
import clsx from 'clsx';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';

export default function Header() {
  const menuItems = [
    {
      href: '/about',
      title: 'About',
      id: '1'
    },
    {
      href: '/skills',
      title: 'My Skills',
      id: '2'
    },
    {
      href: '/work',
      title: 'Work',
      id: '3'
    },
    {
      href: '/contact',
      title: 'Contact',
      id: '4'
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col justify-between lg:bottom-0 lg:z-auto lg:w-36 bg-[#141414] overflow-hidden min-h-[100vh]">
      {/* Logo */}
      <a href="/">
        <div className="text-[#909096] text-center bg-[#141414] leading-[3.5rem]">
          <img className="lg:w-auto lg:h-auto w-[70] h-[70px]" src="https://i.ibb.co/Xz7B5h0/logo.png" alt="logo martijn" onClick={close} />
          <span>Martijn Bassa</span>
        </div>
      </a>

      {/* Info about me */}
      <div className="text-[16px] leading-[3.5rem] text-[#909096] text-center">
        {menuItems.map(({ href, title, id }) => (
          <div className="border-b-[1px] border-[#282828] border-t-[1px] hover:text-[#88E2AB] cursor-pointer transition-colors duration-[0.3s]"
            key={id}
          >
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

      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400 lg:hidden">
          Menu
        </div>
        {isOpen ? (
          <XIcon className="block w-6 text-gray-400" />
        ) : (
          <MenuAlt2Icon className="block w-6 text-gray-400" />
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-16 mt-6 bg-[#141414] text-gray-100 lg:hidden flex flex-col ': isOpen,
          hidden: !isOpen,
        })}
      >
        <div className="text-[16px] leading-[3.5rem] text-[#909096] text-center lg:hidden">
          {menuItems.map(({ href, title, id }) => (
            <div className="border-b-[1px] border-[#282828] border-t-[1px] hover:text-[#88E2AB] cursor-pointer transition-colors duration-[0.3s]"
              key={id}
            >
              <a href={href}>
                {title}
              </a>
            </div>
          ))}

          {/* Socials */}
          < div >
            <div className="w-4 block m-auto h-64 mt-8">
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
        </div>
      </div>


    </div>
  );
}
