# PostCSS

- PostCss是一个允许使用JS插件转换样式的工具。这些插件可以检查（lint）CSS，支持CSS Variables和Mixins，编码尚未被浏览器广泛支持的先进的CSS语法，内联图片，及其他功能。
- PostCSS的Autoprefixer插件时最流行的CSS的处理工具之一。
- PostCSS接收一个css文件并提供一个API来分析，修改它的规则（通过把CSS规则转换成一个抽象语法树的方式），在这之后，这个API便可以被许多插件利用来做有用的事情，比如自动寻错和自当添加CSS vendor前缀。

### 解决全局 CSS 的问题

- [`postcss-use`](https://github.com/postcss/postcss-use) 允许你在 CSS 里明确地设置 PostCSS 插件，并且只在当前文件执行它们。
- [`postcss-modules`](https://github.com/outpunk/postcss-modules) 和 [`react-css-modules`](https://github.com/gajus/react-css-modules) 可以自动以组件为单位隔绝 CSS 选择器。
- [`postcss-autoreset`](https://github.com/maximkoretskiy/postcss-autoreset) 是全局样式重置的又一个选择，它更适用于分离的组件。
- [`postcss-initial`](https://github.com/maximkoretskiy/postcss-initial) 添加了 `all: initial` 的支持，重置了所有继承的样式。
- [`cq-prolyfill`](https://github.com/ausi/cq-prolyfill) 添加了容器查询的支持，允许添加响应于父元素宽度的样式.

### 提前使用先进的 CSS 特性

- [`autoprefixer`](https://github.com/postcss/autoprefixer) 添加了 vendor 浏览器前缀，它使用 Can I Use 上面的数据。
- [`postcss-preset-env`](https://github.com/jonathantneal/postcss-preset-env) 允许你使用未来的 CSS 特性。

### 更佳的 CSS 可读性

- [`postcss-sorting`](https://github.com/hudochenkov/postcss-sorting) 给规则的内容以及@规则排序。
- [`postcss-utilities`](https://github.com/ismamz/postcss-utilities) 囊括了最常用的简写方式和书写帮助。
- [`short`](https://github.com/jonathantneal/postcss-short) 添加并拓展了大量的缩写属性。

### 图片和字体

- [`postcss-assets`](https://github.com/assetsjs/postcss-assets) 可以插入图片尺寸和内联文件。
- [`postcss-sprites`](https://github.com/2createStudio/postcss-sprites) 能生成雪碧图。
- [`font-magician`](https://github.com/jonathantneal/postcss-font-magician) 生成所有在 CSS 里需要的 `@font-face` 规则。
- [`postcss-inline-svg`](https://github.com/TrySound/postcss-inline-svg) 允许你内联 SVG 并定制它的样式。
- [`postcss-write-svg`](https://github.com/jonathantneal/postcss-write-svg) 允许你在 CSS 里写简单的 SVG。

### 提示器（Linters）

- [`stylelint`](https://github.com/stylelint/stylelint) 是一个模块化的样式提示器。
- [`stylefmt`](https://github.com/morishitter/stylefmt) 是一个能根据 `stylelint` 规则自动优化 CSS 格式的工具。
- [`doiuse`](https://github.com/anandthakker/doiuse) 提示 CSS 的浏览器支持性，使用的数据来自于 Can I Use。
- [`colorguard`](https://github.com/SlexAxton/css-colorguard) 帮助你保持一个始终如一的调色板。

### 其它

- [`postcss-rtl`](https://github.com/vkalinichev/postcss-rtl) 在单个 CSS 文件里组合了两个方向（左到右，右到左）的样式。
- [`cssnano`](http://cssnano.co/) 是一个模块化的 CSS 压缩器。
- [`lost`](https://github.com/peterramsing/lost) 是一个功能强大的 `calc()` 栅格系统。
- [`rtlcss`](https://github.com/MohammadYounes/rtlcss) 镜像翻转 CSS 样式，适用于 right-to-left 的应用场景。

## 语法

PostCSS 可以转化样式到任意语法，不仅仅是 CSS。 如果还没有支持你最喜欢的语法，你可以编写一个解释器以及（或者）一个 stringifier 来拓展 PostCSS。

- [`sugarss`](https://github.com/postcss/sugarss) 是一个以缩进为基础的语法，类似于 Sass 和 Stylus。
- [`postcss-syntax`](https://github.com/gucong3000/postcss-syntax) 通过文件扩展名自动切换语法。
- [`postcss-html`](https://github.com/gucong3000/postcss-html) 解析类 HTML 文件里`<style>`标签中的样式。
- [`postcss-markdown`](https://github.com/gucong3000/postcss-markdown) 解析 Markdown 文件里代码块中的样式。
- [`postcss-jsx`](https://github.com/gucong3000/postcss-jsx) 解析源文件里模板或对象字面量中的CSS。
- [`postcss-styled`](https://github.com/gucong3000/postcss-styled) 解析源文件里模板字面量中的CSS。
- [`postcss-scss`](https://github.com/postcss/postcss-scss) 允许你使用 SCSS *(但并没有将 SCSS 编译到 CSS)*。
- [`postcss-sass`](https://github.com/AleshaOleg/postcss-sass) 允许你使用 Sass *(但并没有将 Sass 编译到 CSS)*。
- [`postcss-less`](https://github.com/webschik/postcss-less) 允许你使用 Less *(但并没有将 LESS 编译到 CSS)*。
- [`postcss-less-engine`](https://github.com/Crunch/postcss-less) 允许你使用 Less *(并且使用真正的 Less.js 把 LESS 编译到 CSS)*。
- [`postcss-js`](https://github.com/postcss/postcss-js) 允许你在 JS 里编写样式，或者转换成 React 的内联样式／Radium／JSS。
- [`postcss-safe-parser`](https://github.com/postcss/postcss-safe-parser) 查找并修复 CSS 语法错误。
- [`midas`](https://github.com/ben-eb/midas) 将 CSS 字符串转化成高亮的 HTML。

## 使用方法

你可以通过简单的两步便开始使用 PostCSS：

1. 在你的构建工具中查找并添加 PostCSS 拓展。
2. [选择插件](http://postcss.parts/)并将它们添加到你的 PostCSS 处理队列中。

### CSS-in-JS

同时使用 PostCSS 与 CSS-in-JS 的最好方式是 [`astroturf`](https://github.com/4Catalyzer/astroturf)，将它的 loader 添加到 `webpack.config.js` 中：

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'postcss-loader'],
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader', 'astroturf/loader'],
      }
    ]
  }
}
```

然后创建 `postcss.config.js`：

```
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested')
  ]
}
```

### Parcel

[Parcel](https://parceljs.org/) 有内建的 PostCSS 支持，并已经使用 Autoprefixer 和 cssnano。如果你想更换插件，请在项目根目录中创建 `postcss.config.js`：

```
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested')
  ]
}
```

Parcel 甚至会自动地帮你安装这些插件。

> 请注意[第 1 版中存在的几个问题](https://github.com/parcel-bundler/parcel/labels/CSS Preprocessing)，第 2 版通过 [issue #2157](https://github.com/parcel-bundler/parcel/projects/5) 解决了这些问题。

### Webpack

在 `webpack.config.js` 里使用 [`postcss-loader`](https://github.com/postcss/postcss-loader) :

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
}
```

然后创建 `postcss.config.js`:

```
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested')
  ]
}
```

### Gulp

使用 [`gulp-postcss`](https://github.com/postcss/gulp-postcss) 和 [`gulp-sourcemaps`](https://github.com/floridoo/gulp-sourcemaps).

```
gulp.task('css', () => {
  const postcss    = require('gulp-postcss')
  const sourcemaps = require('gulp-sourcemaps')

  return gulp.src('src/**/*.css')
    .pipe( sourcemaps.init() )
    .pipe( postcss([ require('postcss-nested'), require('autoprefixer') ]) )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('build/') )
})
```

### npm run / CLI

如果需要在你的命令行界面或 npm 脚本里使用 PostCSS，你可以使用 [`postcss-cli`](https://github.com/postcss/postcss-cli)。

```
postcss --use autoprefixer -c options.json -o main.css css/*.css
```

### 浏览器

如果你想编译浏览器里的 CSS 字符串（例如像 CodePen 一样的在线编辑器）， 只需使用 [Browserify](http://browserify.org/) 或 [webpack](https://webpack.github.io/)。它们会把 PostCSS 和插件文件打包进一个独立文件。

如果想要在 React 内联样式／JSS／Radium／其它 [CSS-in-JS](https://github.com/MicheleBertoli/css-in-js) 里使用 PostCSS， 你可以用 [`postcss-js`](https://github.com/postcss/postcss-js) 然后转换样式对象。

```
var postcss  = require('postcss-js')
var prefixer = postcss.sync([ require('autoprefixer') ])

prefixer({ display: 'flex' }) //=> { display: ['-webkit-box', '-webkit-flex', '-ms-flexbox', 'flex'] }
```

### 运行器

- **Grunt**: [`grunt-postcss`](https://github.com/nDmitry/grunt-postcss)
- **HTML**: [`posthtml-postcss`](https://github.com/posthtml/posthtml-postcss)
- **Stylus**: [`poststylus`](https://github.com/seaneking/poststylus)
- **Rollup**: [`rollup-plugin-postcss`](https://github.com/egoist/rollup-plugin-postcss)
- **Brunch**: [`postcss-brunch`](https://github.com/brunch/postcss-brunch)
- **Broccoli**: [`broccoli-postcss`](https://github.com/jeffjewiss/broccoli-postcss)
- **Meteor**: [`postcss`](https://atmospherejs.com/juliancwirko/postcss)
- **ENB**: [`enb-postcss`](https://github.com/awinogradov/enb-postcss)
- **Taskr**: [`taskr-postcss`](https://github.com/lukeed/taskr/tree/master/packages/postcss)
- **Start**: [`start-postcss`](https://github.com/start-runner/postcss)
- **Connect/Express**: [`postcss-middleware`](https://github.com/jedmao/postcss-middleware)

### JS API

对于其它的应用环境，你可以使用 JS API：

```
const postcssNested = require('postcss-nested')
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const fs = require('fs')

fs.readFile('src/app.css', (err, css) => {
  postcss([postcssNested, autoprefixer])
    .process(css, { from: 'src/app.css', to: 'dest/app.css' })
    .then(result => {
      fs.writeFile('dest/app.css', result.css)
      if ( result.map ) fs.writeFile('dest/app.css.map', result.map)
    })
})
```

阅读 [PostCSS API 文档](https://postcss.org/api/) 获取更多有关 JS API 的信息.

所有的 PostCSS 运行器应当通过 [PostCSS 运行器指南](https://github.com/postcss/postcss/blob/main/docs/guidelines/runner.md)。

### 配置选项

绝大多数 PostCSS 运行器接受两个参数：

- 一个包含所需插件的数组
- 一个配置选项的对象

常见的选项：

- `syntax`: 一个提供了语法解释器和 stringifier 的对象。
- `parser`: 一个特殊的语法解释器（例如 [SCSS](https://github.com/postcss/postcss-scss)）。
- `stringifier`: 一个特殊的语法 output 生成器（例如 [Midas](https://github.com/ben-eb/midas)）。
- `map`: [source map 选项](https://postcss.org/api/#sourcemapoptions).
- `from`: input 文件名称（大多数运行器自动设置了这个）。
- `to`: output 文件名称（大多数运行器自动设置了这个）。

### Atom

- [`language-postcss`](https://atom.io/packages/language-postcss) 添加了 PostCSS 和 [SugarSS](https://github.com/postcss/sugarss) 代码高亮。
- [`source-preview-postcss`](https://atom.io/packages/source-preview-postcss) 在一个独立窗口里实时预览生成的 CSS。

### Sublime Text

- [`Syntax-highlighting-for-PostCSS`](https://github.com/hudochenkov/Syntax-highlighting-for-PostCSS) 添加了 PostCSS 代码高亮。

### Vim

- [`postcss.vim`](https://github.com/stephenway/postcss.vim) 添加了 PostCSS 代码高亮。