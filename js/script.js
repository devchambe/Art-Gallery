function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('updateDateTime()',refresh)
}

function updateDateTime(){
    var x = new Date()
    var x1= addZero(x.getMonth()) + 1+ "/" + addZero(x.getDate()) + "/" + x.getFullYear()+ "  " +  addZero(x.getHours())+ ":" +  addZero(x.getMinutes()) + ":" +  addZero(x.getSeconds());
    document.getElementById('dateTime').innerHTML = x1;
    display_c();
}

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }