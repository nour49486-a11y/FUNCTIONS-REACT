import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

export default function Counter() {
  const navigate = useNavigate();

  const [counter, setcounter] = useState(0);

  const add = () => {
    setcounter(counter + 1);
  };
  const subt = () => {
    setcounter(counter - 1);
  };
  const resets = () => {
    setcounter(0);
  };

  return (
    <div
      className="flex flex-col h-dvh  overflow-auto items-center"
      data-theme="light"
    >
      <div className="container bg-gray-500 flex justify-center  items-center pb-3">
        <h1 className="text-[40px]  "> users mangment</h1>
      </div>
      <div className=" container w-full flex justify-center items-center mt-4 gap-4 ">
        <button
          className="btn btn-wide   btn-outline  btn-warning "
          onClick={resets}
        >
          {" "}
          reset
        </button>
        <h1>counter = {counter}</h1>
        <butto className="btn btn-wide btn-success" onClick={add}>
          {" "}
          add +1{" "}
        </butto>
        <button
          className="btn btn-wide   btn-outline btn-error "
          onClick={subt}
        >
          {" "}
          sub -1
        </button>
      </div>
      <div>
        <button
        className="btn btn-wide btn-error mt-6"
          onClick={() => navigate("/")} //path  علي الروتر قي الباس دا يا هندسه شوفتها المشكله من ال ai هنا لازم يكون / بس زي
        >
          {" "}
          return to Home{" "}
        </button>
      </div>
    </div>
  );
}
