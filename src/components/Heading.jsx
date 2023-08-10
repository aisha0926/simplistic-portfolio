function Heading({ small, h1 }) {
  return (
    <div className='mb-1 sm:mb-7 w-full'>
      <small className='text-base'>{small}</small>
      <h1 className='text-5xl sm:text-6xl font-extrabold'>
        {h1}
        <span className='text-pink'>.</span>
      </h1>
    </div>
  );
}

export default Heading;
