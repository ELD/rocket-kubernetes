use crate::db::PrimaryDb;
use crate::models::Person;
use crate::schema::person::dsl::*;

use diesel::{RunQueryDsl};
use rocket::http::Status;
use rocket_contrib::json::Json;

#[get("/")]
pub fn user_route(conn: PrimaryDb) -> Result<Json<Vec<Person>>, Status> {
    person.load::<Person>(&*conn)
        .map(|people| Json(people))
        .map_err(|_| Status::InternalServerError)
}