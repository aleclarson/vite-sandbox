> The optimizer is duplicating React for me. I'll make a repro.

- https://github.com/vitejs/vite/issues/1302#issuecomment-753525380

### Reproduce

1. Clone this branch:
```sh
git clone https://github.com/aleclarson/vite-sandbox -b issue-1302
```

2. Run `cd app && yarn && yarn vite`

3. Open `http://localhost:3000`

4. See the console for "duplicate React" error
