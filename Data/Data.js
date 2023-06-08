const assignment = [
   {
      title: "Big data",
      date: 'may 10'
   },
   {
      title: "Computer network",
      date: 'may 10'
   },
   {
      title: "Software project management",
      date: 'may 10'
   },
   {
      title: "Data Structure",
      date: 'may 10'
   },
   {
      title: "Web Technology",
      date: 'may 10'
   },
]

const data = {
   "StudentId": "xyz01",
   "NumberOfQueries": 10,
   "NumberOfAssigment": 4,
   "NumberOfTask": 2,
   "NumberOfProject": 2,
   "NumberOfTest": 3,
   "ExtraActivity": 2,
   "CurrentPercentage": "60",
   "ProjectStatus": "30",
   "Event ": 10,
   "Holiday": 20,
   "StudentProfile": {
      "StudentId": "xyz01",
      "studentName": "vikash Kumar",
      "AddmissionSession": "2022-2023",
      "Course": "B.Tech",
      "email":"vikash01@gmail.com",
      branch:"Computer Science",
      "batch": 3,
      "gender": "Male",
      "parents": {
         "MotherName": "Reema",
         "MotherMobileNumber": 9875481262,
         "FatherName": "Ram",
         "FatherMobileNumber": 9865327444
      },
      "Address": {
         "HouseNo": 546,
         "street": 2,
         "area": "sadikpur"
      },
   },
   "StudentProgress": {
      "july": [
         "Math",
         "15",
         "English",
         "25",
         "Science",
         "15"
      ],
      "August": [
         "Math",
         "20",
         "English",
         "20",
         "Science",
         "30"
      ],
      "September": [
         "Math",
         "25",
         "English",
         "25",
         "Science",
         "35"
      ],
      "October": [
         "Math",
         "15",
         "English",
         "35",
         "Science",
         "45"
      ]
   },
   "AssigmentDetail": {
      "filterAssigment": [
         {
            "Subject": "Math",
            "StartDate": "2023-05-10",
            "EndDate": "2023-05-15",
            "Status": "pending"
         },
         {
            "Subject": "English",
            "StartDate": "2023-05-10",
            "EndDate": "2023-05-15",
            "Status": "completed"
         },
         {
            "Subject": "Science",
            "StartDate": "2023-05-10",
            "EndDate": "2023-05-15",
            "Status": "pending"
         },
      ]
   },
   "DuesFeesDetail": {
      "filterDuesFees": {
         "studentId": "xyz04",
         "studentName": "vikash",
         "AdmissionSession": "2022-2023",
         "DueFees": 6000,
         "status": "pending"
      }
   }
}
const teacherData = {
   "TeacherID": "xyz02",
   "Maths 4th class": 65,
   "Maths 5th class": 56,
   "Maths 6th class": 64,
   "Maths 7th class": 78,
   "TeacherProfile": {
      "TeacherId": "xyz01",
      "studentName": "Adarsh Kumar",
      "AddmissionSession": "2022-2023",
      "Course": 1,
      "batch": 3,
      "gender": "Male",
      "perents": {
         "MotherName": "Reema",
         "MotherMobileNumber": 9875481262,
         "FatherName": "Amit Kumar",
         "FatherMobileNumber": 9865327444
      },
      "Address": {
         "HouseNo": 546,
         "street": 2,
         "area": "sadikpur"
      },
   },
   "Attendance": [
      {
         "Class": "4th",
         "Total":"30",
         "Present": "25",
         "Absent": "5"
      },
      {
         "Class": "5th",
         "Total":"40",
         "Present": "25",
         "Absent": "15"
      },
      {
         "Class": "6th",
         "Total":"35",
         "Present": "30",
         "Absent": "5"
      },
      {
         "Class": "7th",
         "Total":"35",
         "Present": "25",
         "Absent": "5"
      },
      
   ],
}
export { assignment, data, teacherData }