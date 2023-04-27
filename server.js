const express = require("express");
const bodyParser = require("body-parser");
const data = require("./data/TechTestJson.json");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Endpoint to get all exams
app.get("/api/exams", (req, res) => {
  //   console.log(data);
  res.json(data);
});

// Endpoint to filter exams by candidate
app.get("/api/exams/filter", (req, res) => {
  const candidate = req.query.candidate;
  if (!candidate) {
    return res.status(400).send("Candidate parameter is required");
  }

  const filteredExams = data.filter(
    (exam) => exam.CandidateName.toLowerCase() === candidate.toLowerCase()
  );

  if (filteredExams.length === 0) {
    return res.status(404).send(`No exams found for candidate ${candidate}`);
  }

  res.json(filteredExams);
});

// Endpoint to filter exams by date, candidate, or location
app.get("/api/exams/filter2", (req, res) => {
  let filteredExams = data;

  // Filter by date if date parameter is present
  if (req.query.date) {
    filteredExams = filteredExams.filter((e) => e.Date === req.query.date);
  }

  // Filter by candidate if candidate parameter is present
  if (req.query.candidate) {
    filteredExams = filteredExams.filter(
      (e) => e.CandidateName === req.query.candidate
    );
  }

  // Filter by location if location parameter is present
  if (req.query.location) {
    filteredExams = filteredExams.filter(
      (e) => e.LocationName === req.query.location
    );
  }

  res.json(filteredExams);
});

// Endpoint to get an exam by ID
app.get("/api/exams/:id", (req, res) => {
  const exam = data.find((e) => e.id === parseInt(req.params.id));
  if (!exam) {
    return res.status(404).send("Error 404 - Exam not found");
  }
  res.json(exam);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
