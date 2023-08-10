import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
} from 'react-icons/bs';
import { FaDev } from 'react-icons/fa';

function Footer() {
  return (
    <div className='w-full bg-aqua py-5 text-teal flex justify-center gap-5 text-2xl'>
      <a
        href='https://github.com/aisha0926'
        alt='link'
        className='hover:text-cyan-blue'
      >
        <BsGithub />
      </a>

      <a href='#' alt='link' className='hover:text-cyan-blue'>
        <BsLinkedin />
      </a>

      <a
        href='https://instagram.com/aisha.tech?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'
        alt='link'
        className='hover:text-cyan-blue'
      >
        <BsInstagram />
      </a>

      <a
        href='https://twitter.com/aishatech0926'
        alt='link'
        className='hover:text-cyan-blue'
      >
        <BsTwitter />
      </a>

      <a
        href='https://dev.to/aisha0926'
        alt='link'
        className='hover:text-cyan-blue'
      >
        <FaDev />
      </a>

      <a href='https://wa.me/447885593300'>
        <BsWhatsapp />
      </a>
    </div>
  );
}

export default Footer;
