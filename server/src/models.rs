use crate::schema::todos;

#[table_name = "todos"]
#[derive(Deserialize, Insertable)]
pub struct NewTodo<'a> {
    pub description: &'a str,
    pub completed: bool,
}

#[derive(Identifiable, Queryable, Serialize, Deserialize)]
pub struct Todo {
    pub id: i32,
    pub description: String,
    pub completed: bool,
}