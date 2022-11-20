import React from 'react'
import Feedback from './Feedback'
import About_kitchen_diary from './About_kitchen_diary'
import How_kitchen_diary_works from './How_kitchen_diary_works'
import Vision_and_Mission from './Vision_and_Mission'
import Rating from './Rating'
import About_hero from './About_hero'


const About_section = () => {
	return (
		<>
			{/* About_hero */}
			<About_hero />

			{/* About_kitchen_diary */}
			<About_kitchen_diary />

			{/* Vision and Mission */}
			<Vision_and_Mission />

			{/* How kitchenDiary works */}
			<How_kitchen_diary_works />

			{/* Rating */}
			<Rating />

			{/* Feedback */}
			<Feedback />
		</>
	)
}

export default About_section