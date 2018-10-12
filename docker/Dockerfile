# Build stage
FROM clux/muslrust:nightly as builder

ADD . ./

RUN cargo build --release

# Multi-stage for deployment/runtime
FROM scratch

COPY --from=builder /volume/target/x86_64-unknown-linux-musl/release/rocket-app /rocket-app
COPY Rocket.toml /Rocket.toml

ENTRYPOINT [ "/k8s-app" ]
