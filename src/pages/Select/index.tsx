import React from "react";

interface Props {}

const Select: React.FC<Props> = () => {
  return (
    <div>
      <input />
      <ul tabIndex={3}>
        <li>가</li>
        <li>나</li>
        <li>다</li>
        <li>라</li>
      </ul>
    </div>
  );
};
export default Select;
