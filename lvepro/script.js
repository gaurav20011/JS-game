document.getElementById('calculateBtn').addEventListener('click', function() {
  var boyDOB = new Date(document.getElementById('boyDOB').value);
  var girlDOB = new Date(document.getElementById('girlDOB').value);
  var loveScore = Math.abs(boyDOB - girlDOB) % 101;
  if(loveScore === "NaN"){
    calculateBtn.textContent="Please Enter A Number";
  } // Simple formula for calculating love score
  document.getElementById('loveScore').textContent = 'Love Score: ' + loveScore + '%';
});
