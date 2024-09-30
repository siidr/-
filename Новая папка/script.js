

// characterinfo
let characterinfo = document.querySelector('.characterinfo');
let characterinfoImg =document.querySelector('.characterinfo__img');

characterinfo.onmousemove = (e) => {
    const rect = characterinfo.getBoundingClientRect();
    const x = e.clientX - rect.left; // Положение мыши относительно контейнера
    const y = e.clientY - rect.top; // Положение мыши относительно контейнера

    const moveX = ((x / rect.width) * 10) + 1; // Измените значение для регулировки движения
    const moveY = ((y / rect.height) * 10) - 1; // Измените значение для регулировки движения

    characterinfoImg.style.transform = `translate(${moveX}px, ${moveY}px)`;

};
characterinfo.onmouseleave = () => {
    footerContainer.style.transform = 'translate(0, 0)'; // Возвращаем в начальное положение
};
// footer
let footer = document.querySelector('.footer');
let footerContainer = document.querySelector('.footer__container');
let footerContainerList = document.querySelector('.footer__container-list');

footer.onmousemove = (e) => {
    const rect = footer.getBoundingClientRect();
    const x = e.clientX - rect.left; // Положение мыши относительно контейнера
    const y = e.clientY - rect.top; // Положение мыши относительно контейнера

    const moveX = ((x / rect.width) * 5) - 1; // Измените значение для регулировки движения
    const moveX2 = ((x / rect.width) * 5) - 1; 

    const moveY = ((y / rect.height) * 20) - 50; // Измените значение для регулировки движения

    footerContainer.style.transform = `translate(${moveX}px)`;

    footerContainerList.style.transform = `translate(${moveX2}px)`;
};
footer.onmouseleave = () => {
    footerContainer.style.transform = 'translate(0, 0)'; // Возвращаем в начальное положение
    footerContainerList.style.transform = 'translate(0, 0)';
};

//  для жирни
// function changeImage() {
//     if (document.getElementById("imgClickAndChange").src == "http://www.userinterfaceicons.com/80x80/minimize.png"){
//         document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/maximize.png";
//     } else {
//         document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
//     }
// }
