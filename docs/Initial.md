# Vue 3 + Vite + Pinia

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Plugins

- `npm install -D less`

- `npm install -D vitejs@plugin-legacy`

  ```js
  // vite.config.js
  import legacy from '@vitejs/plugin-legacy'
  import { defineConfig } from 'vite'
  
  export default defineConfig({
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 11']
      })
    ]
  })
  ```

- `npm init @eslint/config`

- `npm install pinia`

### Change to TS version

1. `npm insall typescript`

2. create a [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

   ```json
   {
     "compilerOptions": {
       "target": "esnext",
       "module": "esnext",
       "moduleResolution": "node",
       "importHelpers": true,
       "isolatedModules": true,
       "noEmit": true
     }
   }
   ```

3. create a `shim-vue.d.ts` in the `src` folder

   ```tsx
   declare module "*.vue"{
     import {defineComponent} from 'vue';
     const Component: ReturnType<typeof defineComponent>;
     export default Component;
   }
   ```



### Use `ESLint` 

- Purpose: Code format and quality check

```json
{
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    // "parser": "vue-eslint-parser",
    "parser": "vue-eslint-parser", // parser vue
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser":"@typescript-eslint/parser" // parser typescript
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
    }
}

```

### Use Prettier

- Only the format of code check.

- 可以自动化格式代码

- [the difference between ESlint and Prettier]([ESLint 之与 Prettier 配合使用 - 掘金 (juejin.cn)](https://juejin.cn/post/6924568874700505102))

- 创建包`eslint-config-prittier`， 将ESLint与Prettier冲突的规则禁掉。

- 创建一个插件`eslint-plugin-prettier` 定义一条规则prettier/prettier，调用prettier，配合ESlint实现运行eslint --fix 按Prettier 规则自动格式化代码。

  ```
  // .eslinttc.json
  {
  	"extents":[
  	 ...
  	 "prettier",//eslint-config-prettier （简写）
  	], 
  	plugins:["prettier"],//eslint-plugin-prettier
  	rules:{
  		"prettier/prettier":"error"// 开启规则
  	}
  }
  ```

- 1. `install -save-dev eslint-config-prettier`
  2. 将eslint-config-prettier添加到.eslintrc.js的extends数组中， 确保放在最后，这样有机会覆盖其他的配置。
  3. eslint-config-prettier下还有@typescript-eslint.js babel.js, react.js, prettier.js, vue.js内容是禁掉与它搭配使用的插件中创建的与Prettier冲突的规则。

### Install vue-router

`npm install vue-router@4`

