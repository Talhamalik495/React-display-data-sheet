import React from "react"
function Card() {
    const studentData = [
        {
            studentName: "Syed Saleem Raza Shah",
            campus: "Head Office",
            RollNo: 173503,
            Class: "Web Mobile Application Development"
        },
        {
            studentName: "Syed Zohaib Ali Kazmi ",
            campus: "Head Office",
            RollNo: 192602,
            Class: "Web Mobile Application Development"
        },
        {
            studentName: " Mirza Abdullah Baig ",
            campus: "Head Office",
            RollNo: 179620,
            Class: "Web Mobile Application Development"
        },
        {
            studentName: "Okasha Habib",
            campus: "Head Office",
            RollNo: 212364,
            Class: "Web Mobile Application Development"
        },
        {
            studentName: "Muhammad Talha",
            campus: "Head Office",
            RollNo: 192779,
            Class: "Web Mobile Application Development"
        },
        {
            studentName: "Syed Saleem Raza Shah",
            campus: "Head Office",
            RollNo: 173503,
            Class: "Web Mobile Application Development"
        },
        {
            studentName: " Abdul Qadir ",
            campus: "Head Office",
            RollNo: 233542,
            Class: "Web Mobile Application Development"
        },
        {
            studentName: "MUHAMMAD KABEER ",
            campus: "Head Office",
            RollNo: 210534,
            Class: "Web Mobile Application Development"
        },
        {
            studentName: "sharjeel ",
            campus: "Head Office",
            RollNo: 192713,
            Class: "Web Mobile Application Development"
        },
        {
            studentName: "Malik Kashif ",
            campus: "Head Office",
            RollNo: 195393,
            Class: "Web Mobile Application Development"
        }
    ]
    return <div className="container">
        <div className="header">
            <h1>Student Data Sheet</h1>
        </div>
        <div className="dataaddcontainer">
            {studentData.map((data, index) => {
                return (
                    <div key={index} className="dataadd">
                        <div>{`Name:${data.studentName}`}</div>
                        <div>{`Campus:${data.campus}`}</div>
                        <div>{`RollNo:${data.RollNo}`}</div>
                        <div>{`Course:${data.Class}`}</div>
                    </div>
                )
            })}
        </div>
    </div>
}
export default Card