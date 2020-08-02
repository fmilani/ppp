ppp
===

Pontomais CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ppp.svg)](https://npmjs.org/package/ppp)
[![CircleCI](https://circleci.com/gh/fmilani/ppp/tree/master.svg?style=shield)](https://circleci.com/gh/fmilani/ppp/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/ppp.svg)](https://npmjs.org/package/ppp)
[![License](https://img.shields.io/npm/l/ppp.svg)](https://github.com/fmilani/ppp/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ppp
$ ppp COMMAND
running command...
$ ppp (-v|--version|version)
ppp/0.0.0 linux-x64 node-v14.7.0
$ ppp --help [COMMAND]
USAGE
  $ ppp COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ppp banco [FILE]`](#ppp-banco-file)
* [`ppp hello [FILE]`](#ppp-hello-file)
* [`ppp help [COMMAND]`](#ppp-help-command)
* [`ppp login [FILE]`](#ppp-login-file)

## `ppp banco [FILE]`

describe the command here

```
USAGE
  $ ppp banco [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/banco.ts](https://github.com/fmilani/ppp/blob/v0.0.0/src/commands/banco.ts)_

## `ppp hello [FILE]`

describe the command here

```
USAGE
  $ ppp hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ ppp hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/fmilani/ppp/blob/v0.0.0/src/commands/hello.ts)_

## `ppp help [COMMAND]`

display help for ppp

```
USAGE
  $ ppp help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_

## `ppp login [FILE]`

describe the command here

```
USAGE
  $ ppp login [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/login.ts](https://github.com/fmilani/ppp/blob/v0.0.0/src/commands/login.ts)_
<!-- commandsstop -->
