const container = document.querySelector(".container"),
qrInput = container.querySelector(".form input"),
generateBtn = container.querySelector(".form .generate-btn"),
downloadBtn = container.querySelector(".down-btn");
qrImg = container.querySelector(".qr-code .img");

generateBtn.addEventListener('click', ()=> {
    let qrValue = qrInput.value;
    if(!qrValue){
        Swal.fire({
            icon: 'error',
            popup: "swal2-border-radius",
            text: 'Digite algum texto ou URL!'
          })
        return;
    }
    generateBtn.innerText = "Gerando QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qrValue}`;
    qrImg.addEventListener('load', () => {
        generateBtn.innerText = "Gerar QR Code";
        container.classList.add('active');
        downloadBtn.classList.remove('hide');
    })
})
qrInput.addEventListener('keyup', () => {
    if(!qrInput.value){
        container.classList.remove('active');
        downloadBtn.classList.add('hide');
    };
})
downloadBtn.addEventListener('click', () => {
    let imgPath = qrImg.getAttribute('src');
    let fileName = ('QR_Code');
    
    saveAs(imgPath, fileName)
});