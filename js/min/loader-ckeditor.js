$(function(){CKEDITOR!=undefined&&$("textarea.editor").each(function(){var a={height:$(this).innerHeight()-75,forcePasteAsPlainText:!0},b=this.attributes;for(var c=0;c<b.length;c++)b[c].nodeName.match(/^data-editor-(.*)$/)&&(a[RegExp.$1]=b[c].nodeValue);$(this).ckeditor(a)})});