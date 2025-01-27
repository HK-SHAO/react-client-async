<h1 align="center">
  ⚛️⏳
  <br/>
  React Async for Client
</h1>

<p align="center">
  <a href="https://shao.fun/react-client-async/" target="_blank">🎬 Demo</a>
  <span> · </span>
  <a href="https://github.com/HK-SHAO/react-client-async" target="_blank">🌟 GitHub</a>
  <span> · </span>
  <a href="https://www.npmjs.com/package/react-client-async" target="_blank">📦 Package</a>
</p>

## 👋 Introduction


This package helps you use async function **<u>without</u>** the need to migrate to `⚛️ React 19` and server-side rendering! 

- ✨ Supports utility hooks to create and render async tasks.
- ✨ Supports `AbortSignal` and automatic abort on re-render.

## 🚀 Install

```bash
npm i react-client-async
```


## ✅ `useAsync` Hook

You can use the `useAsync` hook to create a task.

```tsx
console.log(useAsync(fn, args, options));
```


## ✅ `Async` Component

You can use the `Async` component to render an async component.

```tsx
<Async
  $fc={fc} // may be an async function component
  $waiting={waiting} // waiting component
  $fallback={fallback} // fallback component
  {...props} // props for the function component
/>
```

## 🎬 `Demo` of Recursive Async Component

Easy to `wrap` a recursive async component and memoize it.

```tsx
const Rec: FC<{ n: number }> = wrap(
  async ({ [$signal]: signal, n }) =>
    // break the recursion
    (n <= 0) ? 0 : (
    // delay and recursion
      <>
        {await delay(99, signal)}
        {n} <Rec n={n - 1} /> {n}
      </>
    )
);
```

## ⏳ What is Next?

- ⏳ `useAsyncIterable` hook
- ⏳ `AsyncIterable` component

```tsx
async function* IterableComponent() {
  yield* OtherIterableComponent();
  yield  await component1();
  yield  await component2();
  yield  <div>...</div>;
}
```

- 🌟 Star this repo if you like it! 🤩🤩🤩
- 👉 [github.com/hk-shao/react-client-async](https://github.com/HK-SHAO/react-client-async)

Looking forward to your feedback or contribution! 🚀🚀🚀


## Development

### Install
- Install `bun` runtime: `npm install -g bun`
- Install dependencies: `bun install`

### Run & Build
- Run demo: `bun dev`
- Build demo: `bun build:app`
- Build package: `bun build:lib`

### Deploy
- Deploy demo to github pages: `bun build:app:deploy`
- Publish this package to npm: `bun build:lib:publish`