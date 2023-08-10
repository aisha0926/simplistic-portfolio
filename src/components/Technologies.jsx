import Heading from './Heading';
import { AiFillHtml5 } from 'react-icons/ai';
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoBootstrap,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoFigma,
  BiLogoSass,
} from 'react-icons/bi';
import { SiExpress, SiJest } from 'react-icons/si';

function Technologies() {
  const iconComponents = [
    AiFillHtml5,
    BiLogoCss3,
    BiLogoJavascript,
    BiLogoReact,
    BiLogoNodejs,
    BiLogoMongodb,
    BiLogoFigma,
    BiLogoSass,
    SiExpress,
    BiLogoBootstrap,
    BiLogoTailwindCss,
    SiJest,
  ];

  return (
    <section
      id='technologies'
      className='min-h-screen mt-16 flex justify-center flex-col'
    >
      <Heading small='What I use' h1='Technologies' />
      <p className='text-2xl'>
        These are the technologies I&apos;ve used or mostly use across the web
        applications I have developed.
      </p>

      <div className='flex text-8xl flex-wrap mt-12  gap-20'>
        {iconComponents.map((IconComponent, index) => (
          <span
            key={index}
            className={`grow ${index % 2 === 0 ? 'text-aqua' : 'text-teal'}`}
          >
            <IconComponent />
          </span>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
