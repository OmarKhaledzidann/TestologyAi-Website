import { Chapter } from "../types";

export const CHAPTER_4_FINAL_EXAM: Chapter = {
  id: "genai-4-exam",
  title: " Chapter 4 Final Mock Exam",
  description: "40 Questions • 90 Minutes • LLM-Powered Test Infrastructure for Software Testing",
  icon: "Network",
  questions: [

    {
      id: "q-1",
      code: "EX-4-1",
       
      text: "In the typical architecture of an LLM-powered test infrastructure, which component serves as the user interface where testers input natural language commands?",
      options: ["The LLM engine", "The back-end", "The front-end", "The vector database"],
      correctIndex: 2,
      explanation: "The front-end is the user-facing interface for entering commands and queries."
    },
    {
      id: "q-2",
      code: "EX-4-2",
       
      text: "Which architectural component is responsible for authentication, prompt preparation, and managing interactions with the LLM?",
      options: ["Front-end", "Back-end", "External data source", "Transformer layer"],
      correctIndex: 1,
      explanation: "The back-end manages authentication, data access, prompt preparation, and LLM interaction."
    },
    {
      id: "q-3",
      code: "EX-4-3",
       
      text: "How does an LLM-powered test tool fundamentally differ from a traditional rule-based chatbot?",
      options: [
        "It follows strictly scripted responses.",
        "It generates test insights dynamically from context like requirements or code.",
        "It requires human manual coding for every possible response.",
        "It does not use a back-end component."
      ],
      correctIndex: 1,
      explanation: "LLM-powered tools generate insights dynamically using contextual data."
    },
    {
      id: "q-4",
      code: "EX-4-4",
       
      text: "Scenario: A testing team needs to store and query high-dimensional vector representations of their test documentation to enable semantic search. Which technology should they integrate into their back-end?",
      options: ["Relational database", "Vector database", "NoSQL flat files", "Local cache"],
      correctIndex: 1,
      explanation: "Vector databases store embeddings for semantic similarity search."
    },
    {
      id: "q-5",
      code: "EX-4-5",
       
      text: "What is the role of the LLM within a specialized test infrastructure, beyond acting as a standard server?",
      options: [
        "It acts as a smart processing component that interprets and reasons based on test products.",
        "It stores all historical test cases in a permanent SQL table.",
        "It provides the physical network layer for data transmission.",
        "It replaces the need for any front-end interface."
      ],
      correctIndex: 0,
      explanation: "The LLM reasons over test artefacts and context."
    },

    {
      id: "q-6",
      code: "EX-4-6",
       
      text: "In the multi-component design of a test infrastructure, what is the purpose of post-processing by the back-end?",
      options: [
        "To tokenize the initial user input",
        "To ensure LLM responses align with test conditions before presentation",
        "To encode large documents into vectors",
        "To increase randomness of output"
      ],
      correctIndex: 1,
      explanation: "Post-processing validates and aligns responses with test conditions."
    },
    {
      id: "q-7",
      code: "EX-4-7",
       
      text: "Which external data source is typically used in the back-end for structured data such as existing test cases?",
      options: ["Vector database", "Relational database", "LLM-as-a-Service API", "Context window"],
      correctIndex: 1,
      explanation: "Relational databases store structured testing data."
    },
    {
      id: "q-8",
      code: "EX-4-8",
       
      text: "Scenario: You are designing a system that must analyze test results and reason through complex logic. Why would you choose an LLM-powered infrastructure over a traditional client-server model?",
      options: [
        "Because it uses a client-server model exclusively",
        "Because it incorporates intelligent processing capable of reasoning over test products",
        "Because it is cheaper and requires no back-end",
        "Because it eliminates prompt engineering"
      ],
      correctIndex: 1,
      explanation: "LLMs provide reasoning capabilities beyond standard architectures."
    },

    {
      id: "q-9",
      code: "EX-4-9",
       
      text: "Retrieval-Augmented Generation (RAG) increases the relevance of LLM outputs by:",
      options: [
        "Fine-tuning model weights on every prompt",
        "Incorporating additional data sources into response generation",
        "Reducing the context window",
        "Converting text into symbolic AI rules"
      ],
      correctIndex: 1,
      explanation: "RAG enriches responses with retrieved external data."
    },
    {
      id: "q-10",
      code: "EX-4-10",
       
      text: "During RAG preprocessing, why are large documents broken into smaller chunks (256–512 tokens)?",
      options: [
        "To bypass vector databases",
        "To ensure focused retrieval and context window compatibility",
        "To ignore system prompts",
        "To obscure data from attackers"
      ],
      correctIndex: 1,
      explanation: "Chunking improves retrieval accuracy and context handling."
    },

    {
      id: "q-11",
      code: "EX-4-11",
       
      text: "What is an embedding in a RAG system?",
      options: [
        "Raw text in a relational table",
        "A high-dimensional numerical vector representation",
        "A hidden system instruction",
        "A physical storage device"
      ],
      correctIndex: 1,
      explanation: "Embeddings encode semantic meaning numerically."
    },
    {
      id: "q-12",
      code: "EX-4-12",
       
      text: "Scenario: A tester queries a RAG-enabled system about a rule in a 500-page manual. How is relevant information retrieved?",
      options: [
        "Keyword search across all pages",
        "Semantic similarity between prompt and document embeddings",
        "Sending the entire manual to the LLM",
        "Manual page selection"
      ],
      correctIndex: 1,
      explanation: "RAG retrieves content using embedding similarity."
    },
    {
      id: "q-13",
      code: "EX-4-13",
       
      text: "What defines a grounded response in a RAG system?",
      options: [
        "Based only on training data",
        "Rooted in accurate, retrieved external context",
        "Checked by a compiler",
        "Generated with temperature zero"
      ],
      correctIndex: 1,
      explanation: "Grounded responses rely on retrieved, relevant data."
    },
    {
      id: "q-14",
      code: "EX-4-14",
       
      text: "RAG enriches LLM responses by combining:",
      options: [
        "Symbolic AI and deep learning",
        "Retrieval systems and language models",
        "Fine-tuning and temperature adjustment",
        "Tokenization and embeddings"
      ],
      correctIndex: 1,
      explanation: "RAG integrates retrieval with generation."
    },
    {
      id: "q-15",
      code: "EX-4-15",
       
      text: "Scenario: Requirements change daily. How does RAG keep the test infrastructure up to date?",
      options: [
        "Retrains the model nightly",
        "Accesses enterprise data sources in real time",
        "Ignores new requirements",
        "Rewrites model weights"
      ],
      correctIndex: 1,
      explanation: "RAG retrieves current enterprise data dynamically."
    },

    {
      id: "q-16",
      code: "EX-4-16",
       
      text: "In a RAG workflow, when does retrieval occur?",
      options: [
        "During pre-training",
        "During inference while processing the user prompt",
        "After response generation",
        "When temperature exceeds 1.0"
      ],
      correctIndex: 1,
      explanation: "Retrieval happens at inference time."
    },
    {
      id: "q-17",
      code: "EX-4-17",
       
      text: "What is the main benefit of vector databases in RAG?",
      options: [
        "Faster keyword matching",
        "Efficient similarity-based retrieval at runtime",
        "Secure credential storage",
        "Replacing the LLM back-end"
      ],
      correctIndex: 1,
      explanation: "Vector databases enable fast semantic search."
    },
    {
      id: "q-18",
      code: "EX-4-18",
       
      text: "Scenario: You compare LLM output with and without RAG for specialized company documentation. What result should you expect?",
      options: [
        "Non-RAG is more accurate",
        "RAG output is grounded in company-specific data",
        "Both outputs are identical",
        "RAG ignores the prompt"
      ],
      correctIndex: 1,
      explanation: "RAG grounds responses in proprietary data."
    },

    {
      id: "q-19",
      code: "EX-4-19",
       
      text: "Which GenAI applications are designed for semi-autonomous or autonomous processing of defined tasks?",
      options: ["Foundation LLMs", "LLM-powered agents", "Relational databases", "Tokenizers"],
      correctIndex: 1,
      explanation: "Agents perform task-oriented automation."
    },
    {
      id: "q-20",
      code: "EX-4-20",
       
      text: "Unlike traditional chatbots, LLM-powered agents can interact with external systems by:",
      options: [
        "Rewriting their source code",
        "Invoking predefined tools or functions",
        "Operating without language understanding",
        "Unlimited context windows"
      ],
      correctIndex: 1,
      explanation: "Agents call tools to act on systems."
    },
    {
      id: "q-21",
      code: "EX-4-21",
       
      text: "Scenario: An agent runs tests and logs Jira defects without human help. What autonomy level is this?",
      options: ["Semi-autonomous", "Manual", "Autonomous", "Chained"],
      correctIndex: 2,
      explanation: "Autonomous agents act independently."
    },
    {
      id: "q-22",
      code: "EX-4-22",
       
      text: "What defines a semi-autonomous agent?",
      options: [
        "Zero human intervention",
        "Periodic human oversight",
        "Image-only processing",
        "Rule-based without LLMs"
      ],
      correctIndex: 1,
      explanation: "Semi-autonomous agents involve human review."
    },
    {
      id: "q-23",
      code: "EX-4-23",
       
      text: "What is orchestration in multi-agent architectures?",
      options: [
        "Tokenizing text",
        "Coordinating multiple specialized agents",
        "Energy calculation",
        "Test translation"
      ],
      correctIndex: 1,
      explanation: "Orchestration coordinates agent collaboration."
    },
    {
      id: "q-24",
      code: "EX-4-24",
       
      text: "What major risk must be monitored when using LLM-powered agents?",
      options: [
        "Agents refusing to work",
        "Hallucinations, reasoning errors, and biases",
        "Database deletion",
        "Strict temperature dependency"
      ],
      correctIndex: 1,
      explanation: "Agents inherit LLM risks."
    },
    {
      id: "q-25",
      code: "EX-4-25",
       
      text: "How can risks of LLM-powered agents be mitigated for critical tasks?",
      options: [
        "Full autonomy",
        "Semi-autonomous agents or automated verification",
        "Disabling tools",
        "Reducing parameters"
      ],
      correctIndex: 1,
      explanation: "Human oversight and verification reduce risk."
    },

    {
      id: "q-26",
      code: "EX-4-26",
       
      text: "Which process adapts a pre-trained model for a specific domain?",
      options: ["RAG", "Fine-tuning", "Tokenization", "Prompt Engineering"],
      correctIndex: 1,
      explanation: "Fine-tuning specializes models."
    },
    {
      id: "q-27",
      code: "EX-4-27",
       
      text: "Scenario: You want an LLM to use your organization’s vocabulary. Which approach fits best?",
      options: [
        "Zero-shot prompting",
        "Fine-tuning on organization data",
        "Increasing temperature",
        "Expanding context window"
      ],
      correctIndex: 1,
      explanation: "Fine-tuning aligns terminology and process."
    },
    {
      id: "q-28",
      code: "EX-4-28",
       
      text: "Why fine-tune a Small Language Model (SLM)?",
      options: [
        "Better multi-step reasoning",
        "High performance with lower computational cost",
        "No training data needed",
        "Immunity to overfitting"
      ],
      correctIndex: 1,
      explanation: "SLMs are efficient for targeted tasks."
    },
    {
      id: "q-29",
      code: "EX-4-29",
       
      text: "What is a key advantage of fine-tuning for technical domains?",
      options: [
        "Rule-based transparency",
        "Specialized reasoning and vocabulary",
        "No back-end required",
        "No hallucinations"
      ],
      correctIndex: 1,
      explanation: "Fine-tuning adds domain expertise."
    },
    {
      id: "q-30",
      code: "EX-4-30",
       
      text: "Scenario: A model performs well on training data but poorly on new data. This is:",
      options: ["Under-sampling", "Overfitting", "Opacity", "Reasoning Error"],
      correctIndex: 1,
      explanation: "Overfitting limits generalization."
    },

    {
      id: "q-31",
      code: "EX-4-31",
       
      text: "In fine-tuning, what does opacity refer to?",
      options: [
        "Image processing limits",
        "Lack of transparency in model decision-making",
        "GPU cooling needs",
        "Token cost"
      ],
      correctIndex: 1,
      explanation: "Opacity means limited explainability."
    },
    {
      id: "q-32",
      code: "EX-4-32",
       
      text: "What is a major challenge when fine-tuning large models?",
      options: [
        "No compute needed",
        "High computational resource requirements",
        "Front-end-only tuning",
        "Manual tuning by testers"
      ],
      correctIndex: 1,
      explanation: "LLMs require significant compute."
    },
    {
      id: "q-33",
      code: "EX-4-33",
       
      text: "Which practices manage LLMs in production?",
      options: ["DevOps", "LLMOps", "TestOps", "PromptOps"],
      correctIndex: 1,
      explanation: "LLMOps governs LLM lifecycle."
    },
    {
      id: "q-34",
      code: "EX-4-34",
       
      text: "Which approach offers the highest data privacy control?",
      options: [
        "Public chatbot",
        "Third-party integrated tool",
        "In-house open-source LLM on internal infrastructure",
        "One-shot prompting online"
      ],
      correctIndex: 2,
      explanation: "In-house deployment maximizes control."
    },
    {
      id: "q-35",
      code: "EX-4-35",
       
      text: "What is a key consideration when choosing an AI chatbot approach?",
      options: [
        "Creating agents for every tester",
        "Balancing data privacy, security, and cost",
        "Writing neural networks from scratch",
        "Removing context windows"
      ],
      correctIndex: 1,
      explanation: "Chatbots require careful privacy-cost trade-offs."
    },

    {
      id: "q-36",
      code: "EX-4-36",
       
      text: "When using a test tool with GenAI, what should organizations evaluate about the provider?",
      options: [
        "Office location",
        "Data security and performance assurances",
        "Social media presence",
        "Tester headcount"
      ],
      correctIndex: 1,
      explanation: "Security and performance guarantees are critical."
    },
    {
      id: "q-37",
      code: "EX-4-37",
       
      text: "What is critical for in-house GenAI tool development?",
      options: [
        "Never using company data",
        "Planning AI operating costs and training",
        "Using only foundation models",
        "Avoiding natural language"
      ],
      correctIndex: 1,
      explanation: "Compute, storage, and skills planning are essential."
    },
    {
      id: "q-38",
      code: "EX-4-38",
       
      text: "How can deployment approaches (Chatbots, Integrated Tools, In-house) be used?",
      options: [
        "Strict sequence",
        "Mutually exclusive",
        "Simultaneously based on test activities",
        "Not together"
      ],
      correctIndex: 2,
      explanation: "Approaches can coexist."
    },
    {
      id: "q-39",
      code: "EX-4-39",
       
      text: "Which components can enhance LLMOps for testing?",
      options: [
        "Only relational databases",
        "RAG and fine-tuning",
        "Symbolic AI processors",
        "Static rules"
      ],
      correctIndex: 1,
      explanation: "RAG and fine-tuning extend LLMOps."
    },
    {
      id: "q-40",
      code: "EX-4-40",
       
      text: "What is a prompt pattern?",
      options: [
        "An LLM bug",
        "A reusable template for effective prompts",
        "Random tokens",
        "A vector database attack"
      ],
      correctIndex: 1,
      explanation: "Prompt patterns standardize effective prompting."
    }

  ]
};
