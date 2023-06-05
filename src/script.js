const questions = [
  {
    ID: 1,
    Question:
      "Open the payer file based on the insurance found on the patient’s profile.",
    Description: "Siingle action ok",
    TemplateType: 1,
    ActionText: "Ok",
    Active: "Y",
  },
  {
    ID: 2,
    Question:
      "Check BIL notes and Action History for evidence of a prior Authorization information that may have been initiated",
    Description: "Siingle action ok",
    TemplateType: 1,
    ActionText: "Ok",
    Active: "Y",
  },
  {
    ID: 3,
    Question: "Has PA been initiated ?",
    Description: "Yes/No",
    TemplateType: 2,
    ActionText: "Yes/No",
    Active: "Y",
  },
  {
    ID: 4,
    Question: "Check PA status with appropriate system ?",
    Description: "multi option",
    TemplateType: 3,
    ActionText: "Approve/Pending/Decline/Not Found",
    Active: "Y",
  },
  {
    ID: 5,
    Question: "Update PA Authorization code & details in SPRx",
    Description: "Siingle action ok",
    TemplateType: 1,
    ActionText: "Ok",
    Active: "Y",
  },
  {
    ID: 6,
    Question: "Re-process claim.",
    Description: "Siingle action ok",
    TemplateType: 1,
    ActionText: "Ok",
    Active: "Y",
  },
  {
    ID: 7,
    Question: "Does Claim Pay?",
    Description: "Yes/No",
    TemplateType: 2,
    ActionText: "Yes/No",
    Active: "Y",
  },
  {
    ID: 8,
    Question: "Are Dosage and NDC of RX same as the PA?",
    Description: "Yes/No",
    TemplateType: 2,
    ActionText: "Yes/No",
    Active: "Y",
  },
  {
    ID: 9,
    Question: "Contact MDO for New PA or New RX",
    Description: "Siingle action ok",
    TemplateType: 1,
    ActionText: "Ok",
    Active: "Y",
  },
  {
    ID: 10,
    Question: "Contact PA line of Plan or HD to resolve",
    Description: "Siingle action ok",
    TemplateType: 1,
    ActionText: "Ok",
    Active: "Y",
  },
  {
    ID: 11,
    Question: "Pend task for follow up Check Needs by date",
    Description: "Siingle action ok",
    TemplateType: 1,
    ActionText: "Ok",
    Active: "Y",
  },
  {
    ID: 12,
    Question: "Cancel Claim in SPRx.",
    Description: "Siingle action ok",
    TemplateType: 1,
    ActionText: "Ok",
    Active: "Y",
  },
  {
    ID: 13,
    Question: "Contact PT & MDO, Fax FD to MDO",
    Description: "Siingle action ok",
    TemplateType: 1,
    ActionText: "Ok",
    Active: "Y",
  },
  {
    ID: 14,
    Question: "Do not Follow up with MDO.",
    Description: "Siingle action ok",
    TemplateType: 1,
    ActionText: "Ok",
    Active: "Y",
  },
  {
    ID: 15,
    Question: "Is it a SGM or Non-SGM PA ?",
    Description: "Yes/No",
    TemplateType: 2,
    ActionText: "Non SGM/SGM",
    Active: "Y",
  },
  {
    ID: 16,
    Question: "Double check for SGM PA Errors and proper means of initiation",
    Description: "Siingle action ok",
    TemplateType: 1,
    ActionText: "Ok",
    Active: "Y",
  },
  {
    ID: 17,
    Question: "Has MDO been contacted 3 times for initiation",
    Description: "Yes/No",
    TemplateType: 2,
    ActionText: "Yes/No",
    Active: "Y",
  },
  {
    ID: 18,
    Question: "Contact PT & MDO",
    Description: "Siingle action ok",
    TemplateType: 1,
    ActionText: "Ok",
    Active: "Y",
  },
  {
    ID: 19,
    Question: "Initiate PA Via method found in Payer file",
    Description: "Siingle action ok",
    TemplateType: 1,
    ActionText: "Ok",
    Active: "Y",
  },
  {
    ID: 20,
    Question: "Generate note and update it SPR application by copy",
    Description: "Siingle action ok",
    TemplateType: 1,
    ActionText: "Ok",
    Active: "Y",
  },
  {
    ID: 21,
    Question: "Move To Secondary Process",
    Description: "Siingle action ok",
    TemplateType: 1,
    ActionText: "Ok",
    Active: "Y",
  },
  {
    ID: 22,
    Question: "Update Patient BIL Notes",
    Description: "Siingle action ok",
    TemplateType: 1,
    ActionText: "Ok",
    Active: "Y",
  },
  {
    ID: 23,
    Question: "Follow up with MDO",
    Description: "Siingle action ok",
    TemplateType: 1,
    ActionText: "Ok",
    Active: "Y",
  },
];

const mapping = [
  {
    TaskType: 1,
    QuestionID: 1,
    NextQuestionID: 2,
    ActionDepth: 0,
  },
  {
    TaskType: 1,
    QuestionID: 2,
    NextQuestionID: 3,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 3,
    NextQuestionID: 4,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 3,
    NextQuestionID: 19,
    ActionDepth: 2,
  },
  {
    TaskType: 1,
    QuestionID: 4,
    NextQuestionID: 5,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 4,
    NextQuestionID: 15,
    ActionDepth: 2,
  },
  {
    TaskType: 1,
    QuestionID: 4,
    NextQuestionID: 12,
    ActionDepth: 3,
  },
  {
    TaskType: 1,
    QuestionID: 4,
    NextQuestionID: 16,
    ActionDepth: 4,
  },
  {
    TaskType: 1,
    QuestionID: 5,
    NextQuestionID: 6,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 6,
    NextQuestionID: 7,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 7,
    NextQuestionID: 21,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 7,
    NextQuestionID: 8,
    ActionDepth: 2,
  },
  {
    TaskType: 1,
    QuestionID: 21,
    NextQuestionID: 22,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 8,
    NextQuestionID: 9,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 8,
    NextQuestionID: 10,
    ActionDepth: 2,
  },
  {
    TaskType: 1,
    QuestionID: 9,
    NextQuestionID: 11,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 10,
    NextQuestionID: 22,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 11,
    NextQuestionID: 0,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 15,
    NextQuestionID: 23,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 15,
    NextQuestionID: 14,
    ActionDepth: 2,
  },
  {
    TaskType: 1,
    QuestionID: 23,
    NextQuestionID: 11,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 14,
    NextQuestionID: 11,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 12,
    NextQuestionID: 11,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 16,
    NextQuestionID: 17,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 17,
    NextQuestionID: 12,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 17,
    NextQuestionID: 19,
    ActionDepth: 2,
  },
  {
    TaskType: 1,
    QuestionID: 19,
    NextQuestionID: 18,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 18,
    NextQuestionID: 11,
    ActionDepth: 1,
  },
  {
    TaskType: 1,
    QuestionID: 22,
    NextQuestionID: 0,
    ActionDepth: 1,
  },
];

