export function createMegaClock() {
    return new MegaClock()
}
class MegaClock {
    _sections = []
    constructor() {
        const megaClock = document.createElement("mega-clock")
        for (let i = 0; i < 6; i++) {
            if (i !== 0 && i % 2 === 0) {
                megaClock.appendChild(createColon())
            }
            const section = createSection()
            megaClock.appendChild(section)
            this._sections[i] = section
        }
        document.querySelector("body").appendChild(megaClock)

        function createSection() {
            const section = document.createElement("clocks-section")
            for (let i = 0; i < 4 * 6; i++) { // 4 * 6 - size of the display section
                section.appendChild(createClock())
            }
            return section

            function createClock() {
                const clock = document.createElement("clock"),
                     arrow1 = document.createElement("arrow"),
                     arrow2 = document.createElement("arrow")
                clock.appendChild(arrow1)
                clock.appendChild(arrow2)

                clock.setArrowsGrads = (grad1, grad2) => {
                    arrow1.style.transform = "rotate("+ grad1 +"grad)"
                    arrow2.style.transform = "rotate("+ grad2 +"grad)"
                }
                return clock
            }
        }
        function createColon(){
            const colon = document.createElement("colon")
            colon.appendChild(document.createElement("dot"))
            colon.appendChild(document.createElement("dot"))
            return colon
        }
    }

    setSectionValue(sectionId, value){
        const clocks = this._sections[sectionId].querySelectorAll("clock")
        switch (value) {
            case 0: set0(); break
            case 1: set1(); break
            case 2: set2(); break
            case 3: set3(); break
            case 4: set4(); break
            case 5: set5(); break
            case 6: set6(); break
            case 7: set7(); break
            case 8: set8(); break
            case 9: set9(); break
            default: console.error("Value + '" + value + "' is not supported")
        }
        function set0() {
            clocks[0].setArrowsGrads(0, 0)
            clocks[1].setArrowsGrads(250, 100)
            clocks[2].setArrowsGrads(150, 300)
            clocks[3].setArrowsGrads(0, 0)
            clocks[4].setArrowsGrads(200, 50)
            clocks[5].setArrowsGrads(100, 200)
            clocks[6].setArrowsGrads(300, 200)
            clocks[7].setArrowsGrads(350, 200)
            clocks[8].setArrowsGrads(0, 200)
            clocks[9].setArrowsGrads(0, 200)
            clocks[10].setArrowsGrads(0, 200)
            clocks[11].setArrowsGrads(0, 200)
            clocks[12].setArrowsGrads(200, 0)
            clocks[13].setArrowsGrads(0, 200)
            clocks[14].setArrowsGrads(0, 200)
            clocks[15].setArrowsGrads(200, 0)
            clocks[16].setArrowsGrads(150, 0)
            clocks[17].setArrowsGrads(0, 100)
            clocks[18].setArrowsGrads(0, 300)
            clocks[19].setArrowsGrads(250, 0)
            clocks[20].setArrowsGrads(0, 0)
            clocks[21].setArrowsGrads(350, 100)
            clocks[22].setArrowsGrads(50, 300)
            clocks[23].setArrowsGrads(0, 0)
        }
        function set1() {
            clocks[0].setArrowsGrads(0, 0)
            clocks[1].setArrowsGrads(100, 250)
            clocks[2].setArrowsGrads(200, 300)
            clocks[3].setArrowsGrads(0, 0)
            clocks[4].setArrowsGrads(100, 50)
            clocks[5].setArrowsGrads(300, 200)
            clocks[6].setArrowsGrads(0, 200)
            clocks[7].setArrowsGrads(0, 0)
            clocks[8].setArrowsGrads(0, 0)
            clocks[9].setArrowsGrads(200, 0)
            clocks[10].setArrowsGrads(0, 200)
            clocks[11].setArrowsGrads(0, 0)
            clocks[12].setArrowsGrads(0, 0)
            clocks[13].setArrowsGrads(200, 0)
            clocks[14].setArrowsGrads(0, 200)
            clocks[15].setArrowsGrads(0, 0)
            clocks[16].setArrowsGrads(0, 0)
            clocks[17].setArrowsGrads(200, 0)
            clocks[18].setArrowsGrads(0, 200)
            clocks[19].setArrowsGrads(0, 0)
            clocks[20].setArrowsGrads(0, 0)
            clocks[21].setArrowsGrads(100, 0)
            clocks[22].setArrowsGrads(300, 0)
            clocks[23].setArrowsGrads(0, 0)
        }
        function set2() {
            clocks[0].setArrowsGrads(0, 0)
            clocks[1].setArrowsGrads(250, 100)
            clocks[2].setArrowsGrads(150, 300)
            clocks[3].setArrowsGrads(0, 0)
            clocks[4].setArrowsGrads(50, 150)
            clocks[5].setArrowsGrads(250, 100)
            clocks[6].setArrowsGrads(300, 150)
            clocks[7].setArrowsGrads(200, 350)
            clocks[8].setArrowsGrads(0, 0)
            clocks[9].setArrowsGrads(0, 0)
            clocks[10].setArrowsGrads(50, 250)
            clocks[11].setArrowsGrads(250, 0)
            clocks[12].setArrowsGrads(0, 0)
            clocks[13].setArrowsGrads(250, 50)
            clocks[14].setArrowsGrads(250, 50)
            clocks[15].setArrowsGrads(0, 0)
            clocks[16].setArrowsGrads(200, 50)
            clocks[17].setArrowsGrads(50, 100)
            clocks[18].setArrowsGrads(300, 100)
            clocks[19].setArrowsGrads(200, 300)
            clocks[20].setArrowsGrads(100, 0)
            clocks[21].setArrowsGrads(300, 100)
            clocks[22].setArrowsGrads(100, 300)
            clocks[23].setArrowsGrads(300, 0)
        }
        function set3() {
            clocks[0].setArrowsGrads(0, 0)
            clocks[1].setArrowsGrads(250, 100)
            clocks[2].setArrowsGrads(150, 300)
            clocks[3].setArrowsGrads(0, 0)
            clocks[4].setArrowsGrads(50, 150)
            clocks[5].setArrowsGrads(250, 100)
            clocks[6].setArrowsGrads(300, 150)
            clocks[7].setArrowsGrads(200, 350)
            clocks[8].setArrowsGrads(0, 0)
            clocks[9].setArrowsGrads(200, 100)
            clocks[10].setArrowsGrads(300, 50)
            clocks[11].setArrowsGrads(250, 0)
            clocks[12].setArrowsGrads(0, 0)
            clocks[13].setArrowsGrads(0, 100)
            clocks[14].setArrowsGrads(300, 150)
            clocks[15].setArrowsGrads(200, 350)
            clocks[16].setArrowsGrads(150, 50)
            clocks[17].setArrowsGrads(350, 100)
            clocks[18].setArrowsGrads(50, 300)
            clocks[19].setArrowsGrads(0, 250)
            clocks[20].setArrowsGrads(0, 0)
            clocks[21].setArrowsGrads(350, 100)
            clocks[22].setArrowsGrads(50, 300)
            clocks[23].setArrowsGrads(0, 0)
        }
        function set4() {
            clocks[0].setArrowsGrads(100, 200)
            clocks[1].setArrowsGrads(300, 200)
            clocks[2].setArrowsGrads(100, 200)
            clocks[3].setArrowsGrads(200, 300)
            clocks[4].setArrowsGrads(0, 200)
            clocks[5].setArrowsGrads(0, 200)
            clocks[6].setArrowsGrads(0, 200)
            clocks[7].setArrowsGrads(200, 0)
            clocks[8].setArrowsGrads(200, 0)
            clocks[9].setArrowsGrads(100, 0)
            clocks[10].setArrowsGrads(0, 300)
            clocks[11].setArrowsGrads(200, 0)
            clocks[12].setArrowsGrads(0, 100)
            clocks[13].setArrowsGrads(300, 100)
            clocks[14].setArrowsGrads(200, 300)
            clocks[15].setArrowsGrads(0, 200)
            clocks[16].setArrowsGrads(0, 0)
            clocks[17].setArrowsGrads(0, 0)
            clocks[18].setArrowsGrads(200, 0)
            clocks[19].setArrowsGrads(200, 0)
            clocks[20].setArrowsGrads(0, 0)
            clocks[21].setArrowsGrads(0, 0)
            clocks[22].setArrowsGrads(100, 0)
            clocks[23].setArrowsGrads(300, 0)
        }
        function set5() {
            clocks[0].setArrowsGrads(100, 200)
            clocks[1].setArrowsGrads(300, 100)
            clocks[2].setArrowsGrads(100, 300)
            clocks[3].setArrowsGrads(200, 300)
            clocks[4].setArrowsGrads(0, 200)
            clocks[5].setArrowsGrads(100, 200)
            clocks[6].setArrowsGrads(100, 300)
            clocks[7].setArrowsGrads(300, 0)
            clocks[8].setArrowsGrads(200, 0)
            clocks[9].setArrowsGrads(100, 0)
            clocks[10].setArrowsGrads(150, 300)
            clocks[11].setArrowsGrads(0, 0)
            clocks[12].setArrowsGrads(0, 100)
            clocks[13].setArrowsGrads(300, 100)
            clocks[14].setArrowsGrads(200, 300)
            clocks[15].setArrowsGrads(200, 350)
            clocks[16].setArrowsGrads(200, 100)
            clocks[17].setArrowsGrads(100, 300)
            clocks[18].setArrowsGrads(300, 0)
            clocks[19].setArrowsGrads(250, 0)
            clocks[20].setArrowsGrads(100, 0)
            clocks[21].setArrowsGrads(100, 300)
            clocks[22].setArrowsGrads(50, 300)
            clocks[23].setArrowsGrads(0, 0)
        }
        function set6() {
            clocks[0].setArrowsGrads(0, 0)
            clocks[1].setArrowsGrads(250, 100)
            clocks[2].setArrowsGrads(150, 300)
            clocks[3].setArrowsGrads(0, 0)
            clocks[4].setArrowsGrads(200, 50)
            clocks[5].setArrowsGrads(100, 250)
            clocks[6].setArrowsGrads(300, 150)
            clocks[7].setArrowsGrads(350, 250)
            clocks[8].setArrowsGrads(200, 0)
            clocks[9].setArrowsGrads(100, 350)
            clocks[10].setArrowsGrads(150, 300)
            clocks[11].setArrowsGrads(0, 0)
            clocks[12].setArrowsGrads(0, 200)
            clocks[13].setArrowsGrads(100, 250)
            clocks[14].setArrowsGrads(300, 150)
            clocks[15].setArrowsGrads(200, 350)
            clocks[16].setArrowsGrads(150, 0)
            clocks[17].setArrowsGrads(100, 350)
            clocks[18].setArrowsGrads(50, 300)
            clocks[19].setArrowsGrads(250, 0)
            clocks[20].setArrowsGrads(0, 0)
            clocks[21].setArrowsGrads(350, 100)
            clocks[22].setArrowsGrads(50, 300)
            clocks[23].setArrowsGrads(0, 0)
        }
        function set7() {
            clocks[0].setArrowsGrads(200, 100)
            clocks[1].setArrowsGrads(300, 100)
            clocks[2].setArrowsGrads(100, 300)
            clocks[3].setArrowsGrads(200, 300)
            clocks[4].setArrowsGrads(0, 100)
            clocks[5].setArrowsGrads(100, 300)
            clocks[6].setArrowsGrads(300, 200)
            clocks[7].setArrowsGrads(0, 200)
            clocks[8].setArrowsGrads(0, 0)
            clocks[9].setArrowsGrads(0, 0)
            clocks[10].setArrowsGrads(0, 250)
            clocks[11].setArrowsGrads(250, 0)
            clocks[12].setArrowsGrads(0, 0)
            clocks[13].setArrowsGrads(200, 50)
            clocks[14].setArrowsGrads(50, 200)
            clocks[15].setArrowsGrads(0, 0)
            clocks[16].setArrowsGrads(0, 0)
            clocks[17].setArrowsGrads(200, 0)
            clocks[18].setArrowsGrads(200, 0)
            clocks[19].setArrowsGrads(0, 0)
            clocks[20].setArrowsGrads(0, 0)
            clocks[21].setArrowsGrads(100, 0)
            clocks[22].setArrowsGrads(300, 0)
            clocks[23].setArrowsGrads(0, 0)
        }
        function set8() {
            clocks[0].setArrowsGrads(0, 0)
            clocks[1].setArrowsGrads(250, 100)
            clocks[2].setArrowsGrads(150, 300)
            clocks[3].setArrowsGrads(0, 0)
            clocks[4].setArrowsGrads(200, 50)
            clocks[5].setArrowsGrads(100, 250)
            clocks[6].setArrowsGrads(300, 150)
            clocks[7].setArrowsGrads(350, 200)
            clocks[8].setArrowsGrads(150, 0)
            clocks[9].setArrowsGrads(100, 350)
            clocks[10].setArrowsGrads(50, 300)
            clocks[11].setArrowsGrads(250, 0)
            clocks[12].setArrowsGrads(50, 200)
            clocks[13].setArrowsGrads(100, 250)
            clocks[14].setArrowsGrads(300, 150)
            clocks[15].setArrowsGrads(200, 350)
            clocks[16].setArrowsGrads(150, 0)
            clocks[17].setArrowsGrads(100, 350)
            clocks[18].setArrowsGrads(50, 300)
            clocks[19].setArrowsGrads(250, 0)
            clocks[20].setArrowsGrads(0, 0)
            clocks[21].setArrowsGrads(350, 100)
            clocks[22].setArrowsGrads(50, 300)
            clocks[23].setArrowsGrads(0, 0)
        }
        function set9() {
            clocks[0].setArrowsGrads(0, 0)
            clocks[1].setArrowsGrads(250, 100)
            clocks[2].setArrowsGrads(150, 300)
            clocks[3].setArrowsGrads(0, 0)
            clocks[4].setArrowsGrads(50, 200)
            clocks[5].setArrowsGrads(100, 250)
            clocks[6].setArrowsGrads(150, 300)
            clocks[7].setArrowsGrads(200, 350)
            clocks[8].setArrowsGrads(150, 0)
            clocks[9].setArrowsGrads(350, 100)
            clocks[10].setArrowsGrads(300, 50)
            clocks[11].setArrowsGrads(0, 200)
            clocks[12].setArrowsGrads(0, 0)
            clocks[13].setArrowsGrads(350, 100)
            clocks[14].setArrowsGrads(300, 150)
            clocks[15].setArrowsGrads(200, 0)
            clocks[16].setArrowsGrads(50, 150)
            clocks[17].setArrowsGrads(100, 350)
            clocks[18].setArrowsGrads(300, 50)
            clocks[19].setArrowsGrads(250, 0)
            clocks[20].setArrowsGrads(0, 0)
            clocks[21].setArrowsGrads(100, 350)
            clocks[22].setArrowsGrads(50, 300)
            clocks[23].setArrowsGrads(0, 0)
        }
    }
}