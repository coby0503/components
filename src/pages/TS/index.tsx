import React from "react";

interface Props {}

const TS: React.FC<Props> = () => {
  interface Test {
    name: string;
    age: number;
  }
  type TestType = Test & { hello: string };

  const testImpl: TestType = { name: "hi", age: 1, hello: "bye" };

  const test = (arg: Test) => {
    console.log("arg", arg);
  };
  test(testImpl);
  return (
    <div>
      <div></div>
    </div>
  );
};
export default TS;
