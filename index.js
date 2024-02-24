require("dotenv").config();
const express = require("express");
const { postgraphile } = require("postgraphile");
const jwt = require("jsonwebtoken");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(
  postgraphile(
    process.env.DATABASE_URL || "postgres://postgres:root@localhost:5432/mydb",
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      pgDefaultRole: "anonymous",
      jwtSecret: process.env.JWT_SECRET,
      jwtPgTypeIdentifier: "public.jwt_token",
      showErrorStack: true,
      retryOnInitFail: true,
      /// Adjust this as per your JWT setup in PostgreSQL
    }
  )
);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT}/graphql`
  );
});
