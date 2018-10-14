#!/usr/bin/env python

import subprocess
import toml


def build_docker():
    subprocess.call(
        [
            "docker",
            "build", "--rm",
            "-f", "docker/Dockerfile",
            "-t", "edattore/rocket-app:v{0!s}".format(get_version()),
            "."
        ]
    )


def push_docker():
    subprocess.call(
        [
            "docker",
            "push",
            "edattore/rocket-app:v{0!s}".format(get_version())
        ]
    )


def get_version():
    cargo_manifest = toml.load("Cargo.toml")
    return cargo_manifest["package"]["version"]


build_docker()
push_docker()
