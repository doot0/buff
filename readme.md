<img src="https://cdn.rawgit.com/doot0/buff/develop/buff-logo.svg" width="136"/>

[![npm](https://img.shields.io/npm/v/buff-cli.svg)]()
[![Code Climate](https://codeclimate.com/github/doot0/buff/badges/gpa.svg)](https://codeclimate.com/github/doot0/buff)

> A stylesheet analysis tool for predicting [UI jank](https://www.chromium.org/developers/how-tos/trace-event-profiling-tool/anatomy-of-jank).

There are [three common types](#why) of rendering update that cause UI jank on the web, so having visibility on how often they occur in your styles can give you some insight on potential causes of jank you need to keep on top of.

## Contents
 - [Usage](#usage)
 - [Why?](#why)
 - [Changelog](./changelog.md)
 - [Planned features](#planned-features)

## Usage

1. `npm install -g buff-cli`
2. `buff-cli "path/to/file.css"`

That's it. 😎

## Why?
WIP.

## Planned features
 - Add support for analysing a stylesheet URL by URL
 - Add support for analysing multiple stylesheets in a row
 - Add support for passing a stylesheet as a string  
 - Output results in a cross-compatible manner, most likely JSON
