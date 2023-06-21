import { FC } from 'react';
import Image from 'next/image';
import { Project } from '@/types';

export type CardProps = {
  project: Project;
};

const Card: FC<CardProps> = ({ project }) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        src="/project-screenshots/movie-listing.png"
        className="rounded-t-lg"
        alt="me"
        width="380"
        height="255"
      />
      <div className="p-5 shadow-2xl">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {project.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is a NextJS web application that retrives the latest top rated
          movies and also allows the user to search for a movie of their
          choosing.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          {/* <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            View Code
        </a>
        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
            View Demo
        </a>   */}
        </div>
      </div>
    </div>
  );
};

export default Card;
