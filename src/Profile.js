import React, { Component } from 'react'

import User from './User'
import Repos from './Repos'
import Search from './Search'
import Info from './Info'

class Profile extends Component {

  render() {
    return (
    	<div>
        <div className="search">
          <Search />
        </div>
        <div className="main">
          <div className="user">
            <User />
          </div>
          <div className="repos">
            <Repos />
          </div>
        </div>
        <div className="info">
          <Info />
        </div>
      </div>
    )
  }
}

export default Profile
