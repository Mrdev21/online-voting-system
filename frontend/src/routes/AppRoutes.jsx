import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

import AdminDashboard from "../pages/admin/Dashboard";
import Candidates from "../pages/admin/Candidates";
import Users from "../pages/admin/Users";
import Results from "../pages/admin/Results";
import Settings from "../pages/admin/Settings";
import Elections from "../pages/admin/Elections";

import VoterLayout from "../layouts/VoterLayout";

import VoterElections from "../pages/voter/Elections";
import VoterResults from "../pages/voter/Results";
import VoterProfile from "../pages/voter/Profile";


import VoterDashboard from "../pages/voter/Dashboard";
import Vote from "../pages/voter/Vote";

import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import FAQ from "../pages/FAQ";

import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/faq" element={<FAQ />} />
      </Route>

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="ADMIN">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="candidates" element={<Candidates />} />
        <Route path="users" element={<Users />} />
        <Route path="elections" element={<Elections />} />
        <Route path="results" element={<Results />} />
        <Route path="settings" element={<Settings />} />

      </Route>

      {/* Voter Routes */}
      <Route
        path="/voter"
        element={
          <ProtectedRoute role="VOTER">
            <VoterLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<VoterDashboard />} />

        {/* Vote page (abhi dashboard hi use karenge) */}
        <Route path="vote" element={<Vote />} />

        <Route path="elections" element={<VoterElections />} />

        <Route path="results" element={<VoterResults />} />

        <Route path="profile" element={<VoterProfile />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;