# AjGenesisNode Sinatra

AjGenesisNode Sinatra tasks and templates, to generate web sites based on Sinatra. WIP.

## Setup

Install [Node.js](http://nodejs.org).

Install globally latests version of AjGenesis for Node, Entity and Sinatra modules:
```
npm install ajgenesis -g
npm install ajgenesisnode-entity -g
npm install ajgenesisnode-sinatra -g
```

## Quick start

In any directory, create an application
```
ajgenesis sinatra:create demo
cd demo
```

The AjGenesis `sinatra` module is installed automatically from `ajgenesisnode-sinatra`, if it is not already installed.

The new directory has subdirectories:

- `models`: where the free model files reside.
- `ajgenesis`: additional tasks and remplates for AjGenesis.
- `site`: initial static files for a new web site.

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

Generate the web site:

```
ajgenesis generate
```

The web site is generated in a new directory `build`.

Run the site
```
cd build
ruby app.rb
```

The site uses sqlite3 and data-mapper. 

TBD: explain dependencies

Start the site
```
npm start
```

The site is available in your browser using `http://localhost:3000`.

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

## References

- [Using bootstrap with bower](http://stackoverflow.com/questions/14450408/using-bootstrap-with-bower)
- [Bower](https://github.com/bower/bower)

## Contribution

Feel free to [file issues](https://github.com/ajlopez/AjGenesisNode-Sinatra) and submit
[pull requests](https://github.com/ajlopez/AjGenesisNode-Sinatra/pulls) — contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.
