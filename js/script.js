function menuShow() {
let menuMobile = document.querySelector('.mobile-menu');
if (menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src ="assets\img\Ic_menu_36px.svg";
} else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src ="AcolhaMe\assets\img\cancel.png";
}

}

function funcao1()
{
alert("O projeto AcolhaME agradece o seu cadastro.Acolher um idoso é receber sorrizos!");

}


function funcao2()
{
alert("O projeto AcolhaME agradece o seu cadastro. Sinta-se acolhido, amado e respeitado!");

}