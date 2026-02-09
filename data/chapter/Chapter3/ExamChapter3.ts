import { Chapter } from "../types";

export const CHAPTER_3_FINAL_EXAM: Chapter = {
  id: "genai-3-exam",
  title: " Chapter 3 Final Mock Exam",
  description: "40 Questions • 60 Minutes • Managing Risks of Generative AI in Software Testing",
  icon: "ShieldCheck",
  questions: [

    {
      id: "q-1",
      code: "EX-3-1",
       
      text: "What occurs when an LLM generates output that appears factually incorrect or irrelevant to the specific test task provided?",
      options: ["Reasoning Error", "Bias", "Hallucination", "Non-determinism"],
      correctIndex: 2,
      explanation: "Hallucinations occur when an LLM generates factually incorrect or irrelevant output."
    },
    {
      id: "q-2",
      code: "EX-3-2",
       
      text: "Which type of defect is characterized by an LLM misinterpreting cause-and-effect relationships or step-by-step problem-solving processes?",
      options: ["Hallucination", "Reasoning Error", "Data Poisoning", "Data Exfiltration"],
      correctIndex: 1,
      explanation: "Reasoning errors involve incorrect logical interpretation."
    },
    {
      id: "q-3",
      code: "EX-3-3",
       
      text: "In the context of GenAI, where do biases in the generated output primarily originate?",
      options: [
        "The complexity of the user prompt",
        "The probabilistic sampling during inference",
        "The data on which the model was trained",
        "The temperature settings of the LLM"
      ],
      correctIndex: 2,
      explanation: "Biases primarily originate from training data."
    },
    {
      id: "q-4",
      code: "EX-3-4",
       
      text: "Which characteristic of LLMs makes it particularly difficult to permanently fix defects like hallucinations or reasoning errors?",
      options: [
        "Multi-modal processing",
        "Non-deterministic behavior",
        "High energy consumption",
        "Context window limitations"
      ],
      correctIndex: 1,
      explanation: "Non-determinism causes defects to reappear inconsistently."
    },
    {
      id: "q-5",
      code: "EX-3-5",
       
      text: "Scenario: You ask an LLM to generate test cases for a new \"Search\" feature. The model suggests a test case to \"Verify the voice-to-text translation,\" even though the requirements document explicitly states the app has no audio features. This is an example of:",
      options: ["A Reasoning Error", "A Hallucination", "A Bias", "Request Manipulation"],
      correctIndex: 1,
      explanation: "Inventing non-existent features is a hallucination."
    },
    {
      id: "q-6",
      code: "EX-3-6",
       
      text: "Scenario: During a test planning task, an LLM is asked to estimate effort. It fails to account for the dependency between \"Module A\" and \"Module B,\" leading to an impossible schedule. This is an example of:",
      options: ["A Reasoning Error", "A Hallucination", "A Bias", "Data Poisoning"],
      correctIndex: 0,
      explanation: "Ignoring dependencies is a reasoning error."
    },
    {
      id: "q-7",
      code: "EX-3-7",
       
      text: "Scenario: A tester uses an LLM to generate user personas for a global banking app. The model only produces personas that reflect Western cultural norms and naming conventions. This is an example of:",
      options: ["A Hallucination", "A Reasoning Error", "A Bias", "A Security Vulnerability"],
      correctIndex: 2,
      explanation: "This reflects bias from training data."
    },
    {
      id: "q-8",
      code: "EX-3-8",
       
      text: "Which approach to hallucination detection involves engaging subject matter experts to capture nuanced insights that automated systems might miss?",
      options: ["Cross-verification", "Logical validation", "Domain expertise consultation", "Output testing"],
      correctIndex: 2,
      explanation: "Domain experts detect subtle inaccuracies."
    },
    {
      id: "q-9",
      code: "EX-3-9",
       
      text: "Which detection method involves running generated test cases or scripts against the actual test objects to verify the results?",
      options: ["Logical validation", "Consistency checks", "Output testing", "Cross-verification"],
      correctIndex: 2,
      explanation: "Output testing validates against real systems."
    },
    {
      id: "q-10",
      code: "EX-3-10",
       
      text: "Scenario: You are analyzing the logical flow and coherence of AI-generated test strategy text. Which detection approach are you employing?",
      options: [
        "Hallucination detection via domain expertise",
        "Reasoning error detection via logical validation",
        "Bias detection via representation review",
        "Non-determinism detection via temperature adjustment"
      ],
      correctIndex: 1,
      explanation: "Logical validation checks reasoning coherence."
    },

    {
      id: "q-11",
      code: "EX-3-11",
       
      text: "Which mitigation technique involves splitting complex prompts into smaller steps to detect errors early in the process?",
      options: [
        "Providing complete context",
        "Prompt Chaining",
        "Using random seeds",
        "Lowering the temperature"
      ],
      correctIndex: 1,
      explanation: "Prompt chaining enables early verification."
    },
    {
      id: "q-12",
      code: "EX-3-12",
       
      text: "Why is \"comparing results across models\" a recommended mitigation strategy for hallucinations?",
      options: [
        "It increases the context window for each prompt.",
        "It helps detect output errors by identifying discrepancies between different LLM responses.",
        "It reduces the energy consumption of the test process.",
        "It ensures the model is compliant with the EU AI Act."
      ],
      correctIndex: 1,
      explanation: "Comparing outputs reveals inconsistencies."
    },
    {
      id: "q-13",
      code: "EX-3-13",
       
      text: "To reduce randomness and achieve more consistent, repetitive outputs, which parameter should a tester adjust?",
      options: [
        "Increase the temperature",
        "Decrease the temperature",
        "Increase the context window",
        "Decrease the tokenization units"
      ],
      correctIndex: 1,
      explanation: "Lower temperature reduces randomness."
    },
    {
      id: "q-14",
      code: "EX-3-14",
       
      text: "What is the effect of setting a \"random seed\" in an LLM implementation?",
      options: [
        "It ensures the model identifies all relevant equivalence partitions.",
        "It ensures the same pseudo-random sequence is used, improving reproducibility.",
        "It allows the model to generate more creative and diverse outputs.",
        "It masks sensitive data during the inference process."
      ],
      correctIndex: 1,
      explanation: "Random seeds improve reproducibility."
    },
    {
      id: "q-15",
      code: "EX-3-15",
       
      text: "Why is achieving reproducibility particularly challenging for long LLM outputs?",
      options: [
        "Variability increases due to the probabilistic sampling processes used during inference.",
        "The context window automatically shrinks as the output length increases.",
        "Long outputs are automatically classified as high-risk under the EU AI Act.",
        "Transformers cannot process more than 512 tokens without symbolic rules."
      ],
      correctIndex: 0,
      explanation: "Probabilistic sampling increases variability."
    },

    {
      id: "q-16",
      code: "EX-3-16",
       
      text: "Which data privacy risk involves GenAI tools storing and processing sensitive data without explicit user consent?",
      options: [
        "Unintentional data exposure",
        "Lack of control over data usage",
        "Compliance risks",
        "Malicious code generation"
      ],
      correctIndex: 1,
      explanation: "This represents lack of control over data usage."
    },
    {
      id: "q-17",
      code: "EX-3-17",
       
      text: "Using GenAI tools in a manner that violates the General Data Protection Regulation (GDPR) is categorized as:",
      options: [
        "A Security Vulnerability",
        "A Compliance Risk",
        "A Reasoning Error",
        "Shadow AI"
      ],
      correctIndex: 1,
      explanation: "Violating GDPR is a compliance risk."
    },
    {
      id: "q-18",
      code: "EX-3-18",
       
      text: "Scenario: A tester inputs a massive proprietary log file into an LLM. The prompt is so long that it causes the model to reveal random snippets of other users' training data. Which attack vector is this?",
      options: [
        "Data Poisoning",
        "Request Manipulation",
        "Data Exfiltration",
        "Malicious Code Generation"
      ],
      correctIndex: 2,
      explanation: "Extracting training data is data exfiltration."
    },
    {
      id: "q-19",
      code: "EX-3-19",
       
      text: "Which attack vector involves introducing data, such as images, that lures the AI into a different context to provoke hallucinations?",
      options: [
        "Data Exfiltration",
        "Request Manipulation",
        "Data Poisoning",
        "Malicious Code Generation"
      ],
      correctIndex: 1,
      explanation: "Request manipulation disrupts context."
    },
    {
      id: "q-20",
      code: "EX-3-20",
       
      text: "Providing fake evaluations when rating the results of an AI-generated test report to manipulate future model behavior is an example of:",
      options: [
        "Data Exfiltration",
        "Request Manipulation",
        "Data Poisoning",
        "Malicious Code Generation"
      ],
      correctIndex: 2,
      explanation: "Fake feedback is data poisoning."
    },

    {
      id: "q-21",
      code: "EX-3-21",
       
      text: "Scenario: An LLM generates code for a test utility that includes a hidden command to open a communication channel with a malicious IP. This represents:",
      options: [
        "Malicious Code Generation",
        "A Hallucination",
        "Data Minimization",
        "A Reasoning Error"
      ],
      correctIndex: 0,
      explanation: "Hidden backdoors indicate malicious code generation."
    },
    {
      id: "q-22",
      code: "EX-3-22",
       
      text: "Which organizational mitigation strategy involves avoiding the processing of sensitive data unless legally permitted?",
      options: [
        "Data anonymization",
        "Data minimization",
        "Systematic review",
        "Pseudonymization"
      ],
      correctIndex: 1,
      explanation: "Data minimization limits sensitive data use."
    },
    {
      id: "q-23",
      code: "EX-3-23",
       
      text: "What is the difference between anonymization and pseudonymization?",
      options: [
        "Anonymization is for images; pseudonymization is for text.",
        "Anonymization makes data non-identifiable; pseudonymization masks data but allows for potential re-identification.",
        "Anonymization is a security risk; pseudonymization is a mitigation strategy.",
        "Anonymization is used by chatbots; pseudonymization is used by APIs."
      ],
      correctIndex: 1,
      explanation: "Pseudonymized data can be re-identified under controls."
    },
    {
      id: "q-24",
      code: "EX-3-24",
       
      text: "If an organization requires the highest level of confidentiality for its test data, where should the LLM be operated?",
      options: [
        "A public, free AI chatbot",
        "A commercial LLM-as-a-service with standard terms",
        "Installed within the organization's own infrastructure",
        "A shared cloud environment with no encryption"
      ],
      correctIndex: 2,
      explanation: "On-premise deployment offers maximum confidentiality."
    },
    {
      id: "q-25",
      code: "EX-3-25",
       
      text: "Why is \"systematic human review\" considered essential even when using advanced LLMs for testing?",
      options: [
        "It is the only way to calculate the cost per token.",
        "It ensures the quality and accuracy of GenAI-powered test tasks.",
        "It prevents the LLM from consuming energy.",
        "It is required by the transformer architecture."
      ],
      correctIndex: 1,
      explanation: "Human review ensures correctness and quality."
    },

    {
      id: "q-26",
      code: "EX-3-26",
       
      text: "Which of the following should be involved when establishing GenAI data privacy policies in a large organization?",
      options: [
        "Junior Testers",
        "Legal Counsel and the CISO",
        "Only the Test Automation Engineers",
        "The LLM provider's marketing team"
      ],
      correctIndex: 1,
      explanation: "Legal and security leadership must be involved."
    },
    {
      id: "q-27",
      code: "EX-3-27",
       
      text: "According to studies, generating a single image with a powerful AI model consumes energy equivalent to:",
      options: [
        "Sending one text message",
        "Fully charging a smartphone",
        "Running a laptop for a week",
        "Lighting a city block for an hour"
      ],
      correctIndex: 1,
      explanation: "Image generation can equal charging a smartphone."
    },
    {
      id: "q-28",
      code: "EX-3-28",
       
      text: "Which factor most directly influences the energy consumption and CO2 emissions of a GenAI task?",
      options: [
        "The time of day the prompt is sent",
        "The complexity of the task and the computational resources required",
        "The font size used in the front-end interface",
        "The number of characters in the user's password"
      ],
      correctIndex: 1,
      explanation: "Task complexity and compute drive energy usage."
    },
    {
      id: "q-29",
      code: "EX-3-29",
       
      text: "What is a recommended best practice for reducing the environmental impact of GenAI in testing?",
      options: [
        "Using the largest model available for every task",
        "Limiting unnecessary model interactions",
        "Always requesting images instead of text",
        "Disabling the context window"
      ],
      correctIndex: 1,
      explanation: "Reducing unnecessary calls lowers energy use."
    },
    {
      id: "q-30",
      code: "EX-3-30",
       
      text: "Why do energy-intensive GenAI operations pose an environmental risk?",
      options: [
        "They decrease the load on data centers.",
        "They collectively contribute to significant CO2 emissions.",
        "They prevent the use of renewable energy.",
        "They cause hallucinations in the power grid."
      ],
      correctIndex: 1,
      explanation: "High energy use contributes to CO2 emissions."
    },

    {
      id: "q-31",
      code: "EX-3-31",
       
      text: "Which ISO standard specifies requirements for an AI Management System within an organization?",
      options: [
        "ISO/IEC 23053",
        "ISO/IEC 42001:2023",
        "ISO/IEC 29119",
        "ISO/IEC 27001"
      ],
      correctIndex: 1,
      explanation: "ISO/IEC 42001 defines AI management systems."
    },
    {
      id: "q-32",
      code: "EX-3-32",
       
      text: "The EU AI Act classifies AI applications primarily based on:",
      options: [
        "The number of tokens they process",
        "Their risk level",
        "The country of origin of the model",
        "The cost of the license"
      ],
      correctIndex: 1,
      explanation: "Classification is risk-based."
    },
    {
      id: "q-33",
      code: "EX-3-33",
       
      text: "Which framework offers guidelines for managing AI risks with a specific focus on fairness, transparency, and security?",
      options: [
        "EU AI Act",
        "NIST AI Risk Management Framework (US)",
        "ISO/IEC 23053",
        "ISTQB Glossary"
      ],
      correctIndex: 1,
      explanation: "NIST AI RMF emphasizes fairness and security."
    },
    {
      id: "q-34",
      code: "EX-3-34",
       
      text: "ISO/IEC 23053:2022 is primarily concerned with providing a framework for:",
      options: [
        "Legal penalties for data breaches",
        "AI lifecycle processes, emphasizing fault tolerance and transparency",
        "Writing structured prompts",
        "Calculating the temperature of an LLM"
      ],
      correctIndex: 1,
      explanation: "ISO/IEC 23053 focuses on AI lifecycle and robustness."
    },
    {
      id: "q-35",
      code: "EX-3-35",
       
      text: "Scenario: You are implementing a GenAI strategy and need to ensure your organization follows a standard for data quality and fault tolerance in AI systems. Which standard should you reference?",
      options: [
        "ISO/IEC 42001",
        "ISO/IEC 23053:2022",
        "NIST AI RMF",
        "GDPR"
      ],
      correctIndex: 1,
      explanation: "ISO/IEC 23053 addresses data quality and fault tolerance."
    },

    {
      id: "q-36",
      code: "EX-3-36",
       
      text: "Why is it \"imperative\" for test organizations to stay updated on AI regulations?",
      options: [
        "To ensure they use the most creative prompts possible.",
        "Because regulatory landscapes, national laws, and standards are continuously evolving.",
        "To prevent the LLM from becoming non-deterministic.",
        "To increase the speed of tokenization."
      ],
      correctIndex: 1,
      explanation: "Regulations and standards continuously evolve."
    },
    {
      id: "q-37",
      code: "EX-3-37",
       
      text: "Which technique helps mitigate reasoning errors by allowing for early detection of logical failures in sub-tasks?",
      options: [
        "Zero-shot prompting",
        "Prompt Chaining",
        "Increasing Temperature",
        "Data Poisoning"
      ],
      correctIndex: 1,
      explanation: "Prompt chaining enables step-by-step validation."
    },
    {
      id: "q-38",
      code: "EX-3-38",
       
      text: "Which document established the legal framework that mandates compliance in bias mitigation for GenAI used in the European market?",
      options: [
        "ISO/IEC 42001",
        "EU AI Act",
        "NIST AI RMF",
        "CT-GenAI Syllabus"
      ],
      correctIndex: 1,
      explanation: "The EU AI Act is the legal framework."
    },
    {
      id: "q-39",
      code: "EX-3-39",
       
      text: "Scenario: A tester notices the LLM is consistently \"forgetting\" the beginning of a long test execution log. This is a limitation of the:",
      options: [
        "Reasoning capability",
        "Context window",
        "Bias detection",
        "EU AI Act compliance"
      ],
      correctIndex: 1,
      explanation: "Context window limits remembered input."
    },
    {
      id: "q-40",
      code: "EX-3-40",
       
      text: "What is the primary purpose of data anonymization in a GenAI testing context?",
      options: [
        "To make the test scripts run faster.",
        "To mask or replace sensitive information with non-identifiable data to mitigate privacy risks.",
        "To increase the temperature of the model.",
        "To ensure the LLM generates more hallucinations."
      ],
      correctIndex: 1,
      explanation: "Anonymization protects privacy by removing identifiers."
    }

  ]
};
