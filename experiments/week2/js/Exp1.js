function clickfn() {
    alert("Hello, This is the Alert Message !");
}

function datefn() {
    document.getElementById('date-para').innerHTML = Date();
}

function addfn() {
    var x = document.getElementById('input1').value;
    var y = document.getElementById('input2').value;
    alert(parseInt(x) + parseInt(y));
}

