function EnterGrade()
{   let a, b, c;
    do
        {
            a = parseInt(document.getElementById("physScore").value);
            if(a > 10 || a < 0)
            {
                alert("Nhập lại trong khoảng điểm Vật Lý 1-10");
                document.getElementById("physScore").value = "";
            }
        }
    while(document.getElementById("physScore").value = "");
    do
    {
            b = parseInt(document.getElementById("bioScore").value);
        if(b > 10 || b < 0)
        {
            alert("Nhập lại trong khoảng điểm Hóa Học 1-10");
            document.getElementById("bioScore").value = "";
        }
    }
    while(document.getElementById("bioScore").value = "");
    do
    {
            c = parseInt(document.getElementById("cheScore").value);
        if(c > 10 || c < 0)
        {
            alert("Nhập lại trong khoảng điểm Sinh Học 1-10");
            document.getElementById("cheScore").value = "";
        }
    }
    while(document.getElementById("cheScore").value = "");

    let average = (a + b + c) / 3;
    document.getElementById("1").innerHTML = "Điểm trung bình là : " + average.toFixed(2)  ;
}
