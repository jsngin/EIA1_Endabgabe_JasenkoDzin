interface Questions {
    question: string;
    answer: string[];
    rightAnswer: string;
    explanation: string;
}

let testFragenHTML: Questions[] = [
    {
        question: "Was ist der Zweck von HTML?",
        answer: ["HTML dient zur Formatierung von Textena", "HTML dient zur Erstellung von grafischen Benutzeroberflächen", "HTML dient zur Beschreibung von Dokumentenstrukturen im Internet"],
        rightAnswer: "HTML dient zur Beschreibung von Dokumentenstrukturen im Internet",
        explanation: "https://www.seo-kueche.de/lexikon/html/#:~:text=HTML%20steht%20als%20Abk%C3%BCrzung%20f%C3%BCr,allen%20n%C3%B6tigen%20Elementen%20zu%20erstellen"
    },
    {
        question: "Welches HTML-Tag wird verwendet, um eine Tabelle hinzuzufügen?",
        answer: ["<table>", "<tr>", "<td>"],
        rightAnswer: "<table>",
        explanation: "https://de.w3docs.com/html-lernen/html-tag-table.html"
    },
    {
        question: "Welches Tag wird verwendet, um einen Textabschnitt hervorzuheben?",
        answer: ["<highlight>", "<em>", "<strong>"],
        rightAnswer: "<em>",
        explanation: "https://www.w3docs.com/learn-html/html-em-tag.html"
    },
    {
        question: "Welches Tag wird verwendet, um eine Überschrift zu erstellen?",
        answer: ["<h1>", "<header>", "<title>"],
        rightAnswer: "<h1>",
        explanation: "https://www.w3docs.com/learn-html/html-h1-h6-tags.html"
    },
    {
        question: "Welches HTML-Tag wird verwendet, um ein Bild hinzuzufügen?",
        answer: ["<img>", "<picture>", "<src>"],
        rightAnswer: "<img>",
        explanation: "https://www.w3docs.com/snippets/html/when-to-use-html-img-tag-and-css-background-image-property.html"
    }
];

let testFragenCSS: Questions[] = [
    {
        question: "Welche Eigenschaft wird verwendet, um die Breite und Höhe eines Elements festzulegen?",
        answer: ["size", "width and height","dimension"],
        rightAnswer: "width and height",
        explanation: "https://www.w3docs.com/snippets/javascript/how-to-retrieve-an-html-elements-actual-width-and-height.html"
    },
    {
        question: "Welches CSS-Property wird verwendet, um die Schriftart eines Elements festzulegen?",
        answer: ["font-size", "font-family","font-weight"],
        rightAnswer: "font-family",
        explanation: "https://www.w3docs.com/learn-css/font-family.html"
    },
    {
        question: "Was ist der Unterschied zwischen dem Einsatz von padding und margin in CSS?",
        answer: ["Padding füllt den Inhalt eines Elements auf, während margin den Abstand zu anderen Elementen definiert.","Padding definiert den Abstand zu anderen Elementen, während margin den Inhalt eines Elements auffüllt.","Padding und margin sind gleichbedeutend und können auf die gleiche Weise verwendet werden."],
        rightAnswer: "Padding füllt den Inhalt eines Elements auf, während margin den Abstand zu anderen Elementen definiert.",
        explanation: "https://www.w3docs.com/learn-css/css-padding.html"
    },
    {
        question: "Welches CSS-Selektor wird verwendet, um Elemente auf Grundlage ihres Klassennamens auszuwählen?",
        answer: [".class", "#id","tag"],
        rightAnswer: ".class",
        explanation: "https://www.w3docs.com/snippets/javascript/how-add-a-class-to-a-given-element.html"
    },
    {
        question: "Was ist CSS?",
        answer: ["Eine Programmiersprache zur Erstellung von Websites", "Eine Methode zur Optimierung von Bildern für die Verwendung im Web","Eine Stylesheet-Sprache zur Gestaltung von HTML-Dokumenten"],
        rightAnswer: "Eine Stylesheet-Sprache zur Gestaltung von HTML-Dokumenten",
        explanation: "https://www.w3docs.com/learn-css.html"
    }
];

