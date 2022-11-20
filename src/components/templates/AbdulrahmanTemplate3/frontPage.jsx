import React from 'react'
import vegetables from './assets/basket-full-vegetables 1.png'
import rectangle from './assets/rectangle.png'
import assetfive from './assets/Asset 5.svg'
import chef from './assets/Chef-pana 1.png'
import assetten from './assets/Asset 10.svg'

const frontPage = () => {
return (
    <section className=' '>
        
        <div className="relative w-[595px] h-[842px] bg-[#FCD3B6]">
            <div className='absolute w-[360px] h-[321.76px] top-[24px] left-[117px]'>
                <img className='absolute top-[7.32px] left-[26px] h-[270.9px] w-[326.54px]   rounded' src={rectangle} />
            </div>
            <div className='top-0 left-[425px] absolute w-[170px] h-[170px]'>

            <img className='left-[-0] absolute top-0'  src={assetten} />
            </div>
            
            
            <div className='flex flex-col items-center p-0 h-[160px] top-[350px] left-[107px] w-[356px] absolute'>
                <p className="text-[#F67A24] w-[207px] h-[28px] flex font-normal  text-[15px]  leading-[28px] text-center">Abdulrahman &#39; s Kitchen</p>
                <p className='  text-[#F67A24] w-[300px] h-[90px] font-bold text-[50px] text-center leading-[60px] text-center'>How to cook Jollof Rice</p>
            </div>

            
            <img className=' absolute w-[100px] h-[100px] left-[167px] top-[624.3px]' src={assetfive} />
            <img className='absolute w-[381px] h-[410px] left-[214px] top-[432px] ' src={chef} />
            <img className='absolute w-[200px] h-[140.75px] left-[19px] top-[660px]' src={vegetables} />

            <p className='absolute font-bold w-[193px] h-[96px] left-[24px] top-[787px] text-3xl leading-36 '>Kitchen<span className='text-[#F67A24]'>Diary</span></p>
        </div>
    </section>
)
}

export default frontPage