const orcamento = document.querySelector("#orcamento");
const formatador = new Intl.NumberFormat("pt-BR");

function atualizarCenario() {
  const investimento = Number(orcamento.value);
  const alcance = Math.round(investimento * 18);
  const cadastros = Math.round(alcance * 0.06);
  const oportunidades = Math.round(cadastros * 0.2);
  document.querySelector("#valor-orcamento").textContent = `R$ ${formatador.format(investimento)}`;
  document.querySelector("#alcance").textContent = formatador.format(alcance);
  document.querySelector("#cadastros").textContent = formatador.format(cadastros);
  document.querySelector("#oportunidades").textContent = formatador.format(oportunidades);
  const percentual = investimento / Number(orcamento.max) * 100;
  orcamento.style.background = `linear-gradient(to right, #ee6e53 0%, #f4c2b5 ${percentual}%, #f0e5df ${percentual}%, #f0e5df 100%)`;
}

orcamento.addEventListener("input", atualizarCenario);
atualizarCenario();

