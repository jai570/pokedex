import React from "react";
import { useState, useEffect } from "react";

const Hooks = () => {
  // const [state, setstate] = useState({ count: 0, color: "blue" });
  // const count = state.count;
  // const color = state.color;
  // const [Type, setType] = useState("posts");
  // const [Items, setItems] = useState([]);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${Type}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  //   // console.log("render");
  // });
  const handelResize = () => {
    setwindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handelResize);
    return () => {
      window.addEventListener("resize", handelResize);
      console.log("return working");
    };
  }, [windowWidth]);
  return (
    <>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {/* <button
        style={{ width: "100px", height: "100px" }}
        onClick={() =>
          setstate((prev) => {
            return { ...prev, count: prev.count + 1 };
          })
        }
      >
        +
      </button>
      <h1 style={{ margin: "20px" }}>
        {count} {color}{" "}
      </h1>
      <button
        style={{ width: "100px", height: "100px" }}
        onClick={() =>
          setstate((prev) => {
            return { ...prev, count: prev.count - 1 };
          })
        }
      >
        -
      </button> */}
        {/* <div>
          <button onClick={() => setType("posts")}>Post</button>
          <button onClick={() => setType("users")}>User</button>
          <button onClick={() => setType("comments")}>Comments</button>
        </div>

        <h1>{Type}</h1>
        <pre>{JSON.stringify(Items)}</pre> */}
        {windowWidth}
      </div>
    </>
  );
};

export default Hooks;
