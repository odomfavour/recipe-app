import React from 'react'
import '../About_Page/About.css'

const Rating = () => {
	return (
		<>
			{/* Rating */}
			<section id='about_container'>
				<div className='how_kitchen_diary_works text-center'>
					<div className='about_inner_container py-10'>
						<div className='flex rating'>
							<div className='grow'>
								<h3>150+</h3>
								<p>Registered members</p>
							</div>
							<div className='grow'>
								<h3>100+</h3>
								<p>Templates available</p>
							</div>
							<div className='grow'>
								<h3>200+</h3>
								<p>Printed recipes</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Rating