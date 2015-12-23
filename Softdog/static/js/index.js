var gui = require('nw.gui');
var win = gui.Window.get();
$(document).ready(function()
{
	$("#context").panel(
	{       
		title:'加密狗',   
		fit:true, 
		iconCls:"static/images.icon",
		collapsible:true,
		minimizable:true,
		maximizable:true,
		closable:true,
		onBeforeClose:function()
		{
			win.close();
		}
	});  
	$('#menu-file').menubutton(
	{      
    	menu: '#menu-file-sub'   
	});  
	$('#menu-edit').menubutton(
	{      
    	menu: '#menu-edit-sub'   
	}); 
	$('#menu-setting').menubutton(
	{      
    	menu: '#menu-setting-sub'   
	}); 
	$('#menu-about').menubutton(
	{      
    	menu: '#menu-about-sub'   
	}); 
	$('.menu-sub').menu(
	{    
    	onClick:function(item)
		{    
			 InvokeMenuMethod(item.id);
    	}    
	});  
});

function InvokeMenuMethod(id)
{
	switch(id)
	{
		case "menu-about-author":
		{
			AboutAuthor();
			break;
		}
		case "menu-file-open":
		{
			OpenFile();
			break;
		}
	}
}

function AboutAuthor()
{
	$("#body").append("<div id='aboutAuthor'></div>");
	$('#aboutAuthor').window(
	{    
		width:600,    
		height:400,    
		modal:true,
		title:"关于作者",
		collapsible:false,
		minimizable:false,
		maximizable:false,
		closable:true
	});
}

function OpenFile()
{
	
	$("#body").append("<div id='fileWindow'></div>");
	$('#fileWindow').window(
	{    
		width:600,    
		height:400,    
		modal:true,
		title:"打开文件",
		collapsible:false,
		minimizable:false,
		maximizable:false,
		closable:true,
		content:"<ul id='files'></ul>"
	});
	$("#files").tree(
	{
		data: ReadDir("D:\\"),
		animate:true,
		lines:true
	});
}