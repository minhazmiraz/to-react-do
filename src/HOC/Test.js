import HOCcompo from "./HOCcompo";

const Test = (props) => {
  console.log(props);
  return <h2>This is test file {props.text}</h2>;
};

export default HOCcompo(Test);
