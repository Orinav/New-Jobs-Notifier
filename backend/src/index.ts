import express, { Request, Response } from "express"; //import pulls code from another file/library into the current file.
                                                      //express (no braces) is the default export of the express library (the main function we call to create app).
                                                      //{Request, Response} (with braces) are named exports - two TypeScript types.
                                                      //"express" where we import from.

const app = express(); //express() calls that imported function. It build and returns or whole application object which we store in app, from now on app is our server.
const PORT = 3000; //3000 is a common port for development, our server will live at http://localhost:3000.


app.get("/", (req: Request, res: Response) => { //app.get — handle HTTP GET requests. GET is the verb browsers use when you simply visit/read a page (as opposed to POST, which sends data — we'll meet those later).
                                                           // "/" — the path. / is the root, i.e. http://localhost:3000/ with nothing after it.
                                                           //(req, res) => { ... } — this is a function (specifically an arrow function, written (args) => {body}). Express calls it automatically every time someone hits this route. It receives two things:
                                                           //  - req (the request): all info about who's asking and what they want. Typed as Request.
                                                           //  - res (the response): our toolkit for replying. Typed as Response

  res.send("Hello World! 🚀 The job scraper backend is alive."); //res.send(...) sends that text back to whoever made the request. This is the actual reply the browser will display.
}); // Closes the function and the app.get(...) call. (The } closes the function body, the ) closes app.get(, the ; ends the statement.)

app.listen(PORT, () => { //app.listen(PORT, ...) is what actually starts the server and tells it to "listen" for visitors on port 3000. Until this runs, nothing is live.
  console.log(`Server is running at http://localhost:${PORT}`); //console.log(...) prints a message to our terminal (not to the browser),  The backticks ` make a **template string** — a string where ${...} gets replaced with a value. So ${PORT} becomes 3000, printing http://localhost:3000.
});
