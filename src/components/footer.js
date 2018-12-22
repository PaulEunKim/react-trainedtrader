
import React from 'react'
import styles from './footer.module.scss'

/* icons */
import experience from '../icon/experience.png'
import number from '../icon/number.png'
import profile from '../icon/profile.png'
import mail from '../icon/mail.png'
import marker from '../icon/marker.png'
import chains from '../icon/chains.png'
const link1 ='http://www.focuscolorado.net/news/articleView.html?idxno=18729';
const link2 = 'http://www.koreadaily.com/news/read.asp?art_id=5878040';
const link3 = 'http://dallasktn.com/index.php?mid=board_Vyos29&document_srl=2689';


const Footer = () => (
  <div>




    <div className={styles.profile}>
      <div className={styles.item1item1}>
        <img src={profile}></img>
      </div>
      <div className={styles.item1item2}>
        <b>Matt</b> Kang
        <div><span className={styles.item1item3}>NFA ID 0478163</span></div>
      </div>
    </div>


    <div className={styles.contact1}>


      <div className={styles.secondItem}>
        <img src={experience} className={styles.item3item1}>
        </img>
        <div className={styles.padding}>
          <div className={styles.content}>
            Futures/Forex Senior Representative
          </div>
          <div className={styles.subtitle}>
            Cannon Trading Company
          </div>
        </div>
      </div>

      <div className={styles.item4}>
        <div>
          <div className={styles.item4item1}><img src={number}></img></div>
        </div>
        <div>
          <div className={styles.item4item2text1}>310-859-9572</div>
        </div>
      </div>

      <div className={styles.item4}>
        <div className={styles.item4item1}><img src={mail}></img></div>
        <div className={styles.item4item2text2}>matt@cannontrading.com</div>
      </div>

    </div>

    <div className={styles.map}>

      <div className={styles.address}>
        <img src={marker} className={styles.item3item1}>
        </img>
        <div className={styles.padding}>
          <div className={styles.content}>
            9301 Wilshire Blvd. Suite #515<br/>
            Beverly Hills, CA 90210
          </div>
        </div>
      </div>

      <div className={styles.address}>
        <img src={chains} className={styles.item3item1}></img>
        <div className={styles.item4item1}>
          <div className={styles.linkHeader}><b>신문 인터뷰 기사들</b></div>
          <div className={styles.links}><a href={link1}>"2018년 돈 벌고 싶으세요?"</a></div>
          <div className={styles.links}><a href={link2}>"외환·선물 거래 등록된 전문가 확인을"</a></div>
          <div className={styles.links}><a href={link3}>“선물ㆍ외환은 ‘공인된 전문가’와 상담하세요”</a></div>
        </div>
      </div>

    </div>


    <div className={styles.disclosure}>
      Trading futures and options involves substantial risk of loss and is not suitable for all investors.  <br/>
      선물, 포렉스 및 옵션 투자는 손실 위험이 크며 모든 투자자에게 적합 하지 않을 수 있습니다. 
    </div>


  </div>

/* <Link to="/disclosure">Full Disclosure</Link>
<Link to="/disclosure">전체 위험 공시</Link> */
  //
  // <div className={styles.container}>
  //
  //   //item3

  //
  //   //item4

  // </div>
)

export default Footer
