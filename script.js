document.getElementById("Heron").addEventListener('submit', Heron);
document.getElementById("Ambig").addEventListener('submit', Ambig);
document.getElementById("Newton").addEventListener('submit', Newton);

function Heron(event) {
    event.preventDefault();
    const a = parseFloat(document.getElementById("HeronA").value);
    const b = parseFloat(document.getElementById("HeronB").value);
    const c = parseFloat(document.getElementById("HeronC").value);

    if (a < b+c && b < a+c && c < a+b) {
        const area = 0.25*Math.sqrt(4*a*a*b*b - Math.pow(a*a + b*b - c*c, 2));
        document.getElementById("Area").value = `Area: ${area.toFixed(2)} units squared`; 
    }
    else{
        document.getElementById("Area").value = "Error: Invalid Side Lengths";
    }
}

function Ambig(event) {
    event.preventDefault();
    const angle = parseFloat(document.getElementById("angleA").value);
    const a = parseFloat(document.getElementById("sideA").value);
    const b = parseFloat(document.getElementById("sideB").value);
    const h = b * Math.sin(angle * Math.PI / 180).toFixed(2);
    console.log(angle, a, b, h);

    if (angle > 0 && angle <= 90) {
        if (h < a && a < b) {
            document.getElementById("Type").value = "two triangles (ambiguous case)";
        }  
        else if (a == h) {
            document.getElementById("Type").value = "right triangle";
        }
        else if (a < h) {
            document.getElementById("Type").value = "no triangle";
        }
        else if (a >= b) {
            document.getElementById("Type").value = "one triangle";
        } 
    }

    else if (angle < 180 && angle > 90){
        if (a < b ||  a == b) {
            document.getElementById("Type").value = "no triangle";
        }
        else if (a > b) {
            document.getElementById("Type").value = "one triangle";
        }
    }

    else{
        document.getElementById("Type").value = "Error: Angle must be between 0 and 180 degrees";
    }
}

function Newton(event) {
    event.preventDefault();
    let x0 = parseFloat(document.getElementById("guess").value);
    let x1 = approximateRoot(x0);

    while (Math.abs(x1-x0) > 0.0001) {
        console.log(x1);
        x0 = x1;
        x1 = approximateRoot(x0);
    }

    document.getElementById("Root").value = `Approximated Root: ${x1.toFixed(4)}`;
}

function approximateRoot(x0) {
    const y = 6*Math.pow(x0, 4) - 13*Math.pow(x0, 3) - 18*Math.pow(x0, 2) + 7*x0 + 6;
    const yPrime = 18*Math.pow(x0, 3) - 39*Math.pow(x0, 2) - 36*x0 + 7;
    return x0 - y/yPrime;
}