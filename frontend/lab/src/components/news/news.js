import React from "react";

const News_main = () => {
  return (
    <>
      <div className="block_text">
        <b>ГЕЙМПЛЕЙ WATCH DOGS: LEGION НА XBOX SERIES X С ТРАССИРОВКОЙ ЛУЧЕЙ</b>
        <p>
          Watch Dogs: Legion уже доступна на PC и приставках текущего поколения,
          однако приверженцам консольного гейминга, собирающимся перейти на
          некстген, есть смысл дождаться соответствующей версии игры. Ведь
          PlayStation 5 и Xbox Series похвастают более технологичной картинкой.
        </p>
        <p>
          Красоты некстгена Ubisoft демонстрирует в геймплее Legion на Xbox
          Series X, где игра использует трассировку лучей, работая в разрешении
          4K при 30 fps. Ещё упоминаются быстрые загрузки, а также повышенная
          проработка текстур, кубических карт, теней, технологий рендеринга и
          детализации объектов.
        </p>
        <p>
          На Xbox Series игра выйдет в день релиза консоли — 10 ноября. Legion
          включена и в стартовую линейку PS5, а значит, появится там 12 ноября.
          Бесплатный апгрейд предусмотрен на обоих семействах приставок
        </p>
        <iframe
          width="100%"
          height="350px"
          src="https://www.youtube.com/embed/fn_JrXerhUg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="news_block">
        <div className="wrap_top">Игра за новости:</div>
        <div className="wrap_bottom">
          <div className="bottom_left">
            <img
              src="https://images.stopgame.ru/games/2019/06/11/O3O50L882.jpg"
              alt="..."
            />
          </div>
          <div className="bottom_right">
            <div className="right_title">watch Dogs: Legion</div>
            <div className="right_description">
              Платформа
              <a href="">PC</a>
              <a href="">PS4</a>
              <a href="">PS5</a>
              <a href="">Stadia</a>
              <a href="">XBOXSX</a>
              <a href="">XONE</a>
              <br />
              <br />
              Жанр:
              <a href="">action</a>
            </div>
            <div className="right_data">Дата выхода: 29 октября 2020 г.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News_main;
