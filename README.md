# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## Use Tailwindcss v2.2.16

### 1. 功能类优先

- 在一组受约束的原始功能类的基础上构建复杂组件。
- 使用传统的方式时，定制的设计需定制的css。
- 使用功能类构建自定义设计无需编写css。
- 使用Tailwind， 可以通过直接在HTML中应用预先存在的类来设置元素的样式。
- 优点：
  - 不会给class命名而浪费精力， 不需要仅仅为了设置一些样式而额外添加一些愚蠢的类名， 不必为了一个flex容器的完美抽象命名而备受折磨。
  - Css停止增长。 使用传统方法，每次添加新功能时css文件都会变大，使用功能类，所有内容都是可重用的，几乎不用编写新的css。
  - 更改更安全， css是全局的。永远不知道当进行更改时会破坏掉什么， html中的类时本地的，因此可以更改而不会担心其他的问题。

### 2. 为什么不使用内联样式？

- 很多时候时将样式直接应用与元素， 而不是为了元素分配一个类，然后在这个类中设置样式。
- 使用功能类比内联样式具有的一些重要的优点：
  - 基于约束设计。使用内联样式，每个值都是一个魔术数字，使用功能类，从预定义的设计系统中选择样式，这使得构建同意的UI变得更加容易。
  - 响应式的设计。在内联样式中不能使用媒体查询，但可以使用Tailwind的响应式功能类非常容易的构建完全响应式的界面。
  - Hover，focus以及其他状态，内联样式无法设置hover或者focus这样的状态，但Tailwind的状态变体使用类可以非常容易的为这些状态设置样式。
- 该组件完全响应，并包括hover和focus样式的按钮，由完全功能构建。

### 3. 可维护性问题

- 在使用功能优先的方式时， 最大的可维护问题时管理通用的可重复使用的功能类组合。
- 可以通过提取组件（通常作为模板片段或者组件）。可以轻松解决此问题。
- 也可以使用Tailwind的@apply功能创建抽象的css类。
- 除此之外，维护功能优先的css项目比维护大型css代码库容易的多，因为html比css维护容易的多。诸如GitHub，Heroku，Kickstarter，Twitch，Segmemt等大型的公司都在用。

### 4. 响应式设计

- 使用响应式功能变体构建自适应用户界面。

- Tailwind中的每个功能类都可以有条件的应用于不同的断点，这使得可以轻松的构建复杂的响应式界面而不用离开HTML。

- 根据常用的设备分辨率方案，默认内置了5个断点：

  | 断点前缀 | 最小宽度 | CSS                                  |
  | -------- | -------- | ------------------------------------ |
  | `sm`     | 640px    | `@media (min-width: 640px) { ... }`  |
  | `md`     | 768px    | `@media (min-width: 768px) { ... }`  |
  | `lg`     | 1024px   | `@media (min-width: 1024px) { ... }` |
  | `xl`     | 1280px   | `@media (min-width: 1280px) { ... }` |
  | `2xl`    | 1536px   | `@media (min-width: 1536px) { ... }` |

- 要添加一个仅在特点断点生效的功能类，只需要在该功能类上加上断点名称，后面跟 ’：‘ 字符。

  ```html
  <!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
  <img class="w-16 md:w-32 lg:w-48" src="...">
  ```

- 这适用于框架中的每一个功能类，这意味着可以在给定的断点改任何的东西，神hi包括字符间距和光标样式之类的内容。

  - By default, the outer `div` is `display: block`, but by adding the `md:flex` utility, it becomes `display: flex` on medium screens and larger.
  - When the parent is a flex container, we want to make sure the image never shrinks, so we’ve added `md:flex-shrink-0` to prevent shrinking on medium screens and larger. Technically we could have just used `flex-shrink-0` since it would do nothing on smaller screens, but since it only matters on `md` screens, it’s a good idea to make that clear in the class name.
  - On small screens the image is automatically full width by default. On medium screens and up, we’ve constrained the width to a fixed size and ensured the image is full height using `md:h-full md:w-48`.

  We’ve only used one breakpoint in this example, but you could easily customize this component at other sizes using the `sm`, `lg`, `xl`, or `2xl` responsive prefixes as well.

#### 4.1 移动优先

- 默认情况下，Tailwind使用移动优先的断点系统，类似与Boottrap这些其他框架中的用法。
- 这意味这未加前缀的功能类（’uppercase‘）在所有的屏幕前都有效，而家了前缀的功能类（md:uppercase）仅在指定的断点以及以上的屏幕上生效。

##### 4.1.1 定位手机屏幕

- 要为移动设备设计样式，需要使用无前缀的功能类，而不是带 ’sm:‘ 前缀的版本， 不要将 sm 理解为在小屏幕钱，而视其为在小断点处。
- 通常最好先为移动设备设计布局，接着sm屏幕上进行更改，然后是md屏幕，以此类推。

##### 4.1.2 定位单个断点

Tailwind的断点仅包括 min-width 而没有max-width，这意味这在较小断点上添加任何的功能类都将应用在更大的断点上。

如果只想在一个断点上应用某个功能类，解决方案是在更大的断点添加一个功能类，用来抵消前一个功能类的效果。

```html
<div class="bg-green-500 md:bg-red-500 lg:bg-green-500">
  <!-- ... -->
</div>
```

请注意，**我们不必**为 `sm` 断点或 `xl` 断点指定背景色，您只需要指定一个功能类何时开始生效，而不是何时结束。

#### 4.2 自定义断点

- 可以在tailwind.config.js文件中完全自定义断点

  ```js
  // tailwind.config.js
  module.exports = {
    theme: {
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    }
  }
  ```



### 5 添加基础样式

- 在Tailwind的基础上添加自己的全局基础样式的最佳实践。
- 基础（或全局）样式是样式表开头的样式，可为诸如\<a> 标签，标题等基础HTML元素设置有用的默认值，或者有目的重置，像流行的box-sizing reset。
- Tailwind包含了一系列有用的开箱即用的基础样式， 称之为Preflight，时加上是modern-normalize，外加少些额外的样式。

#### 5.1 在HTML中使用类

- 只想对html或者body元素应用某种全局样式，只需要将现有的类添加到HTML中的那些元素，而不是编写新的css。

#### 5.2 使用css

- 如果将某些基本样式应用于特定元素，最容易的方法是将其简单的添加到css中。

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  @layer base {
    h1 {
      @apply text-2xl;
    }
    h2 {
      @apply text-xl;
    }
  }
  ```

- 通过@layer指令，Tailwind将自动的将这些样式移到@tailwind base的同一位置，以避免出现一些意外的问题。
- 使用@layer指令还能告诉Tailwind在清楚基本样式时考虑这些样式。
- 最好使用@layer或者theme()来定义这些样式。

#### 5.3 @font-face规则

- 可以使用相同的方式为正在使用的任何自定义的字体添加@font-face规则

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  @layer base {
    @font-face {
      font-family: Proxima Nova;
      font-weight: 400;
      src: url(/fonts/proxima-nova/400-regular.woff) format("woff");
    }
    @font-face {
      font-family: Proxima Nova;
      font-weight: 500;
      src: url(/fonts/proxima-nova/500-medium.woff) format("woff");
    }
  }
  ```

#### 5.4 使用插件

- 通过插件编写，并使用addBase函数来添加基础样式。

  ```js
  // tailwind.config.js
  const plugin = require('tailwindcss/plugin')
  
  module.exports = {
    plugins: [
      plugin(function({ addBase, theme }) {
        addBase({
          'h1': { fontSize: theme('fontSize.2xl') },
          'h2': { fontSize: theme('fontSize.xl') },
          'h3': { fontSize: theme('fontSize.lg') },
        })
      })
    ]
  }
  ```

- 使用addbase添加的样式将会与Tailwind的其他基础样式一起添加到base层中。



## Fix

- if encountered` LF will be replaced by CRLF the next time Git touches it   `

  execute  `git config --global core.autocrlf true`
