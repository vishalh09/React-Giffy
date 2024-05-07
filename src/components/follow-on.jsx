import {FaInstagram, FaXTwitter, FaLinkedin, FaGithub, FaFileArrowDown} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/vishal-hiremath-73064b229/">
        <FaLinkedin size={20}/>
        </a>
        <a href="https://github.com/vishalh09">
        <FaGithub size={20}/>
        </a>
        <a href="https://twitter.com/VishalH143">
          <FaXTwitter size={20} />
        </a>
        <a href="https://drive.google.com/file/d/1IEnooHZCEqOMZiq9OyTU1lgF1KAi1KhY/view?usp=drive_link">
          <FaFileArrowDown size={20} />
        </a>
        
      </div>
    </div>
  );
};

export default FollowOn;
