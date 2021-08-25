# danielrunningen.com

The main repo for the design and logic of [my personal website](https://www.danielrunningen.com).

## Build Setup

These notes are more for myself than anything else.
Others will likely come accross issues with cloning and building because the `assets` and `content` subdirectories are private submodules.

### Clone Repo and Submodules

```bash
git clone --recurse-submodules https://DanielRunningen@github.com/DanielRunningen/danielrunningen.com && cd danielrunningen.com
```

### Install Dependencies

```bash
npm i
```

### Serve with Hot Reloading

The following will serve on `localhost:3000`.

```bash
npm run dev
```

This one will serve on an internal network IP from port `8080` to make mobile testing easier.

```bash
npm run dev:host
```

### Prepare and View Production Build

```bash
npm run build
npm run view
```

`view:host` can also be used to preview on a separate device on the same network.
