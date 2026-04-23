class Random {
    constructor(seed) {
        this.seed = seed;
    }

    randomise(min, max) {
        // return Math.floor( Math.random() * (max - min + 1) ) + min;
         return (Math.random() * max);
        // this.seed = (Math.imul(this.seed, 1103515245) + 12345) & 0x7fffffff;
        // return this.seed / 0x7fffffff;
    }
}

const seed = 5413;
export const n = 9;
const k = 1 - 1 * 0.02 - 3 * 0.005 - 0.25;

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
    const undirMatrix = matrix.map(row => [...row]);
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

export const directedAdjastencyMatrix = createDirectedGraph(n);
console.log('directed matrix');
console.table(directedAdjastencyMatrix);

export const udirectedAdjectencyMatrix = createUndirectedGraph(directedAdjastencyMatrix, n);
console.log("Undirected Matrix:");
console.table(udirectedAdjectencyMatrix);

