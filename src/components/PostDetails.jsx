import React, { useState } from 'react'
import { usePost } from './context/PostContextProvider'

const PostDetails = ({ id, postTitle, postAuthor, postContent }) => {
	const { deletePost, createComment, comments } = usePost()
	const [comment, setComment] = useState('')
	const [author, setAuthor] = useState('')
	const [showModal, setShowModal] = useState(false)

	const openModal = () => {
		setShowModal(true)
	}

	const closeModal = () => {
		setShowModal(false)
	}

	const handleClick = () => {
		if (!comment.trim()) {
			console.log('Please enter a comment')
			return
		}

		const newComment = {
			commentAuthor: author,
			comment: comment,
		}

		createComment(id, newComment)
		setComment('')
		setAuthor('')
	}

	return (
		<div className='container'>
			<h2 className='main-text'>Blog Posts # {id}</h2>
			<ul className='post-list'>
				<li className='post-item'>
					<h2>
						Title: <br /> {postTitle}
					</h2>
					<p className='author'>
						Written by: <br /> {postAuthor}
					</p>
					<p className='content'>{postContent}</p>
					<button className='view-details' onClick={openModal}>
						View Comments
					</button>

					{showModal && (
						<div className='modal'>
							<div className='modal-content'>
								<h2>Comments</h2>
								{comments.map((comment, index) => (
									<div key={index}>
										<p>
											<strong>{comment.commentAuthor}: </strong>
											{comment.comment}
										</p>
									</div>
								))}
								<button onClick={closeModal}>Close</button>
							</div>
						</div>
					)}

					<div className='comment-section'>
						<h3>Leave a Comment</h3>
						<input
							type='text'
							className='comment-name-input'
							placeholder='Your Name'
							value={author}
							onChange={e => setAuthor(e.target.value)}
						/>
						<textarea
							className='comment-input'
							placeholder='Write your comment here...'
							value={comment}
							onChange={e => setComment(e.target.value)}
						></textarea>
						<button className='submit-comment' onClick={handleClick}>
							Submit
						</button>
						<button className='delete-button' onClick={() => deletePost(id)}>
							Delete
						</button>
					</div>
				</li>
			</ul>
		</div>
	)
}

export default PostDetails
