import React, { useEffect, useRef } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import imageAiThumbnail from "../assets/thumb_1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";
import goviMart from "../assets/govimart.png";

export default function Projects() {

    useEffect(() => {
        AOS.init({
            duration: 800, easing: "ease-in-out", once: true,
            mirror: false,
        });
    }, []);



    return (
        <div className="min-h-screen w-full bg-black px-4 py-16 flex flex-col items-center text-white">
            <h1 className="text-3xl md:text-4xl font-semibold mb-10" data-aos="zoom-in">Our Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl place-items-center" data-aos="zoom-in">

                {/* Card 01 */}
                <div className="flex flex-col items-center gap-4 w-full max-w-[420px]">
                    <div
                        className="w-full h-50 aspect-video rounded-xl overflow-hidden shadow-xl border border-white/20 cursor-pointer transition hover:scale-[1.02]"

                    >
                        <img src={imageAiThumbnail} alt="ImageAI" />

                    </div>

                    <div className="w-full h-90 bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-xl text-sm md:text-base leading-relaxed shadow-lg">
                        <h2 className="text-lg font-semibold mb-1">AI Image Generator</h2>
                        <p className="text-white/70">
                            Type what you imagine — and the AI creates the image for you. Designed to help in design, branding, and creative artwork.
                        </p>
                        <div className="space-y-2 mt-5">
                            <p className="font-semibold">Source code</p>

                            <a href="https://github.com/DhanushkaSa/image-AI" target="_blank" className="flex items-center gap-2 text-cyan-400 hover:underline">
                                <FaGithub /> Image AI Frontend
                            </a>

                            <a href="https://github.com/DhanushkaSa/backend-image-AI" target="_blank" className="flex items-center gap-2 text-cyan-400 hover:underline">
                                <FaGithub /> Image AI Backend
                            </a>
                        </div>
                    </div>
                </div>


                {/* card 02 */}

                <div className="flex flex-col items-center gap-4 w-full max-w-[420px]">
                    <div
                        className="w-full h-50 aspect-video rounded-xl overflow-hidden shadow-xl border border-white/20 cursor-pointer transition hover:scale-[1.02]"

                    >
                        <img src={goviMart} alt="Govimart" />

                    </div>

                    <div className="w-full h-90 bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-xl text-sm md:text-base leading-relaxed shadow-lg">
                        <h2 className="text-lg font-semibold mb-1">GoviMart Platform</h2>
                        <p className="text-white/70">
                            GoviMart is a supermarket management system. The goal is creating a smarter digital marketplace for farmers and customers. This system focuses on reducing the impact of intermediaries, who often take a large portion of the profit, making it difficult for farmers to earn fair income.   </p>
                        <div className="space-y-2 mt-5">
                            <p className="font-semibold">Source code</p>

                            <a href="https://github.com/Vihanga-Theekshana/Govimart-frontend/tree/dev" target="_blank" className="flex items-center gap-2 text-cyan-400 hover:underline">
                                <FaGithub /> GoviMart Frontend
                            </a>

                            <a href="https://github.com/DhanushkaSa/GoviMart-backend" target="_blank" className="flex items-center gap-2 text-cyan-400 hover:underline">
                                <FaGithub /> GoviMart Backend
                            </a>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

;
