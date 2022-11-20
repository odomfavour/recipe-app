import React from "react";
import createAccount from '../../assets/images/home-img/createaccount.png'
import choosetemplate from '../../assets/images/home-img/choose-template.png'
import generaterecipe from '../../assets/images/home-img/generate-recipe.jpeg'
import createrecipe from '../../assets/images/home-img/create-recipe.jpeg'

const HowItWork = () => {
    return (
        <section>
            <div className="w-4/5 md:w-[90%] lg:w-4/5 mx-auto mb-20">
                <div className="text-center mb-10">
                    <p className="text-brown font-bold text-xl pb-5">
                        How it works
                    </p>
                    <h4 className="text-black font-bold text-xl md:text-2xl lg:text-3xl">
                        Get Started with these Four Easy Steps
                    </h4>
                </div>
                <ul className="home-list">
                    <li className="home-list-item md:flex mb-5 justify-between md:p-0">
                        <div className="md:w-1/2 h-[200px] mb-5 md:pr-20 md:border-r md:border-dashed md:border-black">
                            <img
                                className="w-full h-full object-cover"
                                src={createAccount}
                                alt=""
                            />
                        </div>
                        <div className="md:w-1/2 md:text-sm md:pl-20">
                            <h6 className="font-bold mb-5 lg:text-xl">
                                Create an Account
                            </h6>
                            <p className="md:text-xl">
                                Click on “Sign Up” to create an account with us
                                or click “Login” to access your account. Then on
                                your dashboard click on “Create Recipe” to get
                                started.
                            </p>
                        </div>
                    </li>
                    <li className="home-list-item md:flex mb-5 md:flex-row-reverse justify-between md:p-0">
                        <div className="md:w-1/2 h-[200px] mb-5 md:pl-20 md:border-l md:border-dashed md:border-black">
                            <img
                                className="w-full h-full object-cover"
                                src={choosetemplate}
                                alt=""
                            />
                        </div>
                        <div className="md:w-1/2 md:pr-20">
                            <h6 className="font-bold mb-5 text-xl">
                                Choose Template
                            </h6>
                            <p className="md:text-xl">
                                Click “create recipe” to get started, then fill
                                the interactive form Page to add recipe your
                                title, subtitle, and description of recipe.
                            </p>
                        </div>
                    </li>
                    <li className="home-list-item md:flex mb-10 justify-between md:p-0">
                        <div className="md:w-1/2 h-[200px] mb-5 md:pr-20">
                            <img
                                className="w-full h-full object-cover"
                                src={createrecipe}
                                alt=""
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-20 md:border-l md:border-dashed md:border-black">
                            <h6 className="font-bold mb-5 text-xl">
                                Create Recipe Card
                            </h6>
                            <p className="md:text-xl">
                                After choosing a template, you then proceed to
                                fill the interactive form Page to add your
                                recipe title, ingredients etc to make your
                                recipe card.
                            </p>
                        </div>
                    </li>
                    <li className="home-list-item md:flex mb-10 md:flex-row-reverse justify-between md:p-0">
                        <div className="md:w-1/2 h-[200px] mb-5 md:pl-20">
                            <img
                                className="w-full h-full object-cover"
                                src={generaterecipe}
                                alt=""
                            />
                        </div>
                        <div className="md:w-1/2 md:pr-20 md:border-dash md:border-r md:border-dashed border-black">
                            <h6 className="font-bold mb-5 text-xl">
                                Generate Recipe Card
                            </h6>
                            <p className="md:text-xl">
                                Download your recipe in a well generated
                                beautiful A4 paper and you’re good to go.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default HowItWork
