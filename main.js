// function getselect(){
//   var selectValue = document.getElementById('kuis').value;
// }

var button = document.getElementById('cekhasil');
button.addEventListener('click', function(){
   //ambil data dalam list options
   var isi = document.getElementById('pilih');
   var pilihan = isi.options[isi.selectedIndex].value;
   var angka1 = document.getElementById('angka1');
   var angka2 = document.getElementById('angka2');
   var ket = document.getElementById('ket');
   if(pilihan==='penjumlahan'){
    var hasil = penjumlahan(parseInt(angka1.value), parseInt(angka2.value));
    ket.innerHTML = 'hasil dari penjumlahan ' + parseInt(angka1.value) + '  + ' + parseInt(angka2.value)+'  adalah  ' + hasil;
   }else if(pilihan==='pengurangan'){
    var hasil = pengurangan(parseInt(angka1.value), parseInt(angka2.value));
    ket.innerHTML = 'hasil dari pengurangan  ' + parseInt(angka1.value) + '  - ' + parseInt(angka2.value)+'  adalah  ' + hasil;
   }else if(pilihan==='perkalian'){
    var hasil = perkalian(parseInt(angka1.value), parseInt(angka2.value));
    ket.innerHTML = 'hasil dari perkalian  ' + parseInt(angka1.value) + '  x ' + parseInt(angka2.value)+'  adalah  ' + hasil;
   }else if(pilihan==='fpb'){
    var hasil = fpb(parseInt(angka1.value), parseInt(angka2.value));
    ket.innerHTML = 'hasil dari fpb  ' + parseInt(angka1.value) + '  dan ' + parseInt(angka2.value)+'  adalah  ' + hasil;
   }else if(pilihan==='kpk'){
    var hasil = kpk(parseInt(angka1.value), parseInt(angka2.value));
    ket.innerHTML = 'hasil dari kpk ' + parseInt(angka1.value) + '  dan ' + parseInt(angka2.value)+'  adalah  ' + hasil;
   }
   //var hasil = fpb(parseInt(angka1.value), parseInt(angka2.value));
   var input = document.getElementById('hasil')
   input.value = hasil
})
function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();


function penjumlahan(angka1,angka2){
    return parseInt(angka1) + parseInt(angka2)
}
function pengurangan(angka1,angka2){
    return parseInt(angka1) - parseInt(angka2)
}
function perkalian(angka1,angka2){
    return parseInt(angka1) * parseInt(angka2)
}

function fpb(angka1, angka2){
  var hasil1 = 0;
  for(var i=1;i<angka1;i++){
    if(angka1 % i === 0 && angka2 % i ===0){
      hasil1 = i;
    }
  }return hasil1;
}

// function kpk(angka1, angka2) {
//   var arr1 = []
//   var arr2 = []
//   var checker = []
//   for (var i = 1; i< angka1*angka2; i++) {
//     if ((angka1 * i) % angka1 === 0 ) {
//       arr1.push(angka1*i)
//     }
//     if ((angka2 * i) % angka2 === 0) {
//       arr2.push(angka2*i)
//     }
//   }
//   for (var j = 0; j<arr1.length; j++) {
//     var isThere = arr2.indexOf(arr1[j]) 
//     if (isThere !== -1) {
//       checker.push(arr2[isThere])
//     }
//   }
//   return checker[0]
// }

function kpk(angka1, angka2) {
  var angka3 = angka1 * angka2;
  var hasil2 = []
  for(i=angka3;i>angka1&&angka2;i--){
    if(i%angka1==0 && i%angka2==0){
      hasil2 = i
    }
  }return hasil2
}
