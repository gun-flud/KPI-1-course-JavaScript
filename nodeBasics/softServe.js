const fs = require("fs");

class Berry {
    constructor(name, color, ...vitamins) {
        this.name = name;
        this.color = color;
        this.vitamins = vitamins || [];
    }
    toString() {
        return `Berry(name='${this.name}', color='${this.color}', vitamins=${JSON.stringify(this.vitamins)})`;
    }
    static readBerryData(filePath) {
        try {
            const data = fs.readFileSync(filePath, "utf-8");
            const lines = data.split("\n");
            const berries = [];

            for (const line of lines) {
                const cleanLine = line.trim();
                if (!cleanLine) continue;

                const parts = cleanLine.split("|").map((el) => el.trim());

                if (parts.length !== 3) {
                    console.log(`Skipping malformed line: ${cleanLine}`);
                    continue;
                }

                const [name, color, vitaminsRaw] = parts;
                let vitamins = [];

                if (vitaminsRaw) {
                    vitamins = vitaminsRaw
                        .split(",")
                        .map((el) => el.trim())
                        .filter((el) => el);
                }

                berries.push(new Berry(name, color, ...vitamins));
            }

            return berries;
        } catch (error) {
            if (error.code === "ENOENT") {
                console.log(`Error: File '${filePath}' not found.`);
                return [];
            }
            throw error;
        }
    }
}

class Compote {
    constructor(name, ...berries) {
        this.name = name;
        this.berries = berries.flat() || [];
        this.numBerries = this.berries.flat().length;
    }
    toString() {
        return `${this.name}: ${this.numBerries} berries - ${this.berries.join(", ")}`;
    }
    isLessThan(other) {
        if (this.berries.length !== other.berries.length) {
            return this.berries.length < other.berries.length;
        }
    }
    addBerry(berry) {
        this.berries.push(berry);

        this.numBerries = this.berries.length;
    }
    static createCompotes(berries) {
        try {
            const compoteMap = new Map();
            for (const berry of berries) {
                if (!compoteMap.has(berry.color)) {
                    const newCompote = new Compote(`Compote ${berry.color}`);
                    compoteMap.set(berry.color, newCompote);
                }

                compoteMap.get(berry.color).addBerry(berry);
            }

            return Array.from(compoteMap.values());
        } catch (error) {
            throw error;
        }
    }
}

function writeCompoteData(
    components,
    filePath = "output1.txt",
    filePath2 = "output2.txt",
) {
    try {
        const data1 = components.join("\n").toString();

        // for (const compote of components) {
        //     const secontData = `${compote.name}: ${[...new Set(compote.berries.flatMap(el => el.vitamins))]
        //                 .sort()
        //                 .join(', ')}`;
        // }

        const secontData = components
            .map((comp) => {
                return `${comp.name}: ${[
                    ...new Set(comp.berries.flatMap((el) => el.vitamins)),
                ]
                    .sort()
                    .join(", ")}`;
            })
            .join("\n");

        fs.writeFileSync(filePath, data1, "utf-8");
        fs.writeFileSync(filePath2, secontData, "utf-8");
    } catch (error) {
        throw error;
    }
}

function printFileContents(filePath) {
    try {
        const data = fs.readFileSync(filePath, "utf-8");
        console.log(data);
    } catch (error) {
        if (error.code === "ENOENT") {
            console.log(`Error: File '${filePath}' not found.`);
            return;
        }
        throw error;
    }
}

function createMockFiles() {
    const fs = require("fs");

    // Дані для input_2.txt
    const content2 = `Strawberry|red|A,C
Blueberry|blue|C
Raspberry|red|C,B`;

    // Дані для input_3.txt
    const content3 = `Cherry|red|A
Blackberry|black|C
Currant|black|C,B
Gooseberry|green|A,B`;

    fs.writeFileSync("input_2.txt", content2);
    fs.writeFileSync("input_3.txt", content3);
    console.log(
        "[System] Mock files 'input_2.txt' and 'input_3.txt' created.\n",
    );
}

// ================================================================
// === ЗАПУСК ТВОЇХ ТЕСТІВ ===
// ================================================================

if (require.main === module) {
    // Створюємо файли перед тестом
    createMockFiles();

    console.log("👉 ЗАПУСК ТЕСТУ №1 (input_3 -> new_output1)");
    try {
        const berries = Berry.readBerryData("input_3.txt");
        const compotes = Compote.createCompotes(berries);
        compotes.sort((a, b) => (a.isLessThan(b) ? -1 : 1));

        writeCompoteData(compotes, "new_output1.txt");

        printFileContents("new_output1.txt");
        console.log("==========");
        printFileContents("output2.txt");
    } catch (e) {
        console.log(`Error while running the test case: ${e.message}`);
    }

    console.log("\n\n👉 ЗАПУСК ТЕСТУ №2 (input_2 -> default output1)");
    try {
        const berries = Berry.readBerryData("input_2.txt");
        const compotes = Compote.createCompotes(berries);
        compotes.sort((a, b) => (a.isLessThan(b) ? -1 : 1));

        writeCompoteData(compotes); // Тут без аргументу імені файлу

        printFileContents("output1.txt");
        console.log("==========");
        printFileContents("output2.txt");
    } catch (e) {
        console.log(`Error while running the test case: ${e}`);
    }

    // Очистка сміття (можеш закоментувати, якщо хочеш глянути файли)
    try {
        [
            "input_2.txt",
            "input_3.txt",
            "output1.txt",
            "output2.txt",
            "new_output1.txt",
        ].forEach((f) => {
            if (fs.existsSync(f)) fs.unlinkSync(f);
        });
        console.log("\n[System] Temporary files cleaned up.");
    } catch (e) {}
}

// const fs = require('fs').promises;

// class FileHandler {
//     static async read(filePath){
//         try {
//             return await fs.readFile(filePath, 'utf-8');
//         } catch (error) {
//             if (error.code === 'ENOENT') {
//                 console.error('File not found:', error);
//             }
//             throw error;
//         }
//     }
//     static async write(filePath, data){
//         try {
//             await fs.writeFile(filePath, data, 'utf-8');
//         } catch (error) {
//             throw new Error(`Error writing to file ${filePath}: ${error.message}`);
//         }
//     }
// }

// class Berry {
//     constructor(name, color, ...vitamins) {
//         this.name = name;
//         this.color = color;
//         this.vitamins = vitamins || [];
//     }
//     toString() {
//         return `Berry(name='${this.name}', color='${this.color}', vitamins=${JSON.stringify(this.vitamins)})`;
//     }
//     static
// }

// class Compote {
//     constructor(color) {
//         this.name = `${color} compote`;
//         this.color = color;
//         this.berries = [];

//     }
//     addBerry(berry) {
//         this.berries.push(berry);
//     }
//     getBerryNames() {
//         return this.berries.map(el => el.name).join(', ');
//     }
//     getUniqueVitamins() {
//         const allVitamins = this.berries.flatMap(el => el.vitamins);

//         return [...new Set(allVitamins)].sort().join(', ');
//     }
//     static compare(compoteA, compoteB) {
//         if (compoteB.berries.length !== compoteA.berries.length) {
//             return compoteB.berries.length - compoteA.berries.length;
//         }
//         return compoteA.name.localeCompare(compoteB.name);
//     }
// }

// class CompoteService {
//     static processRawData(rawData){
//         const lines = rawData.split('\n');
//         const compoteMap = new Map();

//         for (const line of lines) {
//             const cleanLine = line.trim();
//             if (!cleanLine) continue;

//             const parts = cleanLine.split('|').map( el => el.trim());

//             if (parts.length !== 3) {
//                 console.warn(`Line is not valid: "${line}"`);
//                 continue;
//             }

//             const [name, color, vitaminsRaw] = parts;
//             const vitamins = vitaminsRaw.split(',').map(el => el.trim()).filter(el => el);
//             const berry = new Berry(name, color, vitamins);

//             if(!compoteMap.has(color)) {
//                 compoteMap.set(color, new Compote(color));
//             }
//             compoteMap.get(color).addBerry(berry);
//         }

//         return Array
//         .from(compoteMap.values())
//         .sort(Compote.compare);
//     }
//     static generateDescriptionReport(components){
//         return components
//         .map( el => `${el.name} contains: ${el.getBerryNames()}`)
//         .join('\n');
//     }
//     static generateVitaminsReport(components){
//         return components
//         .map( el => `${el.name} vitamins: ${el.getUniqueVitamins()}`)
//         .join('\n');
//     }
// }

// const FILE_INPUT = 'berries.txt';
// const DESC_OUTPUT = 'compote_desc.txt';
// const VIT_OUTPUT = 'compote_vitamins.txt';

// async function Processing() {
//     console.log('data is processing');
//     try{
//         // reading Data
//         const rawData = await FileHandler.read(FILE_INPUT);

//         // processing Data
//         const compotes = CompoteService.processRawData(rawData);

//         //  creating description
//         const description = CompoteService.generateDescriptionReport(compotes);
//         const vitaminsDescript = CompoteService.generateVitaminsReport(compotes);

//         // Making output files
//         await Promise.all([
//             FileHandler.write(DESC_OUTPUT, description),
//             FileHandler.write(VIT_OUTPUT, vitaminsDescript)
//         ]);

//         console.log(`Generated files: ${DESC_OUTPUT}, ${VIT_OUTPUT}`);

//     } catch (error) {
//         console.error('Processing error :', error.message);
//     }
// }
// // Processing();
// if (require.main === module) {
//     console.log("--- STARTING TESTS FROM SCREENSHOTS ---\n");

//     // ТЕСТ 1: Перевірка конструктора і toString()
//     console.log("👉 Test 1: Constructor & toString");
//     try {
//         let berry = new Berry("Cranberry", "red");
//         console.log(`Berry info: ${berry}`);

//         berry = new Berry("Blueberry", "blue", "C");
//         console.log(`Berry info: ${berry}`);

//         // Зверни увагу: у скріншоті після Strawberry є пробіл!
//         berry = new Berry("Strawberry ", "red", "A", "B", "C");
//         console.log(`Berry info: ${berry}`);
//     } catch (e) {
//         console.log(`Error while running the test case: ${e}`);
//     }
//     console.log("\n-----------------------------------\n");

//     // ТЕСТ 2: Перевірка неіснуючого файлу
//     console.log("👉 Test 2: File Not Found");
//     try {
//         const berries = Berry.readBerryData("i_do_not_exist.txt");
//         console.log(Array.isArray(berries)); // Має бути true
//         console.log(berries);                // Має бути []
//     } catch (e) {
//         console.log(`Error while running the test case: ${e}`);
//     }
//     console.log("\n-----------------------------------\n");

//     // ТЕСТ 3: Перевірка "битих" даних
//     // (Для цього тесту треба створити файл bad_data.txt вручну або він просто покаже помилку читання)
//     console.log("👉 Test 3: Bad Data Processing");
//     try {
//         // Ми емулюємо створення файлу bad_data.txt, щоб тест спрацював локально
//         // Якщо у тебе немає файлу, цей тест виведе помилку файлу, і це ОК.
//         const fs = require('fs');
//         try {
//             fs.writeFileSync('bad_data.txt', "Cranberry\nCloudberry | yellow\nCherry | A, C\nGooseberry | green | B1, B2");
//         } catch(e) {}

//         const berries = Berry.readBerryData("bad_data.txt");

//         console.log(Array.isArray(berries) ? 'Array' : typeof berries);
//         console.log(berries);

//         // Видаляємо тестовий файл
//         try { fs.unlinkSync('bad_data.txt'); } catch(e) {}
//     } catch (e) {
//         console.log(`Error while running the test case: ${e}`);
//     }
//     console.log("\n-----------------------------------\n");

//     // ТЕСТ 4: Перевірка кількох файлів
//     console.log("👉 Test 4: Multiple Inputs");
//     try {
//         // Емуляція input_1.txt
//         const fs = require('fs');
//         fs.writeFileSync('input_1.txt', "Cranberry|red|\nCloudberry|yellow|\nGooseberry|green|\nCherry|red|\nBilberry|blue|");

//         let berries = Berry.readBerryData("input_1.txt");
//         console.log("From input_1.txt:");
//         console.log(berries.map(b => b.name));

//         // Видаляємо тестовий файл
//         try { fs.unlinkSync('input_1.txt'); } catch(e) {}

//     } catch (e) {
//          console.log(`Error while running the test case: ${e}`);
//     }
// }
