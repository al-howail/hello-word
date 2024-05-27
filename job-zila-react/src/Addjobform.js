import React, { useState } from 'react'

const Addjobform = () => {

    const API_URL = "http://localhost:3500/jobs";
    const [jobs, setJobs] = useState([]);
    const [title,setTitle] = useState('')
    const [company,setCompany] = useState('')
    const [location,setLocation] = useState('')
    const [description,setDescription] = useState('')
    const [applyLink,setApplyLink] = useState('')
    const [fetchError, setFetchError] = useState(null);
    
     
    const addjob = async (newjob) => {
      try{
        const response = await fetch(API_URL,{method:'post',headers:{'content-Type':'application/json'},
      body: JSON.stringify(newjob),})
      if(!response.ok) throw Error ('Failed to add job');
    
      const addedJob = await response.json();
      setJobs([...jobs, addedJob]);
      setFetchError(null);
      } 
      catch (err)
      {setFetchError(err.message)};
     };







    const handleSubmit = (e) => {
      e.preventDefault();
      addjob({ title,company,location, description,applyLink });
      setTitle('');
      setCompany('');
      setLocation('');
      setDescription('');
      setApplyLink('');
    };








  return (
    <div>
        
    <form onSubmit={handleSubmit}>
      <label id="title">Job Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label id="company">Job Company:</label>
      <input
        type="text"
        id="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      /> 
  
    <label id="location">Job Location:</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />

    <label id="description">Job Description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <label id="applyLink">Job Link:</label>
      <input
        type="text"
        id="applyLink"
        value={applyLink}
        onChange={(e) => setApplyLink(e.target.value)}
        required
      /> 



      
      <button type="submit">Add Job</button>
    </form>

    </div>
  )
}

export default Addjobform