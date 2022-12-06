import {useEffect} from "react";
import Memories from "../components/Memories";
import PhotosCarousel from "../components/PhotosCarousel";

const AboutUs = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return(
        <>
            <div className="about_page">
                <div className="title_page about_title_page">
                    Что на счет нас?
                </div>
                <div className="sub_title about_sub_title">
                    Нажмите на воспоминание, чтобы активировать его
                </div>
                <div className="about_page_content">
                    <Memories />
                    <PhotosCarousel />
                </div>
            </div>
        </>
    )
}
export default AboutUs