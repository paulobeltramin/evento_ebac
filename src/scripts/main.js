
AOS.init();


const eventDate = new Date("jan 13 , 2024 19:00:00");
const timeForEvent = eventDate.getTime();


contageHours = setInterval(function () {
    const currentDate = new Date()
    const currentTimeStamp = currentDate.getTime()
    const dateForEvent = timeForEvent - currentTimeStamp

    const day = Math.floor(dateForEvent / (1000 * 60 * 60 * 24))
    const hours = Math.floor(dateForEvent % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const minutes = Math.floor(dateForEvent % (1000 * 60 * 60) / (1000 * 60))
    const secunds = Math.floor(dateForEvent % (1000 * 60) / 1000)

    document.getElementById("contador").innerHTML = ` ${day}D  ${hours}H  ${minutes}M  ${secunds}S`

    if (dateForEvent < 0) {
        clearInterval(eventDate)
        document.getElementById("contador").innerHTML = "O grande dia chegou "
    }
}, 1000)





