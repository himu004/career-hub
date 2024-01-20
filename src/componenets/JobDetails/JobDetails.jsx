import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    // Toast
    const notify = () => toast("Wow so easy !");
    console.log(job);  

    const handleApplyJob = () => {
        saveJobApplication(id);
        toast("You Have Applied Successfully")
    }
    return (
        <div>
            {/* Section Banner */}
            <div className="h-[20vh] bg-gradient-to-r from-[#b8c1ff] to-[#b89eff]">   
            <h2 className="text-center pt-10 text-6xl text-white">Job Details</h2>
            </div>
            <div className="max-w-6xl mx-auto py-10">
            <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-3 space-y-10">
                    <p><span className="font-bold">Job Description:</span> {job.job_description}</p>
                    <p><span className="font-bold">Job Responsibility:</span> {job.job_responsibility}</p>
                    <p><span className="font-bold">Educational Requirements:</span> {job.educational_requirements}</p>
                    <p><span className="font-bold">Experiences:</span> {job.experiences}</p>
                </div>
                <div className="bg-slate-100 p-5 rounded-lg space-y-4">
                        <p className="font-bold">Job Details</p>
                        <p><span className="font-bold">Salary:</span> {job.salary}</p>
                        <p><span className="font-bold">Job Title:</span> {job.job_title}</p>
                        <hr />
                        <p className="font-bold">Contact Information</p>
                        <hr />
                        <p><span className="font-bold">Phone:</span> {job.contact_information.phone}</p>
                        <p><span className="font-bold">Email:</span> {job.contact_information.email}</p>
                        <p><span className="font-bold">Address:</span> {job.contact_information.address}</p>
                        <button onClick={handleApplyJob} className="btn w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-500 text-white">Apply Now</button>
                    </div>
            </div>
            </div>
            <ToastContainer 
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition: Bounce
            />
        </div>
    );
};

export default JobDetails;