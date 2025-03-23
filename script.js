// document.getElementById("heron").addEventListener('submit', heron);
// document.getElementById("ambig").addEventListener('submit', ambig);
// document.getElementById("newton").addEventListener('submit', newton);
// document.getElementById("poly").addEventListener('submit', poly);

document.getElementById("heron").addEventListener('submit', (event) => {
    event.preventDefault();
    const a = parseFloat(document.getElementById("heronA").value);
    const b = parseFloat(document.getElementById("heronB").value);
    const c = parseFloat(document.getElementById("heronC").value);

    if (a < b+c && b < a+c && c < a+b) {
        const area = 0.25*Math.sqrt(4*a*a*b*b - Math.pow(a*a + b*b - c*c, 2));
        document.getElementById("area").value = `Area: ${area.toFixed(2)} units squared`; 
    } else{
        document.getElementById("area").value = "Error: Invalid Side Lengths";
    }
})

document.getElementById("ambig").addEventListener('submit', (event) => {
    event.preventDefault();
    const angle = parseFloat(document.getElementById("angleA").value);
    const a = parseFloat(document.getElementById("sideA").value);
    const b = parseFloat(document.getElementById("sideB").value);
    const h = b * Math.sin(angle * Math.PI / 180).toFixed(2);

    if (angle > 0 && angle <= 90) {
        if (h < a && a < b) {
            document.getElementById("type").value = "two triangles (ambiguous case)";
        }  
        else if (a == h) {
            document.getElementById("type").value = "right triangle";
        }
        else if (a < h) {
            document.getElementById("type").value = "no triangle";
        }
        else if (a >= b) {
            document.getElementById("type").value = "one triangle";
        } 
    } else if (angle < 180 && angle > 90){
        if (a < b ||  a == b) {
            document.getElementById("type").value = "no triangle";
        }
        else if (a > b) {
            document.getElementById("type").value = "one triangle";
        }
    } else{
        document.getElementById("type").value = "Error: Angle must be between 0 and 180 degrees";
    }
})

document.getElementById("newton").addEventListener('submit', (event) => {
    event.preventDefault();
    let x0 = parseFloat(document.getElementById("guess").value);
    let x1 = approximateRoot(x0);

    while (Math.abs(x0-x1) > 0.0001) {
        x0 = x1;
        x1 = approximateRoot(x0);
    }

    document.getElementById("root").value = `Approximated Root: ${x1.toFixed(3)}`;
})

function approximateRoot(x0) {
    let y = 6*Math.pow(x0, 4) - 13*Math.pow(x0, 3) - 18*Math.pow(x0, 2) + 7*x0 + 6;
    let yPrime = 24*Math.pow(x0, 3) - 39*Math.pow(x0, 2) - 36*x0 + 7;
    return x0 - y/yPrime;
}

document.getElementById("poly").addEventListener('submit', (event) => {
    event.preventDefault();
    const coeff = document.getElementById("coeff").value.split(" ");
    const exp = document.getElementById("exp").value.split(" ");
    const x = parseFloat(document.getElementById("x").value);
    let func = "";
    let y = 0;
    
    if (coeff.length != exp.length) {
        document.getElementById("eval").value = "Error: Invalid Input";
    } else {
        let y = 0;
        for (let i = 0; i < coeff.length; i++) {
            y += parseFloat(coeff[i])*Math.pow(x, parseFloat(exp[i]));
            if (parseFloat(coeff[i]) >= 0 && i < coeff.length-1) {
                func += `${coeff[i]}x^${exp[i]} + `;
            } else {
                func += `${coeff[i]}x`;
            }
        }
        document.getElementById("f(x)").value = func;
        document.getElementById("eval").value = `f(${x}) = ${y}`;
    }
})
