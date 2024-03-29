import './Section2.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";

function Section2() {
    return (
      <>
        <section id="section2" className="section">
            <h2 className="hide">About</h2>
            <div className="inner layout">
                <div className="skill-list">
                    <p className="main-tit fade-up"><span>Tech Stack</span></p>
                    <ul className="fade-g">
                      <li className="item">
                        <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">
                            <circle className="circle-chart__background" stroke="#F7F6F2" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                            <circle className="circle-chart__circle" stroke-width="2" stroke-dasharray="95,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                            <g className="circle-chart__info">
                              <text className="circleTitle" x="17.91549431" y="16.91549431" alignment-baseline="central" text-anchor="middle" font-size="4.5">100%</text>
                            </g>
                        </svg>
                        <span className='txt'>HTML</span>
                      </li>
                      <li className="item">
                        <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">
                            <circle className="circle-chart__background" stroke="#F7F6F2" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                            <circle className="circle-chart__circle" stroke-width="2" stroke-dasharray="95,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                            <g className="circle-chart__info">
                              <text className="circleTitle" x="17.91549431" y="16.91549431" alignment-baseline="central" text-anchor="middle" font-size="4.5">100%</text>
                            </g>
                        </svg>
                        <span className='txt'>CSS</span>
                      </li>
                      <li className="item">
                        <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">
                            <circle className="circle-chart__background" stroke="#F7F6F2" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                            <circle className="circle-chart__circle" stroke-width="2" stroke-dasharray="85,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                            <g className="circle-chart__info">
                              <text className="circleTitle" x="17.91549431" y="16.91549431" alignment-baseline="central" text-anchor="middle" font-size="4.5">85%</text>
                            </g>
                        </svg>
                        <span className='txt'>Jvascript & JQuery</span>
                      </li>
                      <li className="item">
                        <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">
                            <circle className="circle-chart__background" stroke="#F7F6F2" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                            <circle className="circle-chart__circle" stroke-width="2" stroke-dasharray="60,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                            <g className="circle-chart__info">
                              <text className="circleTitle" x="17.91549431" y="16.91549431" alignment-baseline="central" text-anchor="middle" font-size="4.5">70%</text>
                            </g>
                        </svg>
                        <span className='txt'>React</span>
                      </li>
                      <li className="item">
                        <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">
                            <circle className="circle-chart__background" stroke="#F7F6F2" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                            <circle className="circle-chart__circle" stroke-width="2" stroke-dasharray="80,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                            <g className="circle-chart__info">
                              <text className="circleTitle" x="17.91549431" y="16.91549431" alignment-baseline="central" text-anchor="middle" font-size="4.5">80%</text>
                            </g>
                        </svg>
                        <span className='txt'>Bootstrap</span>
                      </li>
                      <li className="item">
                        <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">
                            <circle className="circle-chart__background" stroke="#F7F6F2" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                            <circle className="circle-chart__circle" stroke-width="2" stroke-dasharray="85,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                            <g className="circle-chart__info">
                              <text className="circleTitle" x="17.91549431" y="16.91549431" alignment-baseline="central" text-anchor="middle" font-size="4.5">85%</text>
                            </g>
                        </svg>
                        <span className='txt'>Photoshop & Illustrator</span>
                      </li>
                        {/* <li className="item">
                            <div className="ico">
                                <FontAwesomeIcon icon={faCode} />
                                <strong>UI DEVELOPER</strong>
                            </div>
                            <div className="text">
                            HTML, CSS, JS를 잘 다루는 퍼블리셔 입니다.<br />
                            웹 표준을 준수하고 유지보수를 고려한 코드를 작성하기 위해 노력하며, 레거시한 코드는 지양합니다.
                            </div>
                        </li>
                          <li className="item">
                            <div className="ico">
                                <FontAwesomeIcon icon={faLaptopCode} />
                                <strong>RESPONSIVE</strong>
                            </div>
                            <div className="text">
                            다양한 사용자를 차별하지 않고, 사용자를 고려한 웹을 만들기 위해 노력합니다. <br />미디어쿼리를 활용하여 반응형 레이아웃을 이해 및 구현합니다.
                            </div>
                        </li>
                          <li className="item">
                            <div className="ico">
                                <FontAwesomeIcon icon={faCodeBranch} />
                                <strong>FRONTEND</strong>
                            </div>
                            <div className="text">
                            jQuery를 작성하여 기능을 구현할 수 있습니다.<br />
                            javascript에 대한 공부를 게을리하지 않으며 ES6문법을 이해하고 활용할 수 있습니다.
                            </div>
                        </li>
                          <li className="item">
                            <div className="ico">
                                <FontAwesomeIcon icon={faPenNib} />
                                <strong>SKILLS</strong>
                            </div>
                            <div className="text">
                            새로운 지식에 대한 두려움이 없습니다.<br />
                            새로운 기술에 관심이 많고, React, Typescript, Git 등 다양한 지식을 배우고 적용합니다.
                            </div>
                        </li>
                          <li className="item">
                            <div className="ico">
                                <FontAwesomeIcon icon={faExchangeAlt} />
                                <strong>COOPERATION</strong>
                            </div>
                            <div className="text">
                            기획자, 디자이너, 개발자와 원활하게 협업하려고 노력합니다. <br />
                            다른 분야를 이해하고 도와가며 더 좋은 결과물을 만들어냅니다.
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </section>
      </>
    );
  }
  
  export default Section2;