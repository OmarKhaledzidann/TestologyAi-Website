import { Chapter } from "../types";

export const CHAPTER_1_PRACTICE: Chapter = {
  id: "genai-1",
  title: "Introduction to Generative AI for Software Testing",
  description: "Fundamentals of Generative AI, LLMs, and their applications in testing",
  icon: "BrainCircuit",
  questions: [

    // =========================
    // GenAI-1.1.1 (K1)
    // =========================
    {
      id: "q-1",
      code: "1.1.1.1",
      kLevel: "K1",
      text: "Which type of AI represents knowledge using logical rules and symbols to mimic human decision-making?",
      options: [
        "Classical machine learning",
        "Deep learning",
        "Symbolic AI",
        "Generative AI"
      ],
      correctIndex: 2,
      explanation:
        "Symbolic AI uses a rule-based system to mimic human decision-making. Essentially, symbolic AI represents knowledge using symbols and logical rules"
    },
    {
      id: "q-2",
      code: "1.1.1.2",
      kLevel: "K1",
      text: "Which branch of AI uses large, pre-trained models to create new, human-like output such as code or images?",
      options: [
        "Symbolic AI",
        "Generative AI",
        "Classical machine learning",
        "Linear regression"
      ],
      correctIndex: 1,
      explanation:
        "Generative AI uses deep learning techniques to create new content (text, images, code) by learning and mimicking patterns from its training data"
    },
    {
      id: "q-3",
      code: "1.1.1.3",
      kLevel: "K1",
      text: "Which AI technology utilizes neural networks to automatically learn features from complex datasets like video or audio without manual feature definition?",
      options: [
        "Symbolic AI",
        "Classical machine learning",
        "Deep learning",
        "Expert systems"
      ],
      correctIndex: 2,
      explanation:
        "Deep learning uses machine learning structures called neural networks to automatically learn features from data without the need for users to manually define features"
    },

    // =========================
    // GenAI-1.1.2 (K2)
    // =========================
    {
      id: "q-4",
      code: "1.1.2.1",
      kLevel: "K2",
      text: "What is the primary purpose of tokenization in the context of Large Language Models?",
      options: [
        "To provide a high-dimensional vector space for semantic meaning",
        "To break down text into smaller units, like characters or words, for processing",
        "To limit the amount of information the model considers at once to maintain relevance",
        "To ensure the model remains deterministic during inference"
      ],
      correctIndex: 1,
      explanation:
        "Tokenization in language models is the process of breaking down text into smaller units called tokens. Tokens can be as small as a character or as large as a sub-word or word"
    },
    {
      id: "q-5",
      code: "1.1.2.2",
      kLevel: "K2",
      text: "In the context of LLMs, how does a context window affect the model's performance?",
      options: [
        "It determines the speed at which the model was pre-trained on large datasets",
        "It acts as a numerical representation that encodes semantic relationships",
        "It limits the amount of preceding text considered, influencing coherence over long passages",
        "It prevents the model from generating plausible but factually incorrect text"
      ],
      correctIndex: 2,
      explanation:
        "In the realm of LLMs, the context window refers to the amount of preceding text that the model can consider when generating responses, influencing coherence over long passages"
    },
    {
      id: "q-6",
      code: "1.1.2.3",
      kLevel: "K2",
      text: "Why are Large Language Models considered non-deterministic?",
      options: [
        "They rely on fixed logical rules that change based on user input",
        "Their inference mechanisms are probabilistic, potentially leading to different outputs for the same input",
        "They require human involvement in every data annotation and model tuning phase",
        "They are only capable of processing numerical data in a sequential format"
      ],
      correctIndex: 1,
      explanation:
        "LLMs exhibit non-deterministic behavior primarily due to the probabilistic nature of their inference mechanisms, which can lead to variations in outputs"
    },

    // =========================
    // GenAI-1.1.3 (K2)
    // =========================
    {
      id: "q-7",
      code: "1.1.3.1",
      kLevel: "K2",
      text: "Which category of LLM is described as a general-purpose model trained on vast datasets that typically requires further adaptation for specific tasks?",
      options: [
        "Reasoning LLMs",
        "Instruction-tuned LLMs",
        "Foundation LLMs",
        "Small Language Models (SLMs)"
      ],
      correctIndex: 2,
      explanation:
        "Foundation LLMs are general-purpose models trained on vast and diverse datasets and typically require further adaptation for specific tasks"
    },
    {
      id: "q-8",
      code: "1.1.3.2",
      kLevel: "K2",
      text: "What is the defining characteristic of an instruction-tuned LLM?",
      options: [
        "It is trained only on structured numerical databases to predict software defects",
        "It is fine-tuned using datasets that pair prompts with expected responses to improve task adherence",
        "It utilizes symbolic AI rules to ensure 100% accuracy in code generation",
        "It is designed to operate without any transformer architecture"
      ],
      correctIndex: 1,
      explanation:
        "Instruction-tuned LLMs are fine-tuned using datasets that pair prompts with expected responses to improve adherence to human instructions"
    },
    {
      id: "q-9",
      code: "1.1.3.3",
      kLevel: "K2",
      text: "When should a tester prefer a reasoning LLM over a standard instruction-tuned model?",
      options: [
        "When the task is a simple, repetitive keyword extraction",
        "When the model needs to be as small as possible for local deployment",
        "When the task demands high cognitive load, such as multi-step problem-solving or logical inference",
        "When the objective is to minimize the computational complexity of the context window"
      ],
      correctIndex: 2,
      explanation:
        "Reasoning LLMs are better suited for high cognitive load tasks that require multi-step problem-solving or logical inference"
    },

    // =========================
    // GenAI-1.1.4 (K2)
    // =========================
    {
      id: "q-10",
      code: "1.1.4.1",
      kLevel: "K2",
      text: "How do multimodal LLMs differ from traditional transformer models?",
      options: [
        "They can only process structured CSV data",
        "They are capable of processing multiple data types, including text, images, sound, and video",
        "They do not utilize tokenization for input processing",
        "They are strictly limited to symbolic logic and rule-based systems"
      ],
      correctIndex: 1,
      explanation:
        "Multimodal LLMs extend traditional transformer models to process multiple data modalities including text, images, sound, and video"
    },
    {
      id: "q-11",
      code: "1.1.4.2",
      kLevel: "K2",
      text: "What is a specific benefit of using vision-language models in software testing?",
      options: [
        "They eliminate the need for any textual requirements",
        "They can analyze consistency between textual descriptions and visual inputs like screenshots",
        "They automatically fix defects in the application's source code",
        "They reduce the energy consumption of LLMs"
      ],
      correctIndex: 1,
      explanation:
        "Vision-language models integrate visual and textual information, enabling testers to identify discrepancies between expected results and actual visual elements"
    },
    {
      id: "q-12",
      code: "1.1.4.3",
      kLevel: "K2",
      text: "In a multimodal context, how are images typically prepared for processing within a transformer model?",
      options: [
        "They are converted into logical symbols using symbolic AI",
        "They are converted into embeddings using vision-language models",
        "They are manually annotated by testers before being fed into the model",
        "They are treated as raw pixel data without any tokenization"
      ],
      correctIndex: 1,
      explanation:
        "Images are converted into embeddings using vision-language models before being processed by transformer architectures"
    },

    // =========================
    // GenAI-1.2.1 (K2)
    // =========================
    {
      id: "q-13",
      code: "1.2.1.1",
      kLevel: "K2",
      text: "Which of the following is an example of an LLM supporting requirements analysis?",
      options: [
        "Automatically executing a full regression suite in a CI/CD pipeline",
        "Identifying ambiguities or missing information in user stories",
        "Storing test cases in a relational database",
        "Determining hardware requirements for a test lab"
      ],
      correctIndex: 1,
      explanation:
        "LLMs can help analyze requirements by identifying ambiguities, inconsistencies, or missing information"
    },
    {
      id: "q-14",
      code: "1.2.1.2",
      kLevel: "K2",
      text: "How can LLMs assist in test result analysis?",
      options: [
        "By creating summaries and classifying anomalies based on severity and priority",
        "By manually rerunning failed tests",
        "By replacing the test manager role",
        "By generating electrical signals"
      ],
      correctIndex: 0,
      explanation:
        "LLMs can assist in test result analysis by summarizing results and classifying anomalies based on severity and priority"
    },
    {
      id: "q-15",
      code: "1.2.1.3",
      kLevel: "K2",
      text: "Which task is an example of LLM capability in testware creation?",
      options: [
        "Installing the operating system on a test server",
        "Developing test plans, test reports, and defect reports",
        "Negotiating tool budgets",
        "Physically securing the test environment"
      ],
      correctIndex: 1,
      explanation:
        "LLMs can help create and maintain testware such as test plans, reports, and defect documentation"
    },

    // =========================
    // GenAI-1.2.2 (K2)
    // =========================
    {
      id: "q-16",
      code: "1.2.2.1",
      kLevel: "K2",
      text: "What is a primary characteristic of AI chatbots used in software testing?",
      options: [
        "They are integrated via APIs to perform automated tasks",
        "They provide a user-friendly conversational interface for direct interaction",
        "They operate without human oversight",
        "They require complex coding to receive output"
      ],
      correctIndex: 1,
      explanation:
        "AI chatbots provide a conversational interface that enables testers to interact directly with LLMs"
    },
    {
      id: "q-17",
      code: "1.2.2.2",
      kLevel: "K2",
      text: "Compared to chatbots, how do LLM-powered testing applications typically function?",
      options: [
        "They allow only unstructured queries",
        "They integrate LLM capabilities via APIs for automated tasks",
        "They are designed only for non-technical users",
        "They require no prompt engineering"
      ],
      correctIndex: 1,
      explanation:
        "LLM-powered testing applications integrate LLM capabilities via APIs to perform well-defined automated tasks"
    },
    {
      id: "q-18",
      code: "1.2.2.3",
      kLevel: "K2",
      text: "Which interaction model is most suitable for exploratory testing and quick feedback?",
      options: [
        "LLM-powered CI/CD application",
        "Standalone relational database",
        "AI chatbot using conversational interaction",
        "Hard-coded automated script"
      ],
      correctIndex: 2,
      explanation:
        "AI chatbots are particularly effective for exploratory testing due to their conversational interaction and quick feedback"
    }

  ]
};
