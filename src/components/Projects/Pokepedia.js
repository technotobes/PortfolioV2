import pokeGif from "../../imgs/pokeGif.gif"
import { DiHtml5, DiCss3} from "react-icons/di"
import { 
    SiJavascript,
} from "react-icons/si"

export default function Pokepedia() {
    return (
        <div className="flex justify-center animate__animated animate__fadeIn">
            <div className="flex flex-col w-full 2xl:flex-row 2xl:w-11/12 justify-evenly p-4 rounded-md border-gray-400">
                <div className="flex w-full justify-center p-9">
                    <img src={pokeGif} className="rounded" alt="Poke Gif"/>
                </div>
                <div className="flex-col text-white text-lg p-4 font-light w-full 2xl:w-5/6">
                    <h1 className="font-medium text-2xl mt-4 mb-4">Pokepédia - Pokémon Search App</h1>
                    <h2 className="mt-3 font-medium text-yellow-200">ABOUT</h2>
                    <p>
                        Poképedia is a simple pokemon search app that was built using vanilla Javascript
                        and basic CSS.  The website comes with a couple of mini-games that allows users
                        to get more comfortable with the Pokémon franchise.
                    </p>
                    <div className="flex mt-10 justify-evenly font-medium text-yellow-200">
                        <a href="https://pokepediadc.surge.sh/" target="__blank" className="transition ease-in-out hover:scale-110 flex border w-2/5 sm:w-1/5 justify-center rounded border-yellow-200">Live Link</a>
                        <a href="https://github.com/technotobes/pokemonWebsite" target="__blank" className="transition ease-in-out hover:scale-110 flex border w-2/5 sm:w-1/5 justify-center rounded border-yellow-200" >GitHub</a>
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
                    </div>
                </div>
            </div>
        </div>
    )
}