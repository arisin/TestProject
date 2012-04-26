// JavaScript Document
//このサイトを参考にしました：http://gihyo.jp/dev/serial/01/crossbrowser-javascript/0017

//体
var begin = new Date() - 0;

var	w = document.getElementById('b');

var id = setInterval(function(){
	var current = new Date() - begin;
  	if (current > 1000){
    	clearInterval(id);
    	current = 1000; // 1000以上になっているので，調整する
  	}	
  w.style.top = current / 10 + 'px';
  w.style.left = current / 10 + 'px';
}, 10); // 10ms置きに実行