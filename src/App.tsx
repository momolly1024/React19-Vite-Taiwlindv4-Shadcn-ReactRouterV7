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
      <div>Home page with query {searchParams.toString()}...</div>
      <Link to="/about">Go to about!</Link>
      <div className=" mb-5">
        <p className="text-fuchsia-800">text-fuchsia-800</p>
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
      </div>
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
