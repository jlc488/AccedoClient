# accedo-client

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Installation

Make sure you have Git installed on your machine and clone the repository

```
git clone https://github.com/jlc488/AccedoClient.git
```

Install  `grunt-cli`, `bower`:
```
npm install -g grunt-cli bower karma
```

You will need to first install Ruby and Compass for Sass used in this project :
- For Windows, Install Ruby by downloading from [here](http://rubyinstaller.org/downloads/)
- For Mac,
```
brew install ruby
```

- If you are using Linux,

apt ( Debina or ubuntu )
```
$ sudo apt-get install ruby-full
```
yum (CentOS, Fedora, RHEL)
```
$ sudo yum install ruby
```

- Install the compass gem:
```
npm install -g compass
```
```
gem install compass   (Windwos)
```

Running npm & bower command to install dependencies
```
npm install && bower install
```

## Build & development

Run `grunt` for building and `grunt serve` for preview.

Run `grunt serve:dist` to see the distribution output

## Issues

while running 'grunt' command , if you are facing an error related to karma then

```
npm install grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core phantomjs-prebuilt --save-dev
```
run the npm command as above



## Testing

Running `grunt test` will run the unit tests with karma.
