import React from "react";


const BlockAdvantage=({img,title,description})=>{
    return(
        <div className="column_adv">
            <div className="adv_content">
                <div className="adv_image">
                    <img src={img} alt="" className="adv_img"/>
                </div>
                <div className="adv_title">
                    {title}
                </div>
                <div className="adv_subtitle">
                    {description}
                </div>
            </div>
        </div>
    )
}
export default BlockAdvantage