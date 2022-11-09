const accordionItems=[
    {
        titleHead:"Lorem ipsum dolor sit amet?",
        titleItem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis:",
        itemOptionsList:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    {
        titleHead:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        titleItem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis:",
        itemOptionsList:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    {
        titleHead:"Lorem ipsum dolor sit amet, consectetur elit?",
        titleItem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis:",
        itemOptionsList:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    {
        titleHead:"Lorem ipsum dolor sit amet, consectetur elit?",
        titleItem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis:",
        itemOptionsList:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    {
        titleHead:"Lorem ipsum dolor",
        titleItem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis:",
        itemOptionsList:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
]


const advantagesBlocksList=[
    {img:"/img/people_emogi/1.svg",title:"Вся работа в одном месте",description:"Благодаря расширенному функционалу приложения, вся работа происходит в одном месте, и вы больше не будете использовать сторонние программы"},
    {img:"/img/people_emogi/2.svg",title:"Простой в использовани",description:"Интуитивное расположение кнопок через которые вы сможете с полным комфортом пользоваться приложением"},
    {img:"/img/people_emogi/3.svg",title:"Тарифный план",description:"Используйте уже готовый набор функционала или собери свой индивидуально. Получите уникальный тарифный план!"},
]

const contactOptions=["Обращение","Жалоба","Благодарность"]

const selectionOptions=[
    {id:1,price:35,title:"Совместное редактирование (расширенная версия);"},
    {id:2,price:40,title:"Создавайте свою сводку правил;"},
    {id:3,price:62,title:"Облачное хранилище объемом 50 Гб"},
    {id:4,price:15,title:"Приватные чаты и каналы;"},
    {id:5,price:79,title:"Отображение тех, кто не подключился к конференции;"},
]

const tariffBlocksLongList=[
    {title:"Бесплатно 🧢",descriptionList:["Кастомизация интерфейса под свой вкус;","Доска рисования для удобной работы;","Облачное хранилище объемом 15 Гб;","Ссылки для верификации пользователей;","Маски (ограниченое кол-во);","Виджеты, сделают пространство экономнее;","Планировщик (ограниченые инструменты);","Шумоподавление;"],price:0},
    {title:"Студенческая 🎓",descriptionList:["Приватные чаты и каналы;","Облачное хранилище объемом 30 Гб;","Синхронизация музыки с вашим аккаунтом;","Своя аудиотека, чтобы делиться с друзьями;","Нет ограничений на длительность звонков;","Анонимный просмотр чатов/сообщений;","Статистика для вашего канала;","Приватные сервера;","Маски (расширенное кол-во);"],price: 99},
    {title:"Семейная 👑",descriptionList:["Совместное редактирование (расширенная версия);","Создавайте свою сводку правил;","Облачное хранилище объемом 50 Гб","Виджеты (расширенная версия);","Отображение тех, кто не подключился к конференции;","Отстутствие анонимного входа;","Продвинутое планирование для бизнеса;","Маски (расширенное кол-во);","Выберете правильный план для вашей работы!"],price: 299}
]

const tariffBlocksShortList=[
    {title:"Бесплатно 🧢",descriptionList:["Выберете правильный план для вашей работы!","Выберете правильный план для вашей работы!"],price:0},
    {title:"Студенческая 🎓",descriptionList:["Выберете правильный план для вашей работы!","Выберете правильный план для вашей работы!","Выберете правильный план для вашей работы!"],price:99},
    {title:"Семейная 👑",descriptionList:["Выберете правильный план для вашей работы!","Выберете правильный план для вашей работы!","Выберете правильный план для вашей работы!"],price:299},
]

const listPersonHomePage=[
    {imgUrl:"/img/profile_photo/1.png",name:`Владимир`,surname:"Житов",job:"CЕO"},
    {imgUrl:"/img/profile_photo/2.png",name:"Евгения",surname:"Житов",job:"Founder/CVO"},
    {imgUrl:"/img/profile_photo/3.png",name:"Владимир",surname:"Отставная",job:"Founder/CMO"},
    {imgUrl:"/img/profile_photo/4.png",name:"Владимир",surname:"Житов",job:"Founder/ Art-director"},
    {imgUrl:"/img/profile_photo/5.png",name:"Мария",surname:"Захарова",job:"Graphic Designer"}
]

const listPersonOurTeam=[
    {imgUrl:"/img/profile_photo/1.png",name:`Владимир`,surname:"Житов",job:"CЕO"},
    {imgUrl:"/img/profile_photo/2.png",name:"Евгения",surname:"Житов",job:"Founder/CVO"},
    {imgUrl:"/img/profile_photo/3.png",name:"Владимир",surname:"Отставная",job:"Founder/CMO"},
    {imgUrl:"/img/profile_photo/4.png",name:"Владимир",surname:"Житов",job:"Founder/ Art-director"},
    {imgUrl:"/img/profile_photo/5.png",name:"Мария",surname:"Отставная",job:"Graphic Designer"},
    {imgUrl:"/img/profile_photo/6.png",name:"Мария",surname:"Житов",job:"HR архитектор"},
    {imgUrl:"/img/profile_photo/10.png",name:"Мария",surname:"Отставная",job:"HR-менеджер"},
    {imgUrl:"/img/profile_photo/8.png",name:"Мария",surname:"Захарова",job:"Middle Backend Rust Developer"},
    {imgUrl:"/img/profile_photo/9.png",name:"Мария",surname:"Захарова",job:"Middle Frontend Rust Developer"},
]

export {accordionItems,advantagesBlocksList,contactOptions,selectionOptions,tariffBlocksLongList,tariffBlocksShortList,listPersonHomePage,listPersonOurTeam}