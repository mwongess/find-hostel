import fastify from "fastify";
import { RouteHandlerMethod } from "fastify";
import { pool } from "./config/mysqlconfig";

const app = fastify({ logger: true });

const getUsers: RouteHandlerMethod = async (request, reply) => {
  try {
    const [rows] = await pool.query("SELECT * FROM hostels");
    reply.send(rows);
  } catch (error) {
    console.error(error);
    reply.status(500).send("Error retrieving hostels");
  }
};

app.get("/users", getUsers);

const PORT = 3000;
const start = async () => {
  try {
    await app.listen(PORT);
    console.log("Server up and running");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
start();
