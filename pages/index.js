import style from "../styles/modules/_landing.module.scss";
import Link from "next/link";
import Image from "next/image";
import MenuItems from "../components/JSON/LandingMenuItems";
import Carousel from "react-bootstrap/Carousel";
// import logo from "../public/images/logos/white-logo.png"

// Desktop version
// !TODO
// Port both mobile and desktop and switch between two with media queries
// Device detect

// !TODO
// Create a mobile and desktop template class>>>?

function LandingDesktop() {
  return (
    <section
      class={[style["container"], style["media-query--desktop"]].join(" ")}
    >
      <div className={style["overlay"]}></div>
      {/* Placeholder import Logo */}
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

      {/* Desktop top bar */}
      <div className={style["topbar"]}>
        <ul>
          {MenuItems.LandingTopBar.map((item, index) => {
            return (
              <div className={style["topbar--item--container"]}>
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
      {/* End of desktop */}

      <div className={style["content"]}>
        {/* Desktop nav */}
        <div className={style["primary-nav--wrapper"]}>
          {/* Header */}
          <div className={style["header--wrapper"]}>
            <h1 className="text--shadow ">加拿大温州同乡总会</h1>
            <span className="text--shadow text-4xl">团结、互助、携手、共进</span>
          </div>
          {/* Nav Items */}
          <nav>
            <ul className={style["menu"]}>
              {MenuItems.MenuItems.map((item, index) => {
                return (
                  <li>
                    <Link href={item.link}>
                      <a className="text--shadow text-2xl whitespace-nowrap" href="">{item.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        {/* End of desktop export */}

        {/* Mobile only */}
        {/* Carousel */}

        {/* Mobile image menu items (5) */}
      </div>
    </section>
  );
}

function UncontrolledExample() {
  return (
    <section className="h-screen media-query--mobile">
      <Carousel>
        <Carousel.Item className="h-screen">
          <img
            className="carousel--img--container d-block h-100"
            src="/images/istockphoto-642809794-2048x2048.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text--shadow">2021活动</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="h-screen">
          <img
            className="carousel--img--container d-block h-100"
            src="/images/hero2.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text--shadow">2022活动</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="h-screen">
          <img
            className="carousel--img--container d-block h-100"
            src="/images/istockphoto-583807614-2048x2048.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text--shadow">2021活动</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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
                  height={144}
                  width={144}
                  priority
                  className={style["logo"]}
                />
                <figcaption class="header__caption" role="presentation">
                  <h4 class="title title--primary">{item.title}</h4>
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
      <UncontrolledExample />

      <LandingNav />
    </div>
  );
}
