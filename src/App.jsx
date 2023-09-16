import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ErrorElement from "./ui/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "*", element: <ErrorElement /> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
