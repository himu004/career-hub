import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="py-10">
      <div className="space-y-5">
        <h2 className="text-6xl text-center font-semibold">Featured Job</h2>
        <p className="text-center text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="max-w-6xl mx-auto md:grid grid-cols-2 gap-5 mt-10">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length && 'hidden'}>
      <div className="text-center py-10">
        <button 
        onClick={() => setDataLength(jobs.length)}
        className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-500 text-white">
          See All Jobs
        </button>
      </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
