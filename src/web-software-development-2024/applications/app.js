import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
const app = new Hono();


app.get("/", (c) => {
    let number1 = Number(c.req.aram("number1"));
    let number2 = Number(c.req.param("number2"));
    let operation = c.req.param("operation");
  
    if (operation === "sum") {
      return c.text(`${number1 + number2}`);
    } else if (operation === "product") {
      return c.text(`${number1 * number2}`);
    } else {
      return c.text('Invalid parameters.');
    }
  });
  
export default app;