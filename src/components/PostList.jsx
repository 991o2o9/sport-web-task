import React, { useEffect } from 'react'
import { usePost } from './context/PostContextProvider'
import PostDetails from './PostDetails'

const PostList = () => {
	const { getPosts, posts, getComment } = usePost()

	useEffect(() => {
		getPosts()
		getComment()
	}, [])

	return (
		<div>
			{posts.map(elem => (
				<PostDetails key={elem.id} {...elem} />
			))}
		</div>
	)
}

export default PostList
