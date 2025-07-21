import BackEnd from "../../assets/BackEnd.jpg"
import FrontEnd from "../../assets/FrontEnd.jpg"
import MobileStack from "../../assets/MobileStack.jpg"
import IAC from "../../assets/IAC.jpg"
import DBMS from "../../assets/DBMS.jpg"
import ReactIcon from "../../assets/ReactLogo.png"
import Node from "../../assets/Nodejs.png"
import Native from "../../assets/ReactNative.png"
import Tailwind from "../../assets/Tailwind.jpg"
import TypeScript from "../../assets/Typescript.png"
import Github from "../../assets/github.jpg"
import Docker from "../../assets/Docker.jpg"
import AWS from "../../assets/AWS.jpg"
import Mongo from "../../assets/Mongo.jpg"
import SQL from "../../assets/SQL.jpg"
import Capacitor from "../../assets/Capacitor.jpg"
import Rest from "../../assets/Rest.jpg"
import Bm from "../../assets/Bm.jpg"
import "../../App.css"
import React, { useEffect, useState } from "react"

function Technologies() {
   
    return (
        <>

            <div className="h-full flex flex-col justify-center items-center gap-7  bg-gray-50 scroll-mt-20  py-10" id="stck">
                <div>
                    <p className=" text-4xl font-bold text-yellow-400 text-center  ">Tech Stack</p>

                </div>
                {/**Stacks  */}
                <div className=" flex flex-col justify-center items-center  gap-7    ">

                    {/**1st row */}

                    <div id="first" className={` transform transition-transform duration-1000  flex md:flex-row  flex-col   gap-7 xl:px-36 lg:px-20`}  >
                        {/**FrontEnd **/}
                        <div className="bg-gray-100 hover:bg-slate-200 pb-2 w-full lg:w-1/3 hover:shadow-xl">
                            <div> <img src={FrontEnd} className="h-[186px] w-full " /></div>
                            <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                                <img src={ReactIcon} className="h-10 bg-gray-400" />
                                <p> React JS</p>
                            </div>

                            <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                                <img src={Tailwind} className="h-10 w-10 bg-gray-400" />
                                <p> Tailwind CSS</p>
                            </div>

                            <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                                <img src={TypeScript} className="h-10 w-10 bg-gray-400" />
                                <p> TypeScript</p>
                            </div>


                        </div>
                        {/**BackEnd */}
                        <div className="bg-gray-100 hover:bg-slate-200 pb-3  w-full  lg:w-1/3 hover:shadow-xl">
                            <div> <img src={BackEnd} className="h-[186px] w-full" /></div>
                            <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                                <img src={Node} className="h-10 w-12" />
                                <p> Node JS</p>
                            </div>
                            <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                                <img src={Rest} className="h-10 w-12" />
                                <p> Architecture - Restfull API </p>
                            </div>
                        </div>

                        {/**Mobile Development */}

                        <div className="bg-gray-100 hover:bg-slate-200 pb-3 w-full  lg:w-1/3 hover:shadow-xl">
                            <div> <img src={MobileStack} className="h-[186px] w-full " /></div>
                            <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                                <img src={Native} className="h-10 bg-gray-400" />
                                <p> React Native</p>
                            </div>

                            <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                                <img src={Capacitor} className="h-10 bg-gray-400" />
                                <p> Capacitor</p>
                            </div>
                        </div>

                    </div>
                    {/**Second row **/}

                    <div id="secnd" className={` transform transition-transform duration-1000  flex md:flex-row  flex-col   gap-7 xl:px-36 lg:px-20 `}  >
                        {/**DataBase Management systems  **/}
                        <div className="bg-gray-100 hover:bg-slate-200 pb-2 w-full lg:w-1/3 hover:shadow-xl">
                            <div> <img src={DBMS} className="h-[186px] w-full " /></div>
                            <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                                <img src={SQL} className="h-10 bg-gray-400" />
                                <p> MYSQL</p>
                            </div>

                            <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                                <img src={Mongo} className="h-10 w-10 bg-gray-400" />
                                <p> MongoDB</p>
                            </div>

                            <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                                <img src={TypeScript} className="h-10 w-10 bg-gray-400" />
                                <p> Cassandra</p>
                            </div>


                        </div>
                        {/**Infrastructure As Code */}
                        <div className="bg-gray-100 hover:bg-slate-200 pb-3  w-full  lg:w-1/3 hover:shadow-xl">
                            <div> <img src={IAC} className="h-[186px] w-full" /></div>
                            <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                                <img src={Github} className="h-10 w-12" />
                                <p> Github</p>
                            </div>
                            <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                                <img src={Docker} className="h-10 w-12" />
                                <p> Docker </p>
                            </div>

                            <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                                <img src={AWS} className="h-10 w-12" />
                                <p> AWS </p>
                            </div>
                        </div>

                        {/**Business management tools */}

                        <div className="bg-gray-100 hover:bg-slate-200 pb-3 w-full  lg:w-1/3 hover:shadow-xl">
                            <div> <img src={Bm} className="h-[186px] w-full " /></div>
                            <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                                <img src={Native} className="h-10 bg-gray-400" />
                                <p> Python</p>
                            </div>

                            <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                                <img src={Capacitor} className="h-10 bg-gray-400" />
                                <p>Javacript </p>
                            </div>
                        </div>

                    </div>


                </div>

            </div>


        </>

    );

}
export default Technologies