/*
  Set proxy options
 */
module.exports = {
  /*
   * Develop on the mesos ui with dcos ui
   *
   * 1. Uncomment the following section
   * 2. Clone the mesos repository referenced in the mesos package locally:
   *    https://github.com/dcos/dcos/blob/master/packages/mesos/buildinfo.json#L6
   * 3. Checkout the branch referenced in the mesos package:
   *    https://github.com/dcos/dcos/blob/master/packages/mesos/buildinfo.json#L8
   * 4. Navigate to src/webui/master and run 'python -m SimpleHTTPServer' to
   *    host that folder on localhost:8000 (target should point to this host)
   * 5. Restart the docs-ui server and when navigating to /mesos you should see
   *    your local ui
   */
  // '/mesos/static/*': {
  //   target: 'http://127.0.0.1:8000',
  //   rewrite: function (req) {
  //     // Remove '/mesos' from the beginning of the url
  //     req.url = req.url.replace(/^\/mesos/, '');
  //   }
  // },
  //dashboard, jobs
  '/dcos-history-service/history/*': {
    target: 'http://114.212.189.138:5050',
    changeOrigin: true,
    rewrite: function (req) {
      req.url = req.url.replace(/\/dcos.*/, '/state');
      // console.log('req info ', req.headers.host)
    },
    logLevel: 'debug'
  },
  //services marathonAPI
  '/service/marathon/v2/*': {
    target: 'http://114.212.189.138:8080',
    changeOrigin: true,
    rewrite: function (req) {
      req.url = req.url.replace(/\/service\/marathon/, '');
      // console.log('req info ', req.headers.host)
    },
    logLevel: 'debug'
  },
  '/dcos-metadata/ui-config.json': {
    target: 'http://114.212.189.147:10019',
    changeOrigin: true,
    rewrite: function (req) {
      req.url = req.url.replace(/\/dcos-metadata/, '');
      // console.log('req info ', req.headers.host)
    },
    logLevel: 'debug'
  },
  '/login*': {
    target: 'http://localhost:8080',
    changeOrigin: true,
    rewrite: function (req) {
      req.url = req.url.replace(/\/login.*/, '');
      // console.log('req info ', req.headers.host)
    },
    logLevel: 'debug'
  }//,
  // "**": {
  //   target: "http://114.212.86.224",
  //   rewrite: function (req) {
  //     console.log(req.url);
  //   }
  // }
};
