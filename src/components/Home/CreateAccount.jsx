import React from "react";
import imgcreateAccSection from '../../assets/images/home-img/createAcc.png';


const CreateAcc = () => {
    return (
        <section className="bg-lightOrange py-10">
            <div className="lg:w-1/2 mx-auto flex flex-col md:flex-row p-5 lg:p-0 gap-5">
                <img src={imgcreateAccSection} alt="" />
                <div className="flex flex-col justify-between">
                    <h3 className="font-bold text-xl mb-5 md:text-2xl">
                        Still yet to create an account?
                    </h3>
                    <p className="mb-5">
                        Create an acccount now to get access to numerous food
                        recipe templates, and printable food recipe
                    </p>
                    <div>
                        <a
                            className="inline-block bg-orange text-white px-6 py-3 rounded-md hover:opacity-50"
                            href=""
                        >
                            Create an Account
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default CreateAcc;