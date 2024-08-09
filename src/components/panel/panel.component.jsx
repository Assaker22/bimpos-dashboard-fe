import "./panel.component.scss";

export default function Panel({ children, variant = "", icon, ...props }) {
  return (
    <div className={`panel ${variant}`} {...props}>
      {icon}
      {children}
    </div>
  );
}
