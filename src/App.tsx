import { Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <h1>Todos</h1>
      <div className="card">
        <Outlet />
      </div>
    </>
  );
}

export default App;
