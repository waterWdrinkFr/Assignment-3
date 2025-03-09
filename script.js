document.getElementById("Heron").addEventListener('submit', Heron);

function Heron(event) {
    event.preventDefault();
    const a = parseFloat(document.getElementById("sideA").value);
    const b = parseFloat(document.getElementById("sideB").value);
    const c = parseFloat(document.getElementById("sideC").value);

    if (a < b+c && b < a+c && c < a+b) {
        let area = 0.25*Math.sqrt(4*a*a*b*b - Math.pow(a*a + b*b - c*c, 2));
        document.getElementById("Area").value = `Area: ${area.toFixed(2)} units squared`; 
    }
    else{
        document.getElementById("Area").value = "Error: Invalid Side Lengths";
    }
}