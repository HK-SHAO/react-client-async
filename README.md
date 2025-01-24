# ⚛️⏳ React Async for Client

- `Demo:` [shao.fun/react-client-async](https://shao.fun/react-client-async/)
- `Repo:` [github.com/hk-shao/react-client-async](https://github.com/HK-SHAO/react-client-async)

Previously, `async component` were only supported on the server (Next.js). With this package, you can now easily use it on the client side as well.

## Install

```bash
npm i react-client-async
```


## `useAsync` Hook

You can use the `useAsync` hook to create a task.

```tsx
console.log(useAsync(fn, args, options));
```


## `Async` Component

You can use the `Async` component to render an async component.

```tsx
<Async
  $fc={fc} // may be an async function component
  $waiting={waiting} // waiting component
  $fallback={fallback} // fallback component
  {...props} // props for the function component
/>
```

## `Demo` of Recursive Async Component

A component can be used with `memo` and `async` together!

```tsx
const Rec: AsyncFC<{ n: number; }> = memo(
  async ({ [$signal]: signal, n }) =>
    n <= 0 ? (
      <> {/* break the recursion */}
        <div>0</div>
      </>
    ) : (
      <> {/* delay and recursion */}
        {await delayWithSignal(99, signal)}
        {n}<Async $fc={Rec} n={n - 1} />{n}
      </>
    ),
);
```

## What is Next?

- ⏳ `useAsyncIterable` hook
- ⏳ `Iterable async` component

```tsx
async function* IterableComponent() {
  yield* OtherIterableComponent();
  yield  await component1();
  yield  await component2();
  yield  <div>...</div>;
}
```

- ⭐️ Star this repo if you like it! ❤❤❤
- 👉 [github.com/hk-shao/react-client-async](https://github.com/HK-SHAO/react-client-async)

Looking forward to your feedback or contribution! 🚀🚀🚀


## Development

### Install
- Install `bun` runtime: `npm install -g bun`
- Install dependencies: `bun install`

### Run & Build
- Run demo: `bun dev`
- Build demo: `bun run build:app`
- Build package: `bun run build:lib`

### Deploy
- Deploy demo to github pages: `bun run deploy`
- Publish the package to npm: `bun publish`