import React from 'react'

const HomePage = () => {
	return (
		<div
			style={{
				fontFamily: 'Arial, sans-serif',
				margin: 0,
				padding: 0,
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
				backgroundColor: '#f9f9f9',
			}}
		>
			<header
				style={{
					backgroundColor: '#4CAF50',
					color: 'white',
					padding: '20px 0',
					textAlign: 'center',
					boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
				}}
			>
				<h1 style={{ fontSize: '3em' }}>Добро пожаловать на наш сайт!</h1>
			</header>

			<main
				style={{
					flex: 1,
					padding: '40px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					fontSize: '1.5em',
				}}
			>
				<section
					style={{
						marginBottom: '40px',
						maxWidth: '800px',
						backgroundColor: 'white',
						padding: '20px',
						borderRadius: '10px',
						boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
					}}
				>
					<h2 style={{ fontSize: '2.5em', marginBottom: '20px' }}>О нас</h2>
					<p>
						Это сайт публикует информацию о спорте. Вы найдете самые свежие
						новости, результаты матчей и аналитические статьи.
					</p>
				</section>

				<section
					style={{
						marginBottom: '40px',
						maxWidth: '800px',
						backgroundColor: 'white',
						padding: '20px',
						borderRadius: '10px',
						boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
					}}
				>
					<h2 style={{ fontSize: '2.5em', marginBottom: '20px' }}>
						Наши услуги
					</h2>
					<ul style={{ listStyle: 'none', padding: 0 }}>
						<li style={{ marginBottom: '10px' }}>
							Рекомендации от лучших спортсменов земли
						</li>
						<li style={{ marginBottom: '10px' }}>Хорошая компания</li>
						<li style={{ marginBottom: '10px' }}>Эксклюзивные интервью</li>
					</ul>
				</section>

				<section
					style={{
						marginBottom: '40px',
						maxWidth: '800px',
						backgroundColor: 'white',
						padding: '20px',
						borderRadius: '10px',
						boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
					}}
				>
					<h2 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Контакты</h2>
					<address>
						<p>Адрес: Табышалиева 29 Bishkek</p>
						<p>Телефон: +996(505)-11-33-99</p>
						<p>Gmail: 1kkro123@gmail.com</p>
					</address>
				</section>
			</main>

			<footer
				style={{
					backgroundColor: '#f1f1f1',
					textAlign: 'center',
					padding: '20px 0',
					fontSize: '1.25em',
					boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1)',
				}}
			>
				<p>&copy; 2024 Наш сайт. Все права защищены. Вор в законе</p>
				<nav>
					<ul style={{ listStyle: 'none', padding: 0 }}>
						<li style={{ display: 'inline', margin: '0 10px' }}>
							<a href='#' style={{ textDecoration: 'none', color: '#4CAF50' }}>
								Политика конфиденциальности
							</a>
						</li>
						<li style={{ display: 'inline', margin: '0 10px' }}>
							<a href='#' style={{ textDecoration: 'none', color: '#4CAF50' }}>
								Условия использования
							</a>
						</li>
						<li style={{ display: 'inline', margin: '0 10px' }}>
							<a href='#' style={{ textDecoration: 'none', color: '#4CAF50' }}>
								Связаться с нами
							</a>
						</li>
					</ul>
				</nav>
			</footer>
		</div>
	)
}

export default HomePage
