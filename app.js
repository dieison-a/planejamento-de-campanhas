const budget = document.querySelector("#budget");
const formatter = new Intl.NumberFormat("pt-BR");

function updateScenario() {
  const investment = Number(budget.value);
  const reach = Math.round(investment * 18);
  const leads = Math.round(reach * 0.06);
  const opportunities = Math.round(leads * 0.2);
  document.querySelector("#budget-value").textContent = `R$ ${formatter.format(investment)}`;
  document.querySelector("#reach").textContent = formatter.format(reach);
  document.querySelector("#leads").textContent = formatter.format(leads);
  document.querySelector("#opportunities").textContent = formatter.format(opportunities);
  const percent = investment / Number(budget.max) * 100;
  budget.style.background = `linear-gradient(to right, #ee6e53 0%, #f4c2b5 ${percent}%, #f0e5df ${percent}%, #f0e5df 100%)`;
}

budget.addEventListener("input", updateScenario);
updateScenario();
