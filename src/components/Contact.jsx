import { useEffect, useRef, useState } from 'react';
import Heading from './Heading';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const [submitted, isSubmitted] = useState(false);

  const formSubmission = (event) => {
    event.preventDefault();

    const service = import.meta.env.VITE_SERVICE_ID;
    const template = import.meta.env.VITE_TEMPLATE_ID;
    const apikey = import.meta.env.VITE_API_KEY;

    emailjs
      .sendForm(service, template, form.current, apikey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        isSubmitted(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      isSubmitted(false);
      console.log(submitted);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [submitted]);

  return (
    <div id='contact' className='mt-16 '>
      <section className=' h-screen w-full flex justify-center items-center flex-col'>
        <Heading small='Get in touch' h1='Contact' />

        {submitted && (
          <h1 className='py-1 px-3 w-full text-center text-2xl'>Email sent</h1>
        )}
        <form
          onSubmit={formSubmission}
          className='flex flex-col w-full sm:w-1/2'
          ref={form}
        >
          <label className='my-2'>Name</label>
          <input
            type='text'
            name='name'
            className='text-teal rounded focus:outline-none focus:ring focus:border-blue-300'
          />
          <label className='my-2'>Email</label>
          <input
            type='text'
            name='email'
            className='text-teal rounded focus:outline-none focus:ring focus:border-blue-300'
          />

          <label className='my-2'>Message</label>
          <textarea
            id='message'
            name='message'
            required
            className='text-teal mt-1 px-2 py-2 border rounded w-full text-tahiti-50 focus:outline-none focus:ring focus:border-blue-300'
            rows='4'
          />

          <div className='flex justify-center'>
            <button
              type='submit'
              className='bg-teal mt-5 w-1/2 sm:w-1/5 text-center px-3 py-1 rounded-md hover:bg-aqua hover:text-teal transition-all ease-in-out'
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Contact;
