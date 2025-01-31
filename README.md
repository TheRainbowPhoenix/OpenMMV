# Open MV

Tiny RPG engine, MV compatible

## Quick start

**installation**

```bash
$ cd openmv
$ npm install
$ npm run dev -- --host
```

**build**

```
$ npm run build
```

## Docker

```bash
$ cd openmv
$ docker build -t openmv .
$ docker run --name openmv-container -p 5173:5173 openmv
```

### Installed deps

**dependencies**

- pixi.js
- @pixi/sound
- @pixi/gif

**dev-dependencies**

- typescript
- vite