function Square()
{
    let r = document.getElementById("radius").value;
    let PI = 3.14;
    let s = PI * r * r;
    document.getElementById("area").innerHTML = "Diện tích hình tròn là : " + s.toFixed(2);
}