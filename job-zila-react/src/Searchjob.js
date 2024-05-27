import React from 'react'

const Searchjob = ({search, setSearch}) => {
  return (
    <form>
        <label>Search Job</label>

  
            <input
              type="text"
              id="serach"
              placeholder="Search job ..."
              value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            
          
    </form>
  )
}

export default Searchjob