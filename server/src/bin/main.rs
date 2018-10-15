#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
extern crate libk8sapp;

use libk8sapp::db::PrimaryDb;
use libk8sapp::handlers::{index, users};

fn main() {
    rocket::ignite()
        .attach(PrimaryDb::fairing())
        .mount("/", routes![index::hello])
        .mount("/user", routes![users::user_route])
        .launch();
}
