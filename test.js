// JavaScript Document
//このサイトを参考にしました：http://gihyo.jp/dev/serial/01/crossbrowser-javascript/0017


window.addEventListener("load", function(){
	
	//初期設定の値
	var top = 300;
	var left = 500;
	var cnt = 1;
	
	var begin = new Date().getTime();//時間を取得（ミリ秒）

	//体
	var	w = document.getElementById('w');
	
	//羽
	var b = document.getElementById('b');
	
	//配列
	var ob = [w,b];
	
// 10ms置きに実行

	var id = setInterval(function(){
		var current = new Date() - begin;
  		if (current > 1000){
    		clearInterval(id);
    		current = 1000; // 1000以上になっているので，調整する
  		}
//  		w.style.top = top - current / 10 + 'px';
//  		w.style.left = left - current / 10 + 'px';
//			b.style.top = top - current / 10 + 'px';
//  		b.style.left = left - current / 10 + 'px';
		
		for(var i = 0; i < ab.length; i++){
			ob[i].style.top = top - current / 10 + 'px';
			ob[i].style.left = left - current / 10 + 'px';
		}

		cnt++;
		if(cnt == 10){
			stopid();
		}
		console.log('cnt : ' + cnt);
	},10);
	
	function stopid(){
		clearInterval(id)
	}
});