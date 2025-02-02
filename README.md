# OpenMaker MV

Tiny RPG engine, MV compatible

## Quick start

It provides two files: `runtime.js` and `openmmv.js`. Use both to be compatible with RPG MV. Plugins are supported out of the box.

**build**

```bash
$ cd openmv
$ npm install
$ npm run build:runtime
$ npm run build:prod
```

## Use on your games

Add the following lines to the `index.html`

```html
<script type="text/javascript" src="js/runtime.js"></script>
<script type="text/javascript" src="js/openmmv.js"></script>
```

## Open Maker Engine (GUI)

TODO...

## Docker

```bash
$ cd openmv
$ docker build -t openmv .
$ docker run --name openmv-container -p 5173:5173 openmv
```
