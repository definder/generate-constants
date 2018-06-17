var path = require('path')
var gulp = require('gulp');
var gutil = require("gulp-util");
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
const babel = require('gulp-babel');
var webpack = require("webpack");
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpackConfig = {
  entry: [
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'generateConstant.min.js',
    publicPath: '/',
    libraryTarget: 'umd',
    globalObject: 'this'
    //library: 'webpackNumbers'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      "process.env": {
        CONSTANT_NAMESPACE: JSON.stringify(undefined),
        CONSTANT_SEPARATOR: JSON.stringify(undefined),
      }
    }),
  ],
  optimization: {
    runtimeChunk: false,
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        uglifyOptions: {
          compress: {
            drop_console: true,
          },
          output: {
            comments: false,
            beautify: false,
          },
        }
      }),
    ]
  },
  mode: 'production',
}

gulp.task("min", function (callback) {
  webpack(
    webpackConfig,
    function (err, stats) {
      if (err) throw new gutil.PluginError("webpack", err);
      gutil.log("[webpack]", stats.toString({
        // output options
      }));
      callback();
    });
});

gulp.task('exportLib', () =>
  gulp.src('src/*.js')
    .pipe(babel({
      presets: ['env', "stage-0"]
    }))
    .pipe(gulp.dest('lib'))
)


gulp.task('default', ['min', 'exportLib']);
