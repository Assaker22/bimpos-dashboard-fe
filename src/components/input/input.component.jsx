import "./input.component.scss";
import { InputText } from "primereact/inputtext";

export default function Input({ label, variant, ...props }) {
  return (
    <div className={`input ${variant}`}>
      <label>{label}</label>
      <InputText {...props} />
    </div>
  );
}
