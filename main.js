function handleChange(target) {
    const reader = new FileReader();
    reader.onload = function handleReaderLoad(event) {
        const parsedObject = JSON.parse(event.target.result);
        console.log('jeb panie oto parsedObject', parsedObject);
    }
    reader.readAsText(target.files[0]);
}

function timestampConverter(timestamp) {
    const time = new Date(timestamp);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let i = time.getMonth();
    console.log(months[i], time.getFullYear());
}

//potem se naprawię
// const imput = document.querySelector('input[type="file"]')
// imput.addEventListener('change', function read(event) {
//     // console.log(imput.files);
//     const dupa = imput.files.item(0);
//     const reader = new FileReader();

//     reader.onload = function () {
//         callback(reader.result);
//     }
//     console.log(dupa);
// }, false); //co tu sie to ja nawet nie (już chyba wiem co tu się)