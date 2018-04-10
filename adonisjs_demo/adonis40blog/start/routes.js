"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use("Route");

Route.on("/").render("home");

/* Route.get("/test", () => "Hello World");

Route.get("/test/:id", ({ params }) => {
  return `This is id: ${params.id}`
}) */
Route.get("/posts", "PostController.index");

Route.get("/posts/add", "PostController.add");

Route.get("posts/edit/:id", "PostController.edit");

Route.get("/posts/:id", "PostController.details");

Route.post("/posts", "PostController.store");

Route.put("/posts/:id", "PostController.update");

Route.delete("/posts/:id", "PostController.destroy");