import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/MainPages/Home/Home";
import ErrorPage from "./pages/Error";
import AboutUs from "./pages/MainPages/AboutUs/AboutUs";
import Companies from "./pages/MainPages/Companies/Companies";
import Services from "./pages/MainPages/Services/Services";
import Careers from "./pages/MainPages/Carrers/Careers";
import RegisterPage from "./pages/MainPages/Register/Register";
import Construction from "./pages/MainPages/Construction/Contruction";
import KnowledgeHub from "./pages/KnowledgeHub/KnowledgeHub";
import Internships from "./pages/KnowledgeHub/Internships";
import EduTech from "./pages/KnowledgeHub/EduTech";
import ContactUs from "./pages/MainPages/ContactUs/ContactUs";
import CourseDetails from "./pages/KnowledgeHub/CourseDetails/CourseDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/about",
          element: <AboutUs />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/companies",
          element: <Companies />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "construction",
              element: <Construction />,
              errorElement: <ErrorPage />,
            },
          ],
        },
        {
          path: "/construction",
          element: <Construction />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/services",
          element: <Services />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/careers",
          element: <Careers />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
          errorElement: <ErrorPage />,
        },

        // {
        //   path: "/signup",
        //   element: <SignUp />,
        //   errorElement: <ErrorPage />,
        // },
        // {
        //   path: "/signin",
        //   element: <SignIn />,
        //   errorElement: <ErrorPage />,
        // },
        {
          path: "/knowledgeHub",
          element: <KnowledgeHub />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/edutech",
          // index: true,
          element: <EduTech />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/edutech/:courseId",
          element: <CourseDetails />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/internships",
          element: <Internships />,
          errorElement: <ErrorPage />,
        },
        // {
        //   path: "/internships/:internshipId",
        //   element: <CIDetails />,
        //   errorElement: <ErrorPage />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
