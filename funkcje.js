
function oblicz1()
 { 
    var k=document.getElementById('kwota').value;
    var r=document.getElementById('raty').value;
    var pr=document.getElementById('procent').value;
    var rata=document.getElementById('wynik');
    var calosc=document.getElementById('calosc');
    
    k =parseInt(k);
    r=parseInt(r);
    pr=parseInt(pr);
    
    pr=pr/1200;
    rata.value=parseFloat((k*pr)/(1-(1/(Math.pow((1+pr),r)))));
    calosc.value=rata.value*r;
    
 }
 
function kalkulator()
{
    var liczba1=parseFloat(document.getElementById('liczba1').value);
    var liczba2=parseFloat(document.getElementById('liczba2').value);
    var wybor=document.getElementById('case').value;
    
    if(wybor === '+')
        {
            document.getElementById('result').value=liczba1+liczba2;
        }
    if(wybor === '-')
        {
            document.getElementById('result').value=liczba1-liczba2;
        }
    if(wybor === 'x')
        {
            document.getElementById('result').value=liczba1*liczba2;
        }
    if(wybor === '/')
        {
            document.getElementById('result').value=liczba1/liczba2;
        }
    
}