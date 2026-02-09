import { Chapter } from "../../types";

export const CHAPTER_1_FINAL_EXAM: Chapter = {
  id: "genai-1-exam",
  title: "Chapter 1 Final Mock Exam",
  description: "40 Questions • 60 Minutes",
  icon: "Award",
  questions: [
    {
      id: "q-1",
      code: "EX-1",
       
      text: "Which type of AI represents knowledge through explicit logical rules and symbols to mimic human decision-making?",
      options: [
        "Deep Learning",
        "Symbolic AI",
        "Classical Machine Learning",
        "Generative AI"
      ],
      correctIndex: 1,
      explanation:
        "Symbolic AI uses a rule-based system and represents knowledge using symbols and logical rules."
    },
    {
      id: "q-2",
      code: "EX-2",
       
      text: "A test team is using an AI model to predict potential software problems by training it on historical defect data and selecting specific features manually. Which branch of AI are they using?",
      options: [
        "Symbolic AI",
        "Generative AI",
        "Classical Machine Learning",
        "Expert Systems"
      ],
      correctIndex: 2,
      explanation:
        "Classical machine learning requires manual feature selection and training on historical data."
    },
    {
      id: "q-3",
      code: "EX-3",
       
      text: "What distinguishes Deep Learning from classical machine learning?",
      options: [
        "It relies on symbolic logic and human-written rules.",
        "It requires users to manually define all features before training.",
        "It uses neural networks to automatically learn features from large, complex datasets.",
        "It is only capable of processing structured numerical data."
      ],
      correctIndex: 2,
      explanation:
        "Deep learning uses neural networks to automatically learn features from complex datasets."
    },
    {
      id: "q-4",
      code: "EX-4",
       
      text: "Generative AI is primarily characterized by its ability to:",
      options: [
        "Filter data based on pre-defined static rules.",
        "Perform mathematical calculations faster than symbolic AI.",
        "Create new content by mimicking patterns from training data.",
        "Replace the need for any human involvement in test validation."
      ],
      correctIndex: 2,
      explanation:
        "Generative AI creates new content by learning and mimicking patterns from training data."
    },
    {
      id: "q-5",
      code: "EX-5",
       
      text: "In the context of software testing, what is a key advantage of using GenAI over traditional machine learning?",
      options: [
        "It is entirely deterministic and always produces the same output.",
        "It can be applied directly to test tasks without an additional training phase.",
        "It eliminates the risks of hallucinations and reasoning errors.",
        "It does not require a transformer architecture to process text."
      ],
      correctIndex: 1,
      explanation:
        "GenAI uses pre-trained models that can be applied directly to test tasks."
    },
    {
      id: "q-6",
      code: "EX-6",
       
      text: "What is the definition of Tokenization in Large Language Models?",
      options: [
        "Converting text into high-dimensional numerical vectors.",
        "Breaking down text into smaller units such as characters, sub-words, or words.",
        "Limiting the model's memory to maintain focus on the current task.",
        "Training a model on a specific organization’s private documentation."
      ],
      correctIndex: 1,
      explanation:
        "Tokenization breaks text into smaller units such as characters, sub-words, or words."
    },
    {
      id: "q-7",
      code: "EX-7",
       
      text: "Scenario: A tester inputs a 50-page log file into an LLM, but the model ignores the first 30 pages. This is likely due to the model's:",
      options: [
        "Temperature setting",
        "Context window",
        "Embedding dimension",
        "Tokenization speed"
      ],
      correctIndex: 1,
      explanation:
        "The context window limits how much prior text the model can consider."
    },
    {
      id: "q-8",
      code: "EX-8",
       
      text: "Which component is responsible for capturing the semantic, syntactic, and contextual relationships of tokens in a numerical format?",
      options: [
        "Transformer",
        "Tokenizer",
        "Embeddings",
        "Inference Engine"
      ],
      correctIndex: 2,
      explanation:
        "Embeddings encode semantic, syntactic, and contextual relationships numerically."
    },
    {
      id: "q-9",
      code: "EX-9",
       
      text: "Why are Large Language Models considered non-deterministic?",
      options: [
        "Because they use rule-based systems that change daily.",
        "Due to the probabilistic nature of their inference mechanisms.",
        "Because they are not based on neural network architectures.",
        "Because they require manual feature selection for every prompt."
      ],
      correctIndex: 1,
      explanation:
        "LLMs are probabilistic, which can lead to different outputs for the same input."
    },
    {
      id: "q-10",
      code: "EX-10",
       
      text: "What does the transformer model predict during the inference process?",
      options: [
        "The logical validity of a test case.",
        "The high-dimensional vector of the entire input.",
        "The next token in a sequence based on learned relationships.",
        "The exact temperature required for the output."
      ],
      correctIndex: 2,
      explanation:
        "Transformers predict the next token in a sequence."
    }
,
    {
      id: "q-11",
      code: "EX-11",
       
      text: "Scenario: A tester notices that an LLM provides three different answers to the same test analysis question. Which characteristic of LLMs explains this?",
      options: [
        "Large context windows",
        "Multimodal capabilities",
        "Non-deterministic behavior",
        "Use of symbolic logic"
      ],
      correctIndex: 2,
      explanation:
        "Non-deterministic behavior can lead to variations in outputs for the same input."
    },
    {
      id: "q-12",
      code: "EX-12",
       
      text: "In an LLM, a larger context window is beneficial because it:",
      options: [
        "Reduces the computational complexity and processing time.",
        "Allows the model to maintain coherence over longer passages of text.",
        "Makes the model's output 100% accurate and deterministic.",
        "Increases the randomness and creativity of the generated text."
      ],
      correctIndex: 1,
      explanation:
        "A larger context window allows coherence across longer text passages."
    },
    {
      id: "q-13",
      code: "EX-13",
       
      text: "What are Small Language Models (SLMs)?",
      options: [
        "Models that do not use the transformer architecture.",
        "Compact models with fewer parameters, designed for focused solutions.",
        "Models that can only process images and not text.",
        "Models used only for symbolic AI rule-breaking."
      ],
      correctIndex: 1,
      explanation:
        "SLMs are compact models optimized for focused, lightweight use cases."
    },
    {
      id: "q-14",
      code: "EX-14",
       
      text: "Scenario: When an LLM generates a response that is \"statistically plausible,\" what must a tester keep in mind?",
      options: [
        "The response is guaranteed to be correct if the prompt was structured.",
        "Plausible output is not necessarily factually correct.",
        "The output will be identical every time the prompt is run.",
        "The model has used symbolic logic to verify the truth of the statement."
      ],
      correctIndex: 1,
      explanation:
        "Statistical plausibility does not guarantee factual correctness."
    },
    {
      id: "q-15",
      code: "EX-15",
       
      text: "What is the role of proximity in the vector space of embeddings?",
      options: [
        "It represents how fast the tokenizer processes words.",
        "It indicates that tokens have similar meanings or contextual roles.",
        "It determines the physical distance between data centers.",
        "It limits the number of tokens the model can see at once."
      ],
      correctIndex: 1,
      explanation:
        "Tokens with similar meanings are closer together in embedding space."
    },
    {
      id: "q-16",
      code: "EX-16",
       
      text: "Which category of LLM is described as a general-purpose model trained on vast datasets that typically requires further adaptation?",
      options: [
        "Reasoning LLM",
        "Instruction-tuned LLM",
        "Foundation LLM",
        "Multimodal LLM"
      ],
      correctIndex: 2,
      explanation:
        "Foundation LLMs are general-purpose and require adaptation."
    },
    {
      id: "q-17",
      code: "EX-17",
       
      text: "How is an Instruction-tuned LLM developed from a Foundation LLM?",
      options: [
        "By removing all parameters related to code generation.",
        "By fine-tuning it with datasets that pair prompts with expected responses.",
        "By adding a rule-based symbolic AI layer to the top of the model.",
        "By reducing the context window to a single sentence."
      ],
      correctIndex: 1,
      explanation:
        "Instruction-tuned models are fine-tuned using prompt–response datasets."
    },
    {
      id: "q-18",
      code: "EX-18",
       
      text: "Scenario: You need an AI tool to help with multi-step problem solving and logical inference for a complex test strategy. Which model type is best?",
      options: [
        "Foundation LLM",
        "Reasoning LLM",
        "Base LLM",
        "Classical Machine Learning"
      ],
      correctIndex: 1,
      explanation:
        "Reasoning LLMs are optimized for multi-step reasoning."
    },
    {
      id: "q-19",
      code: "EX-19",
       
      text: "Instruction-tuned LLMs are specifically optimized for:",
      options: [
        "Predicting software problems using historical data features.",
        "Adhering to tasks and following human instructions effectively.",
        "Generating random tokens without regard for context.",
        "Only processing vision-based data like screenshots."
      ],
      correctIndex: 1,
      explanation:
        "Instruction tuning improves task adherence and instruction following."
    },
    {
      id: "q-20",
      code: "EX-20",
       
      text: "Which of the following is a synonym for a Foundation LLM?",
      options: [
        "Reasoning Model",
        "Base LLM",
        "Instruction Model",
        "SLM"
      ],
      correctIndex: 1,
      explanation:
        "Foundation LLMs are also referred to as Base LLMs."
    },
    {
      id: "q-21",
      code: "EX-21",
       
      text: "Scenario: A team is choosing between a reasoning LLM and an instruction-tuned LLM for simple test case generation. Why might they choose the instruction-tuned model?",
      options: [
        "It is better at logical inference for high-cognitive-load tasks.",
        "Simple tasks may not require the specialized reasoning training of a reasoning LLM.",
        "Instruction-tuned models are deterministic, while reasoning models are not.",
        "Reasoning models cannot process text prompts."
      ],
      correctIndex: 1,
      explanation:
        "Instruction-tuned models are sufficient for simpler tasks."
    },
    {
      id: "q-22",
      code: "EX-22",
       
      text: "What is the main focus of the \"tuning process\" for instruction-tuned models?",
      options: [
        "Increasing the size of the neural network layers.",
        "Optimizing for task adherence, instruction following, and response coherence.",
        "Eliminating the need for embeddings in the transformer.",
        "Training the model exclusively on image-text pairs."
      ],
      correctIndex: 1,
      explanation:
        "Instruction tuning optimizes adherence and response quality."
    },
    {
      id: "q-23",
      code: "EX-23",
       
      text: "Multimodal LLMs extend the traditional transformer model by:",
      options: [
        "Processing only one type of data modality at a time to save energy.",
        "Processing multiple data modalities including text, images, and audio.",
        "Replacing the transformer architecture with symbolic logic.",
        "Limiting the output to only code and no natural language."
      ],
      correctIndex: 1,
      explanation:
        "Multimodal LLMs handle multiple data types."
    },
    {
      id: "q-24",
      code: "EX-24",
       
      text: "Scenario: A tester wants to verify if a GUI screenshot matches the textual description in a User Story. Which model is most appropriate?",
      options: [
        "Foundation LLM (text-only)",
        "Vision-language model",
        "Symbolic AI system",
        "Small Language Model (SLM)"
      ],
      correctIndex: 1,
      explanation:
        "Vision-language models integrate text and visual input."
    },
    {
      id: "q-25",
      code: "EX-25",
       
      text: "How are images processed within a multimodal transformer model?",
      options: [
        "They are converted into logical rules for symbolic reasoning.",
        "They are converted into embeddings using vision-language models.",
        "They are treated as raw pixels without any tokenization.",
        "They are described by a human before being fed to the model."
      ],
      correctIndex: 1,
      explanation:
        "Images are transformed into embeddings before processing."
    },
    {
      id: "q-26",
      code: "EX-26",
       
      text: "Which of the following is a capability of a vision-language model in testing?",
      options: [
        "Automatically fixing bugs in the source code.",
        "Identifying discrepancies between expected results and visual elements on a screenshot.",
        "Predicting the exact energy consumption of a test run.",
        "Translating CO2 emissions into test cases."
      ],
      correctIndex: 1,
      explanation:
        "Vision-language models can compare visual output with expectations."
    },
    {
      id: "q-27",
      code: "EX-27",
       
      text: "Multimodal LLMs learn relationships between different data types by:",
      options: [
        "Training on large, diverse datasets containing various modalities.",
        "Using a separate, unconnected model for every modality.",
        "Relying on testers to manually label the relationship between every image and word.",
        "Reducing all inputs to a 1-bit binary signal."
      ],
      correctIndex: 0,
      explanation:
        "Training on diverse multimodal datasets enables cross-modal learning."
    },
    {
      id: "q-28",
      code: "EX-28",
       
      text: "In Requirements Analysis, how can an LLM assist a tester?",
      options: [
        "By physically meeting with stakeholders to negotiate budgets.",
        "By identifying ambiguities or missing information in the test basis.",
        "By executing the software on a mobile device to find crashes.",
        "By writing the legal contracts for project milestones."
      ],
      correctIndex: 1,
      explanation:
        "LLMs can analyze requirements and detect gaps."
    },
    {
      id: "q-29",
      code: "EX-29",
       
      text: "Scenario: A tester provides a system requirement to an LLM and asks for \"Expected Results\" for various scenarios. This is an example of:",
      options: [
        "Test Data Synthesis",
        "Test Oracle Generation",
        "Self-healing Test Scripts",
        "Defect Pattern Analysis"
      ],
      correctIndex: 1,
      explanation:
        "Generating expected results is test oracle generation."
    },
    {
      id: "q-30",
      code: "EX-30",
       
      text: "How can GenAI support Test Automation?",
      options: [
        "By physically installing servers in a data center.",
        "By generating test scripts from test case descriptions.",
        "By guaranteeing that every generated script is bug-free.",
        "By replacing the need for a test automation framework."
      ],
      correctIndex: 1,
      explanation:
        "GenAI can generate test scripts from descriptions."
    },
    {
      id: "q-31",
      code: "EX-31",
       
      text: "Which of the following is an example of using GenAI for Test Result Analysis?",
      options: [
        "Writing a user story from scratch.",
        "Classifying anomalies based on severity and priority.",
        "Generating synthetic payment data.",
        "Creating a GUI wireframe for a new feature."
      ],
      correctIndex: 1,
      explanation:
        "GenAI can classify test result anomalies."
    },
    {
      id: "q-32",
      code: "EX-32",
       
      text: "Scenario: You use an LLM to generate 1,000 credit card numbers that look real but are fake to be used in a staging environment. This is:",
      options: [
        "Test Oracle Generation",
        "Test Data Generation",
        "Requirements Analysis",
        "Test Monitoring"
      ],
      correctIndex: 1,
      explanation:
        "This is an example of test data generation."
    },
    {
      id: "q-33",
      code: "EX-33",
       
      text: "Which test activity involves using LLMs to suggest test objectives based on user stories?",
      options: [
        "Test Execution",
        "Test Case Creation Support",
        "Test Environment Setup",
        "Test Closure"
      ],
      correctIndex: 1,
      explanation:
        "LLMs can support test case creation."
    },
    {
      id: "q-34",
      code: "EX-34",
       
      text: "How does GenAI help keep testware updated?",
      options: [
        "It automatically deletes old files from the tester’s computer.",
        "It helps update test plans and reports as the project evolves.",
        "It provides hardware upgrades to the test laboratory.",
        "It prevents the developers from changing the code."
      ],
      correctIndex: 1,
      explanation:
        "GenAI can update test documentation as projects change."
    },
    {
      id: "q-35",
      code: "EX-35",
       
      text: "Which of the following can LLMs NOT currently do directly based on Chapter 1 capabilities?",
      options: [
        "Review acceptance criteria.",
        "Generate synthetic test data.",
        "Physically execute a test on hardware without an external tool.",
        "Analyze defect patterns."
      ],
      correctIndex: 2,
      explanation:
        "LLMs cannot physically execute tests on hardware."
    },
    {
      id: "q-36",
      code: "EX-36",
       
      text: "What is the primary characteristic of an AI Chatbot interaction model?",
      options: [
        "It requires complex API integration into existing frameworks.",
        "It provides a user-friendly, conversational natural language interface.",
        "It is designed only for high-scale automated tasks.",
        "It does not allow for iterative refinement of outputs."
      ],
      correctIndex: 1,
      explanation:
        "Chatbots offer conversational interaction."
    },
    {
      id: "q-37",
      code: "EX-37",
       
      text: "LLM-Powered Testing Applications differ from chatbots because they:",
      options: [
        "Are only used by non-technical stakeholders.",
        "Involve integration via APIs to perform well-defined, often automated tasks.",
        "Do not require prompt engineering to work effectively.",
        "Are primarily used for exploratory testing only."
      ],
      correctIndex: 1,
      explanation:
        "LLM-powered applications integrate via APIs."
    },
    {
      id: "q-38",
      code: "EX-38",
       
      text: "Scenario: An organization wants to automate the generation of defect reports within their existing Jira workflow. Which interaction model should they implement?",
      options: [
        "Standalone AI Chatbot",
        "LLM-Powered Testing Application integrated via API",
        "Manual symbolic logic rules",
        "A Foundation LLM with no prompt engineering"
      ],
      correctIndex: 1,
      explanation:
        "API-integrated LLM applications fit workflow automation."
    },
    {
      id: "q-39",
      code: "EX-39",
       
      text: "Why are AI Chatbots considered accessible to non-technical stakeholders?",
      options: [
        "They require knowledge of Python to generate output.",
        "Their intuitive interface uses natural language for commands.",
        "They only produce output in binary code.",
        "They automatically understand the company’s internal private network without prompts."
      ],
      correctIndex: 1,
      explanation:
        "Natural language interfaces make chatbots accessible."
    },
    {
      id: "q-40",
      code: "EX-40",
       
      text: "Successful implementation of GenAI in testing, whether via chatbot or application, essentialy requires:",
      options: [
        "Replacing all human testers with AI agents.",
        "Strong prompt engineering to ensure accurate and relevant results.",
        "Using models that do not have context windows.",
        "Training a new foundation model from scratch for every test task."
      ],
      correctIndex: 1,
      explanation:
        "Strong prompt engineering is essential for success."
    }

  ]
};
