#!/bin/bash

cd /home/ubuntu/express-app/front
#yarn install
#yarn build
npm i
npm run build
cd ..
ls -al
echo 'Hello!!! OK Deployment'
