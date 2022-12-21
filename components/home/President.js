import Hero from "../../public/images/IMG_8355.JPG";
import style from "../../styles/modules/_header.module.scss";
import LargeLayout from "../layouts/LargeLayout";
import Image from "next/image";
import style2 from "../../styles/modules/_banner.module.scss";

export default function SelfIntro() {
  return (
    <div className="bg--primary--white">
      <LargeLayout>
        <div
          className={[
            style2["small--content--container"], style2["content--container"]
            // style2[this.props.layoutStyle],
          ].join(" ")}
        >
          <div className={style2["image--link--container"]}>
            <div className="card--cta">
              <div className="cta--link">
                {/* <a href="#" class="btn btn-default" role="button">
                  Lets Go!
                </a> */}
              </div>
            </div>
            <div className="card--content">
              <Image
                layout="intrinsic"
                objectFit="contain"
                src={Hero}
                // alt={this.props.alt}
              ></Image>
            </div>
          </div>
          <div>
            <div className={style2["small--content--text--wrapper"]}>
              <div className={style2["presidient--text--content"]}>
                <div>
                  <h5 className={style2["header"]}>朱建國會長</h5>
                  <h5 className={style2["sub-head"]}>Jianguo Zhu, President</h5>
                </div>
                <div>
                  <h5 className={style2["header"]}>加拿大温州商會 </h5>
                  <h5 className={style2["sub-head"]}>
                    Wenzhou Business Association Canada
                  </h5>
                </div>

                <div>
                  <h5 className={style2["header"]}>加拿大温州同鄉總會 </h5>
                  <h5 className={style2["sub-head"]}>Wenzhou Friendship Society Canada</h5>
                </div>

                <div>
                  <h5 className={style2["header"]}>國結 五助務事共進</h5>
                  <h5 className={style2["sub-head"]}>Shared Progress, Shared Success!</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LargeLayout>
    </div>
  );
}
