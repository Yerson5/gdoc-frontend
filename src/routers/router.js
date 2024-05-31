import React from 'react';
import Dashboard from '../Pages/dashboard';
import Empleados from '../Pages/empleados';
import { Router, Routes, Route,} from 'react-router-dom'; // Solo necesitas importar Router



function MyRouter() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/empleados" element={<Empleados />} />
      </Routes>
    

  );
}
export default MyRouter;

