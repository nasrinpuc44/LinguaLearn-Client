import "./App.css";
import { Button } from "./components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./pages/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/Registration/Registration";
import HomePage from "./pages/Home/Home";
import MyBookedTutorsPage from "./pages/MyBooking/MyBooking";
import AddTutorialPage from "./pages/AddTutorials/AddTutorials";
import FindTutorsPage from "./pages/FindTutorials/FindTutorials";
import MyTutorialsPage from "./pages/MyTutorials/MyTutorials";
import TutorDetailsPage from "./pages/TutorDetailsPage/TutorDetailsPage";
import Authprovider from "./context/AuthProvider";
 import { ToastContainer } from 'react-toastify';
function App() {
  const Routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>,
        },
        {
          path: "/Login",
          element: <LoginPage></LoginPage>,
        },
        {
          path: "/Registration",
          element: <RegisterPage></RegisterPage>,
        },
        {
          path: "/my-booked-tutors",
          element: <MyBookedTutorsPage></MyBookedTutorsPage>,
        },
        {
          path: "/add-tutorial",
          element: <AddTutorialPage></AddTutorialPage>,
        },
        {
          path: "/find-tutors",
          element: <FindTutorsPage></FindTutorsPage>,
        },
        {
          path: "/my-tutorials",
          element: <MyTutorialsPage></MyTutorialsPage>,
        },
        {
          path: "tutors/:id",
          element: <TutorDetailsPage></TutorDetailsPage>,
          loader: ({ params }) => {
            return params;
          },
        },
      ],
    },
  ]);

  return (
    <>
     <ToastContainer />
      <Authprovider>
        <RouterProvider router={Routers}></RouterProvider>{" "}
      </Authprovider>
    </>
  );
}

export default App;
