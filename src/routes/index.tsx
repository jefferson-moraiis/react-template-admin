import { createBrowserRouter } from "react-router-dom";
  
export const router = createBrowserRouter([
    {
        path: "*",
        element: <div>Hello World!</div>,
      },
    {
      path: "/dev",
      element: <div>Hello Jefferson!</div>,
    },
  ]);
