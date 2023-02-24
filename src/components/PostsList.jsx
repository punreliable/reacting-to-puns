// import styles from "../components/Post.module.css";
import Post from "../components/Post";
import styles from "./PostsList.module.scss";
import NewPost from "../components/NewPost";

const PostsList = (props) => {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post author="Brian" body="Hello World!" />
        <Post author="Andrew" body="Top Secret!" />
        <Post author="Smith" body="Bottom Secret!" />
      </ul>
    </>
  );
};
export default PostsList;
