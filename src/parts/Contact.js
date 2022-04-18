import Tooltip from "rc-tooltip";
import {
    FaGithubSquare,
    FaLinkedin,
    FaPhoneSquareAlt,
    FaEnvelopeSquare,
} from "react-icons/fa";
import "rc-tooltip/assets/bootstrap.css";
import Modal from "react-modal";
import React from "react";
import resume from "../imgs/TechResume.PNG";

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(99, 99, 99, 0)",
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(99, 99, 99, 0.24)",
    },
};

export default function Contact() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = "#f00";
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return(
        <div className="flex text-white justify-between w-full">
        <Tooltip
          placement="bottom"
          trigger={["hover"]}
          overlay={
            <span className="text-lg">linkedin.com/in/khangtobyhoang</span>
          }
        >
          <a
            href="https://www.linkedin.com/in/khangtobyhoang/"
            target="__blank"
          >
            <div
              className="transition ease-in-out hover:scale-110 text-yellow-200"
              data-tip="Hello"
            >
              <FaLinkedin size="2.5em" />
            </div>
          </a>
        </Tooltip>

        <Tooltip
          placement="bottom"
          trigger={["hover"]}
          overlay={<span className="text-lg">github.com/technotobes</span>}
        >
          <a href="https://www.github.com/technotobes" target="__blank">
            <div className="transition ease-in-out hover:scale-110 text-yellow-200">
              <FaGithubSquare size="2.5em" />
            </div>
          </a>
        </Tooltip>

        <Tooltip
          placement="bottom"
          trigger={["hover"]}
          overlay={<span className="text-lg">Call & Text: (404)-713-6841</span>}
        >
          <div className="transition ease-in-out hover:scale-110 text-yellow-200">
            <FaPhoneSquareAlt size="2.5em" />
          </div>
        </Tooltip>

        <Tooltip
          placement="bottom"
          trigger={["hover"]}
          overlay={<span className="text-lg">tobyhoang001@gmail.com</span>}
        >
          <a href="mailto:tobyhoang001@gmail.com">
            <div className="transition ease-in-out hover:scale-110 text-yellow-200">
              <FaEnvelopeSquare size="2.5em" />
            </div>
          </a>
        </Tooltip>

        <div
          onClick={openModal}
          className="cursor-pointer transition ease-in-out hover:scale-110 text-yellow-200 p-1 font-semibold text-xl"
          data-tip="Hello"
        >
          Resume
        </div>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="flex-col justify-center">
            <div className="flex justify-center">
              <a
                href={require("../../src/imgs/THtechResume.pdf")}
                download="KTH Resume"
                className="animate__animated animate__fadeIn transition ease-in-out hover:scale-105 text-yellow-200 border border-yellow-200 bg-black p-2 mb-2 rounded"
              >
                <button>Download Resume</button>
              </a>
            </div>
            <div className="flex justify-center">
              <img
                src={resume}
                className="w-10/12 rounded animate__animated animate__fadeIn"
                alt="TH Resume"
              />
            </div>
          </div>
        </Modal>
      </div>
    )
}