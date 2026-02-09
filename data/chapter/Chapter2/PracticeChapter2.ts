import { Chapter } from "../types";

export const CHAPTER_2_PRACTICE: Chapter = {
  id: "genai-2",
  title: "Prompt Engineering for Effective Software Testing",
  description: "Structured prompting techniques and practical GenAI applications in software testing",
  icon: "MessageSquareText",
  questions: [

    // =========================
    // GenAI-2.1.1 (K2)
    // =========================
    {
      id: "q-1",
      code: "2.1.1.1",
      kLevel: "K2",
      text: "When constructing a structured prompt, which component is responsible for defining the perspective or persona the model should adopt, such as a \"test automation engineer\"?",
      options: [
        "Context",
        "Role",
        "Constraints",
        "Output format"
      ],
      correctIndex: 1,
      explanation:
        "The role defines the perspective or persona that the GenAI model should take when generating a response, such as acting as a tester, test manager, or test automation engineer."
    },
    {
      id: "q-2",
      code: "2.1.1.2",
      kLevel: "K2",
      text: "A tester includes a requirement that the LLM \"must not use any personal data in the response.\" Which component of a structured prompt does this represent?",
      options: [
        "Instruction",
        "Input data",
        "Constraints",
        "Context"
      ],
      correctIndex: 2,
      explanation:
        "Constraints outline any restrictions or special considerations that the LLM should adhere to."
    },
    {
      id: "q-3",
      code: "2.1.1.3",
      kLevel: "K2",
      text: "Which component of a structured prompt provides the background information about the test object and specific functionality needed to determine test conditions?",
      options: [
        "Role",
        "Context",
        "Instruction",
        "Output format"
      ],
      correctIndex: 1,
      explanation:
        "Context provides the background information that the GenAI model needs to determine the test conditions."
    },

    // =========================
    // GenAI-2.1.2 (K2)
    // =========================
    {
      id: "q-4",
      code: "2.1.2.1",
      kLevel: "K2",
      text: "Which technique involves breaking a complex task into a sequence of intermediate steps, where each response informs the next prompt?",
      options: [
        "Few-shot prompting",
        "Zero-shot prompting",
        "Prompt chaining",
        "Meta prompting"
      ],
      correctIndex: 2,
      explanation:
        "Prompt chaining involves breaking a task into a series of intermediate steps, where each response informs the next prompt."
    },
    {
      id: "q-5",
      code: "2.1.2.2",
      kLevel: "K2",
      text: "How does few-shot prompting differ from zero-shot prompting?",
      options: [
        "It requires the use of a system prompt to define the role.",
        "It provides the LLM with specific examples to demonstrate the desired outcome.",
        "It allows the model to refine its own instructions automatically.",
        "It involves using multiple LLMs to compare results."
      ],
      correctIndex: 1,
      explanation:
        "Few-shot prompting provides the LLM with specific examples to demonstrate the desired outcome, unlike zero-shot prompting."
    },
    {
      id: "q-6",
      code: "2.1.2.3",
      kLevel: "K2",
      text: "Which technique is most beneficial when a tester is unsure how to craft an effective prompt and wants to collaborate with the LLM to co-create it?",
      options: [
        "Prompt chaining",
        "Meta prompting",
        "One-shot prompting",
        "Structured prompting"
      ],
      correctIndex: 1,
      explanation:
        "Meta prompting allows testers to collaborate with the LLM to co-create effective prompts."
    },

    // =========================
    // GenAI-2.1.3 (K2)
    // =========================
    {
      id: "q-7",
      code: "2.1.3.1",
      kLevel: "K2",
      text: "What is a primary characteristic of a system prompt?",
      options: [
        "It is directly visible and editable by the chatbot user in most interfaces.",
        "It changes with every interaction to provide specific instructions.",
        "It guides the overall behavior and operational parameters for the entire conversation.",
        "It is used to provide the primary input data, such as a user story."
      ],
      correctIndex: 2,
      explanation:
        "The system prompt guides the overall behavior and operational parameters for the entire conversation."
    },
    {
      id: "q-8",
      code: "2.1.3.2",
      kLevel: "K2",
      text: "In a typical interaction, which prompt contains the actual input or question the user wants addressed at a specific moment?",
      options: [
        "System prompt",
        "Meta prompt",
        "User prompt",
        "Chain prompt"
      ],
      correctIndex: 2,
      explanation:
        "The user prompt represents the actual input or question from the chatbot user."
    },
    {
      id: "q-9",
      code: "2.1.3.3",
      kLevel: "K2",
      text: "How do the system prompt and user prompt work together during inference?",
      options: [
        "The LLM ignores the system prompt once the user prompt is provided.",
        "The user prompt overwrites the constraints set in the system prompt.",
        "The LLM generates responses by considering both prompts together.",
        "The system prompt is only used if the user prompt is empty."
      ],
      correctIndex: 2,
      explanation:
        "The LLM generates responses by considering both the system prompt and the user prompt together."
    },

    // =========================
    // GenAI-2.2.1 (K3)
    // =========================
    {
      id: "q-10",
      code: "2.2.1.1",
      kLevel: "K3",
      text: "Scenario: You are tasked with using an LLM to identify ambiguities in a new set of requirements. Which of the following is the most effective application of prompt chaining for this task?",
      options: [
        "Provide all requirements at once and ask for a complete test plan.",
        "First ask the LLM to identify ambiguities, then evaluate testability, and finally refine the acceptance criteria based on previous outputs.",
        "Use a single prompt with five examples of high-quality requirements.",
        "Ask the LLM to generate a meta-prompt that creates test cases directly from the requirements."
      ],
      correctIndex: 1,
      explanation:
        "This approach encourages a step-by-step analysis where each output informs the next step."
    },
    {
      id: "q-11",
      code: "2.2.1.2",
      kLevel: "K3",
      text: "Scenario: A project has limited time for testing. You need the LLM to help prioritize test conditions. What is the best way to apply GenAI principles to achieve this?",
      options: [
        "Ask the LLM to list all test conditions alphabetically.",
        "Provide the LLM with risk likelihood and impact data for each condition to recommend priority levels.",
        "Instruct the LLM to generate as many test cases as possible regardless of priority.",
        "Use few-shot prompting to show the LLM how to categorize defects by age."
      ],
      correctIndex: 1,
      explanation:
        "Providing risk likelihood and impact enables the LLM to prioritize effectively."
    },
    {
      id: "q-12",
      code: "2.2.1.3",
      kLevel: "K3",
      text: "Scenario: You have a GUI wireframe image and a related user story. How should you apply multimodal prompting to ensure high-quality test analysis?",
      options: [
        "Convert the image to text manually and feed it to a text-only LLM.",
        "Provide both the image and the user story in a structured prompt to generate complete acceptance criteria.",
        "Only provide the image to the LLM to see if it can guess the business rules.",
        "Use prompt chaining to first describe the image and then use the description for a different LLM."
      ],
      correctIndex: 1,
      explanation:
        "Combining both textual and visual inputs enables higher-quality test analysis."
    },

    // =========================
    // GenAI-2.2.2 (K3)
    // =========================
    {
      id: "q-13",
      code: "2.2.2.1",
      kLevel: "K3",
      text: "Scenario: You need to generate Gherkin-style test cases for a complex feature. Which application of prompting is most likely to produce consistent results?",
      options: [
        "Zero-shot prompting with a very long system prompt.",
        "Few-shot prompting by selecting several examples of user stories paired with their Gherkin scenarios.",
        "Meta prompting to ask the LLM why Gherkin is useful.",
        "Prompt chaining to translate the user story into French and then back to Gherkin."
      ],
      correctIndex: 1,
      explanation:
        "Few-shot prompting provides clear examples that guide consistent output generation."
    },
    {
      id: "q-14",
      code: "2.2.2.2",
      kLevel: "K3",
      text: "Scenario: Your test data must resemble production data but cannot expose sensitive information. How should you use GenAI for this?",
      options: [
        "Input production data directly into a public AI chatbot.",
        "Prompt the LLM to synthesize data-privacy-preserving synthetic test data that covers varied conditions.",
        "Use a reasoning LLM to encrypt the production database.",
        "Ask the LLM to generate random numbers without any context."
      ],
      correctIndex: 1,
      explanation:
        "GenAI can generate synthetic test data that preserves privacy while remaining realistic."
    },
    {
      id: "q-15",
      code: "2.2.2.3",
      kLevel: "K3",
      text: "Scenario: You have 500 test cases and need to optimize the execution schedule. How should you apply GenAI for this task?",
      options: [
        "Ask the LLM to delete 50% of the tests randomly.",
        "Provide the test cases and their interdependencies to the LLM to optimize the schedule based on priority and risks.",
        "Use meta prompting to create a prompt that generates a random execution order.",
        "Instruct the LLM to run all tests simultaneously without checking for dependencies."
      ],
      correctIndex: 1,
      explanation:
        "GenAI can analyze dependencies and risks to optimize execution schedules."
    },

    // =========================
    // GenAI-2.2.3 (K3)
    // =========================
    {
      id: "q-16",
      code: "2.2.3.1",
      kLevel: "K3",
      text: "Scenario: A minor UI change has caused 20% of your automated scripts to fail due to dynamic locator changes. How can GenAI support a \"self-healing\" approach?",
      options: [
        "By automatically deleting the failing locators from the repository.",
        "By using the LLM to analyze the change and adjust test scripts to handle the new locators.",
        "By generating a report that blames the developers for the UI change.",
        "By rewriting the entire automation framework from scratch."
      ],
      correctIndex: 1,
      explanation:
        "GenAI can adapt test scripts to handle minor UI changes automatically."
    },
    {
      id: "q-17",
      code: "2.2.3.2",
      kLevel: "K3",
      text: "Scenario: You are implementing a keyword-driven framework. How should you apply few-shot prompting to support script creation?",
      options: [
        "Give the LLM one example of a keyword and ask it to write a novel.",
        "Provide a library of keywords and examples of how they map to test steps to generate initial test scripts.",
        "Use a system prompt to tell the LLM it is a manual tester.",
        "Ask the LLM to invent its own keywords without a library."
      ],
      correctIndex: 1,
      explanation:
        "Few-shot prompting with keyword examples enables effective script generation."
    },
    {
      id: "q-18",
      code: "2.2.3.3",
      kLevel: "K3",
      text: "Scenario: You need to identify which areas are most affected by a recent code commit to focus your regression efforts. How can GenAI assist?",
      options: [
        "By executing all tests and seeing what fails.",
        "By performing impact analysis on code changes to identify high-risk areas for targeted testing.",
        "By generating a random list of files to check.",
        "By predicting the next developer's name."
      ],
      correctIndex: 1,
      explanation:
        "GenAI can analyze code changes to identify high-risk areas for regression testing."
    },

    // =========================
    // GenAI-2.2.4 (K3)
    // =========================
    {
      id: "q-19",
      code: "2.2.4.1",
      kLevel: "K3",
      text: "Scenario: You have a large volume of unstructured test logs. How should you apply GenAI for test monitoring?",
      options: [
        "Manually read every log and ignore the LLM.",
        "Use an LLM to process and synthesize the data into key metrics like test progress and defect trends.",
        "Use a vision-language model to look at the log file's icon.",
        "Ask the LLM to delete the logs to save space."
      ],
      correctIndex: 1,
      explanation:
        "LLMs can process large volumes of unstructured data to generate meaningful metrics."
    },
    {
      id: "q-20",
      code: "2.2.4.2",
      kLevel: "K3",
      text: "Scenario: A project is behind schedule. How can GenAI support test control?",
      options: [
        "By providing insights for reprioritizing tests and reallocating resources based on current progress data.",
        "By automatically generating a resignation letter for the test manager.",
        "By telling the developers to work faster using a formal tone.",
        "By generating 1,000 irrelevant test cases to show \"progress.\""
      ],
      correctIndex: 0,
      explanation:
        "GenAI can assist test control by providing insights for reprioritization and resource allocation."
    },
    {
      id: "q-21",
      code: "2.2.4.3",
      kLevel: "K3",
      text: "Scenario: You need to present test progress to non-technical stakeholders. How should you use GenAI?",
      options: [
        "Give them the raw JSON output from the test runner.",
        "Use GenAI to create dynamic dashboards and natural language summaries of test metrics.",
        "Use few-shot prompting to teach the stakeholders how to write code.",
        "Ask the LLM to generate a fictional story about a successful test."
      ],
      correctIndex: 1,
      explanation:
        "GenAI can create understandable summaries and dashboards for non-technical stakeholders."
    },

    // =========================
    // GenAI-2.2.5 (K3)
    // =========================
    {
      id: "q-22",
      code: "2.2.5.1",
      kLevel: "K3",
      text: "Scenario: You need to generate a series of highly accurate test scripts where each step must be verified before the next is created. Which technique should you select?",
      options: [
        "Zero-shot prompting",
        "Few-shot prompting",
        "Prompt chaining",
        "Meta prompting"
      ],
      correctIndex: 2,
      explanation:
        "Prompt chaining supports step-by-step verification for high-accuracy tasks."
    },
    {
      id: "q-23",
      code: "2.2.5.2",
      kLevel: "K3",
      text: "Scenario: You want to generate 100 bug reports that follow a very specific company-standard template. Which technique is most appropriate?",
      options: [
        "Prompt chaining",
        "Few-shot prompting",
        "Meta prompting",
        "Zero-shot prompting"
      ],
      correctIndex: 1,
      explanation:
        "Few-shot prompting is effective for repetitive tasks with strict formatting."
    },
    {
      id: "q-24",
      code: "2.2.5.3",
      kLevel: "K3",
      text: "Scenario: You are facing a completely new test task and are unsure how to structure the instructions. Which technique should you use to start?",
      options: [
        "Prompt chaining",
        "Few-shot prompting",
        "Meta prompting",
        "One-shot prompting"
      ],
      correctIndex: 2,
      explanation:
        "Meta prompting helps in crafting effective prompts for new tasks."
    },

    // =========================
    // GenAI-2.3.1 (K2)
    // =========================
    {
      id: "q-25",
      code: "2.3.1.1",
      kLevel: "K2",
      text: "Which metric evaluates the degree to which generated test cases correctly identify anomalies?",
      options: [
        "Accuracy",
        "Precision",
        "Recall",
        "Diversity"
      ],
      correctIndex: 1,
      explanation:
        "Precision evaluates the correctness of identified anomalies."
    },
    {
      id: "q-26",
      code: "2.3.1.2",
      kLevel: "K2",
      text: "A tester wants to know if the generated scripts actually run without syntax errors in the test environment. Which metric should they use?",
      options: [
        "Relevance and Contextual Fit",
        "Time Efficiency",
        "Execution Success Rate",
        "Diversity"
      ],
      correctIndex: 2,
      explanation:
        "Execution Success Rate measures whether scripts run successfully without errors."
    },
    {
      id: "q-27",
      code: "2.3.1.3",
      kLevel: "K2",
      text: "What does the Recall metric measure in the context of GenAI for software testing?",
      options: [
        "The time saved compared to manual efforts.",
        "The ability of the model to identify all relevant instances.",
        "The correctness of the output against expert-written standards.",
        "The range of user behaviors and edge cases covered."
      ],
      correctIndex: 1,
      explanation:
        "Recall measures the ability to identify all relevant instances."
    },

    // =========================
    // GenAI-2.3.2 (K2)
    // =========================
    {
      id: "q-28",
      code: "2.3.2.1",
      kLevel: "K2",
      text: "What is the purpose of A/B testing of prompts?",
      options: [
        "To determine if a tester or an AI is better at writing code.",
        "To create multiple versions of prompts and evaluate which phrasing produces better results.",
        "To test the LLM's ability to alphabetize a list of bugs.",
        "To ensure that the LLM's temperature is set to the maximum value."
      ],
      correctIndex: 1,
      explanation:
        "A/B testing evaluates which prompt phrasing or structure produces better results."
    },
    {
      id: "q-29",
      code: "2.3.2.2",
      kLevel: "K2",
      text: "Which refinement technique involves examining AI output for inaccuracies or inconsistencies to adjust the prompt for future iterations?",
      options: [
        "Iterative prompt modification",
        "Output analysis",
        "User feedback integration",
        "Prompt length adjustment"
      ],
      correctIndex: 1,
      explanation:
        "Output analysis examines AI-generated output to refine prompts."
    },
    {
      id: "q-30",
      code: "2.3.2.3",
      kLevel: "K2",
      text: "When should a tester consider adjusting the prompt length and specificity?",
      options: [
        "Only when the LLM refuses to answer.",
        "To see if adding more context improves quality or if shorter prompts yield better generalization.",
        "When they want to increase the cost of the API call.",
        "To bypass the model's context window limits."
      ],
      correctIndex: 1,
      explanation:
        "Adjusting prompt length helps balance context richness and generalization."
    }

  ]
};
