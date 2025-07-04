

const possibleEntries_upperTable = {
    0: [ 0, 1, 2, 3, 4, 50 ],
    1: [ 0, 2, 4, 6, 8, 50 ],
    2: [ 0, 3, 6, 9, 12, 50 ],
    3: [ 0, 4, 8, 12, 16, 50 ],
    4: [ 0, 5, 10, 15, 20, 50 ],
    5: [ 0, 6, 12, 18, 24, 50 ],
}

const possibleEntries_bottomTable = {
    0: [ 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 50 ], //Dreierpasch
    1: [ 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 50 ], //Viererpasch
    2: [ 0, 25, 50 ], //Full-House
    3: [ 0, 30, 40, 50 ], //Kleine Straße
    4: [ 0, 40, 50  ], //Große Straße
    5: [ 0, 50  ], //Wuerflii
    6: [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 50 ], //Chance
}


module.exports = {
	possibleEntries_upperTable,
	possibleEntries_bottomTable
}
