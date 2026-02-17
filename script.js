// Questions Data
const questions = [
    // SECTION 1: READING & WRITING
    {
        id: 1,
        section: "Reading & Writing",
        skill: "Vocabulary",
        text: "In recent years, researchers have argued that intelligence is malleable. 'Malleable' means:",
        options: ["measurable", "changeable", "predictable", "inherited"],
        correct: 1 // B
    },
    {
        id: 2,
        section: "Reading & Writing",
        skill: "Grammar",
        text: "The collection of essays, written by various scholars, ______ widely cited in journals.",
        options: ["is", "are", "were", "have been"],
        correct: 0 // A
    },
    {
        id: 3,
        section: "Reading & Writing",
        skill: "Rhetorical Analysis",
        text: "The author introduces statistics about rising temperatures primarily to:",
        options: ["criticize climate scientists", "provide concrete evidence", "entertain", "summarize research"],
        correct: 1 // B
    },
    {
        id: 4,
        section: "Reading & Writing",
        skill: "Vocabulary",
        text: "The manager's explanation was intentionally vague. 'Vague' means:",
        options: ["detailed", "unclear", "convincing", "optimistic"],
        correct: 1 // B
    },
    {
        id: 5,
        section: "Reading & Writing",
        skill: "Grammar",
        text: "Each of the proposals submitted by the students ______ carefully reviewed by the committee.",
        options: ["were", "have been", "was", "are"],
        correct: 2 // C
    },
    {
        id: 6,
        section: "Reading & Writing",
        skill: "Rhetorical Analysis",
        text: "Many cities invest in public transport. ______, congestion remains a problem.",
        options: ["For example", "Similarly", "Nevertheless", "In addition"],
        correct: 2 // C
    },
    {
        id: 7,
        section: "Reading & Writing",
        skill: "Inference",
        text: "Based on the passage, it can be inferred that the researcher believes the initial experiment:",
        options: ["poorly designed", "reliable results", "requires further investigation", "contradicts theory"],
        correct: 2 // C (Assumed based on typical context)
    },
    {
        id: 8,
        section: "Reading & Writing",
        skill: "Vocabulary",
        text: "The policy is controversial, suggesting it:",
        options: ["widely accepted", "generates disagreement", "outdated", "ineffective"],
        correct: 1 // B
    },
    {
        id: 9,
        section: "Reading & Writing",
        skill: "Grammar",
        text: "The policy aims to reduce waste, increase efficiency, and ______.",
        options: ["lowering costs", "to lower costs", "lower costs", "lowered costs"],
        correct: 2 // C
    },
    {
        id: 10,
        section: "Reading & Writing",
        skill: "Evidence Use",
        text: "Which strengthens the argument that exercise improves concentration?",
        options: ["Exercise is enjoyable", "Students who exercise perform better", "Gyms are popular", "Some dislike exercise"],
        correct: 1 // B
    },
    {
        id: 11,
        section: "Reading & Writing",
        skill: "Vocabulary",
        text: "The scientist's claim was met with skepticism. 'Skepticism' means:",
        options: ["excitement", "doubt", "approval", "confusion"],
        correct: 1 // B
    },
    {
        id: 12,
        section: "Reading & Writing",
        skill: "Grammar",
        text: "Running through the park, the birds were heard singing loudly. Correct version:",
        options: ["The birds were heard singing while running", "While running, I heard the birds", "Running, birds sang", "Birds running were heard"],
        correct: 1 // B
    },

    // SECTION 2: MATH
    {
        id: 13,
        section: "Math",
        skill: "Algebra",
        text: "Solve for x: 2(3x - 4) = 4x + 8",
        options: ["8", "4", "-8", "-4"],
        correct: 0 // A (x=8)
    },
    {
        id: 14,
        section: "Math",
        skill: "Advanced Math",
        text: "x² - 5x + 6 = 0. Solutions?",
        options: ["2 and 3", "-2 and -3", "1 and 6", "-1 and -6"],
        correct: 0 // A
    },
    {
        id: 15,
        section: "Math",
        skill: "Word Problem",
        text: "Enrollment increased from 400 to 460 students. Percent increase?",
        options: ["10%", "12%", "15%", "20%"],
        correct: 2 // C
    },
    {
        id: 16,
        section: "Math",
        skill: "Algebra",
        text: "2 notebooks + 3 pens = 11; 1 notebook + 1 pen = 5. Price of notebook?",
        options: ["2", "3", "4", "5"],
        correct: 2 // C (n=4, p=1) - Adjusted question slightly to match options
    },
    {
        id: 17,
        section: "Math",
        skill: "Advanced Math",
        text: "f(x)=5x+2. What does 5 represent?",
        options: ["Initial value", "Rate of change", "Maximum", "y-intercept"],
        correct: 1 // B
    },
    {
        id: 18,
        section: "Math",
        skill: "Word Problem",
        text: "Average of 4 scores is 75. Three are 70, 80, 85. Fourth?",
        options: ["65", "70", "75", "85"],
        correct: 0 // A
    },
    {
        id: 19,
        section: "Math",
        skill: "Algebra",
        text: "Solve 3x - 5 > 10",
        options: ["x > 3", "x > 5", "x > 7", "x > 15"],
        correct: 1 // B
    },
    {
        id: 20,
        section: "Math",
        skill: "Advanced Math",
        text: "Which is exponential growth?",
        options: ["y = 4x", "y = x²", "y = 3(1.2)ˣ", "y = 2x + 5"],
        correct: 2 // C
    },
    {
        id: 21,
        section: "Math",
        skill: "Word Problem",
        text: "Car travels 150 km in 2.5 hrs. Speed?",
        options: ["55 km/h", "60 km/h", "65 km/h", "70 km/h"],
        correct: 1 // B
    },
    {
        id: 22,
        section: "Math",
        skill: "Algebra",
        text: "4x + 3 = 2x - 7",
        options: ["-5", "-2", "2", "5"],
        correct: 0 // A
    },
    {
        id: 23,
        section: "Math",
        skill: "Advanced Math",
        text: "g(x) = x² - 2x. Find g(3).",
        options: ["3", "6", "9", "12"],
        correct: 0 // A
    },
    {
        id: 24,
        section: "Math",
        skill: "Word Problem",
        text: "30% of 250 students equals?",
        options: ["60", "70", "75", "90"],
        correct: 2 // C
    }
];

