import React from "react";
import styles from "./Header.module.css";
import resume from "../../assets/resume.svg";
import { Link } from "react-router-dom";
import Blob from "../Blob/Blob";
function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.container}>
        <div className="{styles.left}">
          <p className={styles.heading}>
            A <span>Resume</span> that stands out !
          </p>
          <p className={styles.heading}>
            Make your own Resume.<span> It's Free</span>
          </p>
          <Link to={"/body"} className="btn btn-primary btn-lg">
            Start
          </Link>
        </div>
        <div className={styles.right}>
          <img src={resume} alt="resume" />
        </div>
      </div>
      <Blob heading="Ready in 4 Simple Steps" />
    </div>
  );
}

export default Header;
