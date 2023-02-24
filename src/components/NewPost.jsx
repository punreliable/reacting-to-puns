import styles from "./NewPost.module.scss";

const NewPost = () => {
  return (
    <div className={styles}>
      <h3>New Post</h3>
      <form className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required />
        </p>
      </form>
    </div>
  );
};

export default NewPost;
