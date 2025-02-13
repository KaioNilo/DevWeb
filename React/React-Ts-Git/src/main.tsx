import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Págs
import Home from './routes/home.tsx';

const router = createBrowserRouter([
  {
    //Pág Base
    path: "/",
    element: <App />,
    
    //Demais Págs
    children: [
      {
        path: "/",
        element: <Home />,
        
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
