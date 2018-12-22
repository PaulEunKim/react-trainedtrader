import React from 'react'
import imgBlack from '../img/graphBlack.png'
import imgArrow from '../img/graphArrow.png'
import imgTable from '../img/table.png'
import styles from './body.module.scss'
import Container from './container.js'


const Header = ({ siteTitle }) => (
    <Container>
        <div className={styles.font}>
    <div className={styles.bodyHeader}>이런 문구들이 익숙하신가요?</div>
  <hr/>
    <div className={styles.quote1}>"세계 최대의 투자 시장"</div>
    <div className={styles.quote}>"주 5일 24시간 트레이딩"</div>
    <div className={styles.quote}>"50:1 의 마진거래!"</div>
    <hr/>
  <div className={styles.paragraph}>
    <b>FOREX</b> 외환거래에 투자하면서 성공하셨나요 아니면 실패하셨나요? 연습계좌보다는 실계좌로 하는 것이 중요하다는 생각으로 조금 잃더라도, 그러면서 배우는 것이다, 지금은 배우는 기간이니 손실이 나는 것은 충분히 있을 수 있고 손실은 수업료를 낸다는 생각으로 투자를 시작하셨나요? 아니면 내가 열심히 모은 돈으로 투자를 하는데 준비도 없이 하는 건 도박이라는 생각에 많은 강의를 듣고, 오랜 기간 동안 연습 계좌로 연습해가면서 연습계좌로 이익을 어느 정도 냈을 때 나는 준비가 되었다고 생각하며 실전 계좌로 투자를 시작하셨나요? 내가 예측한 방향은 맞았는데 나의 스탑 오더만 딱 치고 내가 생각한 방향대로 가서 너무 분해하거나,
  </div>
    <div className={styles.paragraph}>
      트레이딩 볼륨이 올라가면 수수료를 낮춰준다는 회사들의 광고에 무리하게 사이즈를 키워 단타로 투자하다 손실이 났던 적은 있으신가요?
    </div>
  <div className={styles.paragraph}>  잃어 봤자 천 불 이천 불이라는 생각으로 투자하셨겠지요? 포렉스 트레이딩 혹은 선물거래를 하며 손실이 나셨던 분들, 본인이 터득한 비법, 많은 시간을 투자하며 공부한 기술적 분석과 근본적 분석을 등등, 수고하셨습니다만 이때까지 어떻게 하면 돈을 잃는지 어떻게 하면 좀 더 분석적으로 돈을 잃을 수 있는지, 돈 잃는 방법을 배워온 시간일지 모릅니다. 지금까지 돈을 잃고 있거나 아직 관심만 있고, 시작하지 못한 분들께 저는 지금부터 3가지를 말씀드릴 것입니다.
  </div>
  <div className={styles.paragraph}>
    트레이딩은 제대로 된 길로 가야 합니다. 이때까지 열심히 수업료를 내고 많은 시간을 들여서 잘못된 길을 찾아서 갔을지 모릅니다. 외환거래로 혹은 선물투자로 실패하셨다면 분명한 이유가 있고 그렇다고 모두가 성공하는 트레이더가 될 수 없습니다. 외환거래 그리고 선물거래는 위험한 거래 시장입니다. 하지만 바른길, 옳바른 트레이딩 방법으로 실패는 줄일 수 있습니다.
  </div>
  <div className={styles.paragraphHeader}>첫번재 - STOP LOSS 세팅 방법</div>
  <div className={styles.paragraph}>
    이때까지 외환 투자나 선물투자에서 손실을 제한하고자 스탑 오더를 넣었지만 스탑만 치고 다시 올라가는 일들이 허다하기 때문에 스탑 오더를 사용하는 것보다 스탑 오더와 비슷한 역할을 하는 put or call option을 사는 것입니다. 많은 분이 옵션이라고 하면 위험한 투자를 생각하는데 그것은 공매도(short selling) 때문에 그런 부정적인 인식이 있는 것이고 put이나 call을 사는 option 투자는 처음 내는 premium이라는 금액이 RISK의 전부인 투자 기법입니다. 외환 투자에는 옵션이 없습니다, 그래서 외환투자를하시는분이 효과적으로 트레이딩을 하시려면 선물거래구좌도 함께 가지고 계시면서 필요할 때에 선물거래구좌에서 currency 선물 마켓에서 해당 currency 옵션을 사면서 그것으로 stop order를 대신하는것입니다.        </div>
  <div className={styles.paragraph}>
    이것은 유로달러 옵션으로 스탑 오더를 대신 해서 리스크를 줄이고 플레이를 할 수 있는 방법입니다.
  </div>
  <img src={imgTable}>
  </img>
  <div className={styles.paragraph}>
    Note about stops: 귀하 또는 귀하의 거래 자문가가 "STOP-LOSS"또는 "STOP-LIMIT"과 같은 명령의 위치를   정하면 귀하의 손실이 의도 된 금액에 필수적으로 제한되는 것은 아니며 시장 조건 그러한 명령을 실행하는 것이 불가능할 수도 있습니다.        </div>
  <div className={styles.paragraphHeader}>두번째- 트레이딩 디렉션 관련</div>
  <div className={styles.paragraph}>
    Day-Trading 마켓 변동에 따라서 갔다가 갔다가 하루에 수십번씩 트레이딩 하시는 분들 많은데요 지금 당장 그만두시길 바랍니다. 마켓은 기간이 짧으면 짧을수록 예측하고 트레이딩 하기가 더 힘들어집니다. 그리고 정 초단타 트레이딩을 하고 싶어 하시는 분들은 지난 4주간의 일일 도표 보고 올라가는 장인지 내려가는 장인지 판단하고 long 이나 short 양쪽 방향으로 트레이딩 하는 것이 아니라 한 방향 쪽으로만 트레이딩 하셔야 합니다.
  </div>
  <div className={styles.paragraph}>이것은 EUR/CAD pair이고 이런 장일 경우에 본인 포지션을 3번 정도 나눠서 SHORT로 가셔야 합니다.
  </div>
  <img src={imgBlack} alt={"Graph"}>
  </img>
  <div className={styles.paragraph}>
    이것은 3개월 만기 EURO 달러이고 이런 장에서는 SHORT를 가셔야 합니다. LONG이 아닙니다. 동그라미 표시되어있는 시점부터는 내려가는 SHORT 포지션을 잡고 가시면 됩니다.
  </div>
  <img src={imgArrow}></img>
  <div className={styles.paragraphHeader}>세번째- Leverage 사용법</div>
  <div className={styles.paragraph}>
    높은 Leverage는 독이 될 것입니다. 그 어떤 테크닉을 배우기 전에, 그 어떤 분석을 하기 전 가장 먼저 해야 하는 것 그리고 앞으로도 계속 지켜야 하는 것은 본인 어카운트 사이즈 그리고 본인 재정 상태에 맞는 lot size를 정하는 것입니다.
  </div>
  <table>
    <tr>
      <th>Amount</th>
      <th>Maximum Position Size</th>
    </tr>
    <tr>
      <td>$2,500</td>
      <td>0.1 Lot</td>
    </tr>
    <tr>
      <td>$5,000</td>
      <td>0.4 Lot</td>
    </tr>
    <tr>
      <td>$10,000</td>
      <td>1.0 Lot</td>
    </tr>
    <tr>
      <td>$25,000</td>
      <td>2.5 Lot</td>
    </tr>
    <tr>
      <td>$100,000</td>
      <td>10.0 Lot</td>
    </tr>
  </table>
  <div className={styles.paragraph}>
    위의 lot size 아래로 트레이딩 하시는 걸 추천합니다. 여기서 나의 재정 상태는 아주 충분하고 최대한의 RISK를 가지고 싶다, 아니면 금방이라도 내 돈이 다 없어져도 괜찮다 하시는 분들은 위의 lot size에서 2배까지 하셔도 됩니다. 기본적으로 지켜져야 하지만 많은 사람에게 알려지지 않고 실행하지 못하는 내용을 적어보았습니다. 외환거래 혹은 선물 거래는 전문 트레이더에게 체계적으로 배워서 해야 합니다.
  </div>
</div>
    </Container>
    
)

export default Header
