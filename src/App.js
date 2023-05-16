import React from "react";
import "./App.css";
import flower from "./assets/flower.jpg";
import TodoBoard from "./components/TodoBoard";

const SubTitle = "Tell me your Bucket List";
const Title = "You can do it!!";
const style = { backgroundColor: "black", color: "yellow", padding: "20px" };
const style2 = {
  backgroundColor: "lightblue",
  color: "purple",
  padding: "20px",
};

function App() {
  return (
    <div>
      {/* <img src={flower} /> */}

      <div
        style={{
          backgroundImage: `url(${flower})`,
          // height: "5000px",
          // width: "5000px",
          backgroundsize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: "0.5",
        }}
      >
        <h1 style={style}>{SubTitle}</h1>
        <h2 style={style2}>{Title}</h2>

        <input type="text" />
        <button>추가</button>
        <TodoBoard />
      </div>
    </div>
  );
}
export default App;

//
