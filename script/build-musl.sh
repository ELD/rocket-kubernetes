#!/usr/bin/env bash

docker run --rm -it -v "$(pwd)":/home/rust/src \
    ekidd/rust-musl-builder:nightly \
    cargo build --release
