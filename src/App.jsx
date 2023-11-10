import { BrowserRouter, Routes, Route } from "react-router-dom";
import AttendanceTracker from "./Components/AttendanceTracker/AttendanceTracker.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/AttendanceCalculator"
          element={<AttendanceTracker />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
