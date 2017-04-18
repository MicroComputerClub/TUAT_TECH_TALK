import npm from 'rollup-plugin-npm';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';

export default {
  // エントリ
    entry: 'scripts/index.js',
  // 出力先
    dest: 'bundle.js',
   // プラグイン
    plugins: [
    // 文字列の置換
        replace({
            'process.env.NODE_ENV': '"production"'
        }),
    // npmモジュールのmainを参照
        npm({
            main: true
        }),
    // CommonJSモジュールをES6に変換
        commonjs({
            include: 'node_modules/**'
        }),
    // ES5に変換
        babel({
            exclude: 'node_modules/**'
        }),
    ],
    format: 'iife'
};
