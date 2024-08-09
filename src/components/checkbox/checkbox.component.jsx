import { CheckIcon } from "lucide-react";
import "./checkbox.component.scss";

import { Checkbox } from "primereact/checkbox";

export default function CheckBox({ label, ...props }) {
  return (
    <div className="checkbox">
      <Checkbox
        {...props}
        checked={props.value}
        icon={<CheckIcon strokeWidth={"4px"} color={"var(--accent-color)"} />}
      />
      <label>{label}</label>
    </div>
  );
}
