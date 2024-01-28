import { removeNumbers } from "./utils.js";

const pdf = document.querySelector(".pdf_iframe");
pdf.src =
	"../pdf.js/web/viewer.html?file=/document/CHAPTER_1/Practical_lesson_1.pdf";
	/* Проверям куда нажали, практические занятия, лекции или тестирование */
function selectPdf(pdf, count, CHAPTER) {
	const url = "../pdf.js/web/viewer.html?file=/document/";
	if (removeNumbers(count) === "lesson_") {
		pdf.src = url + CHAPTER.practical_lesson[count];
	} else if (removeNumbers(count) === "lectures_") {
		pdf.src = url + CHAPTER.lectures[count];
	}
}

function showLessonAndAddEvent(CHAPTER) {
	const { target } = event;
	const btn = document.querySelectorAll(".list > span");
	if (target.closest("span")) {
		let elem = target.closest("span");
		btn.forEach((item) => {
			if (item.className !== "aList") {
				item.className = "aList2";
			}
		});
		elem.className = "aList_target";
		let count = target.attributes[0].value;
		selectPdf(pdf, count, CHAPTER);
	}
}

export function app(CHAPTER) {
	const menu = document.querySelector(".leftContainer > ul");
	menu.addEventListener("click", (event) => {
		showLessonAndAddEvent(CHAPTER);
	});
}
