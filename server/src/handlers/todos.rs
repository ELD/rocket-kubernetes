use crate::db::PrimaryDb;
use crate::models::{NewTodo, Todo};
use crate::schema::todos::{self, dsl::*};

use diesel::{RunQueryDsl, ExpressionMethods};
use rocket::http::Status;
use rocket_contrib::json::Json;

#[get("/")]
pub fn all_todos(conn: PrimaryDb) -> Result<Json<Vec<Todo>>, Status> {
    todos.load::<Todo>(&*conn)
        .map(|people| Json(people))
        .map_err(|_| Status::InternalServerError)
}

#[post("/", data = "<new_todo>")]
pub fn new_todo(new_todo: Json<NewTodo>, conn: PrimaryDb) -> Result<Json<Todo>, Status> {
    diesel::insert_into(todos::table)
        .values(new_todo.into_inner())
        .get_result::<Todo>(&*conn)
        .map(|created_todo| Json(created_todo))
        .map_err(|_| Status::Conflict)
}

#[put("/<_todo_id>", data = "<edited_todo>")]
pub fn edit_todo(_todo_id: u32, edited_todo: Json<Todo>, conn: PrimaryDb) -> Result<Json<Todo>, Status> {
    let inner_todo = edited_todo.into_inner();
    diesel::update(&inner_todo)
        .set(completed.eq(!inner_todo.completed))
        .get_result(&*conn)
        .map(|persisted_todo| Json(persisted_todo))
        .map_err(|_| Status::InternalServerError)
}
