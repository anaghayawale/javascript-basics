const time = document.getElementById('clock')

let date = new Date()

setInterval(() => {
    let date = new Date()
    //console.log(date.toLocaleTimeString());
    time.innerHTML = date.toLocaleTimeString()
}, 1000);
