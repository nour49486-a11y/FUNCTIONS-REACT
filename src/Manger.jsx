import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";

export default function Mang() {
  const navigate = useNavigate();

  const inputName = useRef();
  const inputPrise = useRef();

  const inputqty = useRef();

  const inputNameEdit = useRef();
  const inputPriseEdit = useRef();
  const inputqtyEdit = useRef();

  const [product, setproducts] = useState([
    { name: "iphone x", price: 400, qty: 3 },
    { name: "iphone 11", price: 450, qty: 5 },
    { name: "iphone 12", price: 500, qty: 8 },
    { name: "iphone 13", price: 700, qty: 9 },
    { name: "iphone 14", price: 800, qty: 11 },
    { name: "iphone 14", price: 800, qty: 11 },
    { name: "iphone 14", price: 800, qty: 11 },
    { name: "iphone 14", price: 800, qty: 11 },
  ]);

  const savePhone = () => {
    let newPhone = {
      name: inputName.current.value,
      price: inputPrise.current.value,
      qty: inputqty.current.value,
    };

    let copy = [...product];
    copy.push(newPhone);
    setproducts(copy);
    document.getElementById("my_modal_1").close();
  };

  const remove = (index) => {
    Swal.fire({
      title: " Do you want to remove the  phone ? ",
      showCancelButton: true,
      confirmButtonText: "Yes, delete!",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        let copy = [...product];
        copy.splice(index, 1);
        setproducts(copy);

        Swal.fire("removed !", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const [edit, setedit] = useState();
  const editphone = (index) => {
    setedit(index);
    const currentProduct = product[index];

    inputNameEdit.current.value = currentProduct.name;
    inputPriseEdit.current.value = currentProduct.price;
    inputqtyEdit.current.value = currentProduct.qty;

    document.getElementById("my_modal_4").showModal();
  };




  const saveEdit = () => {
    if (edit === undefined) return;

    let copy = [...product];
    copy[edit] = {
      name: inputNameEdit.current.value,
      price: inputPriseEdit.current.value,
      qty: inputqtyEdit.current.value,
    };

    setproducts(copy);
    document.getElementById("my_modal_4").close();// بس فهمن من الai  اي المشكله  
    setedit(undefined); // علي شان امسح المنتج الاقديم وملهوش علاقه بي ولو شوفت الكومنت دا انا الي كاتبه مش AI علي شان افهمممممم 
  };
  return (
    <div
      className="flex flex-col items-center overflow-auto h-dvh "
      data-theme="light"
    >
      <div className="container ">
        <h1 className="text-[60px]  bg-gray-500  flex justify-center rounded-b-4xl pb-3 text-white ">
          {" "}
          my products{" "}
        </h1>
        <div className="flex justify-between my-6 ">
          <button
            className="btn btn-wide btn-primary "
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Add product
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Add new phone</h3>
              <div className="modal-action">
                <div method="dialog" className="flex flex-col gap-4 w-full">
                  <input
                    className="input w-full"
                    type="text"
                    placeholder="enter name phone"
                    ref={inputName}
                  />
                  <input
                    className="input w-full"
                    type="number0"
                    placeholder="enter the price"
                    ref={inputPrise}
                  />
                  <input
                    className="input w-full"
                    type="number"
                    placeholder="enter the quantity"
                    ref={inputqty}
                  />
                  <div className="flex justify-between">
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_1").close()
                      }
                      className="btn"
                    >
                      Close
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        savePhone();
                      }}
                    >
                      save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </dialog>

          <button
            className="btn btn-wide btn-error"
            onClick={() => navigate("/")}
          >
            return to home
          </button>
        </div>
        <table className="table  w-full">
          <thead>
            <tr className="text-[25px] text-black font-bold">
              <th>#</th>
              <th>name</th>
              <th> price</th>
              <th> quantity</th>
              <th className="col-span-2"> tools</th>
            </tr>
          </thead>
          <tbody>
            {product.map((el, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{el.name} </td>
                  <td>{el.price} USD</td>
                  <td>{el.qty}</td>
                  <td>
                    <div className="flex gap-3">
                      <MdDelete
                        onClick={() => {
                          remove(index);
                        }}
                        className="hover:text-red-500 text-[35px]"
                      />
                      <FiEdit
                        className="hover:text-yellow-500 text-[30px]"
                        onClick={() => {
                          editphone(index);
                        }}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Make an Edit of PHONE</h3>
            <div className="modal-action">
              <div className="flex flex-col gap-4 w-full">
                <input
                  className="input w-full"
                  type="text"
                  placeholder="enter name phone"
                  ref={inputNameEdit}
                />
                <input
                  className="input w-full"
                  type="number"
                  placeholder="enter the price"
                  ref={inputPriseEdit}
                />
                <input
                  className="input w-full"
                  type="number"
                  placeholder="enter the quantity"
                  ref={inputqtyEdit}
                />
                <div className="flex justify-between">
                  <button
                    onClick={() => document.getElementById("my_modal_4").close()}
                    className="btn"
                  >
                    Close
                  </button>
                  <button className="btn btn-success" onClick={saveEdit}>
                    save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}



