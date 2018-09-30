<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>BMI calculator</title>
	<link rel="stylesheet" href="bmi.css">
</head>
<body>
	
	<div class="wrapper">
	  <div class="bmi-box">
	    <div class="logo"><img src="https://i.imgur.com/Fbq0nlb.png" alt=""/></div>
	    <div class="bmi-input">
	      <h3>身高 cm</h3>
	      <input type="text" placeholder="請輸入身高" id="height"/>
	      <h3>體重 kg</h3>
	      <input type="text" placeholder="請輸入體重" id="weight"/>
	    </div>
	    <div class="bmi-seeResult">
	      <h3>看結果</h3>
	    </div><span class="status"> </span>
	  </div>
	  <div class="user-record">
	    <h2>BMI 紀錄</h2>
	    <ul class="user-bmi"></ul>
	  </div>
	  <div id="footer">
	    <div class="logo"><img src="https://hexschool.github.io/JavaScript_HomeWork/assets/BMICLogo.png" alt=""/></div>
	  </div>
	</div>

	<script src="bmi.js"></script>
</body>
</html>