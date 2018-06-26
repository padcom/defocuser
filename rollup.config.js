import uglify from 'rollup-plugin-uglify-es'

import pkg from './package.json'

export default {
  input: pkg.module,
  output: [ {
    file: pkg.main,
    format: 'iife',
    name: 'Defocuser',
  } ],
  plugins: [
    uglify()
  ]
}
