FROM scratch

COPY target/x86_64-unknown-linux-musl/release/k8s-rocket-app /k8s-rocket-app
COPY Rocket.toml /Rocket.toml

ENTRYPOINT [ "/k8s-rocket-app" ]
