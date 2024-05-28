import { MenuItem, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	const pages = [
		{ id: 1, title: 'Posts', link: '/posts' },
		{ id: 2, title: 'Add post', link: '/addPost' },
	]
	return (
		<div class='navbar'>
			<Link to={'/'}>
				<div class='title'>My Blog</div>
			</Link>
			{pages.map(elem => (
				<Link style={{ textDecoration: 'none' }} key={elem.id} to={elem.link}>
					<MenuItem>
						<Typography sx={{ color: 'white', textTransform: 'uppercase' }}>
							{elem.title}
						</Typography>
					</MenuItem>
				</Link>
			))}
		</div>
	)
}

export default Navbar
