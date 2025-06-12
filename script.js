function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    // Pegar a tag img
    const img= document.querySelector("#profile img");

    // Substituir a imagem
    if(html.classList.contains("light")) {
        //Se tiver light mode, adicionar imagem light
        img.setAttribute("src", "./assets/images/avatar-light.jpg");
    } else {
        //Se não tiver light mode, manter a imagem atual
        img.setAttribute("src", "./assets/images/avatar-dark.jpg");
    }
}