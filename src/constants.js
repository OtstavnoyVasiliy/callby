const accordionItems=[
    {
        titleHead:"Что такое эфир?",
        titleItem: "Это видеовстречи с друзьями, собеседование с коллегами, это простой способ пообщаться с человеком. Уникальные функции помогут вам комфортно чувствовать себя в интернет-пространстве. В пару кликов вы сможете выйти на связь с людьми, которые в далеке от вас и так трепетно ждут встречи с вами."
    },
    {
        titleHead:"Сколько участников может быть на видеоконференции?",
        titleItem:"Специально для вас мы подготовили безлимитное количество подключений пользователей, чтобы вы могли пообщаться с наибольшем количеством человек.",
    },
    {
        titleHead:"Какие функции мне доступны и почему?",
        titleItem:"Все зависит от вашего выбранного тарифа. Также вы можете собрать тариф индивидуально под ваши задачи и цели.",
    },
    {
        titleHead:"Можно ли использовать Эфир в бизнес-целях?",
        titleItem:"Конечно можно, специально для вас мы сделаем индивидуальный тариф, который подойдет под всевозможные бизнес-дела.",
    },
    {
        titleHead:"Могу ли я передать подписку на тариф другому пользователю?",
        titleItem:"К сожалению, передача подписки на тариф в приложении не осуществляется, но вы можете подарить подписку любому пользователю от 3-6-12 месяцев.",
    },
]


const advantagesBlocksList=[
    {img:"people_emogi/1.svg",title:"Вся работа в одном месте",description:"Благодаря расширенному функционалу приложения, вся работа происходит в одном месте, и вы больше не будете использовать сторонние программы"},
    {img:"people_emogi/2.svg",title:"Простой в использовании",description:"Интуитивное расположение кнопок через которые вы сможете с полным комфортом пользоваться приложением"},
    {img:"people_emogi/3.svg",title:"Тарифный план",description:"Используйте уже готовый набор функционала или собери свой индивидуально. Получите уникальный тарифный план!"},
]

const contactOptions=["Обращение","Жалоба","Благодарность"]

const selectionOptions=[
    {id:1,price:29,title:"Субтитры"},
    {id:2,price:19,title:"Режим совместностного редактирования/доски (расширенный режим)"},
    {id:3,price:39,title:"Облачное хранилище 100гб"},
    {id:4,price:39,title:"Анонимное посещение звонков"},
    {id:5,price:29,title:"Синхронизация музыки с вашим аккаунтом"},
    {id:6,price:39,title:"Статистика для звонков"},
    {id:7,price:9,title:"Виджеты (ограниченый набор)"},
    {id:8,price:29,title:"Комнаты +1 штука"},
    {id:9,price:79,title:"Облачное хранилище 250гб"},
    {id:10,price:19,title:"Виджеты (полная версия)"},
    {id:11,price:89,title:"Комнаты + 3 штуки"},
    {id:12,price:19,title:"Сводка правил под звонки/каналы"},
    {id:13,price:29,title:"Режим совместного редактирования доски (полный режим)"},
    {id:14,price:29,title:"Отображение тех, кто не подключился к звонку"},
]

const tariffBlocksLongList=[
    {title:"FREE 🧢",descriptionList:["Режим совместного редактирования/доски (ограниченный режим);","Совместное использование 2 пользователей;","Шумоподавление;","Планировщик ограниченные инструменты;","Облачное хранилище 50гб;","Виджеты (ограниченный набор);","2 комнаты","Голосовой ассистент;","Набор FREE (2 звука, 2 темы, 5 стикер паков);"],price:0},
    {title:"PRO 🎓",descriptionList:["Субтитры;","Облачное хранилище 100гб;","Режим совместностного редактирования/доски (расширенный режим);","Синхронизация музыки с вашим аккаунтом;","Анонимное посещение звонков;","Статистика для звонков;","Виджеты (ограниченый набор);","3 комнаты;","Набор PRO (2 звука, 2 темы, 2 стикерпака);"],price: 99},
    {title:"PRO PRIME 👑",descriptionList:["Анонимное посещение звонков;","Синхронизация музыки с вашим аккаунтом;","Субтитры;","Статистика звонков;","Облачное хранилище 250гб;","Виджеты (полная версия);","5 комнат;","Сводка правил под звонки/каналы;","Режим совместного редактирования доски (полный режим)", "Отображение тех, кто не подключился к звонку", "Набор PRO PRIME (4 звука, 4 темы, 4 стикерпака)"],price: 249}
]

