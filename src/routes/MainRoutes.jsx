import React from 'react'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../home/HomePage'

const MainRoutes = () => {
	const PUBLIC_ROUTES = [
		{ id: 1, link: '/posts', element: <PostList /> },
		{ id: 2, link: '/addPost', element: <PostForm /> },
		{ id: 3, link: '/', element: <HomePage /> },
	]
	return (
		<div>
			<Routes>
				{PUBLIC_ROUTES.map(elem => (
					<Route key={elem.id} path={elem.link} element={elem.element} />
				))}
			</Routes>
		</div>
	)
}

export default MainRoutes
