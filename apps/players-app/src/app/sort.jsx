export function sortByOverallFifa(a, b) {
    if (a[1] === b[1]) {
        return (a[2] > b[2]) ? -1 : 1;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}

export function sortByOverallFm(a, b) {
    if (a[2] === b[2]) {
        return (a[1] > b[1]) ? -1 : 1;
    }
    else {
        return (a[2] > b[2]) ? -1 : 1;
    }
}

export function sortByOverallDifference(a, b) {
    a[20] = Math.abs(a[2]-a[1])
    b[20] = Math.abs(b[2]-b[1])
    if (a[20] === b[20]) {
        return 0;
    }
    else {
        return (a[20] > b[20]) ? -1 : 1;
    }
}

export function sortByPaceFifa(a, b) {
    if (a[3] === b[3]) {
        return (a[4] > b[4]) ? -1 : 1;
    }
    else {
        return (a[3] > b[3]) ? -1 : 1;
    }
}

export function sortByPaceFm(a, b) {
    if (a[4] === b[4]) {
        return (a[3] > b[3]) ? -1 : 1;
    }
    else {
        return (a[4] > b[4]) ? -1 : 1;
    }
}

export function sortByPaceDifference(a, b) {
    a[21] = Math.abs(a[4]-a[3])
    b[21] = Math.abs(b[4]-b[3])
    if (a[21] === b[21]) {
        return 0;
    }
    else {
        return (a[21] > b[21]) ? -1 : 1;
    }
}

export function sortByPhysicalityFifa(a, b) {
    if (a[5] === b[5]) {
        return (a[6] > b[6]) ? -1 : 1;
    }
    else {
        return (a[5] > b[5]) ? -1 : 1;
    }
}

export function sortByPhysicalityFm(a, b) {
    if (a[6] === b[6]) {
        return (a[5] > b[5]) ? -1 : 1;
    }
    else {
        return (a[6] > b[6]) ? -1 : 1;
    }
}

export function sortByPhysicalityDifference(a, b) {
    a[22] = Math.abs(a[6]-a[5])
    b[22] = Math.abs(b[6]-b[5])
    if (a[22] === b[22]) {
        return 0;
    }
    else {
        return (a[22] > b[22]) ? -1 : 1;
    }
}

export function sortByAttackFifa(a, b) {
    if (a[7] === b[7]) {
        return (a[8] > b[8]) ? -1 : 1;
    }
    else {
        return (a[7] > b[7]) ? -1 : 1;
    }
}

export function sortByAttackFm(a, b) {
    if (a[8] === b[8]) {
        return (a[7] > b[7]) ? -1 : 1;
    }
    else {
        return (a[8] > b[8]) ? -1 : 1;
    }
}

export function sortByAttackDifference(a, b) {
    a[23] = Math.abs(a[8]-a[7])
    b[23] = Math.abs(b[8]-b[7])
    if (a[23] === b[23]) {
        return 0;
    }
    else {
        return (a[23] > b[23]) ? -1 : 1;
    }
}

export function sortByDefensiveFifa(a, b) {
    if (a[9] === b[9]) {
        return (a[10] > b[10]) ? -1 : 1;
    }
    else {
        return (a[9] > b[9]) ? -1 : 1;
    }
}

export function sortByDefensiveFm(a, b) {
    if (a[8] === b[8]) {
        return (a[9] > b[9]) ? -1 : 1;
    }
    else {
        return (a[10] > b[10]) ? -1 : 1;
    }
}

export function sortByDefensiveDifference(a, b) {
    a[24] = Math.abs(a[10]-a[9])
    b[24] = Math.abs(b[10]-b[9])
    if (a[24] === b[24]) {
        return 0;
    }
    else {
        return (a[24] > b[24]) ? -1 : 1;
    }
}