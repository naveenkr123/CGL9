import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OTP from "./pages/OTP";
import PlayerDetails from "./pages/PlayerDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/otp-verification" element={<OTP />} />
          <Route path="/player-details" element={<PlayerDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
