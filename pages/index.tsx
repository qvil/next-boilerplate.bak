import { useState } from "react";
import { parseCookies, setCookie } from "nookies";
import Button from "../components/Button";

const Home = () => {
  const [input, setInput] = useState("");
  const { myCookie } = parseCookies();
  console.log("Client cookie -> myCookie", myCookie);

  return (
    <div>
      <input
        type="text"
        placeholder="Input cookie"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button
        onClick={() => setCookie(undefined, "myCookie", input, undefined)}
      >
        setCookie
      </button>
      <Button>Styled Button</Button>
      <div>process.env.customKey: {process.env.customKey}</div>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  const { myCookie } = parseCookies(ctx);
  console.log("Server cookie -> myCookie", myCookie);

  return { myCookie };
};

export default Home;
