var bayrell_rtl = require('bayrell_rtl');
var rtl = bayrell_rtl.rtl;


base_path = '';
if (typeof __dirname != 'undefined') base_path = rtl.clone(__dirname);
else if (typeof global.__dirname != 'undefined') base_path = rtl.clone(global.__dirname);


module.exports = {
	'type': 1,
	'base_path': base_path,
	'files': [
		'FileSystem/FileInterface',
		'FileSystem/FileSystemInterface',
		'System/StreamInterface',
		'System/StreamReader',
		'CommonConstant',
	],
};
