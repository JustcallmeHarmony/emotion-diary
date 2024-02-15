const MyButton = ({ text, type, onclick }) => {
  const btnType = ["ositive", "negative"].includes(type) ? type : "default";
  return (
    <button
      className={["MyButton", `MyButton_${type}`].join(" ")}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};
export default MyButton;
