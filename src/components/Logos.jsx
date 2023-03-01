import punreliableLogo from "../assets/logo-punreliable.svg";

const Logos = () => {
  const siteName = "Punreliable";
  return (
    <div>
      <a href="http://punreliable.com" target="_blank">
        <img
          src={punreliableLogo}
          className="logo react"
          alt={siteName + " logo"}
        />
      </a>
    </div>
  );
};

export default Logos;
