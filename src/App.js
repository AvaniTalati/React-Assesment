import "./App.css";
import Timer from "./components/Timer";
import Login from "./components/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App({authRole}) {
  const [user, setUser] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {!user ? (
            <Route path="/" element={<Login authRole={()=>setUser(!user)}/>} />
          ) : (
            <Route path="/timer" element={<Timer />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
