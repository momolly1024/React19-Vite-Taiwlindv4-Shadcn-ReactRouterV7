import { useState } from 'react';
import './App.css';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  BrowserRouter,
  useSearchParams,
  Link,
  Route,
  Routes,
} from 'react-router';
import About from '@/pages/About';
import { useCounterStore } from '../src/store.js';

const Home = () => {
  const [searchParams] = useSearchParams();
  const { count, increment, reset } = useCounterStore();

  return (
    <>
      {searchParams.toString() !== '' && (
        <div>Home page with query {searchParams.toString()}...</div>
      )}

      <Link to="/about">Go to about!</Link>
      <div className="bg-amber-500 mb-5">
        <p className="text-white">HELLO WORLD</p>
      </div>
      <Badge variant="secondary">
        React 19 + Vite + Tailwind CSS v4 + ShadCN UI + React Router v7
      </Badge>

      <div className="mt-5 space-y-2">
        <div className="text-xl">Count: {count}</div>
        <Button onClick={increment}>＋1</Button>
        <Button variant="destructive" onClick={reset}>
          Reset
        </Button>
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
