
const inputHeight = document.getElementById('height')
const inputWeight = document.getElementById('weight')
const checkResult = document.querySelector('.bmi-seeResult')
const userBmi = document.querySelector('.user-bmi')
const userData = JSON.parse(localStorage.getItem('使用者資料')) || []

// 呼叫函數
updateBmiRecord(userData)

//事件監聽
checkResult.addEventListener('click',storeUserData)
userBmi.addEventListener('click',deleteBmiData)


//儲存使用者身高、體重、BMI資料
function storeUserData(){
  let heightValue = inputHeight.value
  let weightValue = inputWeight.value

  
  // 計算bmi
  let userHeight = (heightValue/100)
  let userWeight = (weightValue)
  let userBmi = (userWeight / (userHeight*userHeight)).toFixed(2)
  console.log(userBmi)
  // 取得日期
  let today = new Date()
  
  let month = today.getMonth()+1
    if (month < 10){
      month = '0' + month
    }
  
  let day = today.getDate()
    if (day < 10){
      day = '0' + day
    }
  
  // 將calcBmi函數的資料轉為陣列
  let arrayCalcBmi = calcBmi(userBmi).split(',')
  let bmiColor = arrayCalcBmi[0]
  let bmiStatus = arrayCalcBmi[1]
  
  let currentTime = month +'-'+ day + '-' + today.getFullYear()
  
  checkResult.className = `bmi-result bmi${bmiColor}`
  checkResult.innerHTML = '<strong>'+userBmi +'</strong><span> BMI </span>'
  
  const status = document.querySelector('.status')
  status.innerHTML = `<h3 class="bmi${bmiColor}">${bmiStatus}</h3>`
  
  let bmiResult = document.querySelector('.bmi-result')
  let resetDiv = document.createElement('div')
  let resetImg = document.createElement('img')
  let resetSrc = 'https://hexschool.github.io/JavaScript_HomeWork/assets/icons_loop.png'
  resetDiv.className = `reset bmi${bmiColor}`
  resetImg.setAttribute('src',resetSrc)
  resetDiv.appendChild(resetImg)
  bmiResult.appendChild(resetDiv)
  
  let objectUserData = {
    height: heightValue,
    weight: weightValue,
    BMI: userBmi,
    date: currentTime
  }  
  userData.push(objectUserData)
  updateBmiRecord(userData)
  localStorage.setItem('使用者資料',JSON.stringify(userData))
  
  document.getElementById('height').value = ''
  document.getElementById('weight').value = ''
  
} 

// 更新bmi紀錄
function updateBmiRecord(data){
  let str = ''
  
  for (let i=0; i<data.length; i++){
    let arrayCalcBmi = calcBmi(data[i].BMI).split(',')
    let bmiColor = arrayCalcBmi[0]
    let bmiStatus = arrayCalcBmi[1]
    str+= '<li><span class="bmiborder bmi'+bmiColor+'">'+bmiStatus+'</span><span><em>BMI:</em></span>'+data[i].BMI+'<span><em>Height:</em></span>'+data[i].height+'<span><em>Weight:</em></span>'+data[i].weight+'<span><em>Date:</span></em>'+data[i].date+'<i data-num="'+i+'">Delete</i></li>'
  }
  let userBmi = document.querySelector('.user-bmi')
  userBmi.innerHTML = str
}

// bmi公式計算
function calcBmi(bmiNum){
  if (bmiNum < 18.0){
    return 'blue,過輕'
  }else if (18.0 <= bmiNum && bmiNum < 24.0){
    return 'green,理想'
  }else if (24.0 <= bmiNum && bmiNum < 27.0){
    return 'orange,過重'
  }else if (27.0 <= bmiNum && bmiNum < 30.0){
    return 'deepOrange,輕度肥胖'
  }else if (30.0 <= bmiNum && bmiNum < 35.0){
    return 'deepOrange,重度肥胖'
  }else if (bmiNum > 35.0){
    return 'red,重度肥胖'
  }
}

// 刪除bmi資料
function deleteBmiData(e){
  console.log(e.target.nodeName)
  if (e.target.nodeName !== 'I'){return}
  let dataNum = e.target.dataset.num
  console.log(dataNum)
  userData.splice('userData',1)
  updateBmiRecord(userData)
  localStorage.setItem('使用者資料',JSON.stringify(userData))
}

