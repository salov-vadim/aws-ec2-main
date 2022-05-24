#!/bin/bash

cd /home/ubuntu/express-app/front
yarn install
yarn build
cd ..
ls -al
echo 'Hello!!! OK Deployment'