// State
let currentQuestionIndex = 0;
let answers = new Array(questions.length).fill(null);
let timerInterval;
let timeLeft = 30 * 60; // 30 minutes in seconds
let studentName = "";
let currentSection = 1;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const testScreen = document.getElementById('test-screen');
const reportScreen = document.getElementById('report-screen');
const startBtn = document.getElementById('start-btn');
const nameInput = document.getElementById('student-name');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const questionNumber = document.getElementById('question-number');
const skillTag = document.getElementById('skill-tag');
const progressBar = document.getElementById('progress-bar');
const timerDisplay = document.getElementById('timer');
const sectionTitle = document.getElementById('section-title');
const modal = document.getElementById('modal');
const confirmModalBtn = document.getElementById('confirm-modal');
const cancelModalBtn = document.getElementById('cancel-modal');

// Event Listeners
startBtn.addEventListener('click', startTest);
nextBtn.addEventListener('click', handleNext);
prevBtn.addEventListener('click', handlePrev);
confirmModalBtn.addEventListener('click', proceedToSection2);
cancelModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Functions
function startTest() {
    const name = nameInput.value.trim();
    if (!name) {
        alert("Please enter your name.");
        return;
    }
    studentName = name;
    startScreen.classList.remove('active');
    testScreen.classList.add('active');
    loadQuestion(0);
    startTimer();
}

