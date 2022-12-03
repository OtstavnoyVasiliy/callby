import {useEffect, useState} from "react";
const arrImg=[
    "newCollection/1.png",
    "newCollection/1.png",
    "newCollection/1.png",
]

const NewCollection = () => {
    const [activeIndex,setActiveIndex]=useState(0)
    useEffect(()=>{
        const time=setInterval(()=>setActiveIndex(a=>(a+1)%arrImg.length),2000)
    },[])
    return(
        <>
            <div className="new_collection common_background">
                <div className="new_collection_wrapper">
                    <div className="new_collection_content">
                        <div className="collection_title">
                            Новая коллекция
                        </div>
                        <div className="collection_click">
                            Нажмите на одного из членов, чтобы узнать какая вещь ему нравиться
                        </div>
                        <div className="collection_buttons">
                            <a href="#" className="collection_btn">
                                Аня 👩🏽‍💻
                            </a>
                            <a href="#" className="collection_btn">
                                Саша 🧑🏻‍💻
                            </a>
                            <a href="#" className="collection_btn">
                                Марина 👩🏼‍💻
                            </a>
                            <a href="#" className="collection_btn">
                                Вова 🧑🏽‍💻
                            </a>
                        </div>
                    </div>
                    <div className="human_image">
                        <img alt="" className="new_collection_img" src={require('../assets/' + arrImg[activeIndex])}/>
                    </div>
                </div>

                <div className="dots">
                    {arrImg.map((_,i)=>
                        <div className={i===activeIndex ? "dot active_dot": "dot"} ></div>
                    )}
                </div>
            </div>
        </>
    )
}
export default NewCollection