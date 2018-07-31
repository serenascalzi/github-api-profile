import axios from 'axios'
import store from '../store'

export function getUser() {
	axios.get('https://api.github.com/users/serenascalzi').then(resp => {
		store.dispatch({
			type:'GET_USER',
			payload:resp.data
		})
	})
}

export function getRepos() {
	axios.get('https://api.github.com/users/serenascalzi/repos').then(resp => {
		store.dispatch({
			type:'GET_REPOS',
			payload:resp.data
		})
	})
}
