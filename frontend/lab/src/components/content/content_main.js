import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Content_main extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <div className="content_in">
        <div className="in_box">
          <div className="box_top">
            <div className="top_img">
              <a href="" className="img_link">
                <img
                  src="https://i.pinimg.com/originals/57/eb/a9/57eba9d157d5a5f497ba85c9b1f8aa8b.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="top_title">
              <a href="" className="title_link">
                ГЕЙМПЛЕЙ WATCH DOGS: LEGION НА XBOX SERIES X С ТРАССИРОВКОЙ
                ЛУЧЕЙ
              </a>
            </div>
          </div>
          <div className="box_bottom">
            <div className="bottom_description">
              Watch Dogs: Legion уже доступна на PC и приставках текущего
              поколения, однако приверженцам консольного гейминга, собирающимся
              перейти на некстген, есть смысл дождаться соответствующей версии
              игры. Ведь PlayStation 5 и Xbox Series похвастают более
              технологичной картинкой.
            </div>
            <div className="bottom_button">
              <Link to="/news" className="button_link">
                Читать далее
              </Link>
            </div>
          </div>
        </div>

        <div className="in_box">
          <div className="box_top">
            <div className="top_img">
              <a href="" className="img_link">
                <img
                  src="https://pbs.twimg.com/media/Elm-s8QX0AAnr4Z.jpg:large"
                  alt=""
                />
              </a>
            </div>
            <div className="top_title">
              <a href="" className="title_link">
                ВЫШЛА БЕТА-ВЕРСИЯ BLACK MESA DEFINITIVE EDITION, УЛУЧШАЮЩАЯ
                ГЕЙМПЛЕЙ И ГРАФИКУ
              </a>
            </div>
          </div>
          <div className="box_bottom">
            <div className="bottom_description">
              Black Mesa вышла из раннего доступа в марте, однако это не значит,
              что работа над игрой закончена. Студия Crowbar Collective
              выпустила открытую бета-версию Definitive Edition — обновления
              1.5, которое улучшает геймплей и графику, а также вносит множество
              точечных исправлений.
            </div>
            <div className="bottom_button">
              <Link to="/news" className="button_link">
                Читать далее
              </Link>
            </div>
          </div>
        </div>

        <div className="in_box">
          <div className="box_top">
            <div className="top_img">
              <a href="" className="img_link">
                <img
                  src="https://i.playground.ru/p/X8wVXRQSPwPm1CUTEEL6zA.jpeg"
                  alt=""
                />
              </a>
            </div>
            <div className="top_title">
              <a href="" className="title_link">
                ЭКШЕН PRAEY FOR THE GODS, ПОХОЖИЙ НА SHADOW OF THE COLOSSUS,
                ВЫЙДЕТ НА XB1, PS4 И PS5 В НАЧАЛЕ 2021-ГО
              </a>
            </div>
          </div>
          <div className="box_bottom">
            <div className="bottom_description">
              Приключенческий боевик Praey for the Gods томится в раннем доступе
              на PC с начала 2019-го. Коллектив No Matter Studios, состоящий
              всего из трёх сотрудников, медленно, но верно ведёт свой проект к
              финишной черте — в первом квартале 2021-го игра дорастёт до версии
              1.0 и выйдет на обоих поколениях PlayStation, а также на Xbox One.
            </div>
            <div className="bottom_button">
              <Link to="/news" className="button_link">
                Читать далее
              </Link>
            </div>
          </div>
        </div>

        <div className="in_box">
          <div className="box_top">
            <div className="top_img">
              <a href="" className="img_link">
                <img
                  src="https://i.playground.ru/p/DypJ8ZXnSnEAc3uJWmZeeQ.jpeg"
                  alt=""
                />
              </a>
            </div>
            <div className="top_title">
              <a href="" className="title_link">
                ТОДД ГОВАРД: ТРУДНО ПРЕДСТАВИТЬ, ЧТО MICROSOFT ПОМЕШАЕТ THE
                ELDER SCROLLS VI ВЫЙТИ НА PLAYSTATION
              </a>
            </div>
          </div>
          <div className="box_bottom">
            <div className="bottom_description">
              Компания ZeniMax (и, соответственно, Bethesda) становится частью
              семейства Microsoft. В воздухе висят животрепещущие вопросы:
              например, значит ли это, что все последующие игры Bethesda,
              включая Starfield и The Elder Scrolls VI, окажутся эксклюзивом
              платформ Microsoft? Тодд Говард (Todd Howard) коснулся этой темы в
              интервью GamesIndustry.biz.
            </div>
            <div className="bottom_button">
              <Link to="/news" className="button_link">
                Читать далее
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
