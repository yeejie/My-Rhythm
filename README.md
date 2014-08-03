#My Rhythm

As more and more consumers adopt new wearables and biomedical devices to understand and improve their health and wellness being, there are a number of [respositories/middleware/services](https://zenobase.uservoice.com/knowledgebase/articles/360890-how-does-zenobase-compare-to-other-services) that offers collection & aggregation of data from individual sources (Fitbit, UP, Withings etc), which in turn allow user to visualize and share their health and wellness information. In fact, our [QH API](http://qh.rhythm.sg) does the similar too.

Our initial aim when building [My Rhythm](http://my.rhythm.sg) is to demonstrate how wearable and sensor technologies can be leveraged to help improve living experience illustrated by better wellness management. It also serves to show how these technologies can help promote the development of a  broader ecosystem of businesses, by highlighting the rich possibilities enabled by sensor data to better gain knowledge about one’s health, behaviours and habits.

Throughtout this journey, we learn that everybody is different. Although there should be just one go-to place for all the content and technology that is available, practically every application/service serve a different purpose to their users.  Some are striving to build bridges between patients and care providers; some are helping users to achieve personal goals.

Therefore, to do a little contribution in spurring innovation of building WELLNESS for people, we decided to open source our project to serve as a base or reference for developers who interested to build similar application/service.

**None of Us is As Good As All of Us**, together we can co-create greater things for people. For anyone who like to contribute ideas and improvements to this project, please feel free to do so. 

### Key Features
  * Interactive charts for each health parameter (Weight, BMI, Blood Pressure, Blood Oxygen, Respiratory Rate, Heart Rate, Intakes)
  * Tri-color gauge to display metrics and latest progress for each health parameter
  * Real-time alert whenever a new record is logged
  * Data is GET from [QH API](http://qh.rhythm.sg)

### To-Do Features
  * Dynamic charts (year/month/day/hour/minute selection) to cater for possible large records
  * Sync with wearable devices such as Fitbit and Withings service. Sample code is available at [Rhythm Sync](https://github.com/yeejie/rhythm-sync)
  * Manual entry of data (currently you can only do POST to QH API for entry of data)
  * Integration with other respositories/middleware/services that you like

##Details
My Rhythm is built upon MEAN.JS, a full-stack JavaScript open-source solution, which provides a solid starting point for [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](http://angularjs.org/) based applications. The idea is to solve the common issues with connecting those frameworks, build a robust framework to support daily development needs, and help developers use better practices while working with popular JavaScript components. 

### Building Blocks
  * [MongoDB](http://mongodb.org/)
  * [Express](http://expressjs.com/)
  * [AngularJS](http://angularjs.org/)
  * [Node.js](http://nodejs.org/)
  * [Azure Queue](http://azure.microsoft.com) and [Socket.IO](http://socket.io) for real-time notification

### Prerequisites
Make sure you have installed all these prerequisites on your development machine.
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager, if you encounter any problems, you can also use this [Github Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages, in order to install it make sure you've installed Node.js and npm, then install bower globally using npm:

```
$ npm install -g bower
```

* Grunt - You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process, in order to install it make sure you've installed Node.js and npm, then install grunt globally using npm:

```
$ sudo npm install -g grunt-cli
```

### Clone My Rhythm GitHub Repository or Download The Repository Zip File (https://github.com/yeejie/my-rhythm)

### Quick Install

```
$ npm install
$ bower install
```

### Running Your Application

```
$ grunt
```

### Live Site on Azure
Available at [http://my.rhythm.sg](http://my.rhythm.sg). You may need to browse with incognito (chrome) window in order to login with demo facebook account.

### Credits
Yee Jie, Juan Miguel Jimeno, Qing Hui

## License
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
