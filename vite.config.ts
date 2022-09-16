import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve}from'path'
import {quasar,transformAssetUrls} from '@quasar/vite-plugin'

function pathResolve(dir:string):string {
  console.debug('Test platform method:',process.cwd().toString())
  return resolve(process.cwd().toString(),',',dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry:'index.js',
      formats:['es']
    }
  },
  plugins: [
    vue({ 
      template:{transformAssetUrls}
       }),
      quasar({
        sassVariables:'src/quasar-variables.sass'
      })],
  resolve:{
    alias:[
      {
        find:/\/@\//,
        replacement:pathResolve('src')+'/'
      },
      {
        find:/\/#\//,
        replacement:pathResolve('types')+'/'
      }
    ]
  }
})
