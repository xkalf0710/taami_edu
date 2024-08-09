import React from "react";

import  ReactDOM from "react-dom/client";
import {createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./app/page";
import Japanese from "./app/japanese";
import Programming from "./app/programming";



const router = createBrowserRouter([
    {
        path: "/", 
        element: <HomePage />
    }, 
    {
        path: "/japanese", 
        element: <Japanese />
    },
    {
        path: "/programming", 
        element: <Programming />
    }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);