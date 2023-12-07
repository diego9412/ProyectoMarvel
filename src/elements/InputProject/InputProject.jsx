import "./input-project.css";

export default function InputProject(props) {
  return (
    <>
      <div className="input">
        <label htmlFor={props.identifier}>{props.inputName}</label>
        <input
          type={props.inputType}
          id={props.identifier}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
}
