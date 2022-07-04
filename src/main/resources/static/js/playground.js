import {createMegaClock} from "./MegaClock.js";

(function main() {
    const megaClock = createMegaClock()

    setInterval(updateMegaClock, 1000)

    function updateMegaClock() {
        const currentDate = new Date(),
            hours = format(currentDate.getHours()),
            minutes = format(currentDate.getMinutes()),
            seconds = format(currentDate.getSeconds())

        // Mega Clock engine
        megaClock.setSectionValue(5, Number(seconds[1]))
        megaClock.setSectionValue(4, Number(seconds[0]))
        megaClock.setSectionValue(3, Number(minutes[1]))
        megaClock.setSectionValue(2, Number(minutes[0]))
        megaClock.setSectionValue(1, Number(hours[1]))
        megaClock.setSectionValue(0, Number(hours[0]))

        function format(degit) {
            degit = String(degit)
            if (degit.length < 2) {
                degit = "0" + degit
            }
            return degit
        }
    }
}())


