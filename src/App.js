
function App() {
  return (
      <div className="wrapper">
        <header className="header">
          <div className="header_container">
            <div className="logo">
              <div className="header_image">
                <img src="/img/header/logo.png" alt="" className="logo_img"/>
              </div>
            </div>
            <div className="burger">
              <span></span>
            </div>
            <nav className="header_menu">
              <ul className="menu_list">
                <li className="menu_item">
                  <a href="#" className="menu_link">Тарифы</a>
                </li>
                <li className="menu_item">
                  <a href="#" className="menu_link">Обучение</a>
                </li>
                <li className="menu_item">
                  <a href="#" className="menu_link">Магазин</a>
                </li>
                <li className="menu_item">
                  <a href="#" className="menu_link">Контакты</a>
                </li>
              </ul>
            </nav>
            <div className="reg_menu">
              <a href="#" className="registration">Регистрация</a>
              <button className="enter_btn btn">Вход</button>
            </div>
          </div>
        </header>
        <div className="container">
          <section className="union">
            <div className="content_column">
              <div className="union_content">
                <div className="union_title">
                  Соединяем миры и пространство
                </div>
                <div className="subtitle union_subtitle">
                  Присоединяйся и ощути абсолютно новые эмоции от общения!
                </div>
                <div className="union_input_wrapper input_wrapper">
                  <input type="email" className="union_input mail_input" placeholder='example@mail.ru'/>
                  <button className="union_btn input_btn btn">Начать!</button>
                </div>
              </div>
            </div>
            <div className="image_column">
              <div className="big_circular">

              </div>
              <div className="union_image_wrapper">
                <img src="/img/hands.png" alt="hands" className="union_img"/>
              </div>
            </div>
          </section>
          <section className="advantage">
            <div className="column_adv">
              <div className="adv_content">
                <div className="adv_image">
                  <img src="/img/people_emogi/1.svg" alt="" className="adv_img"/>
                </div>
                <div className="adv_title">
                  Вся работа в одном месте
                </div>
                <div className="adv_subtitle">
                  Благодаря расширенному функционалу приложения, вся работа происходит в одном месте, и вы больше не будете использовать сторонние программы
                </div>
              </div>
            </div>
            <div className="column_adv">
              <div className="adv_content">
                <div className="adv_image">
                  <img src="/img/people_emogi/2.svg" alt="" className="adv_img"/>
                </div>
                <div className="adv_title">
                  Простой в использовани
                </div>
                <div className="adv_subtitle">
                  Интуитивное расположение кнопок через которые вы сможете с полным  комфортом пользоваться приложением
                </div>
              </div>
            </div>
            <div className="column_adv">
              <div className="adv_content">
                <div className="adv_image">
                  <img src="/img/people_emogi/3.svg" alt="" className="adv_img"/>
                </div>
                <div className="adv_title">
                  Тарифный план
                </div>
                <div className="adv_subtitle">
                  Используйте уже готовый набор функционала или собери свой индивидуально. Получите уникальный тарифный план!
                </div>
              </div>
            </div>
          </section>
          <section className="tariff">
            <div className="section_title">
              <div>
                <div className="title tariff_title">
                  Тарифный план
                </div>
                <div className="subtitle tariff_subtitle">
                  Выберете правильный план для вашей работы!
                </div>
              </div>
              <a href="#">
                Подробнее
                <img src="/img/arrow.svg" alt="" className="section_arrow"/>
              </a>
            </div>
            <div className="tariffs_list">
              <div className="tariff_column">
                <div className="tariff_content">
                  <div className="tariff_content_title">
                    Бесплатно 🧢
                  </div>
                  <div className="tariff_subtitle">
                    Бесплатная версия даёт возможность прикоснуться к основному функционалу приложения
                  </div>
                  <ul className="tariff_advs">
                    <li className="tariff_adv">
                      <img src="/img/check.svg" alt="" className="img_tariff"/>
                      <div className="item_adv">
                        Выберете правильный план для вашей работы!
                      </div>
                    </li>
                    <li className="tariff_adv">
                      <img src="/img/check.svg" alt="" className="img_tariff"/>
                      <div className="item_adv">
                        Выберете правильный план для вашей работы!
                      </div>
                    </li>
                  </ul>
                  <div className="tariff_price">
                    <span className="rub">₽</span>
                    <span>0</span>
                    <span className="month">/мес</span>
                  </div>
                  <button className="tariff_btn btn">Выбрать</button>
                </div>
              </div>
              <div className="tariff_column">
                <div className="tariff_content student">
                  <div className="tariff_content_title  ">
                    Студенческая 🎓
                  </div>
                  <ul className="tariff_advs">
                    <li className="tariff_adv">
                      <img src="/img/check.svg" alt="" className="img_tariff"/>
                      <div className="item_adv">
                        Выберете правильный план для вашей работы!
                      </div>
                    </li>
                    <li className="tariff_adv">
                      <img src="/img/check.svg" alt="" className="img_tariff"/>
                      <div className="item_adv">
                        Выберете правильный план для вашей работы!
                      </div>
                    </li>
                    <li className="tariff_adv">
                      <img src="/img/check.svg" alt="" className="img_tariff"/>
                      <div className="item_adv">
                        Выберете правильный план для вашей работы!
                      </div>
                    </li>
                  </ul>
                  <div className="tariff_price">
                    <span className="rub">₽</span>
                    <span>99</span>
                    <span className="month">/мес</span>
                  </div>
                  <button className="tariff_btn btn">Выбрать</button>
                </div>
              </div>
              <div className="tariff_column">
                <div className="tariff_content">
                  <div className="tariff_content_title">
                    Семейная 👑
                  </div>
                  <ul className="tariff_advs">
                    <li className="tariff_adv">
                      <img src="/img/check.svg" alt="" className="img_tariff"/>
                      <div className="item_adv">
                        Выберете правильный план для вашей работы!
                      </div>
                    </li>
                    <li className="tariff_adv">
                      <img src="/img/check.svg" alt="" className="img_tariff"/>
                      <div className="item_adv">
                        Выберете правильный план для вашей работы!
                      </div>
                    </li>
                    <li className="tariff_adv">
                      <img src="/img/check.svg" alt="" className="img_tariff"/>
                      <div className="item_adv">
                        Выберете правильный план для вашей работы!
                      </div>
                    </li>
                  </ul>
                  <div className="tariff_price">
                    <span className="rub">₽</span>
                    <span>299</span>
                    <span className="month">/мес</span>
                  </div>
                  <button className="tariff_btn btn">Выбрать</button>
                </div>
              </div>
            </div>
          </section>
          <section className="team">
            <div className="section_title team_title">
              <div>
                <div className="title tariff_title">
                  Наша команда
                </div>
                <div className="subtitle tariff_subtitle">
                   Мы создаем для вас уникальный продукт!
                </div>
              </div>
              <a href="#">
                Подробнее
                <img src="/img/arrow.svg" alt="" className="section_arrow"/>
              </a>
            </div>
          </section>
          <section className="join">
            <div className="title join_title">
              Присоединяйтесь!
            </div>
            <div className="subtitle join_subtitle">
              Откройте для себя новое рабочее пространство!
            </div>
            <div className="join_input_wrapper input_wrapper">
              <input type="email" className="join_input mail_input" placeholder='example@mail.ru'/>
              <button className="join_btn input_btn btn">Начать!</button>
            </div>
          </section>
        </div>
        <footer className="footer">
          <div className="footer_container">
            <nav className="footer_nav">
              <div className="footer_image">
                <img src="/img/footer/footer.png" alt="" className="footer_img"/>
              </div>
              <ul className="footer_column">
                <li className="footer_column_title">
                  Меню
                </li>
                <li className="footer_item">
                  <a href="#" className="footer_link">Тарифы</a>
                </li>
                <li className="footer_item">
                  <a href="#" className="footer_link">Обучение</a>
                </li>
                <li className="footer_item">
                  <a href="#" className="footer_link">Магазин</a>
                </li>
                <li className="footer_item">
                  <a href="#" className="footer_link">Контакты</a>
                </li>
              </ul>
              <ul className="footer_column">
                <li className="footer_column_title">
                  Контакты
                </li>
                <li className="footer_item">
                  <a href="#" className="footer_link footer_link_img">8 (999) 423-28-14</a>
                </li>
                <li className="footer_item">
                  <a href="#" className="footer_link footer_link_img">efircalbe@gmail.com</a>
                </li>
              </ul>
              <ul className="footer_column">
                <li className="footer_column_title">
                  Компания
                </li>
                <li className="footer_item">
                  <a href="#" className="footer_link">О нас</a>
                </li>
                <li className="footer_item">
                  <a href="#" className="footer_link">Вакансии</a>
                </li>
                <li className="footer_item">
                  <a href="#" className="footer_link">Команда</a>
                </li>
                <li className="footer_item">
                  <a href="#" className="footer_link">Протокол</a>
                </li>
                <li className="footer_item">
                  <a href="#" className="footer_link">Служба поддержки</a>
                </li>
              </ul>
              <ul className="footer_column social_column">
                <a href="#" className="social_item">
                  <img src="/img/social/telegram.svg" alt="" className="social_img"/>
                </a>
                <a href="#" className="social_item">
                  <img src="/img/social/facebook.svg" alt="" className="social_img"/>
                </a>
                <a href="#" className="social_item">
                  <img src="/img/social/twitter.svg" alt="" className="social_img"/>
                </a>
              </ul>
            </nav>
            <div className="sub_footer">
              <div className="company_name">
                ООО “КОЛЛБИ”
              </div>
              <div className="country">
                <img src="/img/footer/flag.svg" alt="" className="flag_img"/>
                Рус
              </div>
            </div>
          </div>
        </footer>
      </div>

  );
}

export default App;
