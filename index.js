const express = require("express");
const app = express();
const db = require("./db"); // Import the database connection
const mentorRoutes = require("./routes/mentorRoutes");
const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());

app.use("/api", mentorRoutes);
app.use("/api", studentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
