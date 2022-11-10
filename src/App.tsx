import { Providers } from "app/providers";
import "./App.css";
import { BookList } from "./features/list-books/ui/bookList";

const App = () => (
  <Providers>
    <div className="App">
      <div style={{ padding: "10vw" }}>
        <BookList />
      </div>
    </div>
  </Providers>
);

export default App;