const templates = [
  {
    TemplateType: 1,
    Items: [
      {
        id: 1,
        label: "Ok",
        ControlType: "button",
        ParentElement: "cp-buttons",
      },
    ],
  },
  {
    TemplateType: 2,
    Items: [
      {
        id: 1,
        label: "Yes",
        ControlType: "button",
        ParentElement: "cp-buttons",
      },
      {
        id: 2,
        label: "No",
        ControlType: "button",
        ParentElement: "cp-buttons",
      },
    ],
  },
  {
    TemplateType: 3,
    Items: [
      {
        id: 1,
        label: "Approved",
        ControlType: "button",
        ParentElement: "cp-buttons",
      },
      {
        id: 2,
        label: "Declined",
        ControlType: "button",
        ParentElement: "cp-buttons",
      },
      {
        id: 3,
        label: "Pending",
        ControlType: "button",
        ParentElement: "cp-buttons",
      },
      {
        id: 4,
        label: "Not found",
        ControlType: "button",
        ParentElement: "cp-buttons",
      },
    ],
  },
  {
    TemplateType: 4,
    Items: [
      {
        id: 1,
        label: "SGM",
        ControlType: "button",
        ParentElement: "cp-buttons",
      },
      {
        id: 2,
        label: "Non SGM",
        ControlType: "button",
        ParentElement: "cp-buttons",
      },
      {
        id: 3,
        label: "Pending",
        ControlType: "button",
        ParentElement: "cp-buttons",
      },
      {
        id: 4,
        label: "Not found",
        ControlType: "button",
        ParentElement: "cp-buttons",
      },
    ],
  },
  {
    TemplateType: 5,
    Items: [
      {
        id: "1_NGACCOUNTNUMBER",
        label: "ACCOUNT NUMBER",
        ControlType: "field",
        ParentElement: "cp-fields",
      },
      {
        id: "2_RXNUMBER",
        label: "RX NUMBER",
        ControlType: "field",
        ParentElement: "cp-fields",
      },
      {
        id: "3_THERAPY",
        label: "THERAPY",
        ControlType: "field",
        ParentElement: "cp-fields",
      },
      {
        id: "4_DRUGNAME",
        label: "DRUG NAME",
        ControlType: "field",
        ParentElement: "cp-fields",
      },
      {
        id: 1,
        label: "Ok",
        ControlType: "button",
        ParentElement: "cp-buttons",
      },
    ],
  },
  {
    TemplateType: 6,
    Items: [
      {
        id: "1_NGPRIMARYPAYER",
        label: "PRIMARY PAYER",
        ControlType: "field",
        ParentElement: "cp-fields",
      },
      {
        id: "2_NGSECONDARYPAYER",
        label: "SECONDARY PAYER",
        ControlType: "field",
        ParentElement: "cp-fields",
      },
      {
        id: 1,
        label: "Ok",
        ControlType: "button",
        ParentElement: "cp-buttons",
      },
    ],
  },
];

document.getElementById("open-cp-btn").addEventListener("click", showCopilot);

function showCopilot() {
  const popup = document.getElementById("copilot-container");
  popup.style.cssText = "display: grid; justify-self: center;";
  const overlay = document.getElementById("cp-overlay");
  overlay.style.display = "block";
}

function hideCopilot() {
  const popup = document.getElementById("copilot-container");
  popup.style.display = "none";
  const overlay = document.getElementById("cp-overlay");
  overlay.style.display = "none";
}

// Declaring global variables for state management
let currentID = 1;
let buttonID = 1;
let userSteps = [1];
let userQuestions = [];
let userStepCounter = 0;

// Display the first question and first template
getQuestion(1);
renderTemplate(1);

// Function to handle back button
function handleBackBtn() {
  if (userSteps.length <= 2) {
    getQuestion(1);
    renderTemplate(1);
    const backButton = document.getElementById("cp-back-btn");
    backButton.style.display = "none";
    const refreshButton = document.getElementById("cp-refresh-btn");
    refreshButton.style.display = "none";
    return;
  } else {
    userSteps.pop();
    currentID = userSteps[userSteps.length - 1];
    console.log(userSteps);
    console.log(currentID);
    getQuestion(currentID);
    return;
  }
}

// Function to handle refresh button
function handleRefreshBtn() {
  currentID = 1;
  buttonID = 1;
  userSteps = [1];
  userQuestions = [];
  userStepCounter = 0;
  console.log("Refreshing..");
  const backButton = document.getElementById("cp-back-btn");
  backButton.style.display = "none";
  const refreshButton = document.getElementById("cp-refresh-btn");
  refreshButton.style.display = "none";
  getQuestion(1);
  renderTemplate(1);
}

// Function to display the question
function getQuestion(id) {
  const question = questions.find((questions) => questions.ID === id);
  if (id !== 0) {
    buttonID = question.TemplateType;
    renderQuestion(question.Question);
    renderTemplate(buttonID);
    userQuestions.push(question.Question);
    return question.Question;
  } else {
    console.log("No more questions");
    const questionContainer = document.getElementById("cp-question-text");
    const buttonContainer = document.getElementById("cp-buttons");
    const tip = document.createElement("p");

    buttonContainer.innerHTML = "";
    questionContainer.innerText = "You've reached to end..";
    tip.innerText = "You can go back, reset or close the copilot.";
    tip.style.fontSize = "16px";

    questionContainer.append(tip);
    return;
  }
}

