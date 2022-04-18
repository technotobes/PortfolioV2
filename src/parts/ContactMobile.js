import { Menu } from '@headlessui/react'

import {
    FaGithubSquare,
    FaLinkedin,
    FaPhoneSquareAlt,
    FaEnvelopeSquare,
} from "react-icons/fa";


export default function ContactMobile() {
    return (
        <Menu>
            <Menu.Button className="flex justify-center text-yellow-200 border border-yellow-200 w-3/5 mt-3 transition ease-in-out hover:scale-110">Contact</Menu.Button>
            <Menu.Items>
            <Menu.Item>
                
            </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}