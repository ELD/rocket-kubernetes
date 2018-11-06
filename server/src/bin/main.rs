#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
extern crate rocket_cors;

use rocket::http::Method;
use rocket_cors::{AllowedOrigins, AllowedHeaders, Cors};

use libk8sapp::db::PrimaryDb;
use libk8sapp::handlers::{index, todos};

fn main() {
    let (allowed_origins, _) = AllowedOrigins::some(&["http://localhost:3000"]);

    let allowed_methods = vec![Method::Get, Method::Post, Method::Put]
        .into_iter()
        .map(From::from)
        .collect();

    let allowed_headers = AllowedHeaders::all();

    let cors = Cors {
        allowed_origins,
        allowed_methods,
        allowed_headers,
        allow_credentials: true,
        ..Default::default()
    };

    rocket::ignite()
        .attach(cors)
        .attach(PrimaryDb::fairing())
        .mount("/", routes![index::hello])
        .mount("/api/todos", routes![todos::all_todos, todos::new_todo, todos::edit_todo])
        .launch();
}
