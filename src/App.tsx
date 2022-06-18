import React, {lazy} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
const About = lazy(() => import('./components/About/About'));
const Home = lazy(() => import('./components/Home/Home'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/home'
          element={
            <React.Suspense fallback={<div>loading...</div>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path='/about'
          element={
            <React.Suspense fallback={<div>loading...</div>}>
              <About />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
