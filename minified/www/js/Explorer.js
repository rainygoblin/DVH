var Explorer=function(){function b(){this.UpdateScope=this.clipboardAction=this.clipboardItem=this.activeItemType=this.activeItem=this.parentDir=this.currentDir=this.root=null}b.prototype.getFileSystem=function(){try{var a=function(a){this.root=a.root;this.listDir(this.root)}.bind(this);window.requestFileSystem(LocalFileSystem.PERSISTENT,0,a,function(a){console.log("File System Error: "+a.target.error.code)})}catch(c){console.log("listDir :  "+c.message)}};b.prototype.listDir=function(a){try{a.isDirectory||
console.log("listDir incorrect type");this.currentDir=a;var c=function(a){this.parentDir=a}.bind(this);a.getParent(c,function(a){console.log("Get parent error: "+a.code)});var b=a.createReader(),d=function(a){for(var c=[],f=[],b=0;b<a.length;++b){var d=a[b];d.isDirectory&&"."!=d.name[0]?c.push(d):d.isFile&&"."!=d.name[0]&&f.push(d)}this.UpdateScope(c,f)}.bind(this);b.readEntries(d,function(a){console.log("listDir readEntries error: "+a.code)})}catch(e){console.log("listDir :  "+e.message)}};b.prototype.readFile=
function(a){try{a.isFile||console.log("readFile incorrect type");var c=function(a){this.UpdateScope(null,null,a)}.bind(this);a.file(c,function(a){console.log("file read error:"+evt.target.error.code)})}catch(b){console.log("readFile :  "+b.message)}};b.prototype.openItem=function(a){try{"d"==a?this.listDir(this.activeItem):"f"==a&&this.readFile(this.activeItem)}catch(c){console.log("openItem :  "+c.message)}};b.prototype.getActiveItem=function(a,c){try{var b=function(a){this.activeItem=a;this.activeItemType=
c;this.openItem("d")}.bind(this),d=function(a){console.log("Unable to find directory: "+a.code)},e=function(a){this.activeItem=a;this.activeItemType=c;this.openItem("f")}.bind(this),g=function(a){console.log("Unable to find file: "+a.code)};"d"==c&&null!=this.currentDir?this.currentDir.getDirectory(a,{create:!1,exclusive:!1},b,d):"f"==c&&null!=this.currentDir&&this.currentDir.getFile(a,{create:!1,exclusive:!1},e,g)}catch(h){console.log("getActiveItems :  "+h.message)}};b.prototype.getClipboardItem=
function(a){try{null!=this.activeItem&&(this.clipboardItem=this.activeItem,this.clipboardAction=a)}catch(b){console.log("getClipboardItem : "+b.message)}};return b}();