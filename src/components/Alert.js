import { useState } from "react"

export function Alert({
  type = "information",
  heading,
  children,
  closable,
  onClose
}) {
  const [ visible, setVisible ] = useState(true);

  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }
  if (!visible) {
    return null;
  }
  return (
    <div>
      <div>
        <span
          role="img"
          aria-label={
            type === "warning" ? "Warning" : "Information"
          }
        >
          {type === "warning" ? "⚠" : "i"}
        </span>
        <span>{heading}</span>
      </div>
      {closable && (
        <button aria-label="Close" onClick={handleCloseClick}>
          <span role="img" aria-label="Close">𝗫</span>
        </button>
      )}
      <div>{children}</div>
    </div>
  )
}