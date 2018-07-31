import React, { Component } from 'react'
import {getRepos} from './actions/github'
/*import {Link} from 'react-router-dom'*/
import {connect} from 'react-redux'

class Repos extends Component {
  componentDidMount() {
    getRepos()
  }

  render() {
    return (
    	<div>
        <ol>
          <li>Overview</li>
          <li>Repositories</li>
          <li>Stars</li>
          <li>Followers</li>
          <li>Following</li>
        </ol>
        <form>
          <input id="search" type="text" name="search" placeholder="Search repositories..." />
          <select id="type" name="type">
            <option value="typeall">Type: All</option>
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="sources">Sources</option>
            <option value="forks">Forks</option>
            <option value="archived">Archived</option>
            <option value="mirrors">Mirrors</option>
          </select>
          <select id="language" name="language">
            <option value="langall">Language: All</option>
            <option value="css">CSS</option>
            <option value="html">HTML</option>
            <option value="javascript">JavaScript</option>
          </select>
          <button>New</button>
        </form>
        <ul>
        {this.props.repos.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))
        }
        </ul>
      </div>
    )
  }
}

Repos.defaultProps = {
  repos:[]
}

function mapStateToProps(state) {
  return {repos:state.repos}
}

export default connect(mapStateToProps)(Repos)
