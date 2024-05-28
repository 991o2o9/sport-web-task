import axios from 'axios'
import React, { createContext, useContext, useReducer } from 'react'
import { API, API_COMMENTS } from '../../helper/const'
const postContext = createContext()
export const usePost = () => useContext(postContext)

const PostContextProvider = ({ children }) => {
	const INIT_STATE = {
		posts: [],
		comments: [],
	}
	const reducer = (state = INIT_STATE, action) => {
		switch (action.type) {
			case 'GET_POST':
				return { ...state, posts: action.payload }
			case 'GET_COMMENT':
				return { ...state, comments: action.payload }
		}
	}
	// ! create
	const addPost = async newPost => {
		await axios.post(API, newPost)
	}
	// ! read
	const [state, dispatch] = useReducer(reducer, INIT_STATE)
	const getPosts = async () => {
		const { data } = await axios(API)
		dispatch({
			type: 'GET_POST',
			payload: data,
		})
	}
	// ! create Comment
	const createComment = async (postId, newComment) => {
		await axios.post(`${API_COMMENTS}/${postId}`, newComment)
	}

	// !read Comment
	const getComment = async () => {
		const { data } = await axios(API_COMMENTS)
		dispatch({
			type: 'GET_COMMENT',
			payload: data,
		})
	}
	// ! delete
	const deletePost = async id => {
		await axios.delete(`${API}/${id}`)
		getPosts()
	}
	const values = {
		addPost,
		posts: state.posts,
		getPosts,
		deletePost,
		createComment,
		getComment,
		comments: state.comments,
	}
	return <postContext.Provider value={values}>{children}</postContext.Provider>
}

export default PostContextProvider
