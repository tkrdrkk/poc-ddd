import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BookList } from "./features/book/components/bookList";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <BookList />
      </div>
    </RecoilRoot>
  );
}

export default App;
