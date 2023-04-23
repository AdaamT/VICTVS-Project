const express = require("express");
const bodyParser = require("body-parser");
const data = require("./data");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Endpoint to get all exams
app.get("/api/exams", (req, res) => {
  res.json(exams);
});

// Endpoint to get an exam by ID
app.get("/api/exams/:id", (req, res) => {
  const exam = exams.find((e) => e.id === parseInt(req.params.id));
  if (!exam) {
    return res.status(404).send("Exam not found");
  }
  res.json(exam);
});

// Endpoint to filter exams by candidate
app.get("/api/exams/filter", (req, res) => {
  const candidate = req.query.candidate;
  if (!candidate) {
    return res.status(400).send("Candidate parameter is required");
  }
  const filteredExams = exams.filter((e) => e.CandidateName === candidate);
  res.json(filteredExams);
});

// Endpoint to filter exams by location
app.get("/api/exams/filter", (req, res) => {
  const location = req.query.location;
  if (!location) {
    return res.status(400).send("Location parameter is required");
  }
  const filteredExams = exams.filter((e) => e.LocationName === location);
  res.json(filteredExams);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
