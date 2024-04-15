const gross = parseInt(localStorage.getItem('gross'));
const extra = parseInt(localStorage.getItem("extra"));
const opt = localStorage.getItem("opt");
const deduct = parseInt(localStorage.getItem("deduct"));
let tax = 0;

if (gross + extra - deduct < 800000) {
    document.getElementById('gross').textContent = "No Tax";
} else if (gross + extra - deduct > 800000) {
    if (opt == "<40") {
        tax = .3 * (gross + extra - deduct);
    } else if (opt == ">=40 but <60") {
        tax = .4 * (gross + extra - deduct);
    } else {
        tax = .1 * (gross + extra - deduct);
    }
    let result = gross + extra - tax;
    document.getElementById('tax').textContent = tax;
    document.getElementById('gross').textContent = result;
}