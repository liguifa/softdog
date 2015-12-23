var fs = require('fs');

function ReadDir(path)
{
	var folders = fs.readdirSync(path);
	var filederDate = "[";
	for(var i in folders)
	{
		filederDate += "{'text': '"+folders[i]+"','state': 'closed','children':[{}]},";
	}
	filederDate = filederDate.substring(0,filederDate.length-1)+"]";
	return eval("("+filederDate+")");
}