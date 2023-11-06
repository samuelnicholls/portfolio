import { FC } from 'react';
import Link from 'next/link';
import { Project } from '@/types';

export type CardProps = {
  project: Project;
};

const Card: FC<CardProps> = ({ project }) => {
  return (
    <div className="max-w-sm mx-auto rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col">
      <div className="p-5 shadow-2xl flex-1 flex flex-col justify-around">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {project.title}
        </h5>
        <p className="mb-3 font-normal text-gray-400">{project.description}</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            href={project.codeUrl}
            target="_blank"
          >
            View Code
          </Link>
          <Link
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            href={project.demoUrl}
            target="_blank"
          >
            View Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
