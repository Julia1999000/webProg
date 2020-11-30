import React from "react";

const Footer_main = () => {
  return (
    <div className="footer_in">
      <div className="in_button"></div>
      <div className="in_social">
        <div className="social_button">
          <a href="">ТАКЖЕ МЫ</a>
        </div>
        <div className="social_in">
          <div className="in_box">
            <div className="box_instagram">
              <a
                href="https://www.instagram.com/blog_games/"
                className="link_soc"
              ></a>
            </div>

            <div className="box_twitter">
              <a
                href="https://twitter.com/games_news_"
                className="link_soc"
              ></a>
            </div>

            <div className="box_vk">
              <a href="https://vk.com/gamelnews" className="link_soc"></a>
            </div>

            <div className="box_facebook">
              <a
                href="https://ru-ru.facebook.com/FacebookGaming"
                className="link_soc"
              ></a>
            </div>

            <div className="box_telega">
              <a
                href="https://tlgrm.ru/channels/gaming"
                className="link_soc"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer_main;
