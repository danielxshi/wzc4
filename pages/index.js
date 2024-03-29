import style from "../styles/modules/_landing.module.scss";
import Link from "next/link";
import Image from "next/image";
import MenuItems from "../components/JSON/LandingMenuItems";
import Carousel from "react-bootstrap/Carousel";
import buttonStyle from "../styles/modules/_button.module.scss";
import ImageWithFallback from "../components/ImageWithFallBack";

function LandingDesktop() {
  return (
    <section
      class={[
        style["container"],
        style["media-query--desktop"],
        style["landing--desktop"],
      ].join(" ")}
    >
      <Carousel className={style["carousel--desktop"]}>
        {MenuItems.LandingCarousel.map((item, index) => {
          return (
            <Carousel.Item key={index} className={style[""]}>
              <div className={style["carousel-item--custom"]}>
                <ImageWithFallback
                  className="d-block w-100 h-100"
                  src={item.src}
                  fallbackSrc={item.fallback}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <div className={style["overlay"]}></div>

      <div className={style["logo--container--wrapper"]}>
        <div className={style["logo--container"]}>
          <Image
            objectFit="contain"
            layout="fill"
            src="/images/logos/white-logo.png"
            priority
            className={style["logo"]}
          />
        </div>
      </div>

      <div className={style["topbar"]}>
        <ul>
          {MenuItems.LandingTopBar.map((item, index) => {
            return (
              <div key={index} className={style["topbar--item--container"]}>
                <span>{item.title} :</span>
                <div className={style["item--container"]}>
                  <li className="text--shadow">{item.item}</li>
                  <li className="text--shadow">{item.item2}</li>
                </div>
              </div>
            );
          })}
        </ul>
      </div>

      <div className={style["content"]}>
        <div className={style["primary-nav--wrapper"]}>
          <div className={style["header--wrapper"]}>
            <h1 className="text--shadow ">加拿大温州同乡总会</h1>
            <span className="text--shadow text-center">
              团结、互助、携手、共进
            </span>
          </div>

          <nav>
            <ul className={style["menu"]}>
              {MenuItems.MenuItems.map((item, index) => {
                return (
                  <li className={buttonStyle["text--underline--buton"]}>
                    <Link href={item.link}>
                      <a className="text--shadow whitespace-nowrap" href="">
                        {item.title}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

function MobileLanding() {
  return (
    <section
      className={[style["h-screen]"], style["media-query--mobile"]].join(" ")}
    >
      <Carousel className={style["carousel--mobile"]}>
        {MenuItems.LandingCarousel.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <div className={style["carousel-item--custom"]}>
                <ImageWithFallback
                  fallbackSrc={item.fallback}
                  layout="fill"
                  className="d-block w-100 h-100"
                  src={item.src}
                  alt={item.alt}
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <div className={style["overlay"]}></div>

      <div className={style["logo--container--wrapper"]}>
        <div className={style["logo--container"]}>
          <Image
            objectFit="contain"
            layout="fill"
            src="/images/logos/white-logo.png"
            priority
            className={style["logo"]}
          />
        </div>
      </div>

      <div className={style["mobile--header--wrapper"]}>
        <h1 className="text--shadow ">加拿大温州同乡总会</h1>
        <span className="text--shadow text-center">团结、互助、携手、共进</span>
      </div>
    </section>
  );
}

function LandingNav() {
  return (
    <section className="h-max media-query--mobile">
      <ul className="gallery gallery__content--flow">
        {MenuItems.MenuItems.map((item, index) => {
          return (
            <Link href={item.link}>
              <figure key={index}>
                <Image
                  objectFit="cover"
                  layout="fill"
                  src={item.src}
                  alt={item.alt}
                  priority
                  className={style["logo"]}
                />
                <figcaption className="header__caption" role="presentation">
                  <h4 className="title title--primary">{item.title}</h4>
                </figcaption>
                <div className="layer"></div>
              </figure>
            </Link>
          );
        })}
      </ul>
    </section>
  );
}

export default function Landing() {
  return (
    <div className={style["landing--main"]}>
      <LandingDesktop />
      <MobileLanding />
      <LandingNav />
    </div>
  );
}
