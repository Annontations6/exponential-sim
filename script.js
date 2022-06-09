let ft = 0;

function Convert(calc) {
    if (calc == Infinity) {
        return "\u221E";
    } else {
        return calc;
    }
}

document.getElementById("ft").onclick = () => {
    ft = ft + 1;
    document.getElementById("ft2").innerText = "\u005C(f(t) = " + Convert(ft) + "\u005C)"
}