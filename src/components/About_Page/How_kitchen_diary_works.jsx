import React from 'react'
import '../About_Page/About.css'

const How_kitchen_diary_works = () => {
	return (
		<>
			{/* How kitchenDiary works */}
			<section id='about_container'>
				<div className='how_kitchen_diary_works text-center'>
					<p className='py-4'>How KitchenDiary Works</p>
				</div>
				<div className='about_inner_container py-20 '>
					<div className='how_kitchen_diary_works_text'>
						<h6 className='pb-3'> Save: </h6>
						<p>Keep your recipes online and access them from any web browser, your recipes remain yours but it can be accessible to users from all over the world, no more flipping through cookbooks or recipe cards searching for just one recipe, just type in the name and find it instantly, you can also access the recipes by other users from around the world, this web app will give you the opportunity to enjoy	the diversity and creativity that exists in cooking.
						</p>
						<h6 className='pb-3 pt-4'> Print: </h6>
						<p>Print any recipe from the web page,all recipes are in a printer friendly format which can come out in any color of choice and save it for future reference and use.
						</p>
						<h6 className='pb-3 pt-4'> Share: </h6>
						<p>Share any recipe to friends, family, colleagues etc with just a click of a button, you can share your recipe or the recipe of other users. My recipe app appreciates your creative talents making sure you can earn when your curated recipe is shared and downloaded multiple times (terms and conditions).
						</p>
					</div>
				</div>
			</section>
		</>
	)
}

export default How_kitchen_diary_works