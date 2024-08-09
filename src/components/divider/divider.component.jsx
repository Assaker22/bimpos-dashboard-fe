import "./divider.component.scss";

export default function Divider(props) {
  return (
    <div
      {...props}
      className={`divider ${props.vertical ? "vertical" : "horizontal"} ${
        props.dark ? "dark" : ""
      }`}
    ></div>
  );
}
