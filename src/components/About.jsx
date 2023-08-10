import { aisha } from '../assets';
import Heading from './Heading';

function About() {
  return (
    <section
      id='about'
      className='min-h-screen mt-16 sm:flex sm:flex-col sm:justify-center'
    >
      <Heading small='Introduction' h1='Overview' />

      <div className='flex flex-col sm:flex-row sm:items-center'>
        <article id='content' className='order-2 sm:order-1 text-2xl sm:w-1/2'>
          <p>
            I&apos;m a fullstack developer based in Morden, UK. My experience
            lies Javascript, as well as frameworks like React and Node.js.
          </p>

          <p className='my-5'>
            I have developed various projects utilising multiple technologies
            such as HTML, CSS3 and MERN Stack.
          </p>

          <p>
            I specialise in development but I occasionally create designs
            depending on the requirements.
          </p>
        </article>

        <div className='sm:order-2 mt-10 mb-5 flex justify-center items-center sm:w-1/2'>
          <img
            src={aisha}
            alt='me img'
            className='rounded-t-full rounded-bl-full sm:rounded-full  h-80'
          />
        </div>
      </div>
    </section>
  );
}

export default About;
