import { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header className="w-full md:p-6 p-4 bg-gray-800 border-b border-gray-200">
      <div className="container flex flex-wrap items-center justify-between mx-auto max-w-7xl">
        <div className="flex items-center border-2 p-2 border-gray-300">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            SN
          </span>
        </div>
        <ul className="flex flex-wrap items-center font-medium text-white sm:mt-0 align-center text-xl">
          {/* <li className='mr-8'>
            <Link href="#projects" className="hover:underline">
              Projects.
            </Link>
          </li> */}
          <li className='mr-8'>
            <Link href="#contact" className="hover:underline">
              Contact.
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
