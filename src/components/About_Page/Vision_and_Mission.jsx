import React from 'react'
import '../About_Page/About.css'
import AboutImage3 from '../../assets/images/About_images/AboutImage3.png'
import AboutImage4 from '../../assets/images/About_images/AboutImage4.png'

const Vision_and_Mission = () => {
	return (
		<>
			{/* Vision and Mission */}
			<section id='about_container'>
				<div className='about_kitchen_diary text-center'>
					<p className='py-4'>Our Vision & Mission </p>
				</div>
				<div className='about_inner_container about_vision flex flex-col-reverse lg:flex-row md:flex-col-reverse lg:py-20 pb-0'>
					<div className='basis-1/2'>
						<img src={AboutImage3} alt="mission_image" className='w-full h-auto' />
					</div>
					<div className='basis-1/2 lg:pl-10 lg:pt-24 pt-10 lg:pb-0 pb-10 lg:text-left text-center'>
						<h5>Our Vision</h5>
						<p >To make everyday cooking fun and memorable.To provide a fantastic recipe card creating and printing experience.
						</p>
					</div>
				</div>
				<div className='about_inner_container about_mission flex flex-col-reverse lg:flex-row-reverse md:flex-col-reverse pb-20 '>
					<div className='basis-1/2'>
						<img src={AboutImage4} alt="vision_image" className='w-full h-auto' />
					</div>
					<div className='basis-1/2 lg:pt-24 pt-10 lg:pb-0 pb-10 lg:text-left text-center'>
						<h5>Our Mission</h5>
						<p className='pr-4'>To be a leading online recipe web application, with a strong customer focus in all our chosen target markets and the world at large.
						</p>
					</div>
				</div>
			</section>
		</>
	)
}

export default Vision_and_Mission