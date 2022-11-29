import { BrowserView, MobileView } from "react-device-detect";

const DeviceDetector = ({ children }) => (
  <>
    <BrowserView>{children}</BrowserView>
    <MobileView>
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="contant_box_404">
                  <h3 class="h2">看起来像迷路了</h3>

                  <p>你所寻找的移动网页是不存在的!</p>

                  {/* <a href="" class="link_404">
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
