import { DiHtml5, DiCss3, DiPostgresql } from "react-icons/di"
import { AiFillApi, AiFillCompass } from "react-icons/ai"
import { GrMysql } from "react-icons/gr"
import { CgBee } from "react-icons/cg"
import { GiCycle } from "react-icons/gi"
import { 
    SiRedux, 
    SiReact, 
    SiNodedotjs, 
    SiExpress, 
    SiHandlebarsdotjs, 
    SiSequelize, 
    SiMongodb, 
    SiTailwindcss, 
    SiBootstrap, 
    SiJavascript,
    SiGit,
    SiGithub,
    SiPostman,
    SiStripe,
    SiGooglemaps,
    SiGooglestreetview,
    SiGraphql,
    SiApollographql,
    SiPython,
    } 
    from "react-icons/si"

export default function Skills() {

    return(
        <div className="flex justify-center p-2 animate__animated animate__fadeInUp">
            <div className="flex flex-col lg:flex-row w-11/12 justify-between p-10 rounded-md text-white font-medium text-lg">
                <div className="flex flex-col lg:w-1/3 lg:p-5 ">
                    <h1 className="flex justify-center text-yellow-200">LANGUAGES</h1>
                    <div className="flex p-3 justify-evenly flex-wrap">
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200 w-24">
                            <div className="flex justify-center"><SiJavascript size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">Javascript</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><DiHtml5 size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">HTML5</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><DiCss3 size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">CSS3</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiPython size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">Python</p>
                        </div>
                    </div>
                </div>
                <div className="flex-col my-10 lg:my-0 lg:w-1/3 lg:p-5">
                    <h1 className="flex justify-center text-yellow-200">FRAMEWORKS & LIBRARIES</h1>
                    <div className="flex p-3 justify-evenly flex-wrap">
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiReact size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">React</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiRedux size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">Redux</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiNodedotjs size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">Node.js</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiExpress size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">Express</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><DiPostgresql size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">PostgreSQL</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><GrMysql size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">MySQL</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiHandlebarsdotjs size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">Handlebars</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiSequelize size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">Sequelize</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiMongodb size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">MongoDB</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiTailwindcss size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">TailwindCSS</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiBootstrap size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">Bootstrap</p>
                        </div>
                    </div>
                </div>
                <div className="flex-col lg:w-1/3 lg:p-5">
                    <h1 className="flex justify-center text-yellow-200">TOOLS & APIS</h1>
                    <div className="flex p-3 justify-evenly flex-wrap">
                    <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiGit size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">Git</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiGithub size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">GitHub</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiPostman size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">Postman</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><AiFillApi size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">RESTful API</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiStripe size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">Stripe</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiGraphql size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">GraphQL</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiApollographql size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">Apollo</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><CgBee size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">Beekeeper</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><AiFillCompass size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">MongoDB Compass</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiGooglemaps size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">Google Maps</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiGooglestreetview size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">Google Places</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><GiCycle size="3em"/></div>
                            <p className="flex justify-center text-medium mt-2">Agile</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}