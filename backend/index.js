import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      question: "What do you call a bear with no teeth?",
      answer: "A gummy bear",
    },
    {
      id: 2,
      question: "What do you call a bear with no teeth?",
      answer: "A gummy bear",
    },
    {
      id: 3,
      question: "What do you call a bear with no teeth?",
      answer: "A gummy bear",
    },
  ];
  res.send(jokes);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
