import React, { useState, useEffect } from "react";
import "./AttendanceTracker.css";

const defaultTargetAttendance = 75;
const defaultClassesPerDay = 7;

const AttendanceTracker = () => {
  const [targetAttendance, setTargetAttendance] = useState(
    defaultTargetAttendance
  );
  const [classesAttended, setClassesAttended] = useState(0);
  const [totalClasses, setTotalClasses] = useState(0);
  const [classesPerDay, setClassesPerDay] = useState(defaultClassesPerDay);
  const [oldAttendance, setOldAttendance] = useState(0);
  const [newAttendance, setNewAttendance] = useState(0);
  const [classCount, setClassCount] = useState(0);

  useEffect(() => {
    updateBunkingInfo();
  }, [targetAttendance, classesAttended, totalClasses, classesPerDay]);

  const classesToBunk = (present, total) => {
    return Math.floor(
      (100 * present - targetAttendance * total) / targetAttendance
    );
  };

  const classesToAttend = (present, total) => {
    return Math.ceil(
      (targetAttendance * total - 100 * present) / (100 - targetAttendance)
    );
  };

  const handlePresentClick = () => {
    setClassesAttended(classesAttended + 1);
    setTotalClasses(totalClasses + 1);
  };

  const handleAbsentClick = () => {
    setTotalClasses(totalClasses + 1);
  };

  const updateBunkingInfo = () => {
    const bunkCount = classesToBunk(classesAttended, totalClasses);

    const curAttendance = (classesAttended / totalClasses) * 100;
    let _newAttendance = (classesAttended / (totalClasses + bunkCount)) * 100;

    const toAttendCount = classesToAttend(classesAttended, totalClasses);

    setClassCount(bunkCount);

    if (curAttendance < targetAttendance) {
      _newAttendance =
        ((classesAttended + toAttendCount) / (totalClasses + toAttendCount)) *
        100;
      setClassCount(toAttendCount);
    }

    setOldAttendance(curAttendance);
    setNewAttendance(_newAttendance);
  };

  const BunkInfo = () => {
    const days = (classCount / classesPerDay).toFixed(2);
    if (oldAttendance > newAttendance) {
      return (
        <>
          <br></br>
          To Gain {targetAttendance}
          <br></br>
          You Can Bunk {classCount} Classes, {days} days
          <br></br>
          {oldAttendance.toFixed(2)} &#8594; {newAttendance.toFixed(2)}
        </>
      );
    }
    return (
      <>
        <br></br>
        To Gain {targetAttendance}
        <br></br>
        You Must Attend {classCount} Classes, {days} Days<br></br>
        {oldAttendance.toFixed(2)} &#8594; {newAttendance.toFixed(2)}
      </>
    );
  };

  return (
    <div className="attendance-tracker-container">
      <div className="header-container">
        <h1 className="attendance-heading">Attendance Calculator</h1>
      </div>

      <div className="input-container">
        <label htmlFor="targetAttendance">Target Attendance:</label>
        <input
          type="number"
          id="targetAttendance"
          value={targetAttendance}
          onChange={(e) => setTargetAttendance(+e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="classesAttended">Classes Attended:</label>
        <input
          type="number"
          id="classesAttended"
          value={classesAttended}
          onChange={(e) => setClassesAttended(+e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="totalClasses">Total Classes:</label>
        <input
          type="number"
          id="totalClasses"
          value={totalClasses}
          onChange={(e) => setTotalClasses(+e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="classesPerDay">Classes Per Day:</label>
        <input
          type="number"
          id="classesPerDay"
          value={classesPerDay}
          onChange={(e) => setClassesPerDay(+e.target.value)}
        />
      </div>

      <div className="buttons-container">
        <button onClick={handlePresentClick}>Present</button>
        <button onClick={handleAbsentClick}>Absent</button>
      </div>

      <BunkInfo />

      <div className="footer-container">
        <p>
          {" "}
          View
          <a
            href="https://github.com/21ThousandProof/AttendanceCalculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;Source Code&nbsp;
          </a>
          On Github
        </p>
      </div>
    </div>
  );
};

export default AttendanceTracker;
