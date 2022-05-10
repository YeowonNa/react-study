import "./Main.css";

function Main() {
  return (
    <>
      <div className="container">
        <div className="toWrap">
          <div className="main_wrap">
            <div className="main_wrap_inner">
              <div className="slogan">
                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Summer1_main_slogun.png"></img>
              </div>
              <div className="main_set">
                <div className="set_common set_01">
                  <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Summer1_main_rollinmint.png"></img>
                </div>
                <div className="set_common set_02">
                  <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Summer1_main_punchgraffiti3.png"></img>
                </div>
                <div className="set_common set_03">
                  <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Summer1_main_pomeloflow.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="line_notice">
          <div className="line_notice_left"></div>
          <div className="line_notice_right"></div>
          <div className="line_notice_bg">
            <div className="line_notice_bg_1">
              <div className="line_notice_inner">
                <d1 className="line_notice_inner_1">
                  <dt className="notice_ttl">
                    <img src="https://image.istarbucks.co.kr/common/img/common/notice_ttl.png" />
                  </dt>
                  <dd>
                    <ul>공지사항어쩌고저쩌고</ul>
                  </dd>
                </d1>
                <p className="line_notice_inner_r">
                  <span>
                    <a href="/"></a>
                  </span>
                </p>
              </div>
            </div>
            <div className="line_notice_bgr">
              <a href="/">
                <p className="prom_ttl">스타벅스 프로모션</p>
                <span className="btn_prom">
                  <img src="https://image.istarbucks.co.kr/common/img/common/btn_prom_down.png" />
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;
