<template>
  <div id="app">
			<div class="container">
				<div class="calculator">
					<div class="answer">{{ answer }}</div>
					<div class="display">{{ logList + current }}</div>
					<div @click="clear" id="clear" class="btn operator">C</div>
					<div @click="sign" id="sign" class="btn operator">+/-</div>
					<div @click="percent" id="percent" class="btn operator">%</div>
					<div @click="divide" id="divide" class="btn operator">/</div>
					<div @click="append('7')" id="n7" class="btn">7</div>
					<div @click="append('8')" id="n8" class="btn">8</div>
					<div @click="append('9')" id="n9" class="btn">9</div>
					<div @click="times" id="times" class="btn operator">*</div>
					<div @click="append('4')" id="n4" class="btn">4</div>
					<div @click="append('5')" id="n5" class="btn">5</div>
					<div @click="append('6')" id="n6" class="btn">6</div>
					<div @click="minus" id="minus" class="btn operator">-</div>
					<div @click="append('1')" id="n1" class="btn">1</div>
					<div @click="append('2')" id="n2" class="btn">2</div>
					<div @click="append('3')" id="n3" class="btn">3</div>
					<div @click="plus" id="plus" class="btn operator">+</div>
					<div @click="append('0')" id="n0" class="zero">0</div>
					<div @click="dot" id="dot" class="btn">.</div>
          <div @click="equal" id="equal" class="btn operator">=</div>
				</div>
			</div>
		</div>
</template>

<style>
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,500&display=swap");
  
  body{
    margin: 0;
    background-color: rgb(156, 153, 153);
  }
  .app{
    margin-top: -60px;
    width: 100%;
    height: 100vh;
  }
  .calculator {
    display: grid;
    grid-template-rows: repeat(7, minmax(60px, auto));
    grid-template-columns: repeat(4, 60px);
    grid-gap: 12px;
    padding: 35px;
    font-family: "Poppins";
    font-weight: 300;
    font-size: 18px;
    background-color: rgb(57, 54, 83);
    border-radius: 10px;
    box-shadow: 0px 3px 80px -30px rgba(13, 81, 134, 1);
    margin: 0 auto;
    width: 285px;
  }

  .btn,.zero {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: white;
    background-color: grey;
    border-radius: 5px;
  }

  .display, .answer {
    grid-column: 1 / 5;
    display: flex;
    align-items: center;
  }

  .display{
    background-color: green;
  }

  .answer {
	font-weight: 500;
	color: #146080;
	font-size: 55px;
	height: 65px;
  }

  .zero {
    grid-column: 1 / 3;
  }

  .operator {
    background-color: black;
    color: white;
  }
</style>
