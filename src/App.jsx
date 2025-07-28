import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/landing-page/landing-page";
import Login from "./pages/auth/login";
import JobSeekerDashboard from "./pages/job-seeker/job-seeker-dashboard";
import JobDetails from "./pages/job-seeker/job-details";
import SavedJobs from "./pages/job-seeker/saved-jobs";
import UserProfile from "./pages/job-seeker/user-profile";
import EmployerDashboard from "./pages/employer/employer-dashboard";
import JobPostingForm from "./pages/employer/job-posting-form";
import ManageJobs from "./pages/employer/manage-jobs";
import ApplicationViewer from "./pages/employer/application-viewer";
import ProtectedRoute from "./routes/protected-route";
import EmployerProfilePage from "./pages/employer/employer-profile-page";
import SignUp from "./pages/auth/signup";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/*Public routes*/}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login />} />

          <Route path="/find-jobs" element={<JobSeekerDashboard />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/saved-jobs" element={<SavedJobs />} />
          <Route path="/profile" element={<UserProfile />} />

          {/*Protected Routes*/}
          <Route element={<ProtectedRoute requiredRole="employer" />}>
            <Route path="/employer-dashboard" element={<EmployerDashboard />} />
            <Route path="/post-job" element={<JobPostingForm />} />
            <Route path="/manage-jobs" element={<ManageJobs />} />
            <Route path="/applicants" element={<ApplicationViewer />} />
            <Route path="/company-profile" element={<EmployerProfilePage />} />
          </Route>

          {/*Catch all other routes*/}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>

      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </div>
  );
};

export default App;
