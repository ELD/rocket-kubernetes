#[derive(Queryable, Serialize)]
pub struct Person {
    id: i32,
    email: String,
    name: String,
}