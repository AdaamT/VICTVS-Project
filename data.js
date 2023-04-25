const examsData = require("./data/TechTestJson.json");

function getAllExams() {
  return examsData;
}
function getExamById(id) {
  return examsData.find((exam) => exam.id === id);
}
function filterExamsByDate(date) {
  return examsData.filter((exam) => exam.Date === date);
}
function filterExamsByCandidate(candidate) {
  return examsData.filter((exam) => exam.CandidateName === candidate);
}
function filterExamsByLocation(location) {
  return examsData.filter((exam) => exam.LocationName === location);
}

module.exports = {
  getAllExams,
  getExamById,
  filterExamsByDate,
  filterExamsByCandidate,
  filterExamsByLocation,
};
