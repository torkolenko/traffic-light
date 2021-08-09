<h1 align="center">Traffic light</h1>

## Description

Traffic light is SPA implemented by stratch on Vue.js and build using Webpack. This app implements (models) the work of a traffic light, which has a red, a yellow and a green coloured section. When one of sections went on, other sections are dim. 

When you open this app, the traffic light turned one of the lights. The light depends on adress in the adress bar:

to light red-color section, please enter an address: "/red";
to light yellow-color section: "/yellow";
to light green-color section: "/green".

Colored sections and their adresses of traffic light are changed automatically and cyclically:
red ("/red") - yellow ("/yellow") - green ("/green") - yellow - red - yellow - green

Time of changing: 
red color is changing in 10 seconds;
yellow color: in 3 seconds;
red color: in 15 seconds;

If you will reload the page, the status of traffic light will not change.

You can also see the timer, which shows, how much time is still needed to auto-change the color and its adress.

## Setup

``` bash

# clone git repository
git clone https://github.com/torkolenko/traffic-light.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run start

# build for production with minification
npm run build