import { Dropdown } from "primereact/dropdown";
import "./dropdown.component.scss";

export default function DropDown({ label, ...props }) {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <Dropdown {...props} />
    </div>
  );
}
