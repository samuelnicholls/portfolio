import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';
import Card from '@/components/Card';
import { Project } from '@/types';
import projectData from '../projectData.json';

const Home: NextPage = () => {
  return (
    <div className="container md:my-12 mx-auto px-4 md:px-12">
      <h1 className="mb-8 text-4xl font-bold md:text-5xl lg:text-6xl text-white">
        Hello, I&apos;m Samuel Nicholls.{' '}
        <span role="img" aria-label="hand waving">
          👋
        </span>
      </h1>
      <div className="max-w-2xl mx-auto mb-8 md:mb-16">
        <p className="mb-3 text-white text-lg md:text-xl">
          I&apos;m a Senior Front-End Engineer based in England, UK. Focused on
          building intuitive and accessible web applications with React &
          TypeScript.
        </p>
      </div>
      <div id="projects" className="mb-8 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-extrabold dark:text-white">
          Projects.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8 md:mt-16">
          {projectData.projects.map((project: Project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
      <div id="contact">
        <h2 className="text-2xl md:text-4xl font-extrabold dark:text-white">
          Contact.
        </h2>
        <div className="flex justify-center mt-8 md:mt-16">
          <div className="mr-8">
            <a
              href="https://twitter.com/SamuelNicholls_"
              title="Click here to view my X profile"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                color="white"
                className="w-6 h-6"
              />
            </a>
          </div>
          <div className="mr-8">
            <a
              href="https://uk.linkedin.com/in/samuel-nicholls-576253133"
              title="Click here to view my LinkedIn profile"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color="white"
                className="w-6 h-6"
              />
            </a>
          </div>
          <div>
            <a
              href="mailto:samuelnicholls32@gmail.com"
              title="Click here to send me an email"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                color="white"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
