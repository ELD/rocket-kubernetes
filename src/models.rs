#[derive(Queryable, Serialize)]
pub struct User {
    id: i32,
    email: String,
    name: String,
}