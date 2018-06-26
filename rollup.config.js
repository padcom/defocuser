import babel from 'rollup-plugin-babel'
import minify from 'rollup-plugin-minify'

export default {
  input: 'index.js',
  output: [ {
    file: 'dist/defocuser.umd.js',
    format: 'umd',
    name: 'defocuser',
  } ],
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    minify({ umd: 'dist/defocuser.umd.min.js' })
  ]
}
