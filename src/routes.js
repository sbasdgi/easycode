
import DashboardLayout from "./components/Dashboard";
import Home from "pages/Home";
import { Navigate, useRoutes, Routes } from "react-router-dom";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Route } from "react-router-dom";
import Pishkhan from "screens/Pishkhan";
import Profile from "screens/Profile";
import TeacherCourses from "screens/TeacherCourses";
import IncreaseCredit from "screens/IncreaseCredit";
import CourseDetails from "pages/CourseDetails";




export const navConfig = [
  {
    path: "/my-account",
    url: "/my-account",
    title: "dashboard",
    inSidebar: true,
    element: <DashboardLayout />,
    icon: <DashboardRoundedIcon fontSize="small" />,
    children: [
      { element: <Navigate to="/my-account" replace /> },
      {
        path: "/my-account/home",
        url: "/my-account/home",
        title: "pishkhan",
        element: <Pishkhan />,
        inSidebar: true,
        icon: <HomeOutlinedIcon />,
      },
      {
        path: "/my-account/profile",
        url: "/my-account/profile",
        title: "profile",
        element: <Profile />,
        inSidebar: true,
        icon: <PersonOutlineOutlinedIcon />,
      },
      {
        path: "/my-account/teacher-courses",
        url: "/my-account/teacher-courses",
        title: "courses",
        element: <TeacherCourses />,
        inSidebar: true,
        icon: <FolderCopyOutlinedIcon />,
      },
      {
        path: "/my-account/increase-credit",
        url: "/my-account/increase-credit",
        title: "credit",
        element: <IncreaseCredit />,
        inSidebar: true,
        icon: <PaymentOutlinedIcon />,
      },
      {
        path: "orders",
        url: "/my-account/logout",
        title: "logout",
        // element: <Orders />,
        inSidebar: true,
        icon: <LogoutOutlinedIcon />,
      },
    ],
  },
];

// export default function Router() {

//   const routes = useRoutes([
//     {
//       path: "/",
//       //   element: <DashboardLayout />,
//       children: [
//         { element: <Navigate to="/" />, index: true },
//         { path: "app", element: <Home /> },
//         { path: "easycode", element: <Home /> },
//         //   { path: "settings", element: <Setting /> },
//         //   { path: "404", element: <ErrorPage /> },
//       ],
//     },

//     <Routes>
//       {navConfig.map((route, i) => (
//         <Route key={i} path={route.path} element={route.element }>
//           {route.children &&
//             route.children.map((child, c) => (
//               <Route key={c} path={child.path} element={child.element} />
//             ))}
//         </Route>
//       ))}
//       <Route path="*" element={<Navigate to="/404" replace />} />
//     </Routes>,
//   ]);

//   return routes;
// }


const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/course-details/:id" element={<CourseDetails  />} />
      {navConfig.map((route, i) => (
        <Route key={i} path={route.path} element={route.element}>
          {route.children &&
            route.children.map((child, c) => (
              <Route key={c} path={child.path} element={child.element} />
            ))}
        </Route>
      ))}
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default Router;