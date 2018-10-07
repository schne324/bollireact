# Bollireact
> bollire react - a yarn, parcel, react, prettier boilerplate

...__bollire__ means boil in italian or something

*NOTE*: this is for my own personal use...I do not recommend using this unless you fully understand what it does

## Usage

```sh
npx bollireact
```

## What it is

A cli prompt which will asks for:
  - name
  - display name
  - description (optional)
  - additional dependencies (optional)
  - additional dev dependencies (optional)

*NOTE*: I basically `child_process.exec` a bunch of shit so use with caution!

## What it do

Creates a ready-to-rock react app bundled by parcel. The result app structure looks like:

```
├── README.md
├── node_modules/
├── package.json
├── src
|  ├── App
|  |  └── index.js
|  ├── index.css
|  ├── index.html
|  └── index.js
└── yarn.lock
```
