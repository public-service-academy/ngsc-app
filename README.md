# NGSC Service Hours
App to allow students in NGSC program to check their participation and  service hours. 

Uses React for frontend, Python 3 and Flask for backend server, and Google Docs API for data source.

## Prerequisites

### Install software on Mac
1. HomeBrew package manager: `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
1. Git: `brew install git`
1. Python 3.6: `brew install python3`
1. Node.js & NPM: `brew install node`
1. Yarn package manager: `brew install yarn`
1. Heroku: `brew install heroku`

### Install software on PC
See [this PowerPoint](https://docs.google.com/presentation/d/1pAoLLMqqH6JGG9ILwlhKMwVzUVzux9bFmZINPJWeW9Q/edit?usp=sharing) 
for further context on how to get this project working effectively on a PC.

1. Git & Git Bash, https://git-scm.com/downloads
    1. Accept every default setting, except for choosing your default text editor:
        1. The default, Vim, is great but confusing if you've never used it.
        1. Recommended to download the app Visual Studio Code and then choose that as your option.
1. Python 3.6, https://www.python.org/downloads/ 
    1. Check on the option to add python.exe to your PATH variable.
1. Node.js & NPM, https://nodejs.org/en/ 
    1. Choose the most current version
    1. Accept default settings
1. Yarn, installer from https://yarnpkg.com/en/docs/install
1. Heroku, 64 bit installer from https://devcenter.heroku.com/articles/heroku-cli
    1. Accept defaults

## Basic Usage
1. `./run.py install`, installs all the libraries
1. `./run.py`, starts the app at `localhost:3000` (go to this in your browser)
1. `./run.py stop`, stops the app

## Advanced Usage
There are many different ways to run this application, such as only starting the backend server or only starting the frontend server.

#### Understanding the below syntax
You will encounter these symbols:
* `a|b` = a or b. You must choose one.
* `[a]` = a is optional. You can add it as an argument if you'd like, otherwise the defaults will be used. 

### Install
`./run.py [backend|frontend] install`

### Run
* Start app: `./run.py [--target backend|frontend]`
* Stop app: `./run.py stop [--target backend|frontend]`

### Test
* Run unit tests: `./run.py test`
* Check types: `./run.py types [--target backend|frontend]`


### Update static student info
We are saving everyone's IDs, names, committees, mission teams, etc into a Python dictionary to avoid having to make an 
API call for that info, since it doesn't change often. Whenever a change happens to the Master spreadsheet, this 
needs to be updated.

`./run.py student-info`

### Deploy
`./run.py deploy`

### Dependency management
* Catchup from changes made by others: `./run.py catchup [--target backend|frontend]`
* View outdated dependencies: `./run.py outdated [--target backend|frontend]`
* View dependency tree: `./run.py deptree [--target backend]` (not supported on frontend)
* Add package(s): `./run.py add package1 [package2...] --target backend|frontend`
* Upgrade package(s): `./run.py upgrade package1 [package2...] --target backend|frontend`
* Remove package(s): `./run.py remove package1 [package2...] --target backend|frontend`