// Function to get the next question ID
function getNextQuestion(userButtonID) {
  for (let i = 0; i < mapping.length; i++) {
    if (mapping[i].QuestionID === currentID) {
      if (mapping[i].ActionDepth === userButtonID) {
        currentID = mapping[i].NextQuestionID;
        userSteps.push(currentID);
        userStepCounter++;
        console.log(getQuestion(mapping[i].NextQuestionID));
        return;
      } else if (mapping[i].ActionDepth === 0) {
        currentID = mapping[i].NextQuestionID;
        userSteps.push(currentID);
        userStepCounter++;
        console.log(getQuestion(mapping[i].NextQuestionID));
        return;
      }
    }
  }
}

function renderQuestion(questionText) {
  const questionContainer = document.getElementById("cp-question-text");
  questionContainer.innerText = questionText;
}

function handleClick(id) {
  getNextQuestion(id);
  console.log("user steps: ", userSteps);
  console.log("user step counter: ", userStepCounter);
  console.log("Current ID: ", currentID);
  // console.log(userQuestions);
}

// Function to render the template
function renderTemplate(desiredTemplateId) {
  // Show the back and refresh buttons
  if (currentID >= 2) {
    const backButton = document.getElementById("cp-back-btn");
    backButton.style.display = "block";
    const refreshButton = document.getElementById("cp-refresh-btn");
    refreshButton.style.display = "block";
  }

  const template = templates.find(
    (template) => template.TemplateType === desiredTemplateId
  );

  if (!template) {
    console.error(`Template with ID ${desiredTemplateId} not found.`);
    return;
  }

  const buttonsContainer = document.getElementById("cp-buttons");
  const fieldsContainer = document.getElementById("cp-fields");
  const templateContainer = document.getElementById("cp-template");

  // Clear previous content
  buttonsContainer.innerHTML = "";
  fieldsContainer.innerHTML = "";

  template.Items.forEach((item) => {
    if (item.ControlType === "button") {
      const button = document.createElement("button");
      button.classList.add("cp-buttons");
      button.id = item.id;
      button.innerText = item.label;
      button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "#5c86bd";
        button.style.color = "#F5EFE7";
        button.style.boxShadow = "4px 4px 8px rgba(0, 0, 0, 0.5)";
      });
      button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "#4f709c";
        button.style.color = "#d8c4b6";
        button.style.boxShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
      });
      button.addEventListener("click", function () {
        handleClick(item.id);
      });

      // Adding button specific styling
      if (item.label === "Ok") {
        buttonsContainer.style.display = "flex";
        buttonsContainer.style.flexDirection = "row";
        buttonsContainer.style.justifyContent = "space-between";
        button.style.width = "40px";
      } else if (item.label === "Yes" || item.label === "No") {
        buttonsContainer.style.display = "flex";
        buttonsContainer.style.flexDirection = "row";
        buttonsContainer.style.justifyContent = "space-between";
        button.style.width = "40px";
      } else {
        buttonsContainer.style.display = "flex";
        buttonsContainer.style.flexDirection = "column";
        buttonsContainer.style.justifyContent = "center";
        buttonsContainer.style.gap = "10px";
      }
      // Common styling for all the buttons
      button.style.backgroundColor = "#4f709c";
      button.style.borderRadius = "4px";
      button.style.border = "none";
      button.style.height = "25px";
      button.style.color = "#d8c4b6";
      button.style.boxShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
      // Appending the buttons to the HTML
      buttonsContainer.appendChild(button);
    } else if (item.ControlType === "field") {
      const field = document.createElement("input");
      field.classList.add("cp-fields");
      field.id = item.id;
      field.type = "text";
      field.placeholder = item.label;

      // Adding styling to the rendered input fields
      field.style.backgroundColor = "#F5EFE7";
      field.style.border = "none";
      field.style.padding = "5px";
      field.style.borderRadius = "5px";
      field.style.margin = "5px";
      field.style.boxShadow = "0 0 15px 4px rgba(0,0,0,0.06)";

      fieldsContainer.appendChild(field);
    }
  });

  templateContainer.style.cssText =
    "display: flex; flex-direction: column; justify-content: center;";

  // buttonsContainer.style.cssText =
  //   "display: inline-grid; grid-gap: 4px; text-align: center;";

  fieldsContainer.style.cssText =
    "display: flex; flex-direction: column; gap: 4px; text-align: center; justify-content: center;";
}
