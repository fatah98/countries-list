import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./Error404";
import { PageLayout } from "./Layout/PageLayout";
import DetailsPage from "./pages/DetailsPage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/details/:cca_code" element={<DetailsPage />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;

("/details/:cca_code");
