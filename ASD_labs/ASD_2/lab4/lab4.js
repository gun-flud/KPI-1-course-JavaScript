class Random {
    constructor(seed) {
        this.seed = seed;
    }

    randomise(min, max) {
        // return Math.floor( Math.random() * (max - min + 1) ) + min;
        return Math.random() * max;
        // this.seed = (Math.imul(this.seed, 1103515245) + 12345) & 0x7fffffff;
        // return this.seed / 0x7fffffff;
    }
}

const seed = 5413;
export const n = 9;
const n1 = 5;
const n2 = 4;
const n3 = 1;
const n4 = 3;
const k = 1 - n3 * 0.01 - n4 * 0.01 - 0.3;

function dir(num) {
    console.log(num);
    const vertex = num * k;
    return vertex >= 1 ? 1 : 0;
}

function createDirectedGraph(n) {
    const random = new Random(seed);
    const matrix = [];

    for (let row = 0; row < n; row++) {
        matrix[row] = [];

        for (let col = 0; col < n; col++) {
            matrix[row][col] = dir(random.randomise(0, 2));
        }
    }

    return matrix;
}

function createUndirectedGraph(matrix, n) {
    const undirMatrix = matrix.map((row) => [...row]);
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (matrix[row][col] === 1) {
                undirMatrix[row][col] = 1;
                undirMatrix[col][row] = 1;
            }
        }
    }

    return undirMatrix;
}

export function isRegular(matrix) {
    const n = matrix.length;
    if (n === 0) return { isRegular: false, degree: 0 };

    let firstEl = null;
    for (let k = 0; k < n; k++) {
        let outDegrees = 0;
        let inDegrees = 0;
        for (let i = 0; i < n; i++) {
            outDegrees += matrix[k][i];
            inDegrees += matrix[i][k];
        }
        const degrees = outDegrees + inDegrees;

        if (k === 0) {
            firstEl = degrees;
        } else if (firstEl !== degrees) {
            return {
                isRegular: false,
                degree: null,
            };
        }
    }

    return {
        isRegular: true,
        degree: firstEl,
    };
}

export function countDegrees(matrix, id) {
    let outDegrees = 0;
    let inDegrees = 0;
    let state = "normal";
    for (let i = 0; i < matrix.length; i++) {
        outDegrees += matrix[id][i];
        inDegrees += matrix[i][id];
    }

    const degrees = outDegrees + inDegrees;

    if (degrees === 1) {
        state = "leaf";
    } else if (degrees === 0) {
        state = "isolated";
    }
    return {
        degrees,
        outDegrees,
        inDegrees,
        state,
    };
}

// export const directedAdjastencyMatrix = createDirectedGraph(n);
// console.log("directed matrix");
// console.table(directedAdjastencyMatrix);

// export const udirectedAdjectencyMatrix = createUndirectedGraph(
//     directedAdjastencyMatrix,
//     n,
// );
// console.log("Undirected Matrix:");
// console.table(udirectedAdjectencyMatrix);


// Варіант 1: Регулярна матриця 9x9
// Усі вершини мають однаковий степінь 8
export const directedAdjastencyMatrix = [
    [0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0],
];

export const udirectedAdjectencyMatrix = [
    [0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0],
];

// console.log("directed matrix (регулярна, 9x9):");
// console.table(directedAdjastencyMatrix);
// console.log("Undirected Matrix (регулярна, 9x9):");
// console.table(udirectedAdjectencyMatrix);

// Варіант 2: З висячими та ізольованими вершинами 9x9
// export const directedAdjastencyMatrix = [
//     [0, 1, 1, 0, 0, 0, 0, 0, 0],
//     [1, 0, 1, 0, 0, 0, 0, 0, 0],
//     [1, 1, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 1, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0, 1, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];

// export const udirectedAdjectencyMatrix = [
//     [0, 1, 1, 0, 0, 0, 0, 0, 0],
//     [1, 0, 1, 0, 0, 0, 0, 0, 0],
//     [1, 1, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 1, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0, 1, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];

// Варіант 3: З різними напівстепенями 9x9
// export const directedAdjastencyMatrix = [
//     [0, 1, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 1, 0, 0, 0, 0, 0],
//     [1, 0, 0, 1, 1, 0, 0, 0, 0],
//     [0, 1, 0, 0, 1, 1, 0, 0, 0],
//     [0, 0, 1, 0, 0, 1, 1, 0, 0],
//     [0, 0, 0, 1, 0, 0, 1, 1, 0],
//     [0, 0, 0, 0, 1, 0, 0, 1, 1],
//     [0, 0, 0, 0, 0, 1, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 1, 0, 0],
// ];

// export const udirectedAdjectencyMatrix = [
//     [0, 1, 1, 0, 0, 0, 0, 0, 1],
//     [1, 0, 1, 1, 0, 0, 0, 0, 0],
//     [1, 1, 0, 1, 1, 0, 0, 0, 0],
//     [0, 1, 1, 0, 1, 1, 0, 0, 0],
//     [0, 0, 1, 1, 0, 1, 1, 0, 0],
//     [0, 0, 0, 1, 1, 0, 1, 1, 0],
//     [0, 0, 0, 0, 1, 1, 0, 1, 1],
//     [0, 0, 0, 0, 0, 1, 1, 0, 1],
//     [1, 0, 0, 0, 0, 0, 1, 1, 0],
// ];

// Варіант 4: Оригінальна матриця
// export const directedAdjastencyMatrix = createDirectedGraph(n);
// export const udirectedAdjectencyMatrix = createUndirectedGraph(
//     directedAdjastencyMatrix,
//     n,
// );
