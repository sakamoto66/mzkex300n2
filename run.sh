#!/bin/bash

CURRENT=$(cd $(dirname $0);pwd)
cd $CURRENT
npm run test -- -g "$1"
