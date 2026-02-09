import { Chapter } from "../types";

export const CHAPTER_2_FINAL_EXAM: Chapter = {
  id: "genai-2-exam",
  title: "Chapter 2 Final Mock Exam",
  description: "40 Questions • 90 Minutes • Passing Score: 65%",
  icon: "Award",
  questions: [

    {
      id: "q-1",
      code: "EX-2-1",
       
      text: "Which component of a structured prompt defines the specific perspective or persona the model should adopt to determine its tone and responsibilities?",
      options: ["Context", "Role", "Instruction", "Output format"],
      correctIndex: 1,
      explanation: "Role defines the perspective or persona the model should adopt."
    },
    {
      id: "q-2",
      code: "EX-2-2",
       
      text: "A tester includes the following in a prompt: \"Ensure the response does not contain any real customer names or IDs.\" Which prompt component is this?",
      options: ["Input data", "Context", "Constraints", "Instruction"],
      correctIndex: 2,
      explanation: "Constraints define restrictions the model must follow."
    },
    {
      id: "q-3",
      code: "EX-2-3",
       
      text: "What is the primary purpose of the Context component in a structured testing prompt?",
      options: [
        "To provide the background information needed to determine test conditions.",
        "To specify whether the output should be in JSON or Markdown.",
        "To give the model a specific persona, like a Security Engineer.",
        "To provide the actual user stories that need to be tested."
      ],
      correctIndex: 0,
      explanation: "Context provides background information needed to determine test conditions."
    },
    {
      id: "q-4",
      code: "EX-2-4",
       
      text: "Which prompting technique involves breaking a complex task into a series of intermediate steps where the output of one step informs the next?",
      options: ["Few-shot prompting", "Meta prompting", "Zero-shot prompting", "Prompt chaining"],
      correctIndex: 3,
      explanation: "Prompt chaining breaks tasks into sequential steps."
    },
    {
      id: "q-5",
      code: "EX-2-5",
       
      text: "Scenario: You want an LLM to generate bug reports in a very specific, non-standard company format. You provide the LLM with four examples of previous high-quality reports before asking it to generate a new one. Which technique are you using?",
      options: ["One-shot prompting", "Meta prompting", "Few-shot prompting", "Zero-shot prompting"],
      correctIndex: 2,
      explanation: "Few-shot prompting uses multiple examples."
    },
    {
      id: "q-6",
      code: "EX-2-6",
       
      text: "Which technique allows a tester to collaborate with the LLM to co-create an effective prompt when they are unsure of the best way to structure instructions?",
      options: ["Prompt chaining", "Meta prompting", "Few-shot prompting", "Structural prompting"],
      correctIndex: 1,
      explanation: "Meta prompting enables collaborative prompt creation."
    },
    {
      id: "q-7",
      code: "EX-2-7",
       
      text: "How does a system prompt differ from a user prompt?",
      options: [
        "The system prompt is visible to the chatbot user, while the user prompt is hidden.",
        "The system prompt changes with every interaction, while the user prompt stays constant.",
        "The system prompt establishes the overall rules and behavior for the entire session.",
        "The system prompt is used for input data, while the user prompt is for persona definition."
      ],
      correctIndex: 2,
      explanation: "System prompts define overall rules and behavior."
    },
    {
      id: "q-8",
      code: "EX-2-8",
       
      text: "Scenario: You are using a chatbot for exploratory testing. You want the model to always act as a \"Skeptical Tester\" and use formal language across multiple queries. Where should these instructions ideally be placed?",
      options: ["In the User Prompt", "In the System Prompt", "In the Input Data component", "In the Few-shot examples"],
      correctIndex: 1,
      explanation: "System prompts persist across the session."
    },
    {
      id: "q-9",
      code: "EX-2-9",
       
      text: "Which test analysis task is supported by GenAI by comparing requirement patterns to flag inconsistencies or missing information?",
      options: [
        "Test data synthesis",
        "Identifying potential defects in the test basis",
        "Test oracle generation",
        "Test execution scheduling"
      ],
      correctIndex: 1,
      explanation: "GenAI can analyze the test basis for inconsistencies."
    },
    {
      id: "q-10",
      code: "EX-2-10",
       
      text: "Scenario: You need to prioritize test conditions for a new payment module. Which information is most critical to provide in the prompt to help the LLM recommend priority levels?",
      options: [
        "The Gherkin syntax for the test cases.",
        "Risk likelihood and risk impact of failure.",
        "The total number of lines of code in the module.",
        "The name of the developer who wrote the requirements."
      ],
      correctIndex: 1,
      explanation: "Risk likelihood and impact enable prioritization."
    },

    {
      id: "q-11",
      code: "EX-2-11",
       
      text: "Scenario: A tester uses an LLM to map a set of user stories to existing test conditions to ensure no requirements are missed. This is an application of:",
      options: [
        "Test data generation",
        "Coverage analysis",
        "Test oracle generation",
        "Self-healing scripts"
      ],
      correctIndex: 1,
      explanation: "Mapping requirements to test conditions is coverage analysis."
    },
    {
      id: "q-12",
      code: "EX-2-12",
       
      text: "In the context of multimodal prompting, what is the specific benefit of providing both a user story and a GUI wireframe to an LLM?",
      options: [
        "It allows the LLM to write the CSS code for the application.",
        "It helps identify discrepancies between the visual layout and textual requirements.",
        "It reduces the context window usage compared to text-only prompts.",
        "It makes the LLM deterministic for that specific task."
      ],
      correctIndex: 1,
      explanation: "Combining text and visuals improves discrepancy detection."
    },
    {
      id: "q-13",
      code: "EX-2-13",
       
      text: "Scenario: You are using prompt chaining to analyze a user story. What should be the final step in this chain to ensure the results are \"actionable\"?",
      options: [
        "Identifying ambiguities in the text.",
        "Evaluating the testability of the requirements.",
        "Refining and evaluating the completeness of acceptance criteria.",
        "Generating 1,000 random test cases."
      ],
      correctIndex: 2,
      explanation: "Actionable output requires refined acceptance criteria."
    },
    {
      id: "q-14",
      code: "EX-2-14",
       
      text: "When using GenAI for test oracle generation, what is the model specifically helping to create?",
      options: [
        "The test execution schedule.",
        "The expected results for test cases.",
        "The synthetic data for a database.",
        "The persona for the system prompt."
      ],
      correctIndex: 1,
      explanation: "Test oracles define expected results."
    },
    {
      id: "q-15",
      code: "EX-2-15",
       
      text: "Scenario: An organization needs to test a banking app but cannot use real customer data due to GDPR. How can GenAI assist in test implementation?",
      options: [
        "By encrypting the production database for use in testing.",
        "By synthesizing data-privacy-preserving test data that resembles production data.",
        "By ignoring the data privacy constraints to maximize coverage.",
        "By manually verifying every row in the production database."
      ],
      correctIndex: 1,
      explanation: "GenAI can generate synthetic, privacy-safe data."
    },
    {
      id: "q-16",
      code: "EX-2-16",
       
      text: "How does GenAI support test execution scheduling?",
      options: [
        "By automatically running the tests in the CI/CD pipeline.",
        "By analyzing test cases and interdependencies to optimize the order of execution.",
        "By deleting low-priority test cases from the repository.",
        "By providing a graphical user interface for manual testers."
      ],
      correctIndex: 1,
      explanation: "GenAI can optimize schedules based on dependencies."
    },
    {
      id: "q-17",
      code: "EX-2-17",
       
      text: "Scenario: You want to generate Gherkin-style scenarios for a \"Login\" feature. You provide the LLM with three examples of \"User Story -> Gherkin\" pairs. This is an application of:",
      options: [
        "Zero-shot prompting",
        "One-shot prompting",
        "Few-shot prompting",
        "Meta prompting"
      ],
      correctIndex: 2,
      explanation: "Few-shot prompting uses multiple examples."
    },
    {
      id: "q-18",
      code: "EX-2-18",
       
      text: "Scenario: After generating test cases, you ask the LLM to \"Create a table summarizing the coverage of each acceptance criterion.\" What is the objective of this step?",
      options: [
        "Test design",
        "Coverage validation",
        "Data synthesis",
        "Test script implementation"
      ],
      correctIndex: 1,
      explanation: "This validates coverage of acceptance criteria."
    },
    {
      id: "q-19",
      code: "EX-2-19",
       
      text: "In automated regression testing, \"self-healing\" scripts refer to the AI's ability to:",
      options: [
        "Automatically fix bugs in the application's source code.",
        "Adjust test scripts to handle minor UI changes or dynamic locators.",
        "Generate a test report when a test fails.",
        "Delete failing tests to maintain a high success rate."
      ],
      correctIndex: 1,
      explanation: "Self-healing adapts scripts to minor changes."
    },
    {
      id: "q-20",
      code: "EX-2-20",
       
      text: "Which technique is most effective for implementing keyword-driven test scripts using an LLM?",
      options: [
        "Zero-shot prompting",
        "Few-shot prompting with a keyword library",
        "Meta prompting without any context",
        "Symbolic AI rule-setting"
      ],
      correctIndex: 1,
      explanation: "Few-shot prompting supports keyword-driven scripts."
    },

    {
      id: "q-21",
      code: "EX-2-21",
       
      text: "Scenario: You use an LLM to analyze code changes in a recent commit to identify high-risk areas. This is known as:",
      options: ["Test data synthesis", "Impact analysis", "Self-healing", "Prompt chaining"],
      correctIndex: 1,
      explanation: "Analyzing changes to assess risk is impact analysis."
    },
    {
      id: "q-22",
      code: "EX-2-22",
       
      text: "How can GenAI assist in API regression testing?",
      options: [
        "By physically monitoring the network hardware.",
        "By adapting test scripts to handle evolving request/response formats or endpoints.",
        "By rewriting the entire API in a more modern language.",
        "By ensuring the API is never changed by developers."
      ],
      correctIndex: 1,
      explanation: "GenAI can adapt scripts to API evolution."
    },
    {
      id: "q-23",
      code: "EX-2-23",
       
      text: "Scenario: A tester creates a \"Debugging Assistant\" using a system prompt to help colleagues fix failing automated scripts. This is an application of:",
      options: [
        "Test Analysis",
        "Test Implementation and debugging support",
        "Test Monitoring",
        "Test Planning"
      ],
      correctIndex: 1,
      explanation: "This supports test implementation and debugging."
    },
    {
      id: "q-24",
      code: "EX-2-24",
       
      text: "What is the primary role of GenAI in test monitoring?",
      options: [
        "To manually execute failed test cases.",
        "To synthesize large quantities of data into key metrics and trends.",
        "To provide the physical hardware for monitoring dashboards.",
        "To prevent any anomalies from occurring in the test environment."
      ],
      correctIndex: 1,
      explanation: "GenAI synthesizes data into metrics and trends."
    },
    {
      id: "q-25",
      code: "EX-2-25",
       
      text: "Scenario: A project manager needs a summary of test progress for a non-technical stakeholder. How can GenAI help?",
      options: [
        "By providing the raw logs from the automation server.",
        "By generating natural language summaries of test metrics and progress.",
        "By training the stakeholder to read JSON test results.",
        "By creating a fictional success story about the project."
      ],
      correctIndex: 1,
      explanation: "GenAI can generate natural language summaries."
    },

    {
      id: "q-26",
      code: "EX-2-26",
       
      text: "Which metric measures the correctness of the AI-generated output specifically with respect to a objective like \"identifying anomalies\"?",
      options: ["Accuracy", "Precision", "Recall", "Diversity"],
      correctIndex: 1,
      explanation: "Precision measures correctness of identified anomalies."
    },
    {
      id: "q-27",
      code: "EX-2-27",
       
      text: "Scenario: You want to ensure that your generated test cases cover both valid and invalid equivalence partitions. Which metric should you use to evaluate this?",
      options: [
        "Execution Success Rate",
        "Time Efficiency",
        "Recall",
        "Diversity"
      ],
      correctIndex: 2,
      explanation: "Recall measures coverage of all relevant cases."
    },
    {
      id: "q-28",
      code: "EX-2-28",
       
      text: "If 90% of your generated test scripts run in your environment without syntax errors, which metric are you measuring?",
      options: ["Accuracy", "Precision", "Execution Success Rate", "Relevance"],
      correctIndex: 2,
      explanation: "Execution Success Rate measures successful execution."
    },
    {
      id: "q-29",
      code: "EX-2-29",
       
      text: "Which metric would you use to prove that using GenAI saved the team 20 hours of work compared to manual test creation?",
      options: ["Accuracy", "Time Efficiency", "Diversity", "Contextual Fit"],
      correctIndex: 1,
      explanation: "Time Efficiency measures time saved."
    },
    {
      id: "q-30",
      code: "EX-2-30",
       
      text: "Which evaluation technique involves comparing two versions of a prompt to see which phrasing produces more accurate results?",
      options: [
        "Output analysis",
        "A/B testing of prompts",
        "Iterative prompt modification",
        "User feedback integration"
      ],
      correctIndex: 1,
      explanation: "A/B testing compares prompt variants."
    },

    {
      id: "q-31",
      code: "EX-2-31",
       
      text: "Scenario: A tester reviews an LLM’s output, notices that it used the wrong terminology for \"Defects,\" and updates the prompt to include a specific glossary. This is:",
      options: [
        "A/B testing",
        "Iterative prompt modification",
        "Meta prompting",
        "Random sampling"
      ],
      correctIndex: 1,
      explanation: "This is iterative prompt modification."
    },
    {
      id: "q-32",
      code: "EX-2-32",
       
      text: "What is the purpose of Output Analysis in prompt refinement?",
      options: [
        "To increase the cost of using the LLM.",
        "To understand the types of errors or inconsistencies to refine prompts for future iterations.",
        "To automatically execute every generated test script.",
        "To replace the need for human testers in the review process."
      ],
      correctIndex: 1,
      explanation: "Output analysis identifies errors for refinement."
    },
    {
      id: "q-33",
      code: "EX-2-33",
       
      text: "Which technique should be selected for complex tasks requiring human verification at each step?",
      options: [
        "Few-shot prompting",
        "Prompt chaining",
        "Zero-shot prompting",
        "Meta prompting"
      ],
      correctIndex: 1,
      explanation: "Prompt chaining supports step-by-step verification."
    },
    {
      id: "q-34",
      code: "EX-2-34",
       
      text: "Why might a tester shorten a prompt during the refinement process?",
      options: [
        "To ensure the model reaches its context window limit faster.",
        "To see if a shorter prompt yields better generalization.",
        "To make the prompt more expensive to process.",
        "Because the LLM cannot read more than 10 words."
      ],
      correctIndex: 1,
      explanation: "Shorter prompts may generalize better."
    },
    {
      id: "q-35",
      code: "EX-2-35",
       
      text: "Scenario: You need to analyze unstructured test logs to predict potential risks. Which prompting technique is categorized as \"Flexible\" and \"Useful for all kinds of complex tasks\" for this?",
      options: [
        "Few-shot prompting",
        "Meta prompting",
        "Chained prompting",
        "One-shot prompting"
      ],
      correctIndex: 1,
      explanation: "Meta prompting is flexible for complex tasks."
    },

    {
      id: "q-36",
      code: "EX-2-36",
       
      text: "Which component of a structured prompt specifies if the response should be a table, a list, or code?",
      options: ["Instruction", "Constraints", "Output format", "Role"],
      correctIndex: 2,
      explanation: "Output format defines response structure."
    },
    {
      id: "q-37",
      code: "EX-2-37",
       
      text: "Scenario: A tester wants to generate end-to-end test procedures but isn't sure how to prompt for them. They ask the LLM to \"Write a high-quality prompt that will help me generate E2E tests for a web store.\" This is:",
      options: [
        "Prompt chaining",
        "Few-shot prompting",
        "Meta prompting",
        "Structural prompting"
      ],
      correctIndex: 2,
      explanation: "Meta prompting asks the AI to generate the prompt."
    },
    {
      id: "q-38",
      code: "EX-2-38",
       
      text: "According to the syllabus, what is the \"pairing\" concept in meta prompting?",
      options: [
        "Using two different LLMs simultaneously.",
        "The tester and AI working together interactively to achieve a shared goal.",
        "Pairing a system prompt with a user prompt.",
        "Pairing an image with a text description."
      ],
      correctIndex: 1,
      explanation: "Pairing refers to collaborative interaction."
    },
    {
      id: "q-39",
      code: "EX-2-39",
       
      text: "Which metric ensures that a generated test suite covers a wide range of inputs and scenarios, avoiding repetition?",
      options: ["Accuracy", "Precision", "Diversity", "Recall"],
      correctIndex: 2,
      explanation: "Diversity ensures wide scenario coverage."
    },
    {
      id: "q-40",
      code: "EX-2-40",
       
      text: "Scenario: In your test control task, you ask the LLM for \"insights on reallocating resources\" because the project is delayed. Which testing phase are you in?",
      options: [
        "Test Analysis",
        "Test Implementation",
        "Test Monitoring and Test Control",
        "Test Completion"
      ],
      correctIndex: 2,
      explanation: "Reallocating resources is part of test monitoring and control."
    }

  ]
};
