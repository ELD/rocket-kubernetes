#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
#[macro_use] extern crate rocket_contrib;
extern crate diesel;
extern crate libk8sapp;

#[database("primary_db")]
struct PrimaryDb(diesel::MysqlConnection);

fn main() {
    rocket::ignite()
        .attach(PrimaryDb::fairing())
        .mount("/", routes![hello])
        .mount("/user", routes![user_route])
        .launch();
}

#[get("/")]
fn hello() -> &'static str {
    "Hello from Rocket and Kubernetes!"
}

#[get("/")]
fn user_route(conn: PrimaryDb) -> &'static str {
    "Something more real here later!"
}
