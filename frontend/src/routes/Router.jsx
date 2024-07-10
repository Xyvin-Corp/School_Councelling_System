import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import DashboardPage from "../pages/DashboardPage";
import StudentPage from "../pages/StudentPage";
import App from "../App";

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
]);

export default router;
