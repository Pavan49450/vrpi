import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/MainPages/Home";
import ErrorPage from "./pages/Error";
import AboutUs from "./pages/MainPages/AboutUs";
import Companies from "./pages/MainPages/Companies";
import Services from "./pages/MainPages/Services";
import Careers from "./pages/MainPages/Careers";
import ContactUs from "./pages/MainPages/ContactUs";
import RegisterPage from "./pages/MainPages/Register";
import Construction from "./pages/MainPages/Contruction";
import KnowledgeHub from "./pages/KnowledgeHub/KnowledgeHub";
import Internships from "./pages/KnowledgeHub/Internships";
import EduTech from "./pages/KnowledgeHub/EduTech";

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
          path: "edutech",
          // index: true,
          element: <EduTech />,
          errorElement: <ErrorPage />,
        },
        {
          path: "internships",
          element: <Internships />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
