import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import DashboardPage from "../pages/DashboardPage";
import StudentPage from "../pages/StudentPage";

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
    path: "/user/student",
    element: (
      <Layout>
        <StudentPage />
      </Layout>
    ),
  },
]);

export default router;
