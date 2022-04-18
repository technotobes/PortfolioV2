import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import { NavLink } from "react-router-dom"



export default function ProjectNav() {
  return (
    <Tab.Group>
      <Tab.List className="flex justify-center justify-evenly w-11/12 md:w-3/4 mt-2 lg:w-4/6 xl:w-2/5 border border-yellow-200 rounded-lg p-1 animate__animated animate__fadeInDown" id="box">
        <Tab as={Fragment}>
            {({ selected }) => (
                <NavLink to="/projects/Pawster" className={selected ? 'text-yellow-200 w-36 text-center' : 'w-36 text-center text-slate-300'}>Pawster</NavLink>
                )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <NavLink to="/projects/Lefties" className={selected ? 'text-yellow-200 w-36 text-center' : 'w-36 text-center text-slate-300'}>Lefties</NavLink>
                )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <NavLink to="/projects/Cams" className={selected ? 'text-yellow-200 w-36 text-center' : 'w-36 text-center text-slate-300'}>OnlyCams</NavLink>
                )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <NavLink to="/projects/Pokepedia" className={selected ? 'text-yellow-200 w-36 text-center' : 'w-36 text-center text-slate-300'}>Poképedia</NavLink>
                )}
        </Tab>
      </Tab.List>
    </Tab.Group>
  )
}