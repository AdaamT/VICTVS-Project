const express = require("express");
const bodyParser = require("body-parser");
const data = require("./data");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/exams", (req, res) => {
  // Code to retrieve all exams
  res.json({ exams: allExams });
});

app.get("/exams/:id", (req, res) => {
  // Code to retrieve a specific exam by ID
  res.json({ exam: foundExam });
});

// Endpoint to filter exams by date, candidate or location
app.get("/exams", (req, res) => {
  const { date, candidate, location } = req.query;
  let filteredExams = data.getAllExams();

  if (date) {
    filteredExams = data.filterExamsByDate(date);
  }

  if (candidate) {
    filteredExams = data.filterExamsByCandidate(candidate);
  }

  if (location) {
    filteredExams = data.filterExamsByLocation(location);
  }

  res.json({ exams: filteredExams });
});

app.get("/exams/:id", (req, res) => {
  const { id } = req.params;
  const exam = data.getExamById(id);

  if (!exam) {
    return res.status(404).json({ message: "Exam not found" });
  }

  res.json({ exam });
});

// Start the server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
