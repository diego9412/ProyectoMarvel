import "./button-pr.css";

export default function Button(props) {
  return (
    <>
      <div className="send">
        <input
          type={props.buttonType}
          className={props.buttonClass}
          value={props.buttonText}
        />
      </div>
    </>
  );
}
