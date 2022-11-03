import "./App.css";
import { BookList } from "./features/list-books/ui/bookList";

function App() {
  return (
    <div className="App">
      <div style={{ padding: "10vw" }}>
        <BookList />
      </div>
    </div>
  );
}

export default App;