let testFragenTYPESCRIPT: Questions[] = [
    {
        question: "Was ist TypeScript?",
        answer: ["Eine Programmiersprache", "Ein Framework","Ein Texteditor"],
        rightAnswer: "Eine Programmiersprache",
        explanation: "https://www.w3docs.com/course/understanding-typescript"
    },
    {
        question: "Was ist der Unterschied zwischen let und var in TypeScript?",
        answer: ["let hat einen besseren Zugriffsschutz", "var ist veraltet und sollte nicht mehr verwendet werden", "let hat einen beschränkten Gültigkeitsbereich"],
        rightAnswer: "let hat einen beschränkten Gültigkeitsbereich",
        explanation: "https://www.w3docs.com/learn-javascript/the-old-var.html"
    },
    {
        question: "Was ist das Ziel von TypeScript?",
        answer: ["Verbesserung der Lesbarkeit und Wartbarkeit des Codes", "Erhöhung der Performance","Ermöglichung von objektorientiertem Programmieren"],
        rightAnswer: "Verbesserung der Lesbarkeit und Wartbarkeit des Codes",
        explanation: "https://www.communardo.de/blog/drei-gruende-warum-typescript-das-bessere-javascript-ist/"
    },
    {
        question: "Was ist der Unterschied zwischen interface und type in TypeScript?",
        answer: ["interface beschreibt eine Schnittstelle, während type einen Typ beschreibt","interface kann nur für Objekte verwendet werden, während type für alle Typen ","interface und type sind synonyme Begriffe in TypeScript"],
        rightAnswer: "interface kann nur für Objekte verwendet werden, während type für alle Typen verwendet werden kann",
        explanation: "https://de.wikipedia.org/wiki/TypeScript"
    },
    {
        question: "Wie kann man TypeScript-Code in JavaScript konvertieren?",
        answer: ["Mit einem Online-Konverter","Mit einer speziellen Bibliothek","Mit einem TypeScript-Compiler"],
        rightAnswer: "Mit einem TypeScript-Compiler",
        explanation: "https://www.communardo.de/blog/typescript-tipps-automatische-transpilierung-nach-javascript/"
    }
];


let testFragenMIXED: Questions[] = [
    {
        question: "Wie kann man TypeScript-Code in JavaScript konvertieren?",
        answer: ["Mit einem Online-Konverter","Mit einer speziellen Bibliothek","Mit einem TypeScript-Compiler"],
        rightAnswer: "Mit einem TypeScript-Compiler",
        explanation: "https://www.communardo.de/blog/typescript-tipps-automatische-transpilierung-nach-javascript/"
    },
    {
        question: "Was ist der Unterschied zwischen let und var in TypeScript?",
        answer: ["let hat einen besseren Zugriffsschutz", "var ist veraltet und sollte nicht mehr verwendet werden", "let hat einen beschränkten Gültigkeitsbereich"],
        rightAnswer: "let hat einen beschränkten Gültigkeitsbereich",
        explanation: "https://www.w3docs.com/learn-javascript/the-old-var.html"
    },
    {
        question: "Welches CSS-Selektor wird verwendet, um Elemente auf Grundlage ihres Klassennamens auszuwählen?",
        answer: [".class", "#id","tag"],
        rightAnswer: ".class",
        explanation: "https://www.w3docs.com/snippets/javascript/how-add-a-class-to-a-given-element.html"
    },
    {
        question: "Was ist der Zweck von HTML?",
        answer: ["HTML dient zur Formatierung von Textena", "HTML dient zur Erstellung von grafischen Benutzeroberflächen", "HTML dient zur Beschreibung von Dokumentenstrukturen im Internet"],
        rightAnswer: "HTML dient zur Beschreibung von Dokumentenstrukturen im Internet",
        explanation: "https://www.seo-kueche.de/lexikon/html/#:~:text=HTML%20steht%20als%20Abk%C3%BCrzung%20f%C3%BCr,allen%20n%C3%B6tigen%20Elementen%20zu%20erstellen"
    },
    
    {
        question: "Welche Eigenschaft wird verwendet, um die Breite und Höhe eines Elements festzulegen?",
        answer: ["size", "width and height","dimension"],
        rightAnswer: "width and height",
        explanation: "https://www.w3docs.com/snippets/javascript/how-to-retrieve-an-html-elements-actual-width-and-height.html"
    }
    
];

let htmlDOMElement: HTMLElement;
let cssDOMElement: HTMLElement;
let typescriptDOMElement: HTMLElement;
let mixedDOMElement: HTMLElement;
let op1DOMElement: HTMLElement;
let op2DOMElement: HTMLElement;
let op3DOMElement: HTMLElement;
let questionDOMElement: HTMLElement;
let resultDOMElement: HTMLElement;
let nextAndRestartDOMElement: HTMLElement;
let explanationDOMElement: HTMLElement;



let falseQuestion: Questions[] = [];
let amountOfQuestion: number;
let currentQuestion: number = 0;
let selectedAnswer: string;
let score: number = 0;

let selectedCategory: Questions[] = [];
let nextOrRestartCase: boolean;
let choosenKey: boolean;

