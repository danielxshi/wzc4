import style from "../../styles/modules/_banner.module.scss";
import LargeLayout from "../layouts/LargeLayout";
import Image from "next/image";
import React, { Component } from "react";

class LargeContent extends Component {
  render() {
    let section = null,
      className = "";

    if (this.props.className !== undefined) {
      className = this.props.className;
    }

    section = (
      <LargeLayout>
        <div
          className={[
            style["small--content--container"],
            style[this.props.layoutStyle],
          ].join(" ")}
        >
          <div className="">
            <Image
              layout="intrinsic"
              objectFit="contain"
              src={this.props.imageSrc}
              alt={this.props.alt}
            ></Image>
          </div>
          <div>
            <div className={style["small--content--text--wrapper"]}>
              {this.props.children}
            </div>
          </div>
        </div>
      </LargeLayout>
    );

    return section;
  }
}

export default LargeContent;
