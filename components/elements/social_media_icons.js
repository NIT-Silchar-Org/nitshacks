
import { BsFacebook,BsInstagram,BsGithub,BsLinkedin,BsTwitter } from "react-icons/bs";

const Social_media_icons = () => {
  return (
    <div className="social_media_icons flex flex-col absolute bottom-4 md:bottom-60 left-3">
        <a href="#" className="social_media_wrapper duration-150">
            <BsFacebook className="text-2xl text-white"/>
        </a>
        <a href="#" className="social_media_wrapper duration-150">
            <BsInstagram className="text-2xl text-white"/>
        </a>
        <a href="#" className="social_media_wrapper duration-150">
            <BsTwitter className="text-2xl text-white"/>
        </a>
        <a href="#" className="social_media_wrapper duration-150">
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