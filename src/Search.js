import React, { Component } from 'react'
import {getUser} from './actions/github'
import {connect} from 'react-redux'

class Search extends Component {
  componentDidMount() {
    getUser()
  }

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
        <ul>
          <li><i className="fa fa-bell"></i></li>
          <li><i className="fa fa-plus"></i></li>
          <li><img src={this.props.user.avatar_url} alt="" /></li>
        </ul>
      </div>
    )
  }
}

Search.defaultProps = {
  user:{}
}

function mapStateToProps(state) {
  return {user:state.user}
}

export default connect(mapStateToProps)(Search)
