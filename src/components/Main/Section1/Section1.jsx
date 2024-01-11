import './Section1.css'

function Section1() {
    return (
      <>
        <section id="section1" className="section">
            <h2 className="hide">Home</h2>
            <div className="headlin">
                <p>WELCOME TO <br className="hidden-lg" />MY PORTFOLIO</p>
            </div>
            <div className="inner intro">
                {/* <div className="img"><img src='./img/myEmoji.gif' alt="" /></div> */}
                <div className="cont fade-g">
                    <p className="tit">🖐️ 안녕하세요!<br/>항상 높은 목표를 설정하고 달성하기 위해 매진하는 웹 퍼블리셔 임성원입니다.</p>
                    <div className="desc">
                    <strong>에이전시</strong>에서 근무하여 많은 프로젝트와 다양한 도메인을 경험해왔습니다. 
                    <br />어떤 환경, 어떤 기기에서도 잘 보이는 <strong>반응형, 웹 접근성, 웹 표준</strong>을 고려한 페이지를 그려낼 수 있고, 
                    <br />누구나 쉽게 유지보수를 진행할 수 있도록 <strong>구조화된 코드</strong>와 한눈에 알아볼 수 있는 코드를 작성합니다.
                    <br />효율적인 업무를 위해 항상 새로운 것을 배우고 성장하기 위해 노력하며,
                    <br /><strong>SEO와 크로스 브라우징</strong>에 대한 대응으로 누락없이 꼼꼼하게 마크업 산출물을 만들어냅니다.
                    <br />프로젝트에 가장 적합한 방식을 고려하여 <strong>Bootstrap, Javascript, JQuery, HTML, CSS, SCSS</strong> 등의 코드를 사용합니다. 
                    <br />최근에는 Javascript 라이브러리인 React 를 공부하고 다양한 프레임워크 환경에서 새로운 언어로 마크업 작업을 진행합니다.
                    <br />맡은 프로젝트의 목적을 우선적으로 고려하며, 팀원은 물론 다양한 직군과의 협업을 중요하게 생각합니다. 
                    <br />기획자, 디자이너, 개발자와 원활하게 협업하며 더 좋은 결과물을 만들어냅니다. 
<br />
                    <br />앞으로도 변화하는 트렌드에 맞춰 성장하기 위해 노력하고
                    <br />높은 목표를 달성하기 위해 매진하는 <strong>웹 퍼블리셔 임성원</strong>이 되겠습니다.
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }
  
  export default Section1;