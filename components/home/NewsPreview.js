import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../organisms/sectionHeader";
import LargeLayout from "../layout/LargeLayout";
import style from "../../styles/modules/_banner.module.scss";
import MenuItems from "../JSON/ArticleMessages";

export default function Services(props) {
  return (
    <LargeLayout>
      <div className={style["opportunity--wrapper"]}>
        <SectionHeader header={"公告板"} />
        <div className="grid--spread ">
          {MenuItems.NewsPreviewItems.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-md w-1/3 h-auto relative shadow-md	"
              >
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <div className={style["image--cta"]}>
                    <Image
                      objectFit="cover"
                      layout="intrinsic"
                      src={item.src}
                      height={235}
                      width={419}
                      alt={item.alt}
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="max-w-fit flex text-base mt-2">
                    {item.caption}
                  </p>
                  <a
                    href={`/article/${item.id}`}
                    class="text-base text-center mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    了解详情
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </LargeLayout>
  );
}
