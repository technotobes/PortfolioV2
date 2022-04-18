import profilePic from "../imgs/profilepic.jpg"
import Typing from "../utils/Typing"

function AboutMe() {

    return(
        <div className="flex justify-center p-18 mt-5 animate__animated animate__fadeInUp">
            <div className="flex w-4/5 justify-evenly md:p-14 rounded-md border-gray-400">
                <div className="p-3">
                    <img src={profilePic} className="rounded-md hidden md:inline" alt="TH Profile Pic"/>
                </div>
                <div className="flex-col text-white text-lg p-3 font-light">
                    <Typing />
                    <h1 className="font-medium text-sm md:text-2xl mt-4 mb-4">I'm Toby and I am a rising full-stack developer with a love for minimalistic design and problem solving.</h1>
                    <p className="text-sm md:text-lg">
                        In 2021, I graduated from Georgia State University with a degree in Business Adminstration.
                        Throughout my life, coding always seemed interesting, so I applied to be in DigitalCraft's 
                        intensive bootcamp as a supplement to my degree. But then I fell in love with coding and the satisfaction
                        that comes from building and creating. I am quick to adapt to any role and environment.
                        I embrace challenges and welcome failure as a chance to grow.
                    </p>
                    <p className="text-sm md:text-lg mt-3">So with upmost excitement, I am looking to turn coding into my main and professional career!</p>
                    <p className="text-sm md:text-lg mt-3">In my spare time, I enjoy dancing and terraforming worlds in video-games.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe