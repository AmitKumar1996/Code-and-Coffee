import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx';
import Home from "./components/Home/home.jsx"; // ✅ Corrected
import About from "./components/About/About.jsx"; // ✅ Corrected

// Define router
const router = createBrowserRouter( [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
] );

// Render the app
createRoot( document.getElementById( 'root' ) ).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
