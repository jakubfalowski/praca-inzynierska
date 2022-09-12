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
    a[10] = Math.abs(a[2]-a[1])
    b[10] = Math.abs(b[2]-b[1])
    if (a[10] === b[10]) {
        return 0;
    }
    else {
        return (a[10] > b[10]) ? -1 : 1;
    }
}