var shell = require('shelljs');

shell.echo( "----------------------------------" );
shell.echo( "  LOCAL RUN START" );
shell.echo( "  - STARTING LOCAL File & API Server");
shell.exec( "node build_local.js" );
shell.exec( "node serve_local.js" );
