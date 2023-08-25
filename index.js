function aumentar() {
    let div = document.querySelector('.navation1');
    div.style.width = '320px';
    div.style.height = '425px';
  }
  function reduzir() {
    let div = document.querySelector('.navation1');
    div.style.width = '305px';
    div.style.height = '390px';
  }
  function aumentar2() {
    let div = document.querySelector('.navation2');
    div.style.width = '320px';
    div.style.height = '425px';
  }
  function reduzir2() {
    let div = document.querySelector('.navation2');
    div.style.width = '305px';
    div.style.height = '390px';
  }
  function aumentar3() {
    let div = document.querySelector('.navation3');
    div.style.width = '320px';
    div.style.height = '425px';
  }
  function reduzir3() {
    let div = document.querySelector('.navation3');
    div.style.width = '305px';
    div.style.height = '390px';
  }
  function toggleMode() {
  const html = document.documentElement

  if(html.classList.contains("light")){
    html.classList.remove("light")
  }else{
    html.classList.add("light")
  }
  }