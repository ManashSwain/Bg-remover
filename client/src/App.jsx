import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Rootlayout from "./layouts/Rootlayout";
import Homepage from "./pages/Homepage";
import Resultpage from "./pages/Resultpage";
import BuyCredit from "./pages/BuyCredit";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout/>,
      children : [
        {
          path: "/",
          element: <Homepage/>,
        },
        {
          path : "/result",
          element : <Resultpage/>
        },
        {
          path : "/buy",
          element : <BuyCredit/>
        }
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
