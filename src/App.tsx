import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BrowserRouter,
  useSearchParams,
  Link,
  Route,
  Routes,
} from "react-router";
const About = () => {
  console.log("In about...");
  const [count, setCount] = useState(0);

  return (
    <>
      <div>About page...</div>
      <Link to="/?hello=world&molly=YA">Go to home!</Link>
      <p></p>
      <Button onClick={() => setCount((count) => count + 1)}>
        Click me count is {count}
      </Button>
    </>
  );
};
const Home = () => {
  const [searchParams] = useSearchParams();

  console.log("Home");

  return (
    <>
      {searchParams.toString() !== "" ? (
        <div>Home page with query {searchParams.toString()}...</div>
      ) : (
        <></>
      )}

      <Link to="/about">Go to about!</Link>
      <div className="bg-amber-500 mb-5">
        <p className="text-white">HELLO WORLD</p>
      </div>
      <Badge variant="secondary">
        React 19 + Vite + Tailwind CSS v4 + ShadCN UI + React Router v7
      </Badge>
    </>
  );
};
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
