function livelyPropertyListener(name, val) {
    switch (name) {
        case "SpeedSlideshow":
            console.log("SpeedSlideshow", val);
            intervalTime = Number(val) * 1000;
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
            break;
        case "ClockPosition":
            switch (val) {
                case 0:
                    val = "center";
                    break;
                case 1:
                    val = "top-left";
                    break;
                case 2:
                    val = "top-right";
                    break;

                case 3:
                    val = "bottom-left";
                    break;
                case 4:
                    val = "bottom-right";
                    break;
            }
            //console.log(val);
            const el = document.querySelector(".wrapper-horloge-container");
            el.classList.remove("center", "top-left", "top-right", "bottom-left", "bottom-right");
            el.classList.add(val);
            break;
        case "ClockColor":
            document.documentElement.style.setProperty("--clock-color", val);
            break;
        case "ZoomClock":
            switch (val) {
                case 0:
                    val = 1;
                    break;
                case 1:
                    val = 0.8;
                    break;
                case 2:
                    val = 0.5;
                    break;
                case 3:
                    val = 0.3;
                    break;
            }
            document.documentElement.style.setProperty("--zoom-clock", val);
            break;
        case "DateFontColor":
            document.documentElement.style.setProperty("--text-color", val);
            break;
        case "HighlightingColor":
            document.documentElement.style.setProperty("--highlight-color", val);
            break;
        case "HightlightingOpacity":
            let opacity = val / 100;
            document.documentElement.style.setProperty("--highlight-opacity", opacity);
            break;
        case "FontStyle":
            switch (val) {
                case 0:
                    val = "Roboto";
                    break;
                case 1:
                    val = "Pinyon Script";
                    break;
                case 2:
                    val = "Fascinate Inline";
                    break;
            }
            document.documentElement.style.setProperty("--font-style", val);
            break;


    }
}