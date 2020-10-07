function circumference()
{
    var r =document.getElementById("radius").value;
    var PI = 3.14;
    var c = 2 * PI * r;
    document.getElementById("1").innerHTML = "Chu vi hình tròn là : " + c.toFixed(2);
}