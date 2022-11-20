import React from "react";
import { FiHeart } from 'react-icons/fi';
import banana from '../../assets/images/home-img/banana.jpeg';
import beefstew from '../../assets/images/home-img/beef-stew.jpeg';
import croissant from '../../assets/images/home-img/croissant.jpeg';
import friedRice from '../../assets/images/home-img/fried-rice.jpeg';
import rice from '../../assets/images/home-img/rice.jpeg';
import singaporean from '../../assets/images/home-img/singaporean.jpeg';
import spicyRamen from '../../assets/images/home-img/spicy-ramen.jpeg';
import roastedBeef from '../../assets/images/home-img/roasted-beef.png';
import avatar1 from '../../assets/images/home-img/img1.png';
import avatar2 from '../../assets/images/home-img/img2.png';
import avatar3 from '../../assets/images/home-img/img3.png';
import avatar4 from '../../assets/images/home-img/img4.png';
import avatar5 from '../../assets/images/home-img/img5.png';
import avatar6 from '../../assets/images/home-img/img6.png';
import avatar7 from '../../assets/images/home-img/img7.png';
import avatar8 from '../../assets/images/home-img/img8.png';

const Popular = () => {
    return (
        <section>
            <div className="w-[90%] mx-auto py-20">
                <div className="flex justify-between items-center pb-10">
                    <h3 className="text-2xl md:text-3xl font-bold ">
                        Popular recipes from <br className="lg:hidden" />
                        Kitchen<span className="text-orange">Diary</span>
                    </h3>
                    <a className="text-orange font-semibold" href="">
                        See all
                    </a>
                </div>
                <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-4">
                    <div className="card bg-white rounded-b-md rounded-t-xl">
                        <div className="w-full h-[150px] mb-5">
                            <img
                                className="w-full h-full object-cover rounded-t-xl"
                                src={banana}
                                alt=""
                            />
                        </div>
                        <div className="flex  items-center px-2 pb-2">
                            <div className="w-[40px] mr-2">
                                <img
                                    className="rounded-full"
                                    src={avatar1}
                                    alt=""
                                />
                            </div>
                            <div className="info ">
                                <h5 className="font-bold md:text-sm">
                                    Banana Pancake
                                </h5>
                                <p className="text-sm">Anuolu Kuye</p>
                            </div>
                            <div className="flex gap-2 items-center ml-auto">
                                <FiHeart className="text-orange" />
                                <p>120</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-white rounded-b-md rounded-t-xl">
                        <div className="w-full h-[150px] mb-5">
                            <img
                                className="w-full h-full object-cover rounded-t-xl"
                                src={rice}
                                alt=""
                            />
                        </div>
                        <div className="flex  items-center px-2 pb-2">
                            <div className="w-[40px] mr-2">
                                <img
                                    className="rounded-full"
                                    src={avatar2}
                                    alt=""
                                />
                            </div>
                            <div className="info ">
                                <h5 className="font-bold md:text-sm">
                                    Rice and Fish Stew
                                </h5>
                                <p className="text-sm">James Steve</p>
                            </div>
                            <div className="flex gap-2 items-center ml-auto">
                                <FiHeart className="text-orange" />
                                <p>120</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-white rounded-b-md rounded-t-xl">
                        <div className="w-full h-[150px] mb-5">
                            <img
                                className="w-full h-full object-cover rounded-t-xl"
                                src={friedRice}
                                alt=""
                            />
                        </div>
                        <div className="flex  items-center pb-2 px-2">
                            <div className="w-[40px] mr-2">
                                <img
                                    className="rounded-full"
                                    src={avatar3}
                                    alt=""
                                />
                            </div>
                            <div className="info ">
                                <h5 className="font-bold md:text-sm">
                                    Fried Rice
                                </h5>
                                <p className="text-sm">Richardson Stone</p>
                            </div>
                            <div className="flex gap-2 items-center ml-auto">
                                <FiHeart className="text-orange" />
                                <p>120</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-white rounded-b-md rounded-t-xl">
                        <div className="w-full h-[150px] mb-5">
                            <img
                                className="w-full h-full object-cover rounded-t-xl"
                                src={roastedBeef}
                                alt=""
                            />
                        </div>
                        <div className="flex  items-center px-2 pb-2">
                            <div className="w-[40px] mr-2">
                                <img
                                    className="rounded-full"
                                    src={avatar4}
                                    alt=""
                                />
                            </div>
                            <div className="info ">
                                <h5 className="font-bold md:text-sm">
                                    Roasted Beef and Rice
                                </h5>
                                <p className="text-sm">Hannah Drille</p>
                            </div>
                            <div className="flex gap-2 items-center ml-auto">
                                <FiHeart className="text-orange" />
                                <p>120</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-white rounded-b-md rounded-t-xl">
                        <div className="w-full h-[150px] mb-5">
                            <img
                                className="w-full h-full object-cover rounded-t-xl"
                                src={beefstew}
                                alt=""
                            />
                        </div>
                        <div className="flex  items-center px-2 pb-2">
                            <div className="w-[40px] mr-2">
                                <img
                                    className="rounded-full"
                                    src={avatar5}
                                    alt=""
                                />
                            </div>
                            <div className="info ">
                                <h5 className="font-bold">Beef Stew</h5>
                                <p className="text-sm">Martina Ngozi</p>
                            </div>
                            <div className="flex gap-2 items-center ml-auto">
                                <FiHeart className="text-orange" />
                                <p>120</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-white rounded-b-md rounded-t-xl">
                        <div className="w-full h-[150px] mb-5">
                            <img
                                className="w-full h-full object-cover rounded-t-xl"
                                src={spicyRamen}
                                alt=""
                            />
                        </div>
                        <div className="flex  items-center px-2 pb-2">
                            <div className="w-[40px] mr-2">
                                <img
                                    className="rounded-full"
                                    src={avatar6}
                                    alt=""
                                />
                            </div>
                            <div className="info ">
                                <h5 className="font-bold md:text-sm">
                                    Spicy Ramen Noodles
                                </h5>
                                <p className="text-sm">Howard Suka</p>
                            </div>
                            <div className="flex gap-2 items-center ml-auto">
                                <FiHeart className="text-orange" />
                                <p>120</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-white rounded-b-md rounded-t-xl">
                        <div className="w-full h-[150px] mb-5">
                            <img
                                className="w-full h-full object-cover rounded-t-xl"
                                src={croissant}
                                alt=""
                            />
                        </div>
                        <div className="flex  items-center px-2 pb-2">
                            <div className="w-[40px] mr-2">
                                <img
                                    className="rounded-full"
                                    src={avatar7}
                                    alt=""
                                />
                            </div>
                            <div className="info ">
                                <h5 className="font-bold md:text-sm">
                                    {' '}
                                    Croissants{' '}
                                </h5>
                                <p className="text-sm">Richard Duke</p>
                            </div>
                            <div className="flex gap-2 items-center ml-auto">
                                <FiHeart className="text-orange" />
                                <p>120</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-white rounded-t-xl rounded-b-md">
                        <div className="w-full h-[150px] mb-5">
                            <img
                                className="w-full h-full object-cover rounded-t-xl"
                                src={singaporean}
                                alt=""
                            />
                        </div>
                        <div className="flex  items-center pb-2 px-2">
                            <div className="w-[40px] mr-2">
                                <img
                                    className="rounded-full"
                                    src={avatar8}
                                    alt=""
                                />
                            </div>
                            <div className="info">
                                <h5 className="font-bold md:text-sm">
                                    Singaporean Noddles
                                </h5>
                                <p className="text-sm">Stephanie Eze</p>
                            </div>
                            <div className="flex gap-2 items-center ml-auto">
                                <FiHeart className="text-orange" />
                                <p>120</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Popular