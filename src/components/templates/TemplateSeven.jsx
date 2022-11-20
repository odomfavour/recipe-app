import React from 'react'
import cupcakem1 from "../../assets/images/cupcake1.png"
import cupcakem2 from "../../assets/images/cupcake2.png"
import cupcakem3 from "../../assets/images/cupcake3.png"

const TemplateSeven = () => {
  const Directions = ["Using an electric whisk beat 110g softened butter and 110g golden caster sugar together until pale and fluffy then whisk in 2 large eggs, one at a time, scraping down the sides of the bowl after each additon.",
"Add 1/2 tsp vanilla extract, 110g self-raising flour and a pich of salt, whisk until just combined then spoon the mixture into the cupcake cases."]
  const Ingredients =["110g soft butter","110g golden castor sugar","2 large egg","1/2 tsp vanilla extract","110g self- raising flower"]
  const renderDirection = (Directions) => {
    return Directions.map((direction, index) => 
    <div key={index}>
      <li className='uppercase mb-1 mt-1'>Step {index+1}</li>
      <li className='list-disc ml-5'>{direction}</li>
    </div>)
  }
  const renderIngredient= (Ingredients) => {
    return Ingredients.map((ingredient, index) => 
      <li key={index} className="list-disc ml-5">{ingredient}</li>
    )
  }
  return (
    <div className='text-black w-screen lg:h-screen'>
      <h2 className='mb-6 text-4xl font-bold text-center'>Fresh Cup Cakes</h2>
      <div className='grid grid-cols-2 md:flex md:flex-col content-center justify-center m-10 lg:h-screen'>
        <div className="flex-row flex-col-3 justify-between md:flex lg:flex-row" >
          <img src={cupcakem1} alt="cupcake" className='h-40 h-40 mb-3 mt-3 md:h-60 md:w-60 lg:h-80 lg:w-80'/>
          <img src={cupcakem2} alt="cupcake" className='h-40 h-40 mb-3 mt-3 md:h-60 md:w-60 lg:h-80 lg:w-80'/>
          <img src={cupcakem3} alt="cupcake" className='h-40 h-40 mb-3 mt-3 md:h-60 md:w-60 lg:h-80 lg:w-80'/>
        </div>
        <div className=' flex-row lg:flex flex-col-3 justify-between'>
          <div className='basis-1/2'>
            <h3 className='font-bold text-3xl mb-5 mt-2'>Directions</h3>
            <ul className='ml-5'>
            {renderDirection(Directions)}
            </ul>
          </div>
          <div className='basis-1/4'>
            <h3 className='font-bold text-3xl mb-5 mt-2'>Ingredients</h3>
            <ul>
              {renderIngredient(Ingredients)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplateSeven