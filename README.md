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
$ npm install -g pontomais-mais
$ ppp COMMAND
running command...
$ ppp (-v|--version|version)
pontomais-mais/0.0.14 linux-x64 node-v14.13.1
$ ppp --help [COMMAND]
USAGE
  $ ppp COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ppp banco`](#ppp-banco)
* [`ppp help [COMMAND]`](#ppp-help-command)
* [`ppp local`](#ppp-local)
* [`ppp login`](#ppp-login)
* [`ppp ponto`](#ppp-ponto)
* [`ppp tempo`](#ppp-tempo)

## `ppp banco`

Informa o seu banco de horas

```
USAGE
  $ ppp banco
```

_See code: [src/commands/banco.ts](https://github.com/fmilani/ppp/blob/v0.0.14/src/commands/banco.ts)_

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

## `ppp local`

Obtém sua localização a ser usada no ponto e a salva nas configurações

```
USAGE
  $ ppp local
```

_See code: [src/commands/local.ts](https://github.com/fmilani/ppp/blob/v0.0.14/src/commands/local.ts)_

## `ppp login`

Faz o login no Pontomais

```
USAGE
  $ ppp login

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/login.ts](https://github.com/fmilani/ppp/blob/v0.0.14/src/commands/login.ts)_

## `ppp ponto`

Bate o ponto no Pontomais

```
USAGE
  $ ppp ponto
```

_See code: [src/commands/ponto.ts](https://github.com/fmilani/ppp/blob/v0.0.14/src/commands/ponto.ts)_

## `ppp tempo`

Quanto tempo você já trabalhou hoje

```
USAGE
  $ ppp tempo
```

_See code: [src/commands/tempo.ts](https://github.com/fmilani/ppp/blob/v0.0.14/src/commands/tempo.ts)_
<!-- commandsstop -->
