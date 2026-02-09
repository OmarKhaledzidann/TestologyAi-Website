import { Chapter } from "../types";

export const CHAPTER_5_PRACTICE: Chapter = {
  id: "genai-5-practice",
  title: "Deploying and Integrating Generative AI in Test Organizations",
  description: "Deploying and Integrating Generative AI in Test Organizations",
  icon: "Briefcase",
  questions: [
    {
      id: "5-1-1-1",
      code: "GenAI-5.1.1",
      kLevel: "K1",
      text: "What is the definition of shadow AI within an organization?",
      options: [
        "The use of AI to generate test cases for legacy systems.",
        "The use of GenAI tools or systems without formal approval or oversight.",
        "A strategy where AI models are trained in a dark (secure) environment.",
        "Deploying AI agents that operate without any human verification.",
      ],
      correctIndex: 1,
      explanation:
        "Shadow AI: The use of GenAI tools or systems within an organization without formal approval or oversight.",
    },
    {
      id: "5-1-1-2",
      code: "GenAI-5.1.1",
      kLevel: "K1",
      text: "Which is a primary risk associated with vague intellectual property in shadow AI?",
      options: [
        "The LLM failing to recognize Gherkin syntax.",
        "High energy consumption during off-peak hours.",
        "Exposure to disputes if copyrighted data is processed without authorization.",
        "The model's context window becoming too large.",
      ],
      correctIndex: 2,
      explanation:
        "Vague intellectual property: The use of AI tools with unclear licensing agreements can expose LLM users to intellectual property disputes, especially if copyrighted data is processed without proper authorization.",
    },
    {
      id: "5-1-1-3",
      code: "GenAI-5.1.1",
      kLevel: "K1",
      text: "How does shadow AI impact compliance and regulatory issues?",
      options: [
        "It guarantees compliance by using public models.",
        "It can lead to non-compliance and legal consequences.",
        "It reduces the need for GDPR.",
        "It improves transparency of AI decisions.",
      ],
      correctIndex: 1,
      explanation:
        "Compliance and regulatory issues: Using unapproved AI tools can lead to non-compliance with industry standards and regulations potentially resulting in legal consequences.",
    },

    {
      id: "5-1-2-1",
      code: "GenAI-5.1.2",
      kLevel: "K2",
      text: "Why should an organization establish measurable test objectives in a GenAI strategy?",
      options: [
        "To ensure temperature is zero.",
        "To measure improvements in productivity, cycles, and quality.",
        "To prevent multimodal models.",
        "To eliminate human testers.",
      ],
      correctIndex: 1,
      explanation:
        "This begins with defining measurable test objectives for GenAI, such as increasing test productivity, shortening test cycles, and improving test quality.",
    },
    {
      id: "5-1-2-2",
      code: "GenAI-5.1.2",
      kLevel: "K2",
      text: "What role does data quality play in a successful GenAI strategy?",
      options: [
        "Only relevant for training foundation models.",
        "High-quality, accurate input data is essential for achieving trustworthy results.",
        "Minimizes licensing fees.",
        "Bypasses security audits.",
      ],
      correctIndex: 1,
      explanation:
        "Data quality plays a critical role, as the effectiveness of LLM-powered testing depends on accurate, relevant input data... Maintaining high quality input data is therefore key to achieving results that can be trusted to be correct",
    },
    {
      id: "5-1-2-3",
      code: "GenAI-5.1.2",
      kLevel: "K2",
      text: "Which aspect of a GenAI strategy ensures ethical guidelines and transparency?",
      options: [
        "Selecting largest models.",
        "Implementing disclosure process guidelines.",
        "Using only open-source models.",
        "Avoiding prompt libraries.",
      ],
      correctIndex: 1,
      explanation:
        "To ensure compliance, organizations should establish process guidelines including, transparency obligations (e.g., what was generated using GenAI).",
    },

    {
      id: "5-1-3-1",
      code: "GenAI-5.1.3",
      kLevel: "K2",
      text: "Why is fine-tuning potential important when selecting a model?",
      options: [
        "Determines number of users.",
        "Allows adaptation with domain-specific data.",
        "Reduces CO2 emissions.",
        "Eliminates prompt engineering.",
      ],
      correctIndex: 1,
      explanation:
        "Fine-tuning potential: Evaluate whether it is possible and useful to fine-tune the language model (LLM or SLM) with domain-specific data to improve performance for a given use case, increasing accuracy and relevance in specialized contexts.",
    },
    {
      id: "5-1-3-2",
      code: "GenAI-5.1.3",
      kLevel: "K2",
      text: "What should be considered under recurring cost for LLM selection?",
      options: [
        "One-time hardware purchase.",
        "Licensing fees and operational expenses.",
        "Hiring a prompt engineer.",
        "Energy to charge a phone.",
      ],
      correctIndex: 1,
      explanation:
        "Recurring cost: Consider the recurring costs of using the LLM/SLM, including licensing fees and operational expenses...",
    },
    {
      id: "5-1-3-3",
      code: "GenAI-5.1.3",
      kLevel: "K2",
      text: "How should model performance be evaluated for selection?",
      options: [
        "Using public NLP benchmarks only.",
        "Against organization-specific benchmarks.",
        "Choosing the most expensive model.",
        "Using the smallest context window.",
      ],
      correctIndex: 1,
      explanation:
        "Model performance: Evaluate the model’s performance for the targeted test tasks against the organization's benchmarks...",
    },

    {
      id: "5-1-4-1",
      code: "GenAI-5.1.4",
      kLevel: "K1",
      text: "What is the primary focus of the Discovery phase?",
      options: [
        "Full CI/CD integration.",
        "Awareness, capability building, and experimentation.",
        "Measuring ROI.",
        "Retiring legacy tools.",
      ],
      correctIndex: 1,
      explanation:
        "Discovery: The first phase focuses on awareness and capability building. Activities include training... access to LLMs/SLMs, and experimenting with initial use cases...",
    },
    {
      id: "5-1-4-2",
      code: "GenAI-5.1.4",
      kLevel: "K1",
      text: "Which activity is characteristic of the Initiation and usage definition phase?",
      options: [
        "Basic AI training.",
        "Identifying and prioritizing use cases and infrastructure.",
        "Automating all manual testing.",
        "Calculating CO2 emissions.",
      ],
      correctIndex: 1,
      explanation:
        "Initiation and usage definition: ...this second phase focuses on identifying and prioritizing practical use cases for GenAI in software testing. This phase includes evaluating LLM-powered test infrastructure...",
    },
    {
      id: "5-1-4-3",
      code: "GenAI-5.1.4",
      kLevel: "K1",
      text: "What defines the Utilization and iteration phase?",
      options: [
        "First stakeholder introduction.",
        "Full integration with continuous monitoring.",
        "Banning personal AI tools.",
        "Selecting one foundation model.",
      ],
      correctIndex: 1,
      explanation:
        "Utilization and iteration: At this advanced phase, organizations fully integrate GenAI into their test processes. Continuous monitoring... is in place, as well as measurement and management of the transformation..",
    },

    {
      id: "5-2-1-1",
      code: "GenAI-5.2.1",
      kLevel: "K2",
      text: "Beyond prompt engineering, what skill must testers develop?",
      options: [
        "Writing neural network code.",
        "Reviewing and evaluating AI-generated testware.",
        "Manually calculating vectors.",
        "Configuring GPU cooling.",
      ],
      correctIndex: 1,
      explanation:
        "Testers must combine domain and test expertise with AI skills to evaluate LLM-driven testing... Key competencies include... evaluation of AI-generated testware.",
    },
    {
      id: "5-2-1-2",
      code: "GenAI-5.2.1",
      kLevel: "K2",
      text: "What is a critical security practice for testers using LLMs?",
      options: [
        "Sharing full production data.",
        "Masking or sanitizing confidential data.",
        "Using zero-shot prompts only.",
        "Avoiding constraints.",
      ],
      correctIndex: 1,
      explanation:
        "Testers should... implement proper data sanitization (removing or masking sensitive, personal, or confidential information)...",
    },
    {
      id: "5-2-1-3",
      code: "GenAI-5.2.1",
      kLevel: "K2",
      text: "How should testers consider environmental impact?",
      options: [
        "Always use the largest model.",
        "Optimize usage and select right-sized models.",
        "Print AI outputs.",
        "Use AI only in winter.",
      ],
      correctIndex: 1,
      explanation:
        "Environmental considerations include optimizing model selection and usage patterns to reduce computational overhead, selecting right-sized models for test tasks...",
    },

    {
      id: "5-2-2-1",
      code: "GenAI-5.2.2",
      kLevel: "K1",
      text: "What is a Prompt Pattern?",
      options: [
        "A recurring LLM bug.",
        "A reusable template for effective prompts.",
        "Token frequency distribution.",
        "A security vulnerability.",
      ],
      correctIndex: 1,
      explanation:
        "A prompt pattern is a reusable template for crafting effective prompts to guide GenAI toward consistent and reliable outputs.",
    },
    {
      id: "5-2-2-2",
      code: "GenAI-5.2.2",
      kLevel: "K1",
      text: "How do Internal Communities of Practice support GenAI adoption?",
      options: [
        "Sharing prompt patterns and lessons learned.",
        "Paying licensing fees.",
        "Replacing management oversight.",
        "Focusing on manual regression.",
      ],
      correctIndex: 0,
      explanation:
        "Internal communities of practice support ongoing knowledge sharing... sharing prompt pattern libraries and documenting lessons learned...",
    },
    {
      id: "5-2-2-3",
      code: "GenAI-5.2.2",
      kLevel: "K1",
      text: "Which training approach is emphasized for GenAI skills?",
      options: [
        "Purely theoretical learning.",
        "Hands-on practice with guided exercises.",
        "Waiting for the LLM to adapt.",
        "Outsourcing all prompting.",
      ],
      correctIndex: 1,
      explanation:
        "A hands-on approach is essential to strategically train test teams... practicing with various LLMs/SLMs, following structured learning paths, and gradually developing know-how",
    },

    {
      id: "5-2-3-1",
      code: "GenAI-5.2.3",
      kLevel: "K1",
      text: "How does the tester role evolve in an AI-enabled organization?",
      options: [
        "Stops traditional testing.",
        "Becomes an AI-assisted specialist verifying outputs.",
        "Labels training data full-time.",
        "Becomes a developer.",
      ],
      correctIndex: 1,
      explanation:
        "Testers evolve from test design and test execution specialists to AI-assisted test specialists, combining their expertise in test techniques with skills to guide and verify AI-generated testware.",
    },
    {
      id: "5-2-3-2",
      code: "GenAI-5.2.3",
      kLevel: "K1",
      text: "What new responsibility is added to the Test Manager role?",
      options: [
        "Reviewing every token.",
        "Developing AI-based test strategy and governance.",
        "Writing all agent code.",
        "Supporting the LLM vendor.",
      ],
      correctIndex: 1,
      explanation:
        "The responsibilities of test managers are updated to include the development of an AI-based test strategy, AI-based risk management, and monitoring and control of AI-based test processes.",
    },
    {
      id: "5-2-3-3",
      code: "GenAI-5.2.3",
      kLevel: "K1",
      text: "What must a Test Manager oversee in a hybrid team?",
      options: [
        "Developers and analysts only.",
        "Manual and rule-based automation.",
        "Humans working with GenAI-powered agents.",
        "Remote and office workers.",
      ],
      correctIndex: 2,
      explanation:
        "Test managers will not only lead human testers but also coordinate with GenAI-powered test agents, requiring new management skills for overseeing hybrid teams of people and GenAI tools.",
    },
  ],
};