const tariffBlocksShortList=[
    {title:"FREE 🧢",descriptionList:["Режим совместного редактирования/доски (ограниченный режим);","Совместное использование 2 пользователей;"],price:0},
    {title:"PRO 🎓",descriptionList:["Синхронизация музыки с вашим аккаунтом;","Облачное хранилище 100гб;","Режим совместностного редактирования/доски (расширенный режим);"],price:99},
    {title:"PRO PRIME 👑",descriptionList:["Анонимное посещение;","Синхронизация музыки с вашим аккаунтом;","Сводка правил под звонки/каналы;"],price:249},
]

const listPersonHomePage=[
    {imgUrl:"profile_photo/7.png",name:`Владимир`,surname:"Житов",job:"CЕO"},
    {imgUrl:"profile_photo/4.png",name:"Анна",surname:"Вакуленко",job:"Founder/CVO"},
    {imgUrl:"profile_photo/6.png",name:"Александр",surname:"Хисамутдинов",job:"Founder/CMO"},
    {imgUrl:"profile_photo/3.png",name:"Марина",surname:"Марейчева",job:"Founder/ Art-director"},
    {imgUrl:"profile_photo/2.png",name:"Алена",surname:"Хисамутдинова",job:"Graphic Designer"}
]

const listPersonOurTeam=[
    {imgUrl:"profile_photo/7.png",name:`Владимир`,surname:"Житов",job:"CЕO"},
    {imgUrl:"profile_photo/4.png",name:"Анна",surname:"Вакуленко",job:"Founder/CVO"},
    {imgUrl:"profile_photo/6.png",name:"Александр",surname:"Хисамутдинов",job:"Founder/CMO"},
    {imgUrl:"profile_photo/3.png",name:"Марина",surname:"Марейчева",job:"Founder/ Art-director"},
    {imgUrl:"profile_photo/2.png",name:"Алена",surname:"Хисамутдинова",job:"Graphic Designer"},
    {imgUrl:"profile_photo/10.png",name:"Максим",surname:"Штыкайдер",job:"HR архитектор"},
    {imgUrl:"profile_photo/5.png",name:"Сергей",surname:"Хизов",job:"HR-менеджер"},
    {imgUrl:"profile_photo/8.png",name:"Кирилл",surname:"Новоселецкий",job:"Middle Backend Rust Developer"},
    {imgUrl:"profile_photo/9.png",name:"Инсаф",surname:"Гиззатуллин",job:"Middle Frontend Rust Developer"},
    {imgUrl:"profile_photo/11.png",name:"Сергей",surname:"Кононенко",job:"Junior Frontend Rust Developer "},
]

const videoList = [
    {id:1, videoUrl:"ECTIE39k-_0", videoName:"Основы приложения 👶🏼"},
    {id:2, videoUrl:"ECTIE39k-_0", videoName:"Познаем глубины 👩🏻‍💻"},
    {id:3, videoUrl:"GW5PwlzXBDc", videoName:"Что полезного? 👩🏽‍🏫"},
    {id:4, videoUrl:"ECTIE39k-_0", videoName:"Ищем ответы 🕵🏻‍♂️"},
    {id:5, videoUrl:"ECTIE39k-_0", videoName:"Работа по-другому 💁🏼"},

]

export {accordionItems,advantagesBlocksList,contactOptions,selectionOptions,tariffBlocksLongList,tariffBlocksShortList,listPersonHomePage,listPersonOurTeam,videoList}