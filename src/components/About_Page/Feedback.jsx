import React, { useState } from 'react'
import '../About_Page/About.css'
import next from '../../assets/images/About_images/Next.png'
import previous from '../../assets/images/About_images/Previous.png'
import { feedbacks } from '../About_Page/data'

const Feedback = () => {

	const [index, setIndex] = useState(0)

	const handleNext = () => {
		if (index === 2) {
			setIndex(0)
		} else {
			setIndex(index + 1)
		}
	}
	const handlePrevious = () => {
		if (index === 0) {
			setIndex(2)
		} else {
			setIndex(index - 1)
		}
	}

	let feed = feedbacks[index];



	return (
		<>
			<section id='about_container'>
				<div className='about_inner_container py-10 lg:py-20 px-0 md:px-32 lg:px-0'>
					<div className='feed_back justify-between flex flex-col lg:flex-row'>
						<div className='lg:w-1/3 basics-1/2 '>
							<h5>Feedback from users</h5>
							<p className='py-0 lg:py-5'>{feed.description}</p>
							{/* laptop visibility */}
							<div className='flex justify-between invisible lg:visible items-center'>
								<div className='flex feed_box items-center gap-3'>
									<div className='pl-4'>
										<img src={feed.avatar} alt="avatar" className='w-full h-auto' />
									</div>
									<div>
										<p className='name'>{feed.name}</p>
										<p className='title'>{feed.title}</p>
									</div>
								</div>
								<div className='flex gap-3'>
									<div>
										<img src={previous} alt="previous_button" className='w-full h-auto' onClick={handlePrevious} />
									</div>
									<div>
										<img src={next} alt="next_button" className='w-full h-auto' onClick={handleNext} />
									</div>
								</div>

							</div>
						</div>

						<div className='lg:w-1/3 basics-1/2'>
							<img src={feed.img} alt="feedback_images" className='w-full h-auto' />
						</div>
					</div>




					{/* mobile visibility */}
					<div className='flex justify-between visible lg:invisible items-center pt-7 gap-6 md:gap-0 '>
						<div className='flex feed_box items-center gap-3'>
							<div className='pl-4'>
								<img src={feed.avatar} alt="avatar" className='w-full h-auto' />
							</div>
							<div>
								<p className='name'>{feed.name}</p>
								<p className='title'>{feed.title}</p>
							</div>
						</div>
						<div className='flex gap-3'>
							<div>
								<img src={previous} alt="previous_button" className='w-full h-auto' onClick={handlePrevious} />
							</div>
							<div>
								<img src={next} alt="next_button" className='w-full h-auto' onClick={handleNext} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Feedback