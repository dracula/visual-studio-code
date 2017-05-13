#!/usr/bin/env bash

repo_dir="$( cd "$(dirname "${BASH_SOURCE[0]}")" && pwd )"

attach() {
    dracula_path="$( find ~/.vscode/extensions -maxdepth 1 -type d -name 'dracula*' )"
    if [[ "$dracula_path" ]]; then
        dracula_dir="$( basename "$dracula_path" )"
        mkdir -p ~/.vscode/extensions/disabled
        mv "$dracula_path" ~/.vscode/extensions/disabled/"$dracula_dir"
    fi
    ln -s "$repo_dir" ~/.vscode/extensions/dracula
}

eject() {
    rm -f ~/.vscode/extensions/dracula
    if [ -d ~/.vscode/extensions/disabled ]; then
        disabled_path="$( find ~/.vscode/extensions/disabled -maxdepth 1 -type d -name 'dracula*' )"
        dracula_dir="$( basename "$disabled_path" )"
        mv "$disabled_path" ~/.vscode/extensions/"$dracula_dir"
        rm -r ~/.vscode/extensions/disabled
    fi
}

case "$1" in
    attach)
        attach
        ;;
    eject)
        eject
        ;;
esac
