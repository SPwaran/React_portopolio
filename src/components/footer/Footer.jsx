import "./footer.scss";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <a href="https://github.com/">
          <FaGithub style={{ color: "lightblue" }} size={40} />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/">
          <FaLinkedin style={{ color: "lightblue" }} size={40} />
        </a>
      </div>
    </div>
  );
}
