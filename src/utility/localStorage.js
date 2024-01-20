const getStoredJobApplications = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if (storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplications();
    const exists = storedJobApplications.find(jobid => jobId === id);
    if (!exists){
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications));
    }
}

export {getStoredJobApplications, saveJobApplication}