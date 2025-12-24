import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index"; 
import NotFound from "../pages/NotFound"; 
import Services from "../pages/Services/Services";
import Privacy from "../pages/Privacy/Privacy";
import Terms from "../pages/Terms/terms";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import BlogDetail from "../pages/BlogDetail/BlogDetail";
import Contact from "../pages/Contact/Contact";
import Career from "../pages/Career/Career";
import Solution from "../pages/Solution/Solution";
import Login from "../pages/Login/Login";
import ApplicationsAdmin from "../pages/Admin/Applications";
import ProtectedRoute from "../components/common/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Privacy" element={<Privacy />} />
      <Route path="/Terms" element={<Terms />} />
      <Route path="/About" element={<About />} />
      <Route path="/Blogs" element={<Blogs />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/Solution" element={<Solution />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Career" element={<Career />} />
      <Route path="/login" element={<Login />} />
      <Route 
        path="/admin/applications" 
        element={
          <ProtectedRoute>
            <ApplicationsAdmin />
          </ProtectedRoute>
        } 
      />
      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRoutes;
