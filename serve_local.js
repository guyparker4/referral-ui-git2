var shell = require('shelljs');

shell.echo( "----------------------------------" );
shell.echo( "  LOCAL SERVE START" );
shell.echo( "  - STARTING LOCAL File & API Server");
shell.cd( "server" );
shell.exec( "node server.js" );
