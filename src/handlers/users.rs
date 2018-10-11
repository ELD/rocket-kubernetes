use crate::db::PrimaryDb;
use crate::models::User;
use crate::schema::user::dsl::*;

use diesel::{RunQueryDsl};
use rocket::http::Status;
use rocket_contrib::json::Json;

#[get("/")]
pub fn user_route(conn: PrimaryDb) -> Result<Json<Vec<User>>, Status> {
    user.load::<User>(&*conn)
        .map(|users| Json(users))
        .map_err(|_| Status::InternalServerError)
}