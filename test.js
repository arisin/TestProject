// JavaScript Document
//このサイトを参考にしました：http://gihyo.jp/dev/serial/01/crossbrowser-javascript/0017


window.addEventListener("load", function(){
	
	//初期設定の値
	var top = 300;
	var left = 500;
	
	//体
	var begin = new Date().getTime();//時間を取得（ミリ秒）

	var	w = document.getElementById('w');

	var id = setInterval(function(){	//繰り返しタイマーイベント
		var current = new Date() - begin;
  		if (current > 1000){
    		clearInterval(id);
    		current = 1000; // 1000以上になっているので，調整する
  		}	
  	w.style.top = top - current / 10 + 'px';
  	w.style.left = left - current / 10 + 'px';
	}, 10); // 10ms置きに実行
	
	//羽
	var b = document.getElementById('b');
	
	var id = setInterval(function(){	//繰り返しタイマーイベント
		var current = new Date() - begin;
  		if (current > 1000){
    		clearInterval(id);
    		current = 1000; // 1000以上になっているので，調整する
  		}	
  	b.style.top = top - current / 10 + 'px';
  	b.style.left = left - current / 10 + 'px';
	}, 10); // 10ms置きに実行

});