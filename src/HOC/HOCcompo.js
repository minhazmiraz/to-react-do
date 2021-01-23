const HOCcompo = (WrappedCompo) => {
  console.log("HOC here");
  return (props) => {
    console.log(props);
    return (
      <div className="red-text">
        <WrappedCompo {...props} />
      </div>
    );
  };
};

export default HOCcompo;
