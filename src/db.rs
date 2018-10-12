#[database("primary_db")]
pub struct PrimaryDb(diesel::PgConnection);