import React, { useEffect } from "react";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLaptop } from "react-icons/ai";
import Link from "next/link";
import YouTube, { YouTubeProps } from "react-youtube";

interface ModalProps {
  description: string;
  youtubeID: string;
  title: string;
  gitLink: string;
  projectLink: string;
  modalVisible: boolean;
  toggleModal: VoidFunction;
}

function Modal(props: ModalProps) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  }

  const options = {
    height: '200', 
    width: '350',
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  useEffect(() => {
    onPlayerReady;
  },[props.modalVisible])

  return (
    <div
      className="bg-[#fff] lg:w-1/2 md:w-3/5 w-5/6 p-6 m-8 rounded-lg fixed top-1/4 drop-shadow-xl z-[100] right-0 left-0 mx-auto cursor-default ease-in-out duration-100"
      style={{
        visibility: props.modalVisible ? "visible" : "hidden",
        opacity: props.modalVisible ? 1 : 0,
      }}
    >
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center mb-4">
          <h4 className="text-left text-lg font-medium cursor-text">
            {props.title}
          </h4>
          <p onClick={props.toggleModal} className="cursor-pointer">
            &times;
          </p>
        </div>
        <div className="flex justify-center mb-3">
        {props.youtubeID !== "" && props.modalVisible ? (
            <YouTube videoId={props.youtubeID} opts={options} onReady={onPlayerReady} id="video"/>
          ) : (
            <></>
          )}
        </div>
        <div>
          <p className="font-light text-sm tracking-wide cursor-text">
            {props.description}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-row">
        

        {props.gitLink !== "" ? (
          <div className="text-ghPurple mr-56">
          <Link href={props.gitLink} target="__blank" className="flex">
            <p> Github Repository </p>
            <FiGithub className="text-2xl mr-2" />
          </Link>
        </div>
        ) : ( 
          <></>
        )}

        {props.projectLink !== "" && props.title !== "Gender Classification" ? (
          <div className="text-blue ml-20">
            <Link href={props.projectLink} target="__blank" className="flex">
              <p> Click to Try </p>
              <AiOutlineLaptop className="text-2xl mr-2" />
            </Link>
          </div>
        ) : ( 
          <></>
        )}

        {props.title === "Gender Classification" ? (
          <div className="text-blue">
            <Link href={props.projectLink} target="__blank" className="flex">
              <p> Link to Report </p>
              <AiOutlineLaptop className="text-2xl mr-2" />
            </Link>
          </div>
        ) : ( 
          <></>
        )}
      </div>
    </div>
  );
}

export default Modal;
