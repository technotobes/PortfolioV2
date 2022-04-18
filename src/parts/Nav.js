import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import "../styles/styles.css"
import * as actionTypes from "../store/actions/actionTypes"

const mapDispatchToProps = (dispatch) => {
  return {
    onIndexChange: () => dispatch(actionTypes.SET_INDEX)
  }
}

function Nav(props) {
  const [selectedIndex, setSelectedIndex] = useState(0)


  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Tab.List className="flex justify-between w-4/5 text-md md:text-xl md:justify-evenly md:w-4/5" id="Nav">
        <Tab as={Fragment} >
            {({ selected }) => (
                <NavLink to="/" className={selected ? 'text-yellow-200 border-b-2 border-b-yellow-200 w-28 md:w-36 text-center' : 'w-28 md:w-36 text-center'}>About Me</NavLink>
                )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <NavLink to="/projects/Pawster" className={selected ? 'text-yellow-200 border-b-2 border-b-yellow-200 w-28 md:w-36 text-center' : 'w-28 md:w-36 text-center'}>Projects</NavLink>
                )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <NavLink to="/skills" className={selected ? 'text-yellow-200 border-b-2 border-b-yellow-200 w-28 md:w-36 text-center' : 'w-28 md:w-36 text-center'}>Skills</NavLink>
                )}
        </Tab>

      </Tab.List>
    </Tab.Group>
  )
}

export default connect(null, mapDispatchToProps)(Nav)