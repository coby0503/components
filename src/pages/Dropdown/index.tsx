import React, { useCallback, useEffect, useState } from "react";

interface Props {}

const keyCode = {
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
};

const Dropdown: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const keyboardEvent = useCallback((e: KeyboardEvent) => {
    if (e.key === keyCode.ARROW_UP) {
      console.log("위로");
    }
    if (e.key === keyCode.ARROW_DOWN) {
      console.log("아래로");
    }
  }, []);

  const focusDropdown = () => {
    setOpen(true);
  };
  const blurDropdown = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      console.log("열림");
      window.addEventListener("keydown", keyboardEvent);
    } else {
      console.log("닫힘");
      window.removeEventListener("keydown", keyboardEvent);
    }
  }, [open]);

  return (
    <div>
      <input onFocus={focusDropdown} onBlur={blurDropdown} readOnly />
      {open && (
        <ul tabIndex={3}>
          <li>가</li>
          <li>나</li>
          <li>다</li>
          <li>라</li>
        </ul>
      )}
      <button
        onClick={() => {
          window.removeEventListener("keydown", keyboardEvent);
        }}
      ></button>
    </div>
  );
};
export default Dropdown;
