import Hero from "../../public/images/IMG_8355.JPG";
import style from "../../styles/modules/_header.module.scss";
import LargeLayout from "../layouts/LargeLayout";
import Image from "next/image";
import style2 from "../../styles/modules/_banner.module.scss";
import { AiFillFile } from "react-icons/ai";

export default function SelfIntro() {
  return (
    <div className="bg--primary--white">
      <LargeLayout>
        <div
          className={[
            style2["small--content--container"],
            style2["content--container"],
          ].join(" ")}
        >
          <div className={style2["image--link--container"]}>
            <div className="card--content">
              <Image
                layout="intrinsic"
                objectFit="contain"
                src={Hero}
                // alt={this.props.alt}
              ></Image>
            </div>
          </div>
          <div className="flex flex-col">
            <div className={style2["president--content--text--wrapper"]}>
              <div className={style2["presidient--text--content"]}>
                <div className={style2["content--block"]}>
                  <h5 className={style2["header"]}>加拿大温州同鄉總會 </h5>
                  <h5 className={style2["sub-head"]}>
                    Wenzhou Friendship Society Canada
                  </h5>
                </div>
                <div className={style2["content--block"]}>
                  <h5 className={style2["header"]}>加拿大温州商會 </h5>
                  <h5 className={style2["sub-head"]}>
                    Wenzhou Business Association Canada
                  </h5>
                </div>
                <div className={style2["content--block"]}>
                  <h5 className={style2["header"]}>
                    加拿大温州北美新生代俱乐部
                  </h5>
                  <h5 className={style2["sub-head"]}>
                    New Generation Club of North America, Wenzhou, Canada
                  </h5>
                </div>

                <div className={style2["president--label"]}>
                  <h5 className={style2["header"]}>朱建國會長</h5>
                  <h5 className={style2["sub-head"]}>Jianguo Zhu, President</h5>
                  <div className="flex flex-row-reverse">
                    <a
                      href="/contact"
                      className=" button-contact mb-4 text-base text-center mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      联系我们
                    </a>

                    <div className="button-pdf--wrapper">
                      <a
                        target="_blank"
                        href="/pdf/20230128 声明-中英文.pdf"
                        className="button-pdf mb-2 justify-center button-pdf text-base text-center mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        <AiFillFile /> &nbsp; 公开声明
                      </a>
                    </div>
                    <div className="button-pdf--wrapper">
                      <a
                        target="_blank"
                        href="/pdf/行为准则-中英文.pdf"
                        className="button-pdf mb-2 justify-center button-pdf text-base text-center mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        <AiFillFile /> &nbsp; 行为准则
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LargeLayout>
    </div>
  );
}