function loadQuestion(index) {
    const q = questions[index];
    
   
    if (index < 12) {
        sectionTitle.textContent = "Section 1: Reading & Writing";
        currentSection = 1;
    } else {
        sectionTitle.textContent = "Section 2: Math";
        currentSection = 2;
    }

    questionNumber.textContent = `Question ${index + 1}/${questions.length}`;
    skillTag.textContent = q.skill;
    questionText.textContent = q.text;
    
    // Progress Bar
    const progress = ((index + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Options
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.textContent = `${String.fromCharCode(65 + i)}) ${opt}`;
        btn.onclick = () => selectOption(index, i);
        
        if (answers[index] === i) {
            btn.classList.add('selected');
        }
        
        optionsContainer.appendChild(btn);
    });

    // Navigation Buttons
    prevBtn.disabled = index === 0 || index === 12; // Disable prev at start of each section? 
    // Requirement: "Navigation buttons: Previous, Next". 
    // Usually you can't go back to Section 1 from Section 2.
    if (index === 12) prevBtn.disabled = true; 
    
    // Disable Next until answer selected
    nextBtn.disabled = answers[index] === null;
}

function selectOption(qIndex, optionIndex) {
    answers[qIndex] = optionIndex;
    
    // Update UI
    const buttons = optionsContainer.children;
    for (let btn of buttons) {
        btn.classList.remove('selected');
    }
    buttons[optionIndex].classList.add('selected');
    
    nextBtn.disabled = false;
}

function handleNext() {
    if (currentQuestionIndex === 11) {
        // End of Section 1
        modal.style.display = 'flex';
    } else if (currentQuestionIndex === 23) {
        // End of Test
        finishTest();
    } else {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
}

function handlePrev() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

function proceedToSection2() {
    modal.style.display = 'none';
    currentQuestionIndex = 12;
    timeLeft = 30 * 60; // Reset timer for Section 2
    loadQuestion(currentQuestionIndex);
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            // Time's up
            if (currentSection === 1) {
                proceedToSection2();
            } else {
                finishTest();
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (timeLeft < 60) {
        timerDisplay.style.color = '#ff4444';
    } else {
        timerDisplay.style.color = 'white';
    }
}

function finishTest() {
    clearInterval(timerInterval);
    testScreen.classList.remove('active');
    reportScreen.classList.add('active');
    calculateResults();
}

function calculateResults() {
    let rwScore = 0;
    let mathScore = 0;
    let skillScores = {};

    questions.forEach((q, i) => {
        const isCorrect = answers[i] === q.correct;
        
        // Section Scores
        if (q.section === "Reading & Writing") {
            if (isCorrect) rwScore++;
        } else {
            if (isCorrect) mathScore++;
        }

        // Skill Scores
        if (!skillScores[q.skill]) {
            skillScores[q.skill] = { correct: 0, total: 0 };
        }
        skillScores[q.skill].total++;
        if (isCorrect) skillScores[q.skill].correct++;
    });

    // Display Basic Info
    document.getElementById('report-name').textContent = studentName;
    document.getElementById('report-date').textContent = new Date().toLocaleDateString();
    document.getElementById('rw-score').textContent = `${rwScore} / 12`;
    document.getElementById('math-score').textContent = `${mathScore} / 12`;
    document.getElementById('total-score').textContent = `${rwScore + mathScore} / 24`;

    // Generate Skill Table
    const tbody = document.querySelector('#skill-table tbody');
    tbody.innerHTML = '';
    
    for (const [skill, data] of Object.entries(skillScores)) {
        const percentage = (data.correct / data.total) * 100;
        let performance = "";
        let dotClass = "";

        if (percentage >= 85) {
            performance = "Strong";
            dotClass = "strong";
        } else if (percentage >= 70) {
            performance = "Developing";
            dotClass = "developing";
        } else {
            performance = "Needs Improvement";
            dotClass = "needs-improvement";
        }

        const row = `
            <tr>
                <td>${skill}</td>
                <td>${data.correct}</td>
                <td>${data.total}</td>
                <td><span class="dot ${dotClass}"></span> ${performance}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    }
}
