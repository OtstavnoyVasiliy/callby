import BlockTariff from "./BlockTariff";

const tariff_blocks_list=[
    {title:"Бесплатно 🧢",description_list:["Выберете правильный план для вашей работы!","Выберете правильный план для вашей работы!"],price:0},
    {title:"Студенческая 🎓",description_list:["Выберете правильный план для вашей работы!","Выберете правильный план для вашей работы!","Выберете правильный план для вашей работы!"],price:99},
    {title:"Семейная 👑",description_list:["Выберете правильный план для вашей работы!","Выберете правильный план для вашей работы!","Выберете правильный план для вашей работы!"],price:299},
]
const TariffBlocksShort=({short})=>{
    return(
        <>
            {tariff_blocks_list.map((block,i)=>
                <BlockTariff blue={i%2!==0} key={i} {...block} />
            )}
        </>
    )
}

export default TariffBlocksShort