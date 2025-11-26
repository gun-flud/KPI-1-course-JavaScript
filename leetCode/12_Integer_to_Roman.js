/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const translateDict = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    let value = [];
    for ( let val in translateDict ) {
        if (num >= translateDict[val]){
        let newNum = num % translateDict[val];
        let iterator = Math.floor(num / translateDict[val]);
        for (let i = 1; i <= iterator; i++){
            value.push(val);
        };
        num = newNum;
    };
    
     
    };
    return value.join('');  
};

console.log(intToRoman(1235));







const addOption = (el) => {
    const variant = document.createElement("div");
    variant.className = "variantContainer";
    variant.innerHTML = `
		<label>
					<input type="checkbox" name="option1" value="1" class="isCorrect" /><input
						type="text"
						class="optionText"
						placeholder="Варіант відповіді"
						value=""
					/>
                    <button class="material-symbols-outlined" id="deletevariant">delete</button>
				</label>
	`;

	el.target.closest(".quizzesContainer").insertBefore(variant, el.target);
};

const Savequiz = () => {
	const inputValueClick = document.querySelectorAll("input:not([type=checkbox])");
	let i = 0;
	for (let input of inputValueClick) {
		if (input.value.trim() === "") {
			input.classList.add("input-error");
		} else {
			input.classList.remove("input-error");
		}
		i++;
		console.log(i);
	}

	if (document.querySelectorAll(".input-error").length === 0) {
		alert("Quiz saved!");
		let localStorageParse = JSON.parse(localStorage.getItem("storage"));
		const quizzesContainer = document.querySelectorAll(".quizzesContainer");
		
		// пуш значень для main storage
		question.title = input.value;
		question.description = description.value;
		// пуш значень для questions
		quizzesContainer.forEach((quiz, num) => {
			const questionText = quiz.querySelector(".questionText").value;
			const options = quiz.querySelectorAll(".optionText");
			const isCorrect = quiz.querySelectorAll(".isCorrect");
			question.questions[num] = { text: questionText, options: [] };

			options.forEach((val, index) => {
				question.questions[num].options.push({
					text: val.value,
					id: index,
					isCorrect: isCorrect[index].checked, // Тут поки заглушка, потім переробити
				});
			});
		});

		//додавання в локал сторедж
		
		if (!localStorageParse) {
			localStorageNull.quizzes.push(question);
			localStorage.setItem("storage", JSON.stringify(localStorageNull));
		} else {
			localStorageParse.quizzes.push(question);
			localStorage.setItem("storage", JSON.stringify(localStorageParse));
		};
		window.location.href = '../';
	} else {
		alert("Заповни поля");
	}
}





