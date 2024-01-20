import account from '../../assets/icons/accounts.png';
import creative from '../../assets/icons/creative.png';
import marketing from '../../assets/icons/marketing.png';
import chip from '../../assets/icons/chip.png';

const CategoryList = () => {
  return (
    <div className="py-10">
      <div className="space-y-5">
        <h2 className="text-6xl text-center font-semibold">
          Job Category List
        </h2>
        <p className="text-center text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        
        <div className='max-w-6xl mx-auto md:grid grid-cols-4 gap-4 py-5'>
            <div className='bg-gradient-to-r from-violet-100 to-purple-100 p-10 rounded-lg'>
              <img className='mb-7 bg-slate-200 p-3 bg-gradient-to-r from-violet-200 to-purple-200 rounded-md' src={account} alt="" />
              <h3 className="text-xl text-[#474747]">Account & Finance</h3>
              <p className="text-[#A3A3A3]">300+ Jobs Available</p>
            </div>
            <div className='bg-gradient-to-r from-violet-100 to-purple-100 p-10 rounded-lg'>
              <img className='mb-7 bg-slate-200 p-3 bg-gradient-to-r from-violet-200 to-purple-200 rounded-md' src={creative} alt="" />
              <h3 className="text-xl text-[#474747]">Creative Design</h3>
              <p className="text-[#A3A3A3]">100+ Jobs Available</p>
            </div>
            <div className='bg-gradient-to-r from-violet-100 to-purple-100 p-10 rounded-lg'>
              <img className='mb-7 bg-slate-200 p-3 bg-gradient-to-r from-violet-200 to-purple-200 rounded-md' src={marketing} alt="" />
              <h3 className="text-xl text-[#474747]">Marketing & Sales</h3>
              <p className="text-[#A3A3A3]">150 Jobs Available</p>
            </div>
            <div className='bg-gradient-to-r from-violet-100 to-purple-100 p-10 rounded-lg'>
              <img className='mb-7 bg-slate-200 p-3 bg-gradient-to-r from-violet-200 to-purple-200 rounded-md' src={chip} alt="" />
              <h3 className="text-xl text-[#474747]">Engineering Job</h3>
              <p className="text-[#A3A3A3]">224 Jobs Available</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
