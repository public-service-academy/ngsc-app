#!/usr/bin/env bash
# usage:
#   run: `./frontend.sh`
#   run detached: `./frontend.sh detached`
#   kill detached: `./frontend.sh kill`
#   install: `./frontend.sh install`
#   build: `./frontend.sh build`
#   types: `./frontend.sh types`


# -------------------------------------
# Check prereqs installed
# -------------------------------------
hash node 2>/dev/null || { echo >&2 "Node.js must be installed."; exit 1; }
hash npm 2>/dev/null || { echo >&2 "NPM must be installed."; exit 1; }
hash yarn 2>/dev/null || { echo >&2 "Yarn must be installed."; exit 1; }

hash lsof 2>/dev/null || { support_linux_tools_error lsof; exit 1; }
hash grep 2>/dev/null || { support_linux_tools_error grep; exit 1; }
hash awk 2>/dev/null || { support_linux_tools_error awk; exit 1; }
hash xargs 2>/dev/null || { support_linux_tools_error xargs; exit 1; }

support_linux_tools_error() {
  echo >&2 "$1 must be installed. If on PC, please use Windows Subsytem for Linux."
}

# -------------------------------------
# Determine run option
# -------------------------------------

if [ $# -gt 0 ]; then
  flag=$1
fi;

main() {
  cd frontend/
  if [ "$flag" == "detached" ]; then
    run_detached
  elif [ "$flag" == "kill" ]; then
    kill_detached
  elif [ "$flag" == "install" ]; then
    install
  elif [ "$flag" == "build" ]; then
    build
  elif [ "$flag" == "types" ]; then
    check_types
  else
    run
  fi
  cd ../
}


# -------------------------------------
# Commands
# -------------------------------------

run() {
  yarn start
}

run_detached() {
  run &>/dev/null &
}

kill_detached() {
  lsof -n -i4TCP:3000 | grep LISTEN | awk '{ print $2 }' | xargs kill
}

install() {
  yarn install
}


build() {
  yarn build
}

check_types() {
  yarn flow
}


main "$@"
