import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import DashboardPage from "../pages/DashboardPage";
import StudentPage from "../pages/StudentPage";
import App from "../App";
import { Counselor } from "../pages/Counselor";
import CasesSection from "../pages/CasesSection";
import Events from "../pages/Events";
import Settings from "../pages/Settings";
import Report from '../pages/Report';
import Notification from "../pages/Notification";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <DashboardPage />
      </Layout>
    ),
  },
  {
    path: "/app",
    element: (
    
        <App />
    
    ),
  },
  {
    path: "/user/student",
    element: (
      <Layout>
        <StudentPage />
      </Layout>
    ),
  },
  {
    path: "/user/counselor",
    element: (
      <Layout>
        <Counselor />
      </Layout>
    ),
  },
  {
    path: "/casesstudies",
    element: (
      <Layout>
        <CasesSection />
      </Layout>
    ),
  },
  {
    path: "/events",
    element: (
      <Layout>
        <Events />
      </Layout>
    ),
  },
  {
    path: "/report",
    element: (
      <Layout>
        <Report />
      </Layout>
    ),
  },
  {
    path: "/notification",
    element: (
      <Layout>
        <Notification />
      </Layout>
    ),
  },
  {
    path: "/settings",
    element: (
      <Layout>
        <Settings />
      </Layout>
    ),
  },
]);

export default router;
