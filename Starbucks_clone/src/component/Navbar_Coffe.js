import React from "react";
import styles from "./Navbar_Coffe.module.css";

function Navbar_Coffe() {
  return (
    <div className={styles.gnb_sub_wrap}>
      <div className={styles.gnb_sub}>
        <div className={styles.gnb_sub_inner}>
          <ul>
            <li>커피</li>
            <li>
              <a href="#">스타벅스 원두</a>
            </li>
            <li>
              <a href="#">스타벅스 비아</a>
            </li>
            <li>
              <a href="#">스타벅스앳홈 by 캡슐</a>
            </li>
          </ul>
          <ul>
            <li>나와 어울리는 커피</li>
          </ul>
          <ul>
            <li>스타벅스 리저브™</li>
            <li>
              <a href="#">RESERVE MAGAZINE</a>
            </li>
          </ul>
          <ul>
            <li className={styles.gnb_sub_ttl}>에스프레소 음료</li>
            <li>
              <a href="#">도피오</a>
            </li>
            <li>
              <a href="#">에스프레소 마키아또</a>
            </li>
            <li>
              <a href="#">아메리카노</a>
            </li>
            <li>
              <a href="#">카푸치노</a>
            </li>
            <li>
              <a href="#">라떼</a>
            </li>
            <li>
              <a href="#">모카</a>
            </li>
          </ul>
          <ul className={styles.gnb_sub_ttl_2}>
            <li>최상의 커피를 즐기는 법</li>
            <li>
              <a href="#">커피 프레스</a>
            </li>
            <li>
              <a href="#">푸어 오버</a>
            </li>
            <li>
              <a href="#">아이스 푸어 오버</a>
            </li>
            <li>
              <a href="#">커피 메이커</a>
            </li>
            <li>
              <a href="#">리저브를 매장에서 다양하게 즐기는 법</a>
            </li>
          </ul>
          <ul style={{ paddingTop: "30px" }}>
            <li>커피 이야기</li>
            <li>
              <a href="#">농장에서 우리의 손으로</a>
            </li>
            <li>
              <a href="#">최상의 아라비카 원두</a>
            </li>
            <li>
              <a href="#">스타벅스 로스트 스펙트럼</a>
            </li>
            <li>
              <a href="#">스타벅스 디카페인</a>
            </li>
            <li>
              <a href="#">클로버® 커피 추출 시스템</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar_Coffe;
