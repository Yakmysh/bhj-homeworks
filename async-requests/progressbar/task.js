const progress = document.getElementById('progress');
const send = document.getElementById("send");

send.addEventListener("click", (event) => {
    const data = new FormData(document.getElementById("form"));
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.upload.onprogress = function(event){
        progress.value = event.loaded / event.total;
    };
    xhr.send(data);
    event.preventDefault();
});