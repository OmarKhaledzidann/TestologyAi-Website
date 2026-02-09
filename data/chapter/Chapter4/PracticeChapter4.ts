import { Chapter } from "../types";

export const CHAPTER_4_PRACTICE: Chapter = {
  id: "genai-4",
  title: "LLM-Powered Test Infrastructure for Software Testing",
  description:
    "Architecture, RAG, agents, fine-tuning, and LLMOps for integrating Generative AI into testing environments",
  icon: "Network",
  questions: [

    // =========================
    // GenAI-4.1.1 (K2)
    // =========================
    {
      id: "q-1",
      code: "4.1.1.1",
      kLevel: "K2",
      text: "In the architecture of an LLM-powered test infrastructure, what is the primary responsibility of the back-end component?",
      options: [
        "Serving as the primary user interface for entering natural language queries",
        "Generating the probabilistic next-token prediction based on raw data",
        "Managing critical functions such as authentication, data retrieval, and prompt preparation",
        "Determining the high-dimensional vector space for foundation models"
      ],
      correctIndex: 2,
      explanation:
        "The back-end processes user input and manages authentication, data retrieval, prompt preparation, and interaction with the LLM."
    },
    {
      id: "q-2",
      code: "4.1.1.2",
      kLevel: "K2",
      text: "How does an LLM-powered test infrastructure fundamentally differ from a traditional rule-based chatbot?",
      options: [
        "It relies on strictly scripted responses to maintain test consistency",
        "It generates test insights dynamically from context, such as requirements or code",
        "It only uses front-end components and does not require a back-end",
        "It cannot integrate with external data sources like relational databases"
      ],
      correctIndex: 1,
      explanation:
        "LLM-powered infrastructures generate insights dynamically based on contextual information instead of static scripts."
    },
    {
      id: "q-3",
      code: "4.1.1.3",
      kLevel: "K2",
      text: "Which component is integrated into the back-end specifically to facilitate semantic retrieval of related content using embeddings?",
      options: [
        "Relational databases",
        "Vector databases",
        "LLM-as-a-Service APIs",
        "Front-end command interfaces"
      ],
      correctIndex: 1,
      explanation:
        "Vector databases store embeddings to enable semantic similarity search."
    },

    // =========================
    // GenAI-4.1.2 (K2)
    // =========================
    {
      id: "q-4",
      code: "4.1.2.1",
      kLevel: "K2",
      text: "What is the purpose of breaking large documents into smaller chunks (e.g., 256–512 tokens) during the RAG preprocessing phase?",
      options: [
        "To convert the text into a rule-based symbolic AI format",
        "To ensure focused retrieval and compatibility with the model's context window",
        "To reduce the energy consumption of the training phase",
        "To allow the LLM to skip the tokenization process during inference"
      ],
      correctIndex: 1,
      explanation:
        "Chunking ensures focused retrieval and compatibility with the model context window."
    },
    {
      id: "q-5",
      code: "4.1.2.2",
      kLevel: "K2",
      text: "In a RAG system, how is the retrieval of relevant information typically performed?",
      options: [
        "By searching for exact keyword matches in a relational database",
        "By manually selecting relevant chunks based on document titles",
        "By evaluating semantic similarity between the embeddings of the user prompt and the document chunks",
        "By using reinforcement learning to predict which document the user wants"
      ],
      correctIndex: 2,
      explanation:
        "RAG retrieval relies on semantic similarity between embeddings."
    },
    {
      id: "q-6",
      code: "4.1.2.3",
      kLevel: "K2",
      text: "How does RAG benefit software test analysis or design compared to using a standard LLM?",
      options: [
        "It eliminates the need for prompt engineering",
        "It enables access to enterprise data sources in real time to align with the latest specifications",
        "It makes the model completely deterministic",
        "It allows the model to ignore the context window entirely"
      ],
      correctIndex: 1,
      explanation:
        "RAG allows real-time access to enterprise data, improving alignment with current specifications."
    },

    // =========================
    // GenAI-4.1.3 (K2)
    // =========================
    {
      id: "q-7",
      code: "4.1.3.1",
      kLevel: "K2",
      text: "What is the defining capability of LLM-powered agents that distinguishes them from traditional AI chatbots?",
      options: [
        "They are limited to text-based question-and-answer interactions",
        "They can invoke predefined tools to interact with external systems",
        "They do not require natural language understanding",
        "They are only used for training foundation models"
      ],
      correctIndex: 1,
      explanation:
        "LLM-powered agents can call tools to act on external systems."
    },
    {
      id: "q-8",
      code: "4.1.3.2",
      kLevel: "K2",
      text: "In the context of agent autonomy, what characterizes a semi-autonomous agent?",
      options: [
        "It operates independently with no human intervention",
        "It performs tasks with periodic human oversight",
        "It relies exclusively on symbolic AI rules",
        "It can only perform a single task"
      ],
      correctIndex: 1,
      explanation:
        "Semi-autonomous agents require periodic human oversight."
    },
    {
      id: "q-9",
      code: "4.1.3.3",
      kLevel: "K2",
      text: "What is a significant risk associated with using LLM-powered agents in automated test processes?",
      options: [
        "They require much less energy than standard text generation",
        "They are immune to reasoning errors and biases",
        "They can produce incorrect or misleading results",
        "They cannot be integrated into orchestration systems"
      ],
      correctIndex: 2,
      explanation:
        "Agents can still hallucinate or produce incorrect outputs."
    },

    // =========================
    // GenAI-4.2.1 (K2)
    // =========================
    {
      id: "q-10",
      code: "4.2.1.1",
      kLevel: "K2",
      text: "What does the process of fine-tuning involve for a language model in software testing?",
      options: [
        "Training a foundation model from scratch",
        "Further training a pre-trained model on a targeted dataset",
        "Adjusting the temperature during inference",
        "Breaking text into tokens"
      ],
      correctIndex: 1,
      explanation:
        "Fine-tuning adapts a pre-trained model to a specific domain or task."
    },
    {
      id: "q-11",
      code: "4.2.1.2",
      kLevel: "K2",
      text: "Why might an organization choose to fine-tune a Small Language Model (SLM) instead of a Large Language Model (LLM)?",
      options: [
        "SLMs have larger context windows",
        "High performance on specific tasks with lower computational cost",
        "SLMs are the only models that understand Gherkin",
        "SLMs become deterministic after fine-tuning"
      ],
      correctIndex: 1,
      explanation:
        "SLMs can be efficient and performant for targeted tasks."
    },
    {
      id: "q-12",
      code: "4.2.1.3",
      kLevel: "K2",
      text: "Which of the following is a known challenge when fine-tuning a GenAI model for software testing?",
      options: [
        "Keeping the model generic",
        "Overfitting to training data",
        "Inability to use vector databases",
        "Loss of domain terminology"
      ],
      correctIndex: 1,
      explanation:
        "Overfitting can reduce performance on unseen data."
    },

    // =========================
    // GenAI-4.2.2 (K2)
    // =========================
    {
      id: "q-13",
      code: "4.2.2.1",
      kLevel: "K2",
      text: "What is the primary focus of LLMOps?",
      options: [
        "Iterative prompt refinement",
        "Practices and tools for developing, deploying, and maintaining LLMs",
        "Manual review of AI-generated tests",
        "Mathematical calculation of embeddings"
      ],
      correctIndex: 1,
      explanation:
        "LLMOps covers the operational lifecycle of LLMs in production."
    },
    {
      id: "q-14",
      code: "4.2.2.2",
      kLevel: "K2",
      text: "If an organization chooses in-house development of a GenAI-based test tool, which factor requires the most careful planning?",
      options: [
        "Relying on third-party vendors for privacy",
        "AI operating costs including compute, storage, and training",
        "Avoiding RAG and fine-tuning",
        "Using only rule-based systems"
      ],
      correctIndex: 1,
      explanation:
        "In-house solutions require careful cost and resource planning."
    },
    {
      id: "q-15",
      code: "4.2.2.3",
      kLevel: "K2",
      text: "When using a test tool with integrated GenAI capabilities, what must an organization evaluate in addition to standard operational costs?",
      options: [
        "Number of tokens per prompt",
        "Data security and performance assurances from the provider",
        "Transformer architecture details",
        "Energy impact of a single image"
      ],
      correctIndex: 1,
      explanation:
        "Organizations must assess security and performance guarantees."
    }

  ]
};
