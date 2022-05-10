import styles from "./Main.module.css";

function Main() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.toWrap}>
          <div className={styles.main_wrap}>
            <div className={styles.main_wrap_inner}>
              <div className={styles.slogan}>
                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Summer1_main_slogun.png"></img>
              </div>
              <div className={styles.main_set}>
                <div className={styles.set_01}>
                  <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Summer1_main_rollinmint.png"></img>
                </div>
                <div className={styles.set_02}>
                  <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Summer1_main_punchgraffiti3.png"></img>
                </div>
                <div className={styles.set_03}>
                  <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Summer1_main_pomeloflow.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.line_notice}>
          <div className={styles.line_notice_left}></div>
          <div className={styles.line_notice_right}></div>
          <div className={styles.line_notice_bg}>
            <div className={styles.line_notice_bg_1}>
              <div className={styles.line_notice_inner}>
                <d1 className={styles.line_notice_inner_1}>
                  <dt className={styles.notice_ttl}>
                    <img src="https://image.istarbucks.co.kr/common/img/common/notice_ttl.png" />
                  </dt>
                  <dd>
                    <ul>공지사항어쩌고저쩌고</ul>
                  </dd>
                </d1>
                <p className={styles.line_notice_inner_r}>
                  <span>
                    <a href="/"></a>
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.line_notice_bgr}>
              <a href="/">
                <p className={styles.prom_ttl}>스타벅스 프로모션</p>
                <span className={styles.btn_prom}>
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
