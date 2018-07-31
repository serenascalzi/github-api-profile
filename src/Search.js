import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
    	<div>
        <ol>
          <li><i className="fa fa-github"></i></li>
          <li>
            <form>
              <input id="search" type="text" name="search" placeholder="Search or jump to..." />
            </form>
          </li>
          <li>Pull requests</li>
          <li>Issues</li>
          <li>Marketplace</li>
          <li>Explore</li>
        </ol>
      </div>
    )
  }
}

export default Search
