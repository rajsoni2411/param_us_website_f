import { motion } from "framer-motion";
import React from "react";

function Aboutus() {

    // ----------------------------------------------  Animation Variants ----------------------------------------------

    const slideInFromLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    const slideInFromRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    const verticalLineAnimation = {
        hidden: { scaleY: 0 },
        visible: { scaleY: 1, transition: { duration: 1, ease: "easeInOut" } },
    };

    // ----------------------------------------------  Animation Variants ----------------------------------------------

    return (
        <div className="w-full min-h-screen bg-cover bg-center flex justify-center items-center text-white">
            <div className="w-[calc(100%_-_200px)]">
                <div className="font-faustina h-[440px] w-full mt-[60px] bg-aboutus-bg rounded-[110px] text-white flex flex-col justify-center items-center relative bg-cover bg-center bg-no-repeat">
                    <div className="bg-inner absolute inset-0 bg-gradient-to-r from-[#1FA2FF] from-[0%] via-25% to-[#A6FFCB] to-[70%] opacity-20 rounded-[110px]"></div>
                    <p className="font-bold text-[64px]">Our History</p>
                    <p className="font-medium text-[32px]">
                        "Everyone Has A Past, Ours Is Just More Inspiring. Dive Into The Making Of Param Group"
                    </p>
                </div>

                <div className="w-full py-[60px] font-poppins">
                    <div className="relative w-full">
                        <div className="relative flex items-center">
                            <motion.div
                                className="flex flex-col text-end w-[23%]"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={slideInFromLeft}
                            >
                                <h2 className="text-9xl font-bold bg-gradient-to-r from-[#1FA2FF] from-[70%] to-[#A6FFCB] to-[90%] text-transparent bg-clip-text">01</h2>
                                <h3 className="text-5xl font-bold bg-gradient-to-r from-[#1FA2FF] from-[35%] to-[#A6FFCB] to-[100%] text-transparent bg-clip-text mt-3">Who We Are</h3>
                            </motion.div>
                            <div className="flex flex-col items-center ml-5">
                                <div className="w-10 h-10 rounded-full bg-[#1FA2FF]"></div>
                                <motion.div
                                    className="w-2 bg-gradient-to-b from-[#1FA2FF] from-[10%] to-[#A6FFCB] to-[90%] "
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    variants={verticalLineAnimation}
                                    style={{ height: "480px", transformOrigin: "top", marginTop: "0" }}
                                ></motion.div>
                            </div>
                            <motion.div
                                className="text-lg md:w-[75%] pl-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={slideInFromRight}
                            >
                                <div className="leading-relaxed flex flex-col gap-5 font-poppins text-xl whitespace-pre-line">
                                    <p>“At the end of the day, care is a human activity. Technology is not there to replace caregivers; it is there to support them.”</p>
                                    <p>With a similar vision, Param Group was developed by Mr Vipul Amin in 2001 to help people reach the best healthcare services around them. Param Group was born with just an idea in mind to use technology to benefit the lives of people. Our vision is what drives us to perform exceptional acts and expand human satisfaction. We, at Param Group, do this by offering groundbreaking services in the education, healthcare, and IT industries. Today, we are a celebrated company around the globe that has successfully crossed decades of excellence.</p>
                                    <p>Committed to finding the best way to offer affordable healthcare services in the community, our founders developed Param Group of Companies. Param Group is the first step towards brainstorming the healthcare service industry by stepping into education, research, or caregiving. With this, we have successfully catered to thousands of people in getting the best education, healthcare services, and IT suggestions as well. Our beloved clients say that Param Group is not a separate entity but a part of their organization, and that is how our clients feel once they come onboard.</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative flex items-center">
                            <motion.div
                                className="flex flex-col text-end w-[23%]"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={slideInFromLeft}
                            >
                                <h2 className="text-9xl font-bold bg-gradient-to-r from-[#1FA2FF] from-[70%] to-[#A6FFCB] to-[90%] text-transparent bg-clip-text">02</h2>
                                <h3 className="text-5xl font-bold bg-gradient-to-r from-[#1FA2FF] from-[35%] to-[#A6FFCB] to-[100%] text-transparent bg-clip-text mt-3">Our Core Value</h3>
                            </motion.div>
                            <div className="flex flex-col items-center ml-5">
                                <div className="w-10 h-10 rounded-full bg-[#1FA2FF]"></div>
                                <motion.div
                                    className="w-2 bg-gradient-to-b from-[#1FA2FF] from-[10%] to-[#A6FFCB] to-[90%]"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    variants={verticalLineAnimation}
                                    style={{ height: "715px", transformOrigin: "top", marginTop: "0" }}
                                ></motion.div>
                            </div>
                            <motion.div
                                className="text-lg md:w-[75%] pl-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={slideInFromRight}
                            >
                                <div className="leading-relaxed flex flex-col gap-5 font-poppins text-xl whitespace-pre-line">
                                    <p>Stronger when ‘UNITED’ <br /> -Like it is said, teamwork makes the dream work- we at Param Group consider employees as the biggest resources who help us achieve milestones. A strong set of core values keeps our workforce responsible in society and guided in the right direction.</p>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-2xl font-bold">Unity and Integrity</p>
                                        <p>Inspired by the community’s trust in us, we unite as a team to fulfill our client’s objectives and help them achieve great satisfaction. Keeping the differences aside, our team works together to help people and improve the environment as a whole. Also, having strong business integrity and being ethically honest in whatever we say and do is a part of our core values. We believe in actions that reveal our integrity as well as unity in society.</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-2xl font-bold">Respect for Individuals</p>
                                        <p>respecting the honest opinion of individuals working with us and in the community. Maintaining confidentiality with every client we deal with and treating each person in a manner that depicts Param Group’s value. Supporting individuals with disabilities and empowering them in different ways.</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-2xl font-bold">Loyalty and Trust</p>
                                        <p>be a loyal and trustworthy partner for our clients. Share constructive reports and feedback with stakeholders and implement actions in favor of them. Become a reliable partner in the community and take fair decisions that are independent and unbiased.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="relative flex items-center">
                            <motion.div
                                className="flex flex-col text-end w-[23%]"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={slideInFromLeft}
                            >
                                <h2 className="text-9xl font-bold bg-gradient-to-r from-[#1FA2FF] from-[70%] to-[#A6FFCB] to-[90%] text-transparent bg-clip-text">03</h2>
                                <h3 className="text-5xl font-bold bg-gradient-to-r from-[#1FA2FF] from-[35%] to-[#A6FFCB] to-[100%] text-transparent bg-clip-text mt-3">Our Purpose</h3>
                            </motion.div>
                            <div className="flex flex-col items-center ml-5">
                                <div className="w-10 h-10 rounded-full bg-[#1FA2FF]"></div>
                                <motion.div
                                    className="w-2 bg-gradient-to-b from-[#1FA2FF] rounded-b-[20px] from-[10%] to-[#A6FFCB] to-[90%]"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    variants={verticalLineAnimation}
                                    style={{ height: "290px", transformOrigin: "top", marginTop: "0" }}
                                ></motion.div>
                            </div>
                            <motion.div
                                className="text-lg md:w-[75%] pl-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={slideInFromRight}
                            >
                                <div className="leading-relaxed flex flex-col gap-5 font-poppins text-xl whitespace-pre-line">
                                    <p>Care. Cater. Curate</p>
                                    <p>Our purpose is very clear that uniquely drives us to fulfill our vision and mission. Care is to help people in the surroundings live a better livelihood. Cater to help clients and the community in solving their problems and achieve better results. And curate is to innovate in products and services that take the healthcare industry by the storm.</p>
                                    <p>Our purpose at Param Group is to devise products and services that not only offer valuable products and services to the community outside but also be content in whatever we do. Our vision is to craft the combination of caregiving and technology in a way that brings unique yet valuable benefits to the community. To drive towards satisfaction is what we call our primary purpose at the company.</p>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;