const input = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const lista  = document.getElementById('lista'); 
const alertEl = document.querySelector('.alert');

let alerTimer;


function criarItem(texto) {
  const item = document.createElement('div');
  item.className = 'item';
  item.innerHTML = `
    <input type="checkbox" />
    <span class="texto"></span>
    <div class="remover" role="button" tabindex="0" aria-label="Remover item"></div>
  `;
  item.querySelector('.texto').textContent = texto;
  return item;
}

function adicionarItem() {
  const valor = input.value.trim();
  if (!valor) return;
  lista.appendChild(criarItem(valor));
  input.value = '';
  input.focus();
}


addBtn.addEventListener('click', adicionarItem);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') adicionarItem();
});


lista.addEventListener('click', (e) => {
  const btn = e.target.closest('.remover');
  if (!btn) return;
  btn.closest('.item').remove();
});

lista.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.remover')) {
    e.preventDefault();
    e.target.closest('.item').remove();
  }
});

function showAlert(msg = 'O item foi removido da lista', timeout = 2500){
  alertEl.querySelector('.texto').textContent = msg;
  alertEl.classList.add('is-open');
  clearTimeout(alertTimer);
  alertTimer = setTimeout(hideAlert, timeout);
}

function hideAlert(){
  alertEl.classList.remove('is-open');
}

alertEl.addEventListener('click', (e) => {
  if (e.target.closest('.fechar')) hideAlert();
});

alertEl.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('.fechar')){
    e.preventDefault();
    hideAlert();
  }
});

lista.addEventListener('click', (e) => {
  const btn = e.target.closest('.remover');
  if (!btn) return;

  btn.closest('.item').remove();
  showAlert();
});

lista.addEventListener('click', (e) => {
  const btn = e.target.closest('.remover');
  if (!btn) return;

  btn.closest('.item').remove();
  showAlert();
});