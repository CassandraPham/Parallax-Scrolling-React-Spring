import React from 'react';
import HelicopterPage from './HelicopterPage';
import WitchPage from './WitchPage';
import PageLayout from './PageLayout';
import PageNotFound from './PageNotFound';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (

    <Routes>
      <Route path="/" element={<PageLayout />}>

        <Route index element={<WitchPage />} />

        <Route path="helicopter" element={<HelicopterPage />} />

        <Route path="*" element={<PageNotFound />} />

      </Route>

    </Routes>

  );
}

export default App;