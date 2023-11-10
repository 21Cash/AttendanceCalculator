import React, { useState } from "react";
import "./AttendanceTracker.css";

const AttendanceTracker = () => {
  const [minAttendance, setMinAttendance] = useState(0);
  const [targetAttendance, setTargetAttendance] = useState(0);
  const [classesAttended, setClassesAttended] = useState(0);
  const [totalClasses, setTotalClasses] = useState(0);
  const [classesPerDay, setClassesPerDay] = useState(0);

  const [bunkingInfo, setBunkingInfo] = useState("");

  const handlePresentClick = () => {
    // Increment the classesAttended when the "Present" button is clicked
    setClassesAttended(classesAttended + 1, 10);
    alert(typeof classesAttended);
    updateBunkingInfo();
  };

  const handleAbsentClick = () => {
    // Increment the totalClasses when the "Absent" button is clicked
    setTotalClasses(totalClasses + 1);

    // Calculate new attendance percentage and update bunkingInfo
    updateBunkingInfo();
  };

  const updateBunkingInfo = () => {
    // Calculate new attendance percentage
    const newAttendance = ((classesAttended + 1) / totalClasses) * 100;

    // Set bunkingInfo with the text template
    setBunkingInfo(
      `You can bunk 1 class. Current attendance: ${newAttendance.toFixed(2)}%`
    );
  };

  return (
    <div className="attendance-tracker-container">
      <div className="input-container">
        <label htmlFor="minAttendance">Min Attendance:</label>
        <input
          type="number"
          id="minAttendance"
          value={minAttendance}
          onChange={(e) => setMinAttendance(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="targetAttendance">Target Attendance:</label>
        <input
          type="number"
          id="targetAttendance"
          value={targetAttendance}
          onChange={(e) => setTargetAttendance(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="classesAttended">Classes Attended:</label>
        <input
          type="number"
          id="classesAttended"
          value={classesAttended}
          onChange={(e) => setClassesAttended(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="totalClasses">Total Classes:</label>
        <input
          type="number"
          id="totalClasses"
          value={totalClasses}
          onChange={(e) => setTotalClasses(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="classesPerDay">Classes Per Day:</label>
        <input
          type="number"
          id="classesPerDay"
          value={classesPerDay}
          onChange={(e) => setClassesPerDay(e.target.value)}
        />
      </div>

      <div className="buttons-container">
        <button onClick={handlePresentClick}>Present</button>
        <button onClick={handleAbsentClick}>Absent</button>
      </div>

      {/* Display bunkingInfo */}
      {bunkingInfo && <div className="bunking-info">{bunkingInfo}</div>}
    </div>
  );
};

export default AttendanceTracker;
