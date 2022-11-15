import NavLogo from "../../public/images/logos/nav-logo.png";
import testImage from "../../public/images/article/card1.png";
import sponsorImage1 from "../../public/images/article/sponsor1.png";
import ArticleListImage1 from "../../public/images/article/articlelist1.png"

const dummyText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus consequuntur asperiores necessitatibus, expedita perferendis maxime praesentium? Error, quaerat distinctio? Vel, magni optio maxime ea doloribus repudiandae eaque perferendis dolor facilis!";

const ArticleItems = [
  {
    Category: "Events"[
      ({
        ArticleID: "1",
        ArticleTitle: "Title",
        ArticleTextPreview: "text",
        date: "date"[
          {
            ContentID: "1",
            ContentType: "image"[
              {
                ArticleContent: {
                  Text: dummyText,
                  Image: NavLogo,
                },
              }
            ],
          }
        ],
      },
      {
        ArticleID: "2",
        ArticleTitle: "Title",
        ArticleTextPreview: "text",
        date: "date"[
          {
            ContentID: "1",
            ContentType: "image"[
              {
                ArticleContent: {
                  Text: dummyText,
                  Image: NavLogo,
                },
              }
            ],
          }
        ],
      })
    ],
  },
  {
    Category: "Culture"[
      {
        ArticleID: "1",
        ArticleTitle: "Title",
        ArticleTextPreview: "text",
        date: "date"[
          {
            ContentID: "1",
            ContentType: "image"[
              {
                ArticleContent: {
                  Text: dummyText,
                  Image: NavLogo,
                },
              }
            ],
          }
        ],
      }
    ],
  },
];

// Refactor later

const date = "2022-04-12";

const BigNews = [
  {
    Key: 1,
    Title: "粽情端午",
    TextPreview:
      "端午临中夏，千载吉运长，良辰榴花美，丰福九天祥。加拿大温州同乡总会的各位会长、理事、会员大家好！端午佳节来临之际，加拿大温州同乡总会祝乡亲们———身体“粽”是健康，家庭“粽”是美满，爱情“粽”是如糖，...",
    Text: "端午临中夏，千载吉运长，良辰榴花美，丰福九天祥。加拿大温州同乡总会的各位会长、理事、会员大家好！端午佳节来临之际，加拿大温州同乡总会祝乡亲们———身体“粽”是健康，家庭“粽”是美满，爱情“粽”是如糖，...",
    date: date,
    // Image: testImage,
    URL: "/",
  },
];

const CurrentEvents = [
  {
    Key: 2,
    Title: "北美新⽣代创业俱乐部⾸次⻅⾯会圆满举⾏",
    TextPreview: "",
    Text: dummyText,
    date: date,
    // Image: NavLogo,
    URL: "/",
  },
  {
    Key: 3,
    Title: "“浙里有爱·四海迎春”新春慰侨活动 - 温哥华站启动仪式成功举办",
    TextPreview: "",
    Text: dummyText,
    date: date,
    // Image: NavLogo,
    URL: "/",
  },
  {
    Key: 4,
    Title: "加拿大溫州同乡总会在社交媒体上发起了为卑诗省洪水灾民募捐活动",
    TextPreview: "",
    Text: dummyText,
    date: date,
    // Image: NavLogo,
    URL: "/",
  },
  {
    Key: 5,
    Title: "加拿大溫州同乡总会在社交媒体上发起了为卑诗省洪水灾民募捐活动",
    TextPreview: "",
    Text: dummyText,
    date: date,
    Image: NavLogo,
    URL: "/",
  },
];

const SponsoredNews = [
  {
    Key: 1,
    Title: "加拿大華裔投票促進會「就差你一票」街頭促票活動",
    TextPreview: "",
    Text: dummyText,
    date: date,
    // Image: sponsorImage1,
    URL: "/",
  },
  {
    Key: 2,
    Title: "北美新⽣代创业俱乐部⾸次⻅⾯会圆满举⾏",
    TextPreview: "",
    Text: dummyText,
    date: date,
    // Image: sponsorImage1,
    URL: "/",
  },
  {
    Key: 3,
    Title: "“浙里有爱·四海迎春”新春慰侨活动 - 温哥华站启动仪式成功举办",
    TextPreview: "",
    Text: dummyText,
    date: date,
    // Image: sponsorImage1,
    URL: "/",
  },
  {
    Key: 4,
    Title: "加拿大溫州同乡总会在社交媒体上发起了为卑诗省洪水灾民募捐活动",
    TextPreview: "",
    Text: dummyText,
    date: date,
    // Image: sponsorImage1,
    URL: "/",
  },
  {
    Key: 5,
    Title: "加拿大溫州同乡总会在社交媒体上发起了为卑诗省洪水灾民募捐活动",
    TextPreview: "",
    Text: dummyText,
    date: date,
    // Image: sponsorImage1,
    URL: "/",
  },
];

const ArticleListItems = [
  {
    Key: 1,
    Title: "粽情端午",
    TextPreview: "端午临中夏，千载吉运长，良辰榴花美，丰福九天祥。加拿大温州同乡总会的各位会长、理事、会员大家好！端午佳节来临之际，加拿大温州同乡总会祝乡亲们———身体“粽”是健康，家庭“粽”是美满，爱情“粽”是如糖，...",
    Text: dummyText,
    date: date,
    // Image: sponsorImage1,
    URL: "/ArticleDetail",
  },
];

const SampleArticleOne = [
  {
    ArticleID: "1",
    ArticleTitle: "Title",
    ArticleTextPreview: "text",
    date: "date",
    ArticleContentText: "",
    ArticleContentImage: ""
  }
]

const Articles = {
  ArticleItems: ArticleItems,
  ArticleListItems: ArticleListItems,
  SampleArticleOne: SampleArticleOne,
  CurrentEvents: CurrentEvents,
  BigNews: BigNews,
  testImage: testImage,
  ArticleListImage1: ArticleListImage1,
  sponsorImage1: sponsorImage1,
  SponsoredNews: SponsoredNews,
};

export default Articles;
