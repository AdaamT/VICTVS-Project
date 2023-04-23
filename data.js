const examsData = require('./exams.json');

function getAllExams() {
    return examsData;
  }
  function getExamById(id) {
    return examsData.find((exam) => exam.id === id);
  }
  function filterExamsByDate(date) {
    return examsData.filter((exam) => exam.date === date);
  }
  function filterExamsByCandidate(candidate) {
    return examsData.filter((exam) => exam.candidate === candidate);
  }
  function filterExamsByLocation(location) {
    return examsData.filter((exam) => exam.location === location);
  }

  module.exports = {
    getAllExams,
    getExamById,
    filterExamsByDate,
    filterExamsByCandidate,
    filterExamsByLocation,
  };
  