import lGif from "../../imgs/leftiesGif.gif"
import { DiHtml5, DiCss3} from "react-icons/di"
import { GrMysql } from "react-icons/gr"
import { 
    SiJavascript,
    SiReact,
    SiRedux,
    SiStripe,
    SiGooglemaps,
    SiGooglestreetview,
    SiSequelize,
    SiExpress, 
} from "react-icons/si"

export default function Lefties() {
    return (
        <div className="flex justify-center animate__animated animate__fadeIn">
            <div className="flex flex-col w-full 2xl:flex-row 2xl:w-11/12 justify-evenly p-4 rounded-md border-gray-400">
                <div className="flex w-full justify-center p-9">
                    <img src={lGif} className="rounded" alt="Lefties Gif"/>
                </div>
                <div className="flex-col text-white text-lg p-4 font-light w-full 2xl:w-5/6">
                    <h1 className="font-medium text-2xl mt-4 mb-4">Lefties - A Food Service App For Selling Leftovers</h1>
                    <h2 className="mt-3 font-medium text-yellow-200">ABOUT</h2>
                    <p>
                        Lefties is a solo project built over the course of one week.
                        The front-end was built in Javascript focusing on React and Redux libraries, while the back-end
                        was built using Node.js and Express utilizing Sequelize to manage the database's relations and endpoints. 
                    </p>
                    <div className="flex mt-10 justify-evenly font-medium text-yellow-200">
                        <a href="https://lefties.surge.sh/" target="__blank" className="transition ease-in-out hover:scale-110 flex border w-2/5 sm:w-1/5 justify-center rounded border-yellow-200">Live Link</a>
                        <a href="https://github.com/technotobes/Lefties-App" target="__blank" className="transition ease-in-out hover:scale-110 flex border w-2/5 sm:w-1/5 justify-center rounded border-yellow-200" >GitHub</a>
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
                            <div className="flex justify-center"><SiReact size="2em"/></div>
                            <p className="flex justify-center text-sm mt-2">React</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiRedux size="2em"/></div>
                            <p className="flex justify-center text-sm mt-2">Redux</p>
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
                            <div className="flex justify-center"><SiStripe size="2em"/></div>
                            <p className="flex justify-center text-sm mt-2">Stripe</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiGooglemaps size="2em"/></div>
                            <p className="flex justify-center text-sm mt-2">Google Maps</p>
                        </div>
                        <div className="flex-col text-slate-400 p-4 hover:text-yellow-200">
                            <div className="flex justify-center"><SiGooglestreetview size="2em"/></div>
                            <p className="flex justify-center text-sm mt-2">Google Places</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}