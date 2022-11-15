import { ImLinkedin2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import NavLogo from "../../public/images/logos/nav-logo.png";
import QR from "../../public/images/qr.png";
import ArticleListImage from "../../public/images/article/articlelist1.png";

const Logo = NavLogo;
const QRCode = QR;
const CompanyNameEN = "Wenzhou Friendship Society";
const CompanyNameCH = "加拿大温州同乡会";
const FooterC1Title = "信息咨询";
const FooterC2Title = "活动分享";
const FooterC3Title = "文化园地";
const FooterC4Title = "同乡会介绍";
const FooterC5Title = "关注我们";
const FooterC6Title = "联系我们";
const BusinessHours = "营业时间: 周一至周五 9:00 - 18:00";
const PhoneNumber = "604-379-9888";
const FooterPhone = "服务热线:" + PhoneNumber;

const FooterC1MenuItems = [
  {
    Item: "同乡会动态",
    Link: "",
  },
  {
    Item: "加国新闻",
    Link: "",
  },
  {
    Item: "中国新闻",
    Link: "",
  },
  {
    Item: "BC信息板",
    Link: "",
  },
];

const FooterC2MenuItems = [
  {
    Item: "2020年活动",
    Link: "",
  },
  {
    Item: "2019年活动",
    Link: "",
  },
];

const FooterC3MenuItems = [
  {
    Item: "同乡文艺",
    Link: "",
  },
  {
    Item: "故乡温州",
    Link: "",
  },
];

const FooterC4MenuItems = [
  {
    Item: "同乡会简介",
    Link: "",
  },
  {
    Item: "现任理事会",
    Link: "",
  },
  {
    Item: "历届理事会",
    Link: "",
  },
];

const NavMenuItems = [
  {
    pName: "/",
    cName: "link",
    title: "首页",
    url: "/",
    href: "/",
  },
  {
    pName: "/information",
    title: "信息咨询",
    url: "/",
    href: "/information",
  },
  // {
  //   pName: "/services",
  //   title: "活动分享",
  //   url: "/",
  //   href: "/services",
  // },
  // {
  //   pName: "/projects",
  //   title: "文化园地",
  //   url: "/",
  //   href: "/projects",
  // },
  // {
  //   pName: "/contact",
  //   title: "同乡会介绍",
  //   url: "/",
  //   href: "/contact",
  // },
  // {
  //   pName: "/contact",
  //   title: "联系我们",
  //   url: "/",
  //   href: "/contact",
  // },
];

const ServiceItems = [
  {
    title: "加拿大温州同乡总会换届成立",
    caption:
      "“加拿大温州同乡总会”于2020年3月2日在本会会所进行了换届选举，第七届“加拿大温州同乡总会”换届成立。与会理事67人，朱建国先生以62票高票当选为温州同乡总会第七届会长，特此函告各界！",
    src: "images/news-preview/news1.png",
    alt: "temp",
    url: "/",
    href: "/",
  },
  {
    title: "加拿大温州同乡总会父老乡亲欢喜过大年",
    caption:
      "2019年2月4日，是中国农历除夕之夜，温州同乡总会三百多老乡，齐聚在列治文海港大酒店，举行春节团拜庆祝酒会，欢度2019年新春佳节。今年的春节团拜酒会分外热闹，同乡会不但预订了一桌桌上好的菜品，还打造了一台全部...",
    src: "images/news-preview/news2.png",
    alt: "temp",
    url: "/",
    href: "/",
  },
  {
    title: "加拿大温州同乡总会的姐妹们，国际女神节快乐！",
    caption:
      "加拿大温州同乡总会的姐妹们，国际女神节快乐！世界上若没有女人，这个世界至少要失去十分之五的真，十分之六的善，十分之七的美。 ———冰心三八妇女节，是国际上的惯用称呼，但在面对我们身边人的时候，我们...",
    src: "images/news-preview/news3.png",
    alt: "temp",
    url: "/",
    href: "/",
  },
];

const MenuItems = {
  FooterC1MenuItems: FooterC1MenuItems,
  FooterC2MenuItems: FooterC2MenuItems,
  FooterC3MenuItems: FooterC3MenuItems,
  FooterC4MenuItems: FooterC4MenuItems,

  NavMenuItems: NavMenuItems,
  ServiceItems: ServiceItems,

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
