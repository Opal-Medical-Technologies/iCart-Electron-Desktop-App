export function MedKey(id, medname) {
    return {
        id: id,
        name: medname
    }
}

export function MedFolder(foldername, keylist) {
    return {
        name: foldername,
        keys: keylist
    }
}

export function MedCard(units, concentration, firstdose, seqdose, sdosemin, sdosemax, cdosemin, cdosemax, notes) {
    return {
        name: "filler",
        units: units,
        conc: concentration,
        fdose: firstdose,
        sdose: seqdose,
        smin: sdosemin,
        smax: sdosemax,
        cmin: cdosemin,
        cmax: cdosemax,
        notes: notes
    }
}

