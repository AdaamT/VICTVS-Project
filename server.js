const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/exams', (req, res) => {
    // Code to retrieve all exams
    res.json({ exams: allExams });
  });
  
  app.get('/exams/:id', (req, res) => {
    // Code to retrieve a specific exam by ID
    res.json({ exam: foundExam });
  });

  const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
