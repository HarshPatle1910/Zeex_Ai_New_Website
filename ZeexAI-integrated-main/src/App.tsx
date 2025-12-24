import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />  
      <Footer />      
    </BrowserRouter>
  );
}

export default App;
