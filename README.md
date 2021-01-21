TypeScript Webpack Core JS Bundle Size Demo
===================================

`import "core-js"`，就可以自动加上polyfill.

注意：corejs文件还是比较大的，即使在webpack的production模式下，生成的文件大小也为159K左右。
所以真实项目中可能需要结合别的工具（如babel）按需导入。


```
npm install
npm run demo
```
