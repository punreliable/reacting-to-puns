import styles from "./NewPost.module.scss";

const NewPost = (props) => {
  return (
    <div className={styles}>
      <h3>New Post</h3>
      <form className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" rows={3} onChange={props.onBodyChange} required />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={props.onAuthorChange}
          />
        </p>
      </form>
    </div>
  );
};

export default NewPost;
