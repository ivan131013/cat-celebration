import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./pages/Main";
import DefaultLayout from "./UI/layouts/DefaultLayout";
import "./UI/fonts/fonts.css";
import CustomCursor from "./features/customCursor/components/CustomCursor";

const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <DefaultLayout>
        <Main />
      </DefaultLayout>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
      <CustomCursor />
    </ChakraProvider>
  );
}

export default App;
