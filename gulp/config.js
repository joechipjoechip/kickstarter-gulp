const base = {
  src: process.env.STATIC_SRC,
  dist: process.env.STATIC_DIST,
};

module.exports = {
  js: {
    src: base.src + '/**/*.js',
    dist: base.dist + '/',
    del: [base.dist + '/**/*.js'],
  },
  server: {
    src: base.dist,
  },
  html: {
    src: base.src + '/**/*.html',
    dist: base.dist,
    del: [base.dist + '/**/*.html'],
  },
  sass: {
    src: base.src + '/**/*.scss',
    dist: base.dist,
    del: [base.dist + '/**/*.css'],
  },
  browsersync: {
    options: {
      server: {
        baseDir: base.dist,
      },
      notify: false,
    },
  },
};
