/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="container md:my-12 mx-auto px-4 md:px-12">
      <h1 className="mb-8 text-4xl font-bold md:text-5xl lg:text-6xl text-white">Hello, I&apos;m Samuel Nicholls. <span role="img" aria-label="hand waving">👋</span></h1>
      <div className='max-w-2xl mx-auto mb-16'>
        <p className="mb-3 text-white text-lg md:text-xl">I&apos;m a Front-End Developer based in England, UK. Focused on building intuitive and accessible applications with React & TypeScript.</p>
      </div>
      {/* <h2 className="text-4xl font-extrabold dark:text-white">Projects.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 mb-16">
        <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image src="/project-screenshots/movie-listing.png" className="rounded-t-lg" alt="me" width="380" height="255" />
          <div className="p-5 shadow-2xl">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Movie Listing</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This is a NextJS web application that retrives the latest top rated movies and also allows the user to search for a movie of their choosing.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                View Code
            </a>
            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Visit Site
            </a>  
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-extrabold dark:text-white">Contact.</h2> */}
    </div>
  );
};

export default Home;
