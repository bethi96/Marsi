function calculate()
{
    num1 = document.getElementById("question1").value;
    num2 = document.getElementById("question2").value;
    num3 = document.getElementById("question3").value;
    num4 = document.getElementById("question4").value;
    num5 = document.getElementById("question5").value;
    num6 = document.getElementById("question6").value;
    num7 = document.getElementById("question7").value;
    num8 = document.getElementById("question8").value;
    num9 = document.getElementById("question9").value;
    num10 = document.getElementById("question10").value;
    num11 = document.getElementById("question11").value;
    num12 = document.getElementById("question12").value;
    num13 = document.getElementById("question13").value;
    num14 = document.getElementById("question14").value;
    num15 = document.getElementById("question15").value;

    num16_GRS = (parseInt(num1) + parseInt(num3) + parseInt(num5) + parseInt(num12) + parseInt(num13))/5;
    num17_PSS = (parseInt(num7)+parseInt(num9)+parseInt(num11)+parseInt(num14)+parseInt(num15))/5;
    num18_SRS = (parseInt(num2)+parseInt(num4)+parseInt(num6)+parseInt(num8)+parseInt(num10))/5;

    total_mean = ((parseInt(num16_GRS)+parseInt(num17_PSS)+parseInt(num18_SRS))/3).toFixed(2);

    document.getElementById("result").innerHTML = total_mean;
    
   /* document.getElementById("value1").innerHTML = num1;
    document.getElementById("value2").innerHTML = num2;
    document.getElementById("value3").innerHTML = num3;
    document.getElementById("value4").innerHTML = num4;
    document.getElementById("value5").innerHTML = num5;
    document.getElementById("value6").innerHTML = num6;
    document.getElementById("value7").innerHTML = num7;
    document.getElementById("value8").innerHTML = num8;
    document.getElementById("value9").innerHTML = num9;
    document.getElementById("value10").innerHTML = num10;
    document.getElementById("value11").innerHTML = num11;
    document.getElementById("value12").innerHTML = num12;
    document.getElementById("value13").innerHTML = num13;
    document.getElementById("value14").innerHTML = num14;
    document.getElementById("value15").innerHTML = num15;
    document.getElementById("value16_GRS").innerHTML = num16_GRS;
    document.getElementById("value17_PSS").innerHTML = num17_PSS;
    document.getElementById("value18_SRS").innerHTML = num18_SRS; */
}