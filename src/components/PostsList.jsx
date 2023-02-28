import { useState } from "react";
import styles from "./PostsList.module.scss";
import Post from "../components/Post";
import NewPost from "../components/NewPost";

const PostsList = () => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  return (
    <>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Andrew" body="Top Secret!" />
        <Post author="Smith" body="Bottom Secret!" />
      </ul>
    </>
  );
};

export default PostsList;
