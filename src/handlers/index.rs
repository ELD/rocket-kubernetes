#[get("/")]
pub fn hello() -> &'static str {
    "Hello from Rocket and Kubernetes!"
}