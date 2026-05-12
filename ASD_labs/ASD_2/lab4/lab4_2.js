class Random {
    constructor(seed) {
        this.seed = seed;
    }

    randomise(min, max) {
        // return Math.floor( Math.random() * (max - min + 1) ) + min;
        return Math.random() * max;
    }
}

const seed = 5413;
export const n = 9;
const n1 = 5;
const n2 = 4;
const n3 = 1;
const n4 = 3;
const k = 1 - n3 * 0.005 - n4 * 0.005 - 0.27;

function dir(num) {
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
        state = "izolated";
    }
    return {
        degrees,
        outDegrees,
        inDegrees,
        state,
    };
}

export const directedAdjastencyMatrix = createDirectedGraph(n);
console.log("directed matrix");
console.table(directedAdjastencyMatrix);

// 2  Шляхи довжини 2
export function findPaths2(A) {
    const n = A.length;
    const paths = [];

    for (let i = 0; i < n; i++) {
        for (let k = 0; k < n; k++) {
            if (!A[i][k]) continue;
            for (let j = 0; j < n; j++) {
                if (!A[k][j]) continue;
                paths.push([i, k, j]);
            }
        }
    }

    return paths;
}

//  Шляхи довжини 3
export function findPaths3(A) {
    const n = A.length;
    const paths = [];

    for (let i = 0; i < n; i++) {
        for (let k = 0; k < n; k++) {
            if (!A[i][k]) continue;
            for (let m = 0; m < n; m++) {
                if (!A[k][m]) continue;
                for (let j = 0; j < n; j++) {
                    if (!A[m][j]) continue;
                    paths.push([i, k, m, j]);
                }
            }
        }
    }

    return paths;
}

// 3 Матриця досяжності алгоритм Уоршелла
export function reachabilityMatrix(A) {
    const n = A.length;
    const R = A.map(row => [...row]);

    for (let i = 0; i < n; i++) {
        R[i][i] = 1;
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (R[i][k] && R[k][j]) {
                    R[i][j] = 1;
                }
            }
        }
    }

    return R;
}

// 4) Матриця сильної зв'язності
export function strongConnMatrix(R) {
    const n = R.length;
    const S = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (R[i][j] && R[j][i]) {
                S[i][j] = 1;
            }
        }
    }

    return S;
}

// 5) Компоненти сильної зв'язності
export function findSCCs(S) {
    const n = S.length;
    const visited = new Array(n).fill(false);
    const sccs = [];

    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;

        const component = [];

        for (let j = 0; j < n; j++) {
            if (S[i][j]) {
                component.push(j);
                visited[j] = true;
            }
        }

        sccs.push(component);
    }

    return sccs;
}

// 6) Матриця суміжності графа конденсації
export function buildCondensation(A, sccs) {
    const n = A.length;
    const m = sccs.length;
    const compOf = new Array(n);

    sccs.forEach((comp, ci) => {
        comp.forEach(v => {
            compOf[v] = ci;
        });
    });

    const C = Array.from({ length: m }, () => Array(m).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (A[i][j] && compOf[i] !== compOf[j]) {
                C[compOf[i]][compOf[j]] = 1;
            }
        }
    }

    return C;
}



const A = directedAdjastencyMatrix;

// 1) Напівстепені
console.log(" 1) Напівстепені ");
for (let i = 0; i < n; i++) {
    const { outDegrees, inDegrees } = countDegrees(A, i);
    console.log(`v${i + 1}: вихід=${outDegrees}, вхід=${inDegrees}`);
}

// 2) Шляхи
const p2 = findPaths2(A);
const p3 = findPaths3(A);

console.log(`\n 2) Шляхи довжини 2 (${p2.length}) `);
p2.forEach(p => console.log(p.map(v => v + 1).join(" - ")));

console.log(`\n Шляхи довжини 3 (${p3.length})`);
p3.forEach(p => console.log(p.map(v => v + 1).join(" - ")));

// 3) Матриця досяжності
const R = reachabilityMatrix(A);
console.log("\n 3) Матриця досяжності ");
console.table(R);

// 4) Матриця сильної зв'язності
const S = strongConnMatrix(R);
console.log("\n4) Матриця сильної зв'язності");
console.table(S);

// 5) Компоненти
const sccs = findSCCs(S);
console.log("\n 5) Компоненти сильної зв'язності ");
sccs.forEach((comp, i) => console.log(`K${i + 1}: { ${comp.map(v => v + 1).join(", ")} }`));

// 6) Конденсація
const C = buildCondensation(A, sccs);
console.log("\n 6) Матриця конденсації ");
console.table(C);
