import { useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";

export function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <Form.Control
        ref={inputRef}
        type="text"
        placeholder="Scrivi qualcosa"
      />
    </div>
  );
}