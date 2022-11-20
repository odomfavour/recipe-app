import React from 'react'
import Accordion from '../components/Accordion'
import FAQs from '../data/FAQ.json'

const FAQ = () => {
    return (
        <div className="container mx-auto">
            <div className="container mx-auto mt-12 p-5 lg:w-2/4 md:w-3/4 sm:w-4/5">
                <h2 className="pb-2 font-bold text-center text-4xl">
                    Frequently asked questions
                </h2>
                <h5 className="pb-8 font-medium text-center">
                    Have questions? We are here to help
                </h5>
                {FAQs.map((FAQ, index) => (
                    <Accordion key={index} accordionInfo={FAQ} />
                ))}
                <h5 className="my-10 pb-9">
                    Can’t find the answer you are looking for? Please reach out
                    to us at{' '}
                    <span className="text-brand">support@kitchendiary.com</span>
                </h5>
            </div>
        </div>
    )
}

export default FAQ
