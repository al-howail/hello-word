import React from 'react'
import { useState } from 'react';
import Jobcontent from './Jobcontent';
import { useEffect } from 'react';

import Searchjob from './Searchjob';

import { Link } from 'react-router-dom';


const Joblisting = ( ) => {
  const API_URL = "http://localhost:3500/jobs";

  const [jobs, setJobs] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setLoading] = useState (true);
  const [search, setSearch] = useState ("");




  useEffect(() => {
    const fetchJob = async ()=> {
try{
  const response = await fetch(API_URL);
  if(!response.ok)
    throw Error("Unfortunately ther's no job available at the moment")
   
   const listJob = await response.json();
   setJobs(listJob);
   setFetchError(null);

}
catch(err) {setFetchError(err.message);}
finally {setLoading(false);}


    }

   setTimeout(()=>{(async()=> await fetchJob())()},2000);
     


  
  },[]);







  
  return (
    
    
      <main>
     <section id='job-listing' class="containar">
      <h2>Job listing</h2>
      <Searchjob  search={search} setSearch={setSearch} />
      <Link to="/Addjobform"> Add Job </Link>
      
      <div id='job-listings-container'>
      {isLoading&& <p>Please wait while data being loaded... </p>}  
      {fetchError&& (<p style={{color:"red"}}>{`Error: ${fetchError}`} </p>)}
      {!fetchError && !isLoading && (
       <Jobcontent
       jobs={jobs.filter((job)=> 
        job.title.toLowerCase().includes(search.toLowerCase())
       )} 
       />
        )}

      </div>




     </section>



      </main>

  )
}

export default Joblisting