import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import session from "express-session";
// import errorHandler from "errorhandler";
import path from "path";
import { data } from "./userRecord/userRecord";
import resolvers from "./Graphql/User/resolver";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typedef } from "./Graphql/typedef";

const app = express();

async function main() {
  app.use(cors());
  app.use(bodyparser.urlencoded({ extended: false }));
  app.use(bodyparser.json());
  app.use(express.static(path.join(__dirname, "public")));
  app.use(
    session({
      secret: "passport-tutorial",
      cookie: { maxAge: 60000 },
      resave: false,
      saveUninitialized: false,
    })
  );

  app.get("/", (req, res) => {
    res.send("<h1>Welcome to Passport.js</h2>");
  });

  data
    .initialize()
    .then(() => {
      console.log("-----------DataBase connected Successfully------------");
    })
    .catch((err) => {
      console.log(err);
    });
  const excecutableSchema = makeExecutableSchema({
    typeDefs: typedef,
    resolvers: resolvers,
  });
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: excecutableSchema,
      graphiql: true,
    })
  );

  app.listen(3008, () => {
    console.log("-----------Server connected Successfully------------");
  });
}

main();
