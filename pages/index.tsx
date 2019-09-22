import Button from "../components/Button";

const Home = () => {
  return (
    <div>
      <Button>Styled Button</Button>
      <div>process.env.customKey: {process.env.customKey}</div>
    </div>
  );
};

export default Home;
