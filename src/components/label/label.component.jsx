import "./label.component.scss";

export default function Label({ label, children, ...props }) {
  return (
    <div className="label-container">
      <label>{label}</label>
      {children}
    </div>
  );
}
