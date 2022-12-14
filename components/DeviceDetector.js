import { BrowserView, MobileView } from "react-device-detect";

const DeviceDetector = ({ children }) => (
  <>
    <BrowserView>{children}</BrowserView>
    <MobileView>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3>看起来像迷路了</h3>

                  <p>你所寻找的移动网页是不存在的!</p>

                  {/* <a href="" className="link_404">
                    Go to Home
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MobileView>
  </>
);

export default DeviceDetector;
