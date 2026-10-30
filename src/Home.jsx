import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center  h-dvh overflow-auto">
      <div className="container flex justify-center items-center bg-gray-500 py-8  rounded-b-full font-bold">
        <h1 className="text-7xl   text-white ">welcome to my tasks</h1>
      </div>

      <div className="w-full flex justify-center items-center mt-30 gap-20  ">
        <div
          onClick={() => navigate("/Counter.jsx")}
          className="  aura aura-gold w-105 h-105   bg-[#f888008c] rounded-full flex items-center justify-center"
        >
          <div className="  w-100 h-100 bg-[#f888008c]  text-yellow rounded-full flex items-center justify-center">
            {" "}
            <span className="text-rotate text-4xl text-white duration-2000">
              <span className="justify-items-center">
                <span> counter</span>
                <span className="font-bold italic px-2">add sub ▶︎▶︎</span>
              </span>
            </span>
          </div>
        </div>

        <div
          onClick={() => navigate("/Mang")}
          className="  aura aura-blue w-105 h-105  bg-[#4c6fef8c] rounded-full flex items-center justify-center"
        >
          <div className="  w-100 h-100 bg-[#4c6fef3d]  text-yellow rounded-full flex items-center justify-center">
            {" "}
            <span className="text-rotate text-4xl text-white duration-2000">
              <span className="justify-items-center">
                <span> my products</span>
                <span className="font-bold italic px-2">TABLE ▶︎▶︎</span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-12">
      <h1 className="text-[50px]"> ناسف لعدم الحضور بسبب ظروف صحيه قاتله</h1>
      </div>
    </div>
  );
}
