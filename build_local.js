var shell = require('shelljs');

shell.echo( "----------------------------------" );
shell.echo( "  LOCAL BUILD" );
shell.echo( "  - Running gulp prod on client");
shell.cd( "client" );
shell.exec( "npm install" );
shell.exec( "gulp prod" );
