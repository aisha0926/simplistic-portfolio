import { panda } from '../assets';
import { cv } from '../assets';

function Banner() {
  const handleDownload = () => {
    // Replace with your CV file path
    window.open(cv, '_blank');
  };

  return (
    <section
      id='home'
      className='m-[-2rem] flex max-[640px]:flex-col sm:h-screen sm:w-screen'
    >
      <div className='hidden sm:flex  bg-light-brown h-full sm:w-1/2  justify-center items-center '>
        <img src={panda} alt='panda img' className='rounded-full h-80' />
      </div>

      <div className='h-screen bg-aqua sm:w-1/2 flex justify-center items-start text-teal flex-col px-11  '>
        <small className='text-2xl text-cyan-blue font-source-code font-medium'>
          hello, I&apos;m
        </small>
        <h1 className='text-7xl text-teal lg:text-9xl tracking-widest font-extrabold '>
          Aisha
        </h1>

        <h2 className='text-4xl  text-cyan-blue font-extrabold leading-none'>
          I build things on the web,
        </h2>
        <h2 className='text-4xl  text-pink font-extrabold  leading-10'>
          one line at a time.
        </h2>

        <button
          className='bg-light-brown py-2 px-3 text-aqua rounded translate-y-14 hover:bg-teal hover:text-aqua'
          onClick={handleDownload}
        >
          Download CV
        </button>
      </div>
    </section>
  );
}

export default Banner;
