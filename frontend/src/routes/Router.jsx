import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/Admin/DashboardPage";
import App from "../App";
import SessionSinglePage from "../pages/Admin/CasesAndSession/SessionSinglePage";
import AdminLayout from "../layout/AdminLayout";
import CasesSection from "../pages/Admin/CasesAndSession/CasesSection";
import { Counselor } from "../pages/Admin/UserManagement/Counselor/Counselor";
import CounselorSinglePage from "../pages/Admin/UserManagement/Counselor/CounselorSinglePage";
import StudentPage from "../pages/Admin/UserManagement/Student/StudentPage";
import StudentSinglePage from "../pages/Admin/UserManagement/Student/StudentSinglePage";
import SessionPage from "../pages/Admin/CasesAndSession/SessionPage";
import Notification from "../pages/Admin/Notification";
import Report from "../pages/Admin/Report";
import Settings from "../pages/Admin/Settings";
import Events from "../pages/Admin/Events/Events";
import EventsSinglepage from "../pages/Admin/Events/EventsSinglepage";
import StudentLayout from "../layout/StudentLayout";
import BookAppointment from "../pages/Student/BookAppointment";
import StudentSession from "../pages/Student/Session/StudentSession";
import StudentReport from "../pages/Student/Reports/StudentReport";
import StudentEvents from "../pages/Student/Events/StudentEvents";
import StudentSettings from "../pages/Student/StudentSettings";
import CounselorLayout from "../layout/CounselorLayout";
import UpcomingSession from "../pages/Counselor/UpcomingSession/UpcomingSession";
import CounselorSession from "../pages/Counselor/Session/CounselorSession";
import CounselorReport from "../pages/Counselor/Report/CounselorReport";
import CounselorEvent from "../pages/Counselor/Event/CounselorEvent";
import CounselorSettings from "../pages/Counselor/CounselorSettings";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AdminLayout>
        <DashboardPage />
      </AdminLayout>
    ),
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/user/student",
    element: (
      <AdminLayout>
        <StudentPage />
      </AdminLayout>
    ),
  },
  {
    path: "/user/student/:id",
    element: (
      <AdminLayout>
        <StudentSinglePage />
      </AdminLayout>
    ),
  },
  {
    path: "/user/counselor",
    element: (
      <AdminLayout>
        <Counselor />
      </AdminLayout>
    ),
  },
  {
    path: "/user/counselor/:id",
    element: (
      <AdminLayout>
        <CounselorSinglePage />
      </AdminLayout>
    ),
  },
  {
    path: "/casesstudies",
    element: (
      <AdminLayout>
        <CasesSection />
      </AdminLayout>
    ),
  },
  {
    path: "/cases/case/:id",
    element: (
      <AdminLayout>
        <SessionPage />
      </AdminLayout>
    ),
  },
  {
    path: "/cases/session/:id",
    element: (
      <AdminLayout>
        <SessionSinglePage />
      </AdminLayout>
    ),
  },
  {
    path: "/events",
    element: (
      <AdminLayout>
        <Events />
      </AdminLayout>
    ),
  },
  {
    path: "/events/:id",
    element: (
      <AdminLayout>
        <EventsSinglepage />
      </AdminLayout>
    ),
  },
  {
    path: "/report",
    element: (
      <AdminLayout>
        <Report />
      </AdminLayout>
    ),
  },
  {
    path: "/notification",
    element: (
      <AdminLayout>
        <Notification />
      </AdminLayout>
    ),
  },
  {
    path: "/settings",
    element: (
      <AdminLayout>
        <Settings />
      </AdminLayout>
    ),
  },

  // Student Module Routing

  {
    path: "/student/bookappoinment",
    element: (
      <StudentLayout>
        <BookAppointment />
      </StudentLayout>
    ),
  },
  {
    path: "/student/session",
    element: (
      <StudentLayout>
        <StudentSession />
      </StudentLayout>
    ),
  },
  {
    path: "/student/reports",
    element: (
      <StudentLayout>
        <StudentReport />
      </StudentLayout>
    ),
  },
  {
    path: "/student/events",
    element: (
      <StudentLayout>
        <StudentEvents />
      </StudentLayout>
    ),
  },
  {
    path: "/student/settings",
    element: (
      <StudentLayout>
        <StudentSettings />
      </StudentLayout>
    ),
  },
  // counselor Module Routing
  {
    path: "/counselor/upcomminSession",
    element: (
      <CounselorLayout>
        <UpcomingSession />
      </CounselorLayout>
    ),
  },
  {
    path: "/counselor/session",
    element: (
      <CounselorLayout>
        <CounselorSession />
      </CounselorLayout>
    ),
  },
  {
    path: "/counselor/report",
    element: (
      <CounselorLayout>
        <CounselorReport />
      </CounselorLayout>
    ),
  },
  {
    path: "/counselor/event",
    element: (
      <CounselorLayout>
        <CounselorEvent />
      </CounselorLayout>
    ),
  },
  {
    path: "/counselor/setting",
    element: (
      <CounselorLayout>
        <CounselorSettings />
      </CounselorLayout>
    ),
  },
]);

export default router;
