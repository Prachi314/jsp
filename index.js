
function calculateSulphur() {
   
    const limeInput = document.getElementById('limeInput').value;
    const initialSInput = document.getElementById('initialSInput').value;

    
    const limeValue = parseFloat(limeInput);
    const initialSValue = parseFloat(initialSInput);

    if (isNaN(limeValue) || isNaN(initialSValue)) {
        document.getElementById('result').innerText = "Please enter valid numbers for both fields.";
        return;
    }

    const normalizedLime = limeValue / 1000.0;

  
    const a = 0.00164918;
    const b = -0.01234712;
    const c = 0.03350616;

   
    const polynomialValue = a * normalizedLime**2 + b * normalizedLime + c;

    const finalSContent = initialSValue - polynomialValue;

    document.getElementById('result').innerText = `The final S content is: ${finalSContent.toFixed(5)}`;
}


document.getElementById('limeInput').addEventListener('input', resetResult);
document.getElementById('initialSInput').addEventListener('input', resetResult);

function resetResult() {
    document.getElementById('result').innerText = "";
}

