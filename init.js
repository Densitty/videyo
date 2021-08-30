import path from "path";
import app from "./app";

console.log("start server");
const PORT = 3000;
console.log(PORT);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
