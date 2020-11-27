```
Uncaught Error: Objects are not valid as a React child (found: object with keys {__v_isVNode, __v_skip, type, props, key, ref, scopeId, children, component, suspense, ssContent, ssFallback, dirs, transition, el, anchor, target, targetAnchor, staticCount, shapeFlag, patchFlag, dynamicProps, dynamicChildren, appContext}). If you meant to render a collection of children, use an array instead.
```

### Reproduce

1. Clone this branch:
```sh
git clone https://github.com/aleclarson/vite-sandbox -b react-34
```

2. Run `yarn && yarn build && yarn sirv dist`

3. Open `http://localhost:5000`
