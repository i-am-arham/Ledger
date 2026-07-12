import express from "express";
import auth from "./routes/auth.route";
import user from "./routes/user.route";
import account from "./routes/account.route";
import transaction from "./routes/transaction.route";

const app = express();

app.use(express.json());

app.use("/auth", auth);
app.use("/user", user);
app.use("/account", account);
app.use("/transaction", transaction);

app.listen(3000, () => {
  console.log("Server is listening on Port: 3000");
});


