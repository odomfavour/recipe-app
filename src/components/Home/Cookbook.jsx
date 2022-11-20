import React from "react";
import cookbook from '../../assets/images/home-img/cookbook.png';

const CookBook = () => {
    return (
        <section className="py-20">
            <div className="w-[90%] mx-auto lg:flex items-center">
                <div className="lg:w-1/2 mb-10 pr-7">
                    <h3 className="font-bold text-3xl pb-10 ">
                        Get a Recipe Cookbook TODAY!!!
                    </h3>
                    <p className="pb-5 md:text-lg">
                        Looking for a cookbook with recipes that are easy to
                        use? Look no further than our KitchenDiary Cookbooks.
                        Our recipe books has something for everyone, whether you
                        &apos; re a beginner in the kitchen or a seasoned pro
                    </p>
                    <p className="md:text-lg">
                        With easy-to-follow instructions and mouthwatering
                        photos, you&apos;ll be whipping up delicious dishes in
                        no time
                    </p>
                </div>
                <div className="lg:w-1/2 text-center">
                    <img src={cookbook} alt="" />
                    <a
                        className="text-white font-semibold bg-orange px-6 py-3 mt-10 inline-block hover:opacity-50"
                        href=""
                    >
                        Get a recipe book now
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CookBook;