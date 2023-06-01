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

// Declaring global variables for state management
let currentID = 1;
let steps = [];

function showCopilot() {
  var popup = document.getElementById("copilot-container");
  popup.style.display = "block";
}

function hideCopilot() {
  var popup = document.getElementById("copilot-container");
  popup.style.display = "none";
}

// Display the first question and first template
getQuestion(currentID);
renderTemplate(1);

// Function to display the question
function getQuestion(ID) {
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].ID === ID) {
      let buttonID = questions[i].TemplateType;
      renderTemplate(buttonID);
      console.log(questions[i].Question);
    }
  }
}

// Function to get the next question ID
function getNextID(ID) {
  for (let i = 0; i < mapping.length; i++) {
    if (mapping[i].QuestionID === currentID) {
      if (mapping[i].ActionDepth === ID) {
        currentID = mapping[i].NextQuestionID;
      } else if (mapping[i].ActionDepth === 0) {
        currentID = mapping[i].NextQuestionID;
      }
    }
  }
}

function handleButtonClick(ID) {
  getNextID(ID);
  console.log(currentID);
  getQuestion(currentID);
}

// Function to render the template
function renderTemplate(desiredTemplateId) {
  const template = templates.find(
    (template) => template.TemplateType === desiredTemplateId
  );

  if (!template) {
    console.error(`Template with ID ${desiredTemplateId} not found.`);
    return;
  }

  const buttonsContainer = document.getElementById("cp-buttons");
  const fieldsContainer = document.getElementById("cp-fields");

  // Clear previous content
  buttonsContainer.innerHTML = "";
  fieldsContainer.innerHTML = "";

  template.Items.forEach((item) => {
    if (item.ControlType === "button") {
      const button = document.createElement("button");
      button.classList.add("cp-buttons");
      button.id = item.id;
      button.innerText = item.label;
      button.addEventListener("click", function (event) {
        var buttonId = event.target.id;
        handleButtonClick(buttonId);
      });
      buttonsContainer.appendChild(button);
    } else if (item.ControlType === "field") {
      const field = document.createElement("input");
      field.classList.add("cp-fields");
      field.id = item.id;
      field.type = "text";
      field.placeholder = item.label;
      //field.addEventListener("input", handleFieldInput);
      fieldsContainer.appendChild(field);
    }
  });
}

// Test something here
// getNextID(1);
// Test something here
