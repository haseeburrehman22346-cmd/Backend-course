import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/about", (req, res) => {
  res.send("About Page");0
});
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Haseeb" },
  ];
  const foundUser = user.find((u) => u.id === id);
  if (foundUser) {
    res.send(foundUser);
  } else {
    res.status(404).send("User not found");
  }
});
export default app;