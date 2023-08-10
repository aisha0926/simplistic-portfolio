import Heading from './Heading';
import { projects } from '../constants/index';

function Projects() {
  return (
    <section id='projects'>
      <Heading small='My Work' h1='Projects' />

      <p className='mt-5 text-2xl'>
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </p>

      <div className='flex flex-wrap mt-7 gap-5 sm:gap-10 justify-center'>
        {projects.map((el) => (
          <a
            key={el.id}
            href={el.source_link}
            target='_blank'
            rel='noopener noreferrer'
            className=' sm:w-1/3 hover:bg-aqua hover:text-teal cursor-pointer transition-all  rounded-t-full hover:rounded-b-full'
          >
            <img
              src={el.image}
              alt={el.name}
              className='rounded-t-full h-1/2 w-full '
            />
            <p className='text-lg p-2'>{el.description}</p>

            <div className='flex justify-around items-end flex-wrap'>
              {el.tags.map((el, index) => (
                <span
                  key={`tags-${el.name}-${index}`}
                  className={`${
                    index % 2 === 0 ? 'text-indigo-400' : 'text-purple-400'
                  }`}
                >
                  #{el.name}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
