import "./button.component.scss";
import { Button as ClickButton } from "primereact/button";

export default function Button({ children, icon, ...props }) {
  return (
    <ClickButton className={`${icon ? "icon" : ""}`} {...props}>
      {children}
    </ClickButton>
  );
}
