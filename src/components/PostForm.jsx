// PostForm
// форма для создания нового поста;
import React, { useState } from 'react'
import { usePost } from './context/PostContextProvider'

const PostForm = () => {
	const { addPost } = usePost()
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const [content, setContent] = useState('')
	const handleClick = () => {
		if (!title.trim() || !author.trim() || !content.trim()) {
			return console.log('Тупица')
		}
		let obj = {
			postTitle: title,
			postAuthor: author,
			postContent: content,
		}
		addPost(obj)
		setTitle('')
		setAuthor('')
		setContent('')
	}
	return (
		<div className='add-post-form'>
			<h2>Add New Post</h2>
			<div className='input-group'>
				<label>Title:</label>
				<input
					type='text'
					onChange={e => setTitle(e.target.value)}
					placeholder='Type in title'
					value={title}
					className='input-field'
				/>
			</div>
			<div className='input-group'>
				<label>Author:</label>
				<input
					type='text'
					onChange={e => setAuthor(e.target.value)}
					placeholder='Type in author'
					value={author}
					className='input-field'
				/>
			</div>
			<div className='input-group'>
				<label>Content:</label>
				<textarea
					onChange={e => setContent(e.target.value)}
					placeholder='Type in content'
					value={content}
					className='input-field'
				/>
			</div>
			<button onClick={handleClick} className='save-button'>
				Save
			</button>
		</div>
	)
}

export default PostForm
