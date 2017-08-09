/**
 * Enums
 */
var Device = {
    Desktop: 1,
    Mobile: 2,
    Tablet: 3,
};


/**
 * Decide what is the current device (desktop/tablet/mobile)
 */
function detect_device() {
    var sWidth = screen.width;
    switch(sWidth) {
        case sWidth <= 1920 && sWidth <= 1024  :
            return Device.Desktop;
            break;
        case sWidth <= 2048 && sWidth >=  600 :
            return Device.Tablet
            break;
        case sWidth <= 1440 && sWidth >= 360 :
            return Device
            break;
    }
}