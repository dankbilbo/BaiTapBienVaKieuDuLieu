function Convert()
{
    let cTemp = document.getElementById("EnterCTemperature").value;
    var fTemp;
    var fTemp = (9 * cTemp / 5) + 32;
    document.getElementById("result").innerHTML = fTemp;
}