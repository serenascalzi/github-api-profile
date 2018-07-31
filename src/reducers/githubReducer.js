const initialState = {
	user:{},
	repos:[]
}

export default function(state = initialState, action) {
	switch (action.type) {
		case 'GET_USER':
			return {...state, user:action.payload}
		case 'GET_REPOS':
			return {...state, repos:action.payload}
		default:
			return state
	}
}
