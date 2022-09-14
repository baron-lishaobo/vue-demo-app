import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve}from'path'
import pkg from './package.json'

function pathResolve(dir:string):string {
  console.debug('Test platform method:',process.cwd().toString())
  return resolve(process.cwd().toString(),',',dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
