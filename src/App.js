import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/MainPages/Home/Home";
import ErrorPage from "./pages/Error";
import AboutUs from "./pages/MainPages/AboutUs/AboutUs";
import Companies from "./pages/MainPages/Companies/Companies";
import Services from "./pages/MainPages/Services/Services";
import Careers from "./pages/MainPages/Carrers/Careers";
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
import ForgetPassword from "./pages/Login&Signup/Login/ForgetPassword/ForgetPassword";
import CreateNewPassword from "./pages/Login&Signup/Login/CreateNewPassword/CreateNewPassword";
import MandatoryCertificates from "./pages/Login&Signup/MandatoryCertificates/MandatoryCertificates";
import PurchaseHistory from "./pages/Dashboard/PurchaseHistory/PurchaseHistory";
import { useSelector } from "react-redux";
import ProfilePage from "./pages/Dashboard/ProfilePage/ProfilePage";
import UpdateUserDetails from "./pages/MainPages/UpdateUserDetails/UpdateUserDetails";
import { useEffect } from "react";
import { SaveUserDataInRedux } from "./data/user";

function App() {
  // const navigate = useNavigate();

  const isVRPIUserLoggedIn = useSelector(
    (state) => state.login.isVRPIUserLoggedIn
  );

  // useEffect(() => {
  //   SaveUserDataInRedux();
  // });

  const GeneralErrorData = {
    title: "Oh no, Something went wrong",
    message: "The issue may be Temporary. Please go back and try again",
    image: "commonErrorPage.png",
    // button: {
    //   title: "Go Back",
    //   actions: () => {
    //     navigate(-1);
    //   },
    // },
  };
  const PageNotFoundErrorData = {
    title: "You’re at the wrong place!",
    message:
      "Please click on the below button, where it redirects to previous page.",
    image: "pageNotFound.png",
    // button: {
    //   title: "Go Back",
    //   actions: () => {
    //     navigate(-1);
    //   },
    // },
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage errorData={GeneralErrorData} />,
      children: [
        {
          index: true,
          element: <HomePage />,
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },

        {
          path: "/about",
          element: <AboutUs />,
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },
        {
          path: "/companies",
          element: <Companies />,
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
          children: [
            {
              path: "construction",
              element: <Construction />,
              errorElement: <ErrorPage errorData={GeneralErrorData} />,
            },
          ],
        },
        {
          path: "/construction",
          element: <Construction />,
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },
        {
          path: "/services",
          element: <Services />,
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },
        {
          path: "/careers",
          element: <Careers />,
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },
        // {
        //   path: "/register",
        //   element: <RegisterPage />,
        //   errorElement: <ErrorPage />,
        // },

        {
          path: "/signup",
          element: isVRPIUserLoggedIn ? (
            <ErrorPage errorData={PageNotFoundErrorData} />
          ) : (
            <SignUp />
          ),
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },
        {
          path: "/login",
          element: isVRPIUserLoggedIn ? (
            <ErrorPage errorData={PageNotFoundErrorData} />
          ) : (
            <Login />
          ),
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },

        {
          path: "/knowledgeHub",
          element: <KnowledgeHub />,
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },
        {
          path: "/edutech",
          // index: true,
          element: <EduTech />,
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },
        {
          path: "/edutech/:courseId",
          element: <CourseDetails />,
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },
        {
          path: "/internships",
          element: <Internships />,
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },

        {
          path: "/educationalDetails",
          element: <EducationalDetails />,
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },
        {
          path: "/companyDetails",
          element: <CompanyDetails />,
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },

        // {
        //   path: "/internships/:internshipId",
        //   element: <CIDetails />,
        //   errorElement: <ErrorPage />,
        // },
      ],
    },
    {
      path: "/editProfileDetails",
      element: isVRPIUserLoggedIn ? <UpdateUserDetails /> : <ErrorPage />,
      errorElement: <ErrorPage errorData={GeneralErrorData} />,
    },
    {
      path: "/dashboard",
      element: isVRPIUserLoggedIn ? (
        <DashboardRoot />
      ) : (
        <ErrorPage errorData={GeneralErrorData} />
      ),
      errorElement: <ErrorPage errorData={GeneralErrorData} />,
      children: [
        {
          path: "/dashboard",
          element: <MyDashboard />,
          errorElement: <ErrorPage errorData={PageNotFoundErrorData} />,
        },
        {
          path: "courses",
          element: <DashboardCourses />,
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },
        {
          path: "internships",
          element: <DashboardInternships />,
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },
        // {
        //   path: "settings",
        //   element: <ProfileSettings />,
        //   errorElement: <ErrorPage />,
        // },
        {
          path: "purchaseHistory",
          element: <PurchaseHistory />,
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },
        {
          path: "helpAndSupport",
          element: <HelpAndSupport />,
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },
        {
          path: "studentProfile",
          element: isVRPIUserLoggedIn ? (
            <ProfilePage />
          ) : (
            <ErrorPage errorData={GeneralErrorData} />
          ),
          errorElement: <ErrorPage errorData={GeneralErrorData} />,
        },
      ],
    },

    {
      path: "/resetPassword/:email/:password",
      element: <CreateNewPassword />,
      errorElement: <ErrorPage errorData={GeneralErrorData} />,
    },
    {
      path: "/forgetPassword",
      element: !isVRPIUserLoggedIn ? (
        <ForgetPassword />
      ) : (
        <ErrorPage errorData={GeneralErrorData} />
      ),
      errorElement: <ErrorPage errorData={GeneralErrorData} />,
    },
    {
      path: "/vrpi-user/verify-account/:email/:otp",
      element: <VerificationPage />,
      errorElement: <ErrorPage errorData={GeneralErrorData} />,
    },
    {
      path: "/mandatoryCertificates",
      element: <MandatoryCertificates />,
      errorElement: <ErrorPage errorData={GeneralErrorData} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
