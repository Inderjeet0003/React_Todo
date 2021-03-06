import { useState } from "react";
import "./st.css";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, removeAll } from "../actions";

const Todo = () => {
  const list = useSelector((state) => state.todoReducer.list);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const str = "   ";

  // const addTODO =()=>{

  //   dispatch(add(value))
  //   setValue('')
  //   console.log(list)
  // }

  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "5rem" }}>Todo App</h1>
        <hr />
        <hr />
        <br />
        <br />
        <h3 style={{ fontSize: "3rem" }}>Add items here...</h3>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="✍ Add                                                     ✍"
          style={{ border: "1px solid black" }}
        ></input>
        <button
          style={{ width: "60px", height: "48px", borderRadius: "15%" }}
          onClick={() => dispatch(add(value), setValue(""))}
        >
          Add
        </button>
        <br />
        <br /> <hr />
        <br />
        <div>
          <h2 style={{ fontSize: "2rem" }}>Item list :-</h2>
          <ul>
            {list.map((el) => {
              return (
                <div style={{ fontSize: "2rem" }} key={el.id}>
                  <li
                    style={{
                      borderRadius: "25%",
                      backgroundColor: "pink",
                      listStyle: "none"
                    }}
                  >
                    {el.data} {str}
                    <button
                      style={{
                        borderRadius: "25%",
                        width: "20px",
                        backgroundColor: "lightgreen"
                      }}
                      onClick={() => dispatch(remove(el.id))}
                    >
                      -
                    </button>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        <br />
        <br />
        <br />
        <hr />
        <br />
        <h1>
          <button
            style={{
              backgroundColor: "red",
              width: "80px",
              height: "50px",
              borderRadius: "20%"
            }}
            onClick={() => dispatch(removeAll())}
          >
            {" "}
            Remove All{" "}
          </button>
        </h1>
      </div>
    </div>
  );
};

export default Todo;
