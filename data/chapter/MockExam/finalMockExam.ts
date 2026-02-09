import { Chapter } from "../types";

export const FINAL_EXAM: Chapter = {
  id: "GenAI-Mock-exam",
  title: "Mock Exam on All Chapters",
  description: "40 Questions • 60 Minutes • Mock Exam on GenAI Certificate",
  icon: "Network",
  questions: [
    {
      id: "q-1",
      code: "EX-1-1",
      text: "Which branch of AI uses a rule-based system to represent knowledge using symbols and logical rules to mimic human decision-making?",
      options: [
        "Deep learning",
        "Symbolic AI",
        "Generative AI",
        "Classical machine learning",
      ],
      correctIndex: 1,
      explanation:
        "Symbolic AI uses rules and symbols to mimic human decision-making.",
    },
    {
      id: "q-2",
      code: "EX-1-2",
      text: "What is the process of breaking down text into smaller units to allow a model to process language effectively?",
      options: ["Embedding", "Parameterization", "Tokenization", "Inference"],
      correctIndex: 2,
      explanation:
        "Tokenization breaks text into smaller units (tokens) for processing.",
    },
    {
      id: "q-3",
      code: "EX-1-3",
      text: "A test manager needs an LLM to handle high-cognitive-load technical tasks requiring logical inference and multi-step reasoning. Which category of LLM is most appropriate?",
      options: [
        "Foundation LLM",
        "Instruction-tuned LLM",
        "Reasoning LLM",
        "Base LLM",
      ],
      correctIndex: 2,
      explanation:
        "Reasoning LLMs emphasize structured cognitive abilities and logical inference.",
    },
    {
      id: "q-4",
      code: "EX-1-4",
      text: "How can vision-language models specifically support software testing activities?",
      options: [
        "By automatically fixing defects in source code",
        "By identifying discrepancies between textual requirements and visual screenshots",
        "By reducing the energy consumption of the transformer model",
        "By providing fully deterministic test scripts",
      ],
      correctIndex: 1,
      explanation:
        "Vision-language models allow testers to identify discrepancies between actual visual elements and expected results.",
    },
    {
      id: "q-5",
      code: "EX-1-5",
      text: "In the 6-component structure of a prompt, which component defines the perspective or persona the model should adopt?",
      options: ["Context", "Instruction", "Role", "Constraints"],
      correctIndex: 2,
      explanation: "Role defines the perspective or persona the model takes.",
    },
    {
      id: "q-6",
      code: "EX-1-6",
      text: "You instruct an LLM not to use real customer names or sensitive IDs in generated test cases. Which prompt component is this?",
      options: ["Input data", "Constraints", "Output format", "Persona"],
      correctIndex: 1,
      explanation:
        "Constraints outline restrictions or special considerations for the task.",
    },
    {
      id: "q-7",
      code: "EX-1-7",
      text: "Which prompting technique breaks a complex task into a sequence of steps where each response informs the next prompt?",
      options: [
        "Zero-shot prompting",
        "Meta prompting",
        "Prompt chaining",
        "Few-shot prompting",
      ],
      correctIndex: 2,
      explanation:
        "Prompt chaining involves a series of steps where results inform the next prompt.",
    },
    {
      id: "q-8",
      code: "EX-1-8",
      text: "Providing an LLM with multiple high-quality bug report examples to guide output format is an example of:",
      options: [
        "One-shot prompting",
        "Few-shot prompting",
        "Zero-shot prompting",
        "Meta prompting",
      ],
      correctIndex: 1,
      explanation:
        "Few-shot prompts contain more than one example to guide behavior.",
    },
    {
      id: "q-9",
      code: "EX-1-9",
      text: "What is a primary advantage of using meta prompting in a test organization?",
      options: [
        "It eliminates the need for human verification",
        "It enables collaboration with the LLM to refine prompts",
        "It makes the model deterministic",
        "It reduces context window usage",
      ],
      correctIndex: 1,
      explanation:
        "Meta prompting allows the tester to collaborate with the LLM to co-create or optimize prompts.",
    },
    {
      id: "q-10",
      code: "EX-1-10",
      text: "Which statement correctly distinguishes system prompts from user prompts?",
      options: [
        "User prompts are hidden while system prompts are visible",
        "System prompts define overall rules; user prompts define specific tasks",
        "System prompts change every interaction",
        "User prompts define personality while system prompts provide data",
      ],
      correctIndex: 1,
      explanation:
        "System prompts guide overall behavior; user prompts are specific queries.",
    },
    {
      id: "q-11",
      code: "EX-1-11",
      text: "Using an LLM to flag contradictions between user stories during analysis is categorized as:",
      options: [
        "Test design",
        "Identifying defects in the test basis",
        "Test execution",
        "Test data synthesis",
      ],
      correctIndex: 1,
      explanation:
        "GenAI supports analysis by identifying defects (inconsistencies/ambiguities) in the test basis.",
    },
    {
      id: "q-12",
      code: "EX-1-12",
      text: "To help an LLM prioritize test conditions, what information is most essential?",
      options: [
        "Gherkin syntax rules",
        "Risk likelihood and impact",
        "Token count of the requirement",
        "Developer name",
      ],
      correctIndex: 1,
      explanation:
        "Risk likelihood and impact are used by LLMs to recommend priority levels.",
    },
    {
      id: "q-13",
      code: "EX-1-13",
      text: "Why is a multimodal approach useful when generating acceptance criteria from a wireframe and user story?",
      options: [
        "It identifies discrepancies between visual and textual requirements",
        "It reduces computational complexity",
        "It ensures SQL compatibility",
        "It bypasses embeddings",
      ],
      correctIndex: 0,
      explanation:
        "Multimodal input (image + text) identifies discrepancies between wireframes and user stories.",
    },
    {
      id: "q-14",
      code: "EX-1-14",
      text: "How does GenAI support test implementation regarding privacy?",
      options: [
        "By encrypting production databases",
        "By synthesizing privacy-preserving test data",
        "By deleting sensitive data automatically",
        "By replacing GDPR compliance",
      ],
      correctIndex: 1,
      explanation:
        "GenAI can synthesize data-privacy-preserving synthetic test data.",
    },
    {
      id: "q-15",
      code: "EX-1-15",
      text: "Providing multiple 'User Story → Gherkin' examples to an LLM is which prompting technique?",
      options: [
        "Few-shot prompting",
        "Zero-shot prompting",
        "Meta prompting",
        "Context windowing",
      ],
      correctIndex: 0,
      explanation:
        "Few-shot prompting uses examples (n examples) to model desired output like Gherkin scenarios.",
    },
    {
      id: "q-16",
      code: "EX-1-16",
      text: "Using an LLM to update failing automation scripts after UI locator changes is called:",
      options: [
        "Impact analysis",
        "Self-healing tests",
        "Test data synthesis",
        "Test oracle generation",
      ],
      correctIndex: 1,
      explanation:
        "Self-healing refers to automatically adjusting scripts to handle UI/locator changes.",
    },
    {
      id: "q-17",
      code: "EX-1-17",
      text: "Which regression activity uses GenAI to identify high-risk areas from recent commits?",
      options: [
        "Keyword-driven automation",
        "Impact analysis and test optimization",
        "Automated test reporting",
        "Root cause analysis",
      ],
      correctIndex: 1,
      explanation:
        "GenAI performs impact analysis on code changes to focus regression efforts.",
    },
    {
      id: "q-18",
      code: "EX-1-18",
      text: "Summarizing logs into dashboards showing test progress and defect trends is an example of:",
      options: [
        "Test analysis",
        "Test monitoring",
        "Test execution",
        "Test closure",
      ],
      correctIndex: 1,
      explanation:
        "Test monitoring involves retrieving and synthesizing data into metrics and trends.",
    },
    {
      id: "q-19",
      code: "EX-1-19",
      text: "For complex test tasks requiring high precision and manual verification at each stage, which technique is recommended?",
      options: [
        "Prompt chaining",
        "Few-shot prompting",
        "Zero-shot prompting",
        "Meta prompting",
      ],
      correctIndex: 0,
      explanation:
        "Prompt chaining is best for complex tasks requiring step-by-step human verification.",
    },
    {
      id: "q-20",
      code: "EX-1-20",
      text: "Which evaluation metric measures coverage of all relevant instances such as equivalence partitions?",
      options: ["Precision", "Recall", "Accuracy", "Diversity"],
      correctIndex: 1,
      explanation:
        "Recall measures identifying all relevant instances (e.g., partitions).",
    },
    {
      id: "q-21",
      code: "EX-1-21",
      text: "If 45 out of 50 generated test scripts run without errors, which metric is measured?",
      options: [
        "Accuracy",
        "Time efficiency",
        "Execution success rate",
        "Contextual fit",
      ],
      correctIndex: 2,
      explanation:
        "Execution Success Rate measures the proportion of scripts that execute without syntax/format errors.",
    },
    {
      id: "q-22",
      code: "EX-1-22",
      text: "Creating multiple prompt versions and comparing results using metrics is called:",
      options: [
        "Iterative prompt modification",
        "A/B testing of prompts",
        "Output analysis",
        "User feedback integration",
      ],
      correctIndex: 1,
      explanation:
        "A/B testing evaluates multiple prompt versions against metrics.",
    },
    {
      id: "q-23",
      code: "EX-1-23",
      text: "When an LLM produces factually incorrect or irrelevant output, this is known as:",
      options: ["Reasoning error", "Bias", "Hallucination", "Non-determinism"],
      correctIndex: 2,
      explanation:
        "Hallucinations are factually incorrect or irrelevant outputs.",
    },
    {
      id: "q-24",
      code: "EX-1-24",
      text: "An LLM suggesting an impossible test schedule violates task dependencies. This is:",
      options: [
        "A hallucination",
        "A reasoning error",
        "A security vulnerability",
        "A data exfiltration attack",
      ],
      correctIndex: 1,
      explanation:
        "Reasoning errors occur when LLMs misinterpret logical structures or step-by-step processes.",
    },
    {
      id: "q-25",
      code: "EX-1-25",
      text: "Generating personas limited to one geographic culture indicates:",
      options: [
        "A reasoning error",
        "Bias from training data",
        "A hallucination",
        "Non-determinism",
      ],
      correctIndex: 1,
      explanation:
        "Biases come from training data and lead to favoring certain information or underrepresenting others.",
    },
    {
      id: "q-26",
      code: "EX-1-26",
      text: "Which mitigation strategy improves reproducibility across LLM interactions?",
      options: [
        "Increasing temperature",
        "Setting random seeds",
        "Few-shot prompting",
        "Reducing context window",
      ],
      correctIndex: 1,
      explanation:
        "Setting random seeds improves reproducibility by ensuring consistent pseudo-random sequences.",
    },
    {
      id: "q-27",
      code: "EX-1-27",
      text: "Sending excessively long prompts to expose training data is an example of:",
      options: [
        "Request manipulation",
        "Data poisoning",
        "Data exfiltration",
        "Malicious code generation",
      ],
      correctIndex: 2,
      explanation:
        "Data exfiltration can occur by overloading the context window to reveal training data snippets.",
    },
    {
      id: "q-28",
      code: "EX-1-28",
      text: "Providing fake evaluations to influence future AI behavior is:",
      options: [
        "Data poisoning",
        "Request manipulation",
        "Data exfiltration",
        "Compliance risk",
      ],
      correctIndex: 0,
      explanation:
        "Data poisoning includes providing fake evaluations to manipulate model behavior.",
    },
    {
      id: "q-29",
      code: "EX-1-29",
      text: "Masking or replacing sensitive data with non-identifiable values is:",
      options: [
        "Data minimization",
        "Data anonymization",
        "Secure data storage",
        "Systematic review",
      ],
      correctIndex: 1,
      explanation:
        "Data anonymization involves masking or replacing sensitive info with non-identifiable data.",
    },
    {
      id: "q-30",
      code: "EX-1-30",
      text: "Generating a single AI image consumes energy comparable to:",
      options: [
        "Sending one text message",
        "Fully charging a smartphone",
        "Powering a laptop for a month",
        "A keyword search",
      ],
      correctIndex: 1,
      explanation:
        "Generating a single image can consume as much energy as fully charging a smartphone.",
    },
    {
      id: "q-31",
      code: "EX-1-31",
      text: "Which component handles authentication, prompt preparation, and LLM interaction?",
      options: [
        "Front-end",
        "Back-end",
        "Vector database",
        "Transformer layer",
      ],
      correctIndex: 1,
      explanation:
        "The back-end manages functions like authentication, prompt prep, and LLM interaction.",
    },
    {
      id: "q-32",
      code: "EX-1-32",
      text: "Why are documents chunked in RAG systems?",
      options: [
        "To increase randomness",
        "To ensure focused retrieval and context window compatibility",
        "To bypass tokenization",
        "To encrypt data",
      ],
      correctIndex: 1,
      explanation:
        "Chunking ensures focused retrieval and compatibility with the context window.",
    },
    {
      id: "q-33",
      code: "EX-1-33",
      text: "What is a grounded response in RAG?",
      options: [
        "A response limited to 100 tokens",
        "A response based on retrieved relevant data",
        "A manually verified response",
        "A temperature-zero response",
      ],
      correctIndex: 1,
      explanation:
        "Grounded responses are rooted in information gathered during the retrieval process.",
    },
    {
      id: "q-34",
      code: "EX-1-34",
      text: "How do LLM-powered agents differ from basic chatbots?",
      options: [
        "They cannot use natural language",
        "They can invoke tools or external systems",
        "They lack context windows",
        "They are deterministic",
      ],
      correctIndex: 1,
      explanation:
        'Agents can invoke "tools" (predefined functions) to manipulate external systems.',
    },
    {
      id: "q-35",
      code: "EX-1-35",
      text: "Why fine-tune a Small Language Model (SLM)?",
      options: [
        "SLMs have more parameters",
        "High task-specific performance with lower cost",
        "SLMs cannot hallucinate",
        "No training data is required",
      ],
      correctIndex: 1,
      explanation:
        "Fine-tuning an SLM achieves high performance without high computational overhead.",
    },
    {
      id: "q-36",
      code: "EX-1-36",
      text: "Practices for deploying and monitoring LLMs in production are called:",
      options: ["DevOps", "LLMOps", "PromptOps", "TestOps"],
      correctIndex: 1,
      explanation:
        "LLMOps streamlines deployment, monitoring, and maintenance of LLMs.",
    },
    {
      id: "q-37",
      code: "EX-1-37",
      text: "Using unapproved GenAI tools with company data is known as:",
      options: [
        "Deep learning",
        "Shadow AI",
        "Meta prompting",
        "Prompt engineering",
      ],
      correctIndex: 1,
      explanation:
        "Shadow AI is the use of tools without formal approval or oversight.",
    },
    {
      id: "q-38",
      code: "EX-1-38",
      text: "Why is data quality critical for Generative AI success?",
      options: [
        "It lowers licensing costs",
        "Trustworthy results depend on accurate data",
        "It removes context window limits",
        "It eliminates test managers",
      ],
      correctIndex: 1,
      explanation:
        "Trustworthy results depend on accurate, relevant input data.",
    },
    {
      id: "q-39",
      code: "EX-1-39",
      text: "Which AI adoption phase focuses on awareness, training, and experimentation?",
      options: [
        "Discovery",
        "Initiation and usage definition",
        "Utilization and iteration",
        "Retirement",
      ],
      correctIndex: 0,
      explanation:
        "Discovery focuses on awareness, capability building, and experimentation.",
    },
    {
      id: "q-40",
      code: "EX-1-40",
      text: "How does a traditional tester’s role evolve in an AI-enabled organization?",
      options: [
        "They become redundant",
        "They become AI-assisted specialists",
        "They become hardware engineers",
        "They focus on data entry",
      ],
      correctIndex: 1,
      explanation:
        "Testers evolve into AI-assisted specialists who guide and verify AI-generated testware.",
    },
  ],
};
