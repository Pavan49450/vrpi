import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  // useNavigate,
} from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/MainPages/Home/Home";
import ErrorPage from "./pages/Error";
import AboutUs from "./pages/MainPages/AboutUs/AboutUs";
import Companies from "./pages/MainPages/Companies/Companies";
import Services from "./pages/MainPages/Services/Services";
import Careers from "./pages/MainPages/Carrers/Careers";
// import RegisterPage from "./pages/MainPages/Register/Register";
import Construction from "./pages/MainPages/Construction/Contruction";
import KnowledgeHub from "./pages/KnowledgeHub/KnowledgeHub";
import Internships from "./pages/KnowledgeHub/Internships";
import EduTech from "./pages/KnowledgeHub/EduTech";
import ContactUs from "./pages/MainPages/ContactUs/ContactUs";
import CourseDetails from "./pages/KnowledgeHub/CourseDetails/CourseDetails";
import SignUp from "./pages/Login&Signup/SignUp/SignUp";

import Login from "./pages/Login&Signup/Login/Login";
import VerificationPage from "./pages/MainPages/VerificationPage/VerificationPage";
import CompanyDetails from "./pages/Login&Signup/CompanyDetails/CompanyDetails";
import EducationalDetails from "./pages/Login&Signup/EducationalDetails/EducationalDetails";
import DashboardRoot from "./pages/Dashboard/DashboardRoot";
import MyDashboard from "./pages/Dashboard/MyDashboard/MyDashboard";

import HelpAndSupport from "./pages/Dashboard/HelpAndSupport/HelpAndSupport";
import DashboardCourses from "./pages/Dashboard/DashboardCourses/DashboardCourses";
import DashboardInternships from "./pages/Dashboard/DashboardInternships/DashboardInternships";
import ProfileSettings from "./pages/Dashboard/ProfileSettings/ProfileSettings";
import ForgetPassword from "./pages/Login&Signup/Login/ForgetPassword/ForgetPassword";
import CreateNewPassword from "./pages/Login&Signup/Login/CreateNewPassword/CreateNewPassword";
import MandatoryCertificates from "./pages/Login&Signup/MandatoryCertificates/MandatoryCertificates";
import PurchaseHistory from "./pages/Dashboard/PurchaseHistory/PurchaseHistory";

function App() {
  // const navigate = useNavigate();

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
        // {
        //   path: "/register",
        //   element: <RegisterPage />,
        //   errorElement: <ErrorPage />,
        // },

        {
          path: "/signup",
          element: <SignUp />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/login",
          element: <Login />,
          errorElement: <ErrorPage />,
        },

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

        {
          path: "/educationalDetails",
          element: <EducationalDetails />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/companyDetails",
          element: <CompanyDetails />,
          errorElement: <ErrorPage />,
        },

        // {
        //   path: "/internships/:internshipId",
        //   element: <CIDetails />,
        //   errorElement: <ErrorPage />,
        // },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardRoot />,
      errorElement: <ErrorPage />,
      children: [
        // { index: true, element: () => navigate("/dashboard/myDashboard") },
        {
          // index: true,
          path: "/dashboard",
          element: <MyDashboard />,
          errorElement: <ErrorPage />,
        },
        {
          path: "courses",
          element: <DashboardCourses />,
          errorElement: <ErrorPage />,
        },
        {
          path: "internships",
          element: <DashboardInternships />,
          errorElement: <ErrorPage />,
        },
        // {
        //   path: "settings",
        //   element: <ProfileSettings />,
        //   errorElement: <ErrorPage />,
        // },
        {
          path: "purchaseHistory",
          element: <PurchaseHistory />,
          errorElement: <ErrorPage />,
        },
        {
          path: "helpAndSupport",
          element: <HelpAndSupport />,
          errorElement: <ErrorPage />,
        },
      ],
    },
    {
      path: "/resetPassword/:email/:password",
      element: <CreateNewPassword />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/forgetPassword",
      element: <ForgetPassword />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/vrpi-user/verify-account/:email/:otp",
      element: <VerificationPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/mandatoryCertificates",
      element: <MandatoryCertificates />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
