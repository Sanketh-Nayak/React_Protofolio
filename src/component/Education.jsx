import React from "react";
import "../public/Education.css";
function Education() {
  const educationList = [
    {
      degree: "Master of Computer Applications",
      school: "Manipal Institute of Technology, Manipal",
      year: "2025 – current",
      Gpa: 7.9,
    },
    {
      degree: "Bachelor of Computer Applications",
      school: "Bhandarkar's Arts and Science College, Kundapura",
      year: "2022 - 2025",
      Gpa: 8.73,
    },
    {
      degree: "PUC",
      school: "Governement PU college, Kundapura",
      year: "2021 - 2022",
      percentage: 70,
    },
    {
      degree: "SSLC",
      school: "Karnataka Public School, Koteshwara",
      year: "2019 - 2020",
      percentage: 76.46,
    },
  ];
  return (
    <section className="wrapper" id="wrapper1">
      <div className="heading">
        <h1>Education</h1>
      </div>
      <div>
        {educationList.map((item, index) => (
          <div key={index} className="edu-card">
            <h3>{item.degree}</h3>
            <p>
              {item.school} <br></br>
              <span>{item.year}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
