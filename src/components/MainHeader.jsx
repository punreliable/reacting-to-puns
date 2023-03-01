import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./MainHeader.module.scss";
import Logos from "./Logos";
import Title from "./Title";

const MainHeader = ({ onCreatePost }) => {
  return (
    <header className={classes.header}>
      <Title />
      <Logos />
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
};

export default MainHeader;
