import bannerImg from '../../../assets/images/user.png';

const Banner = () => {
  return (
    <div className="lg:h-[80vh]">
      <div className='lg:flex items-center justify-between'>
        <div className='space-y-5'>
          <h1 className='text-7xl font-bold'>One Step</h1>
          <h1 className='text-7xl font-bold'>Closer To Your</h1>
          <h1 className='text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>Dream Job</h1>
          <p className='w-96 text-[#757575]'>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-500 text-white'>Get Started</button>
        </div>
        <div >
            <img className='w-full h-[80vh]' src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
