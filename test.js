// JavaScript Document
//このサイトを参考にしました：http://gihyo.jp/dev/serial/01/crossbrowser-javascript/0017


window.addEventListener("load", function(){
	
	//初期設定の値
	var top = 300;
	var left = 500;
	var current_sum = 0;//累計秒数
	
	var a = -1;
	
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
		current_sum += current;
  		if (current > 1000){
    		//clearInterval(id); //１秒で終わらせる
    		current = 1000; // 1000以上になっているので，調整する
  		}
	
		for(var i = 0; i < ob.length; i++){
			ob[i].style.top = top - current / 10 + a + 'px';
			ob[i].style.left = left  - current / 10 + a + 'px';
			
			a--;
	
			console.log("top" + ob['0'].style.top);
			console.log("left" + ob['0'].style.left);

		}

		if(current_sum > 50000){
			stopid();
			console.log(current_sum);
		}
	},10);
	
	function stopid(){
		clearInterval(id)
	}
});