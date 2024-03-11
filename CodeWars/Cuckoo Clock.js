function cuckooClock(inputTime, chimes) {
    // Write code
    let intHour = parseInt(inputTime.substring(0,2));
    let intMin = parseInt(inputTime.substring(3));
    let i = 0;
    while(i < chimes) {
        if (intMin <= 15 && intMin > 0) {
            i += 1;
            intMin = 16;
        } else if ( intMin > 15 && intMin <= 30) {
            i += 1;
            intMin = 31;
        } else if ( intMin > 30 && intMin <= 45) {
            i += 1;
            intMin = 46;
        } else if ( intMin > 45) {
            if (intHour < 12) {
                intHour += 1;
            } else {
                intHour = 1;
            }
            i += intHour;
            intMin = 1;
        } else if (intMin === 0) {
            i += intHour;
            intMin = 1;
        }
    }
    intMin -= 1;
    if (intMin < 10) {
        intMin = "0" + intMin;
    }
    if (intHour < 10) {
        intHour = "0" + intHour;
    }
    return `${intHour}:${intMin}`;
}