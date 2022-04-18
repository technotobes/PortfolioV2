import cGif from "../../imgs/camsGif.gif"
import { DiHtml5, DiCss3} from "react-icons/di"
import { GrMysql } from "react-icons/gr"
import { 
    SiJavascript,
    SiHandlebarsdotjs, 
    SiSequelize,
    SiExpress,
    SiBootstrap, 
} from "react-icons/si"

export default function Cams() {
    return (
        <div className="flex justify-center animate__animated animate__fadeIn">
            <div className="flex flex-col w-full 2xl:flex-row 2xl:w-11/12 justify-evenly p-4 rounded-md border-gray-400">
                <div className="flex w-full justify-center p-9">
                    <img src={cGif} className="rounded" alt="camsGif"/>
                </div>
                <div className="flex-col text-white text-lg p-4 font-light w-full 2xl:w-5/6">
                    <h1 className="font-medium text-2xl mt-4 mb-4">OnlyCams - E-commerce Clone Specializing in Cameras</h1>
                    <h2 className="mt-3 font-medium text-yellow-200">ABOUT</h2>
                    <p>
                        OnlyCams is a solo project, heavily focused on back-end, built over the course of one week.
                        Handlebars was used as a template to serve as the front-end and CSS with some Bootstrap was used for styling. Sequelize was utilized for all 
                        of the logic concerning with data manipulation. 
                    </p>
                    <div className="flex mt-10 justify-evenly font-medium text-yellow-200">
                        <a href="https://onlycams.herokuapp.com/" target="__blank" className="transition ease-in-out hover:scale-110 flex border w-1/5 justify-center rounded border-yellow-200">Live Link</a>
                        <a href="https://github.com/technotobes/e-commerceProject" target="__blank" className="transition ease-in-out hover:scale-110 flex border w-1/5 justify-center rounded border-yellow-200" >GitHub</a>
                    </div>
                    <h2 className="mt-10 font-medium text-yellow-200">TECHNOLOGIES USED</h2>
                    <div className="flex flex-wrap">
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiJavascript size="2em"/></div>
                            <p className="flex justify-center text-sm mt-2">Javascript</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><DiHtml5 size="2em"/></div>
                            <p className="flex justify-center text-sm mt-2">HTML5</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><DiCss3 size="2em"/></div>
                            <p className="flex justify-center text-sm mt-2">CSS3</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiBootstrap size="2em"/></div>
                            <p className="flex justify-center text-sm mt-2">Bootstrap</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><GrMysql size="2em"/></div>
                            <p className="flex justify-center text-sm mt-2">MySQL</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiSequelize size="2em"/></div>
                            <p className="flex justify-center text-sm mt-2">Sequelize</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiExpress size="2em"/></div>
                            <p className="flex justify-center text-sm mt-2">Express</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiHandlebarsdotjs size="2em"/></div>
                            <p className="flex justify-center text-sm mt-2">Handlebars</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiSequelize size="2em"/></div>
                            <p className="flex justify-center text-sm mt-2">Sequelize</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}