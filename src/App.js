import { BrowserRouter } from "react-router-dom";
import { Routes } from "./app/Routes";

// styles
import { GlobalStyle } from "./styles/GlobalStyles";

export function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}
