import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Dashbaord from "./components/Dashbaord";
import Assignments from "./components/Assignments";
import { AuthProvider } from "./context/AuthProvider";
import { RequireAuth } from "./context/RequireAuth";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import Signin from "./components/Signin";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Dashbaord />
              </RequireAuth>
            }
          >
            <Route index path="/feed" element={<Feed />} />
            <Route path="/assignments" element={<Assignments />} />
          </Route>

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