window.addEventListener("load", function (): void {
    htmlDOMElement = document.querySelector("#HTMLchoosequestion");
    cssDOMElement = document.querySelector("#CSSchoosequestion");
    typescriptDOMElement = document.querySelector("#TYPESCRIPTchoosequestion");
    mixedDOMElement = document.querySelector("#MIXEDchoosequestion");

    op1DOMElement = document.getElementById("answer 1");
    op2DOMElement = document.getElementById("answer 2");
    op3DOMElement = document.getElementById("answer 3");
    
    questionDOMElement = document.getElementById("question");
    resultDOMElement = document.getElementById("result");
    nextAndRestartDOMElement = document.getElementById("nextAndRestart");
    explanationDOMElement = document.getElementById("explanation");


    htmlDOMElement.addEventListener("click", function (): void {
        selectedCategory = testFragenHTML;
        console.log(testFragenHTML);
        amountOfQuestion = testFragenHTML.length;
        shuffle();
        choosenKey = true;
        loadQuestion();
    });
    cssDOMElement.addEventListener("click", function (): void {
        selectedCategory = testFragenCSS;
        console.log(testFragenCSS);
        amountOfQuestion = testFragenCSS.length;
        shuffle();
        choosenKey = true;
        loadQuestion();
    });
    typescriptDOMElement.addEventListener("click", function (): void {
        selectedCategory = testFragenTYPESCRIPT;
        console.log(testFragenTYPESCRIPT);
        amountOfQuestion = testFragenTYPESCRIPT.length;
        shuffle();
        choosenKey = true;
        loadQuestion();
    });
    mixedDOMElement.addEventListener("click", function (): void {
        selectedCategory = testFragenMIXED;
        console.log(testFragenMIXED);
        amountOfQuestion = testFragenMIXED.length;
        shuffle();
        choosenKey = true;
        loadQuestion();
    });
});



function choosenAnswer(param2: number): void {
    if (choosenKey == true) {
        selectedAnswer = selectedCategory[currentQuestion].answer[param2];
        console.log(selectedAnswer);
        compare();
    }
}


function loadQuestion(): void {
    nextAndRestartDOMElement.removeEventListener("click", function (): void {
        loadQuestion();
    });


    questionDOMElement.innerText = selectedCategory[currentQuestion].question;
    op1DOMElement.innerText = selectedCategory[currentQuestion].answer[0];
    op2DOMElement.innerText = selectedCategory[currentQuestion].answer[1];
    op3DOMElement.innerText = selectedCategory[currentQuestion].answer[2];


    op1DOMElement.addEventListener("click", (event) => choosenAnswer(0));
    op2DOMElement.addEventListener("click", (event) => choosenAnswer(1));
    op3DOMElement.addEventListener("click", (event) => choosenAnswer(2));
}

function nextOrRestart(): void {
    nextAndRestartDOMElement.removeEventListener("click", nextOrRestart);
    if (nextOrRestartCase == true) {
        explanationDOMElement.innerHTML = "";
        choosenKey = true;
        loadQuestion();
    }
    else {
        restart();
    }
}


function checkWin(): void {
    console.log("hallo");
    if (score == 5) {
        alert("You have finished the quiz! Your score: " + score + "/" + amountOfQuestion);
        nextAndRestartDOMElement.innerHTML = "Restart";
        nextOrRestartCase = false;
        nextAndRestartDOMElement.addEventListener("click", nextOrRestart);
    } else {
        nextOrRestartCase = true;
        nextAndRestartDOMElement.addEventListener("click", nextOrRestart);
    }
}

function compare(): void {
    choosenKey = false;
    console.log(selectedAnswer);
    console.log(currentQuestion);
    console.log(selectedCategory[currentQuestion].rightAnswer);

    if (selectedAnswer == selectedCategory[currentQuestion].rightAnswer) {
        alert("Correct!");
        score++;
        resultDOMElement.innerHTML = "Dein Punktestand = " + score;
        checkWin();


    } else {
        alert("Incorrect!");
        explanationDOMElement.innerHTML = selectedCategory[currentQuestion].explanation;
        falseQuestion.push(selectedCategory[currentQuestion]);
        checkWin();
    }

    if (currentQuestion == selectedCategory.length - 1) {
        if (falseQuestion.length > 0) {
            currentQuestion = 0;
            selectedCategory = falseQuestion;
            falseQuestion = [];
        }
    } else {
        currentQuestion++;
    }


}

function shuffle(): void {

    selectedCategory.sort(() => Math.random() - 0.5);

    for (let i: number = selectedCategory.length - 1; i > 0; i--) {
        selectedCategory[i].answer.sort(() => Math.random() - 0.5);
    }

}

function restart(): void {
    selectedCategory = [];
    choosenKey = false;
    nextOrRestartCase = true;
    currentQuestion = 0;
    score = 0;
    resultDOMElement.innerHTML = "Dein Punktestand = " + score;
    questionDOMElement.innerText = "Wähle oben eine Kategorie aus";
    op1DOMElement.innerText = "Antwort 1";
    op2DOMElement.innerText = "Antwort 2";
    op3DOMElement.innerText = "Antwort 3";
    nextAndRestartDOMElement.innerHTML = "Weiter";

}

