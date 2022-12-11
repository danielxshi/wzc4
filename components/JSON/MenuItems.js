import { ImLinkedin2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import NavLogo from "../../public/images/logos/nav-logo.png";
import QR from "../../public/images/qr.png";
import ArticleListImage from "../../public/images/article/articlelist1.png";

const Logo = NavLogo;
const QRCode = QR;
const CompanyNameEN = "Wenzhou Friendship Society";
const CompanyNameCH = "加拿大温州同乡总会";
const FooterC1Title = "信息咨询";
const FooterC2Title = "活动分享";
const FooterC3Title = "文化园地";
const FooterC4Title = "同乡会介绍";
const FooterC5Title = "关注我们";
const FooterC6Title = "联系我们";
const BusinessHours = "营业时间: 周一至周五 9:00 - 18:00";
const PhoneNumber = "604-379-9888";
const FooterPhone = "服务热线: " + PhoneNumber;

const FooterC1MenuItems = [
  {
    Item: "家乡协会",
    Link: "/info/association",
  },
  {
    Item: "加拿大新闻",
    Link: "/info/canada",
  },
  {
    Item: "中国新闻",
    Link: "/info/china",
  },
  {
    Item: "当地生活信息",
    Link: "/info/local",
  },
];

const FooterC2MenuItems = [
  // {
  //   Item: "2022年活动",
  //   Link: "",
  // },
  // {
  //   Item: "2021年活动",
  //   Link: "",
  // },
  {
    Item: "2020年活动",
    Link: "/events/Events2020",
  },
  {
    Item: "2019年活动",
    Link: "/events/Events2019",
  },
];

const FooterC3MenuItems = [
  {
    Item: "同乡文艺",
    Link: "/culture/art",
  },
  {
    Item: "故乡温州",
    Link: "/culture/wenzhou",
  },
];

const FooterC4MenuItems = [
  {
    Item: "同乡会简介",
    Link: "/about/council",
  },
];

/*---- Side Nav ----*/
const InfoSideNav = [
  {
    subtitle: "家乡协会",
    url: "/info/association",
  },
  {
    subtitle: "加拿大新闻",
    url: "/info/canada",
  },
  {
    subtitle: "中国新闻",
    url: "/info/china",
  },

  {
    subtitle: "当地生活信息",
    url: "/info/local",
  },
];

const EventSideNav = [
  {
    subtitle: "2020年活动",
    url: "/events/Events2020",
  },

  {
    subtitle: "2019年活动",
    url: "/events/Events2019",
  },
];

const CultureSideNav = [
  {
    subtitle: "家乡的艺术和文化",
    url: "/culture/art",
  },
  {
    subtitle: "家乡温州",
    url: "/culture/wenzhou",
  },
];

// Cultural Park side nav
const SideNavMenuItems = [
  {
    culture: [
      {
        subtitle: "家乡的艺术和文化",
        url: "/culture/art",
      },
      {
        subtitle: "家乡温州",
        url: "/culture/wenzhou",
      },
    ],
  },
  {
    events: [
      {
        subtitle: "2020年活动",
        url: "/events/Events2020",
      },

      {
        subtitle: "2019年活动",
        url: "/events/Events2019",
      },
    ],
  },
  {
    info: [
      {
        subtitle: "家乡协会",
        url: "/info/association",
      },
      {
        subtitle: "加拿大新闻",
        url: "/info/canada",
      },
      {
        subtitle: "中国新闻",
        url: "/info/china",
      },

      {
        subtitle: "当地生活信息",
        url: "/info/local",
      },
    ],
  },
];

// Desktop menu
const NavMenuItems2 = [
  {
    menu: [
      {
        title: "首页",
        url: "/",
        id: 1,
        submenu: [],
      },
      {
        title: "信息咨询",
        url: "/about/council",
        submenu: [],
      },
      {
        title: "活动分享",
        id: 2,
        url: "/info/information",
        p1: "/info/association",
        p2: "/info/canada",
        p3: "/info/china",
        p4: "/info/local",
        submenu: [
          {
            subtitle: "家乡协会",
            url: "/info/association",
          },
          {
            subtitle: "加拿大新闻",
            url: "/info/canada",
          },
          {
            subtitle: "中国新闻",
            url: "/info/china",
          },

          {
            subtitle: "当地生活信息",
            url: "/info/local",
          },
        ],
      },
      {
        title: "活动分享",
        id: 3,
        url: "/events/events",
        p1: "/events/Events2022",
        p2: "/events/Events2021",
        p3: "/events/Events2020",
        p4: "/events/Events2019",
        submenu: [
          // {
          //   subtitle: "2022年活动",
          //   url: "/",
          // },
          // {
          //   subtitle: "2021年活动",
          //   url: "/",
          // },
          {
            subtitle: "2020年活动",
            url: "/events/Events2020",
          },

          {
            subtitle: "2019年活动",
            url: "/events/Events2019",
          },
        ],
      },
      {
        title: "文化园地",
        id: 4,
        url: "/culture/CulturalPark",
        p1: "/culture/art",
        p2: "/culture/wenzhou",
        submenu: [
          {
            subtitle: "家乡的艺术和文化",
            url: "/culture/art",
          },
          {
            subtitle: "家乡温州",
            url: "/culture/wenzhou",
          },
        ],
      },
      {
        title: "联系我们",
        id: 5,
        url: "/contact",
        submenu: [],
      },
    ],
  },
];

// Mobile menu
const NavMenuItems = [
  {
    // Home
    // pName: "/",
    cName: "link",
    title: "首页",
    url: "/",
    href: "/",
  },
  {
    // About
    // pName: "/information",
    title: "信息咨询",
    url: "/about/council",
    submenu: [
      {
        title: "董事",
        url: "/directors",
      },

      {
        title: "家乡协会简介",
        url: "/",
      },
    ],
  },
  {
    // Information
    // pName: "/information",
    title: "活动分享",
    url: "/info/information",
    submenu: [
      {
        title: "家乡协会",
        url: "",
      },

      {
        title: "加拿大新闻",
        url: "",
      },
      {
        title: "中国新闻",
        url: "",
      },

      {
        title: "当地生活信息",
        url: "",
      },
    ],
  },
  {
    // events
    // pName: "/events",
    title: "文化园地",
    url: "/events/events",
    submenu: [
      {
        title: "2022年活动",
        url: "",
      },
      {
        title: "2021年活动",
        url: "",
      },
      {
        title: "2020年活动",
        url: "",
      },
      {
        title: "2019年活动",
        url: "/events/Events2019",
      },
    ],
  },
  {
    // culture
    // pName: "/culture",
    title: "同乡会介绍",
    url: "/culture/CulturalPark",
    submenu: [
      {
        title: "家乡的艺术和文化",
        url: "",
      },

      {
        title: "家乡温州",
        url: "",
      },
    ],
  },
  {
    // pName: "/contact",
    title: "联系我们",
    url: "/contact",
  },
];

const DayTwoItems = [
  {
    test: [
      {
        title: "Title A",
        // desc: "During the preliminary presentations, teams will compete in their divisions for 1 of 5 spots in the finals",
        // time: "10:10",
        fulldesc: "A",
      },
      {
        title: "Title B",
        // desc: "Finalists for each division will be announced at the begining of the Finals Presentations",
        // time: "12:20",
        fulldesc: "B",
      },
      {
        title: "Title C",
        // desc: "",
        // time: "2:00",
        fulldesc: "",
      },
      {
        title: "Title D",
        // desc: "A celebration and wrap up to PIVOT 2022",
        // time: "2:10",
        fulldesc: "D",
      },
    ],
  },
];

const MenuItems = {
  DayTwoItems: DayTwoItems,

  FooterC1MenuItems: FooterC1MenuItems,
  FooterC2MenuItems: FooterC2MenuItems,
  FooterC3MenuItems: FooterC3MenuItems,
  FooterC4MenuItems: FooterC4MenuItems,

  NavMenuItems: NavMenuItems,
  NavMenuItems2: NavMenuItems2,

  SideNavMenuItems: SideNavMenuItems,
  InfoSideNav: InfoSideNav,
  EventSideNav: EventSideNav,
  CultureSideNav: CultureSideNav,

  CompanyNameCH: CompanyNameCH,
  CompanyNameEN: CompanyNameEN,

  Logo: Logo,
  QRCode: QRCode,

  PhoneNumber: PhoneNumber,
  BusinessHours: BusinessHours,
  FooterPhone: FooterPhone,
  FooterC1Title: FooterC1Title,
  FooterC2Title: FooterC2Title,
  FooterC3Title: FooterC3Title,
  FooterC4Title: FooterC4Title,
  FooterC5Title: FooterC5Title,
  FooterC6Title: FooterC6Title,
};

export default MenuItems;
