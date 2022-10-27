import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        // position="top-right"
        // reverseOrder={false}
      ></Toaster>
    </div>
  );
}

export default App;
