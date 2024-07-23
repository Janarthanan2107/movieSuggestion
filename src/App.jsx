import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, CompanyInfo, Login, Signup, Root } from "./pages"
import { NotFound } from './common';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "signUp",
        element: <Signup />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "companyInfo",
        element: <CompanyInfo />
      }
    ]
  }
])

const App = () => (
  <RouterProvider router={router} />
);

export default App;
