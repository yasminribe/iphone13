const buttons = document.querySelectorAll('#imagem-produto li');
const image = document.querySelector('#produto');

/* adicionar click */
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log(e);
  /* remover click */
      buttons.forEach((btn) =>
        btn.querySelector(".color").classList.remove("selected")
      );
       
      const button = e.target;

      const id = button.getAttribute("id");
  
      button.querySelector(".color").classList.add("selected");
   /* ao click trocar a imagem */
      image.classList.toggle("mudando");
      image.setAttribute("src", `imagens/iphone_${id}.jpg`);
  
      setTimeout(() => {
        image.classList.toggle("mudando");
      }, 200);
    });
  });
  