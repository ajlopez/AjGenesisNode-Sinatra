# AjGenesisNode Sinatra

AjGenesisNode Sinatra tasks and templates, to generate web sites based on Sinatra. WIP.

## Setup

Install [Node.js](http://nodejs.org).

Install globally latests version of AjGenesis for Node, and Sinatra modules:
```
npm install ajgenesis -g
npm install ajgenesisnode-sinatra -g
```

## Quick start

In any directory, create an application
```
ajgenesis sinatra:create demo
cd demo
npm install
```

The AjGenesis `sinatra` module is installed automatically from `ajgenesisnode-sinatra`, if it is not already installed.

There is a subdirectory `ajgenesis` containing:

- `ajgenesis/models`: where the free model files reside
- `ajgenesis/tasks`: tasks to run
- `ajgenesis/templates`: templates to be used
- `ajgenesis/libs`: additional modules used by tasks

Add some entities and propeties:

```
ajgenesis entity:add customer
ajgenesis entity:addproperty customer name
ajgenesis entity:addproperty customer address
ajgenesis entity:add supplier
ajgenesis entity:addproperty supplier name
ajgenesis entity:addproperty supplier address
```

The new .json files will be added to `models` director.

Generate the site:

```
ajgenesis generate
```

Run the site
```
ruby app.rb
```

The site uses sqlite3 and data-mapper. 

TBD: explain dependencies, add gemfile

The site is available in your browser using `http://localhost:4567`.

## Development

```
npm install -g ajgenesis
git clone git://github.com/ajlopez/AjGenesisNode-Sinatra.git
cd AjGenesisNode-Sinatra
npm link ajgenesis
npm install
npm test
```

## Versions

- 0.0.1 Published
- 0.0.2 Published

## References

- [Using bootstrap with bower](http://stackoverflow.com/questions/14450408/using-bootstrap-with-bower)
- [Bower](https://github.com/bower/bower)
- [Modular vs. Classic Style](http://www.sinatrarb.com/intro.html#Modular%20vs.%20Classic%20Style)
- [DataMapper Associations](http://datamapper.org/docs/associations.html)

## Contribution

Feel free to [file issues](https://github.com/ajlopez/AjGenesisNode-Sinatra) and submit
[pull requests](https://github.com/ajlopez/AjGenesisNode-Sinatra/pulls) � contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.
