import React from 'react'
import '../About_Page/About.css'
import AboutImage1 from '../../assets/images/About_images/AboutImage1.png'

const About_hero = () => {
	return (
		<>
			{/* Hero section */}
			<section id='about_container'>
				<div className='about_inner_container pt-5 lg:pt-7'>
					<div className='about_hero '>
						<h2>We provide you with the best Recipe Customization.</h2>
						<p className='pt-6'>We allow user to design recipes with information such as the name of the food, the ingredients, cooking instructions, and supporting images. We use this information to generate a customizable and printable card for the user in PDF format.</p>
					</div>
					<div className='py-10'>
						<img src={AboutImage1} alt="hero_image" className='w-full h-auto' />
					</div>
				</div>
			</section>
		</>
	)
}

export default About_hero