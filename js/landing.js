import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () =>
      <div className='landing'>
        <h1>search app</h1>
        <input type="text" placeholder="Search"/>
        <Link to="/search">or Browse all of it</Link>
      </div>

export default Landing
