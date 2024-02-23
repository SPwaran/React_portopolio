import style from "./Portfolio.module.scss";
import adminpanel from "../../assets/images/1.jpg";
import EmployeeTracker from "../../assets/images/2.jpg";
import TechBlog from "../../assets/images/3.jpg";
import ecommerce from "../../assets/images/4.jpg";
import porto from "../../assets/images/5.jpg";
import cms from "../../assets/images/6.jpg";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
export default function Portfolio() {
  const [isHovered, setIsHovered] = useState(false);
  const mouseEnter = () => {
    setIsHovered(true);
  };
  const mouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={style.body}>
      
      <div className={style["project-container"]}>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={style["project-card"]}
        >
          <img src={adminpanel} alt="Project Image" />
          {isHovered && (
            <div className={style["project-info"]}>
              <h4>Admin Panel</h4>
              <a
                href="#"
                className={style.github}
              >
                <FaGithub style={{ color: "lightblue" }} size={40} />
              </a>
            </div>
          )}
        </div>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={style["project-card"]}
        >
          <img src={EmployeeTracker} alt="Project Image" />
          {isHovered && (
            <div className={style["project-info"]}>
              <h4>Employee Tracker</h4>
              <a
                href="#"
                className={style.github}
              >
                <FaGithub style={{ color: "lightblue" }} size={40} />
              </a>
            </div>
          )}
        </div>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={style["project-card"]}
        >
          <img src={ecommerce} alt="Project Image" />
          {isHovered && (
            <div className={style["project-info"]}>
              <h4>Ecommerce Online Shopping</h4>
              <a
                href="#"
                className={style.github}
              >
                <FaGithub style={{ color: "lightblue" }} size={40} />
              </a>{" "}
            </div>
          )}
        </div>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={style["project-card"]}
        >
          <img src={TechBlog} alt="Project Image" />
          {isHovered && (
            <div className={style["project-info"]}>
              <h4>The Tech Blog</h4>
              <a
                href="#"
                className={style.github}
              >
                <FaGithub style={{ color: "lightblue" }} size={40} />
              </a>
            </div>
          )}
        </div>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={style["project-card"]}
        >
          <img src={porto} alt="Project Image" />
          {isHovered && (
            <div className={style["project-info"]}>
              <h4>Portfolio</h4>
              <a
                href="#"
                className={style.github}
              >
                <FaGithub style={{ color: "lightblue" }} size={40} />
              </a>
            </div>
          )}
        </div>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={style["project-card"]}
        >
          <img src={cms} alt="Project Image" />
          {isHovered && (
            <div className={style["project-info"]}>
              <h4>Content Managment System</h4>
              <a
                href="#"
                className={style.github}
              >
                <FaGithub style={{ color: "lightblue" }} size={40} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
