#!/usr/bin/env python

import os
import subprocess
import toml
import json


def build_docker_server():
    os.chdir("server")
    subprocess.call(
        [
            "docker",
            "build", "--rm",
            "-f", "docker/Dockerfile",
            "-t", "edattore/rocket-app:v{0!s}".format(get_server_version()),
            "."
        ]
    )


def build_docker_client():
    os.chdir("client")
    subprocess.call(
        [
            "docker",
            "build", "--rm",
            "-f", "docker/Dockerfile",
            "-t", "edattore/client-app:v{0!s}".format(get_client_version()),
            "."
        ]
    )


def push_docker():
    subprocess.call(
        [
            "docker",
            "push",
            "edattore/rocket-app:v{0!s}".format(get_server_version())
        ]
    )

    subprocess.call(
        [
            "docker",
            "push",
            "edattore/client-app:v{0!s}".format(get_client_version())
        ]
    )


def get_server_version():
    cargo_manifest = toml.load("Cargo.toml")
    return cargo_manifest["package"]["version"]


def get_client_version():
    with open("package.json") as f:
        node_manifest = json.load(f)
        return node_manifest["version"]


build_docker_server()
build_docker_client()
push_docker()
