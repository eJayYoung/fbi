
require('source-map-support').install();
    
'use strict';

var options = {
  task_param_prefix: '-',
  paths: {
    tasks: 'fbi/',
    config: 'fbi/config.js'
  },
  data: {
    root: '../data',
    tasks: '../data/tasks',
    templates: '../data/templates'
  },
  server: {
    root: './',
    host: 'localhost',
    port: 8888
  },
  npm: {
    alias: 'npm',
    options: ''
  },
  TEMPLATE_ADD_IGNORE: ['node_modules', '.DS_Store', '.svn', '.git', 'dst', 'dist'],
  TEMPLATE_INIT_IGNORE: ['node_modules', '.DS_Store', '.svn', '.git', 'dst', 'dist'],
  BACKUP_IGNORE: ['node_modules', '.DS_Store', '.svn', '.git', 'dst', 'dist'],
  RECOVER_IGNORE: ['node_modules', '.DS_Store', '.svn', '.git', 'dst', 'dist']
};

module.exports = options;
// this is outro
// this is footer
//# sourceMappingURL=options.js.map