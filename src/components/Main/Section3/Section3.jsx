import React, {useState} from "react";
import prjList from './data';
import './Section3.css';
import $ from 'jquery';

function Section3() {
    $(window).scroll(function(){
        let scr = $(document).scrollTop();
        let sec3_t = $("#section3").offset().top;
    
        //section3 horizontal scroll
        let offset = scr - sec3_t
    
        if (scr > sec3_t) {
            $("#section3 .project-wrap").css({ left: -offset });
        }
    });
    
    let [projects, setProjects] = useState(prjList);

    return (
      <>
        <section id="section3" className="section">
            <div className="in">
                <div className="project-wrap">
                    <h2 className="hide">Project</h2>
                    {projects.map((project) => (
                          <div className="project" key={project.id}>
                            <div className="inner prj-wrap">
                                <article className="prj-cont">
                                    <div className="tit">
                                        <p className="sub">RESPONSIVE WEBSITE [PC, MOB]</p>
                                        <h3 className="main">{project.name}</h3>
                                    </div>
                                    <ul className="desc">
                                        <li>
                                            <p className="t1">기술 스택</p>
                                            <p className="t2">{project.stack}</p>
                                        </li>
                                        <li>
                                            <p className="t1">작업기간</p>
                                            <p className="t2">{project.period}</p>
                                        </li>
                                        <li>
                                            <p className="t1">기여도</p>
                                            <p className="t2">퍼블리싱 100%</p>
                                        </li>
                                        <li>
                                            <p className="t2">{project.desc}</p>
                                        </li>
                                    </ul>
                                    <a href={project.link} target="_blank" title="새창열림" className="btn-view">VIEW</a>
                                </article>
                                <figure className="prj-pic">
                                    <img src={project.pcImg} alt="" className="hidden-sm hidden-xs" />
                                    <img src={project.moImg} alt="" className="hidden-lg hidden-md" />
                                </figure>
                            </div>
                        </div>
                      ))
                    }
                </div>
            </div>
        </section>
      </>
    );
  }
  
  export default Section3;