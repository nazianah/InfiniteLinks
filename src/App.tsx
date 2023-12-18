import { Routes, Route } from "react-router-dom";

import "./globals.css";
import SigninForm from "./_auth/forms/Signinform";
import SignupForm from "./_auth/forms/Signupform";
import { Home } from "./_root/pages/";
import "./globals.css";
import { Authlayout } from "./_auth/Authlayout";
import { Rootlayout } from "./_root/Rootlayout";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* pubilc routes */}
        <Route element={<Authlayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-in" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<Rootlayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
