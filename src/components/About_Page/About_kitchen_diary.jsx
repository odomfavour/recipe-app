import React from 'react'
import '../About_Page/About.css'
import AboutImage2 from '../../assets/images/About_images/AboutImage2.png'


const About_kitchen_diary = () => {
	return (
		<>
			{/* About_kitchen_diary */}
			<section id='about_container'>
				<div className='about_kitchen_diary text-center'>
					<p className='py-4'>About KitchenDiary</p>
				</div>
				<div className='about_inner_container grid lg:grid-cols-2 lg:py-20 pt-0'>
					<div>
						<p className=' kitchen_diary lg:pr-4 lg:pt-16 pt-10 pb-5 lg:text-left text-center indent-8'>KitchenDiary is an application that enables users to easily discover, create and print simple but stylish recipe cards on a single beautiful A4 paper, all in just a few steps.
						</p>
						<p className=' kitchen_diary lg:pr-4 lg:pt-5 pt-5 pb-5 lg:text-left text-center indent-8'>
							Our solution is to provide a fantastic recipe card creating and printing experience for target users.This app was created with your interest as the first point to note by our team of professionals, This app promises to make your life easier, as a professional, freelancer and user.
						</p>
					</div>
					<div className='pb-10'>
						<img src={AboutImage2} alt="about_image" className='w-full h-auto' />
					</div>
				</div>
			</section>
		</>
	)
}

export default About_kitchen_diary