import React, { Component } from 'react'
import {getUser} from './actions/github'
import {connect} from 'react-redux'

class User extends Component {
  componentDidMount() {
    getUser()
  }

  render() {
    return (
    	<div>
        <img src={this.props.user.avatar_url} alt="" />
        <h1>{this.props.user.name}</h1>
        <h2>{this.props.user.login}</h2>
        <h3>{this.props.user.bio}</h3>
        <p>{this.props.user.location}</p>
        <p><a href={this.props.user.blog}>{this.props.user.blog}</a></p>
        <p><a href={`mailto:${this.props.user.email}`}>{this.props.user.email}</a></p>
      </div>
    )
  }
}

User.defaultProps = {
  user:{}
}

function mapStateToProps(state) {
  return {user:state.user}
}

export default connect(mapStateToProps)(User)
