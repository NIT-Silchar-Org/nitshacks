
import { BsFacebook,BsInstagram,BsGithub,BsLinkedin,BsTwitter } from "react-icons/bs";

const Social_media_icons = () => {
  return (
    <div className="social_media_icons flex flex-col absolute bottom-4 left-3">
        <a href="#" className="social_media_wrapper">
            <BsFacebook className="text-2xl text-white"/>
        </a>
        <a href="#" className="social_media_wrapper">
            <BsInstagram className="text-2xl text-white"/>
        </a>
        <a href="#" className="social_media_wrapper">
            <BsTwitter className="text-2xl text-white"/>
        </a>
        <a href="#" className="social_media_wrapper">
            <BsGithub className="text-2xl text-white"/>
        </a>
        <a href="#" className="social_media_wrapper">
            <BsLinkedin className="text-2xl text-white"/>
        </a>
        {/* <BsInstagram/>
        <BsTwitter/>
        <BsGithub/>
        <BsLinkedin/> */}
    </div>
  )
}

export default Social_media_icons