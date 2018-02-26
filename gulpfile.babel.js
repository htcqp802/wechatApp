/*
 * @Author: chip
 * @Date: 2018-02-26 16:22:40
 * @Last Modified by:   chip
 * @Last Modified time: 2018-02-26 16:22:40
 */
import gulp from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import gutil from 'gulp-util';
import watch from 'gulp-watch';
import pkgExport from 'gulp-pkg-export';
import del from 'del';
import env from './config/env';

const dest = 'dist';
const src = 'src';

const paths = {
  scripts: {
    src: `${src}/**/*.js`,
    dest: `${dest}/`,
  },
  others: {
    src: `${src}/**/*.!(js)`,
    dest: `${dest}/`,
  },
}
export const clean = () => del([dest]);

/**
 * 编译Js
 */
export function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(pkgExport({
      // options for `pkg-export`
      base: 'src',
      npm: 'lib',
      compiler: function (content) {
        return require('babel-core').transform(content, {
          presets: ['es2015', 'stage-2'],
          plugins: ['transform-runtime']
        }).code;
      }
    }))
    .pipe(gulp.dest(paths.scripts.dest))
}

/** 
 * 复制其他文件
*/
export function copy() {
  return gulp.src(paths.others.src)
    .pipe(gulp.dest(paths.others.dest))
}

/**
 * 生成stream
 * @param {*} filename 文件名
 * @param {*} string 内容
 */
function string_src(filename, string) {
  var src = require('stream').Readable({ objectMode: true })
  src._read = function () {
    this.push(new gutil.File({ cwd: "", base: "", path: filename, contents: new Buffer(string) }))
    this.push(null)
  }
  return src
}

/**
 * 生成配置文件
 */
export function settings() {
  const environment = env[process.env.NODE_ENV || 'dev'];
  return string_src('config.js', `export const env = ${JSON.stringify(environment)}`)
    .pipe(babel())
    .pipe(gulp.dest(`${dest}/`));
}

export function watchFiles() {
  watch(paths.scripts.src, scripts);
  watch(paths.others.src, copy);
  watch('config/**', settings);
}


/**
 * 打包
 */
const build = gulp.series(clean, gulp.parallel(copy, settings, scripts));

gulp.task('build', build);
gulp.task('watch', gulp.parallel(build, watchFiles));



export default build;