import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job || {};
  return (
    <div className="">
      <div className="card card-compact bg-base-100 shadow-xl h-full p-5">
        <figure>
          <img className="w-[200px] h-[200px] p-5" src={logo} alt="JOB" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="space-x-2">
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              {job_type}
            </button>
          </div>
          <div className="flex space-y-5">
            <p className="flex justify-start items-center">
              <IoLocationOutline className="mr-2 text-xl" />
              {location}
            </p>
            <p className="flex justify-start items-center">
              <CiDollar className="mr-2 text-xl" />
              {salary}
            </p>
          </div>
          <div>
            <Link to={`/job/${id}`}>
              <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-500 text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
