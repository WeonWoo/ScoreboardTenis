import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import { CategoryPage, LineUp, MatchSetting, ScoreBoard } from "./pages";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./type.d.ts";

function App() {
  // const sendRequest = async () => {
  //   const response = await axios.get("http://localhost:8080");
  //   console.log(response);
  //   console.log(response.data);
  // };

  // useEffect(() => {
  //   sendRequest();
  // });

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CategoryPage />}></Route>
            <Route path="/lineup" element={<LineUp />}></Route>
            <Route path="/match_setting" element={<MatchSetting />}></Route>
            <Route path="/score/:matchId" element={<ScoreBoard />}></Route>
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </div>
  );
}

export default App;
