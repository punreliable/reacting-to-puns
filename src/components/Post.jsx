import styles from "../components/Post.module.css";

const names = ["Brian", "Smith"];

const Post = (props) => {
  return (
    <div className={styles.post}>
      <p className={styles.author}>{props.author}</p>
      <p className={styles.text}>{props.body}</p>
    </div>
  );
};
export default Post;
