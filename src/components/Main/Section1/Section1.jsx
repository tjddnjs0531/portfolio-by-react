import './Section1.css'

function Section1() {
    return (
      <>
        <section id="section1" className="section">
            <h2 className="hide">Home</h2>
            <div className="headline fade-up">
                <p>WELCOME TO <br className="hidden-lg" />MY PORTFOLIO</p>
            </div>
            <div className="inner intro">
                <div className="img"><img src='/img/myEmoji.gif' alt="" /></div>
                <div className="cont fade-g">
                    <p className="tit">🖐️ 안녕하세요! 웹 퍼블리셔 임성원입니다.</p>
                    <div className="desc">
                        <strong>Javascript, Jquery, HTML, CSS, SCSS</strong> 등 코드와 함께 계속해서 고민하고 탐구하는 것을 좋아하며 뒤쳐지지 않도록 새로운 것을 끊임없이 배우면서 웹 퍼블리셔로 활동하고 있습니다. 
                        <br />어떤 환경에서도 잘 보이는 <strong>반응형, 웹 접근성, 웹 표준</strong>을 고려한 웹 페이지를 그려낼 수 있습니다. 또한 유지보수를 진행하기 쉽게 코드를 작성하기 위해 노력합니다.
                        <br />최근에는 Javascript 라이브러리인 React, Vue.js에 대해 공부 중이며, 다양한 프레임 워크 환경에서 새로운 언어로 마크업 작업을 진행해보고 싶습니다.
                        <br />
                        <br />맡게 된 프로젝트의 목적을 우선적으로 고려하며, 팀원은 물론 다양한 직군과의 원활한 협업을 가장 중요하게 생각합니다. 
                        <br />
                        <br />계속해서 변화하는 트렌드에 맞춰 지금처럼 새로운 방식에 도전하는 것을 즐기는 웹 퍼블리셔가 되겠습니다.
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }
  
  export default Section1;