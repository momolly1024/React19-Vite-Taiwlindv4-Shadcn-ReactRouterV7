import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" mb-5 p-1">
        <p className="text-fuchsia-800">Starter Template</p>

        <Badge variant="secondary">
          React 19 + Vite + Tailwind CSS v4 + ShadCN UI
        </Badge>
      </div>
      <div>
        <Button onClick={() => setCount((count) => count + 1)}>
          Click me count is {count}
        </Button>
      </div>
    </>
  );
}

export default App;
