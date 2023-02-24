// import styles from "../components/Post.module.css";
import Post from "../components/Post";
import styles from "./PostsList.module.css";

const PostsList = (props) => {
  return (
    <ul className={styles.posts}>
      <Post author="Brian" body="Hello World!" />
      <Post author="Andrew" body="Top Secret!" />
      <Post author="Smith" body="Bottom Secret!" />
    </ul>
  );
};
export default PostsList;
