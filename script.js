function calculateTip(event){
  event.preventDefault();

  const bill = document.getElementById('bill').value;
  const serviceQuality = document.getElementById('service-quality').value;
  const clientsNumber = document.getElementById('clients-number').value;
  const tip = document.getElementById('tip');
  console.log(bill);
  if(bill == '' || bill <= 0 || clientsNumber < 1){
    tip.innerHTML = `Por favor, preencha corretamente os campos acima!`;
  }else{
    let total = (bill * serviceQuality / clientsNumber);
    total = total.toFixed(2).replace('.',',');

    tip.innerHTML = `<span> R$ ${total} <span>`;
  }
}

document.querySelector('form').addEventListener('submit', calculateTip);