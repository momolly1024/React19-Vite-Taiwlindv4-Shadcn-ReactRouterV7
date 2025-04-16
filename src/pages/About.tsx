import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  BrowserRouter,
  useSearchParams,
  Link,
  Route,
  Routes,
} from 'react-router';
import { useCounterStore } from '../../src/store.js';

const About = () => {
  const { count, increment } = useCounterStore();

  return (
    <>
      <div>About page...</div>
      <Link to="/?hello=world&molly=YA">Go to home!</Link>
      <p></p>
      <Button onClick={increment}>Click me count is {count}</Button>
      <div>About page...</div>
      <Link to="/?hello=world&molly=YA">Go to home!</Link>
      <p>a A</p>
      {/* <Button onClick={() => setCount((count) => count + 1)}>
        Click me count is {count}
      </Button> */}
    </>
  );
};

export default About;
