import { Chapter } from "../types";

export const CHAPTER_5_FINAL_EXAM: Chapter = {
  id: "genai-5-final-exam",
  title: " Chapter 5 Final Mock Exam",
  description:
    "Deploying and Integrating Generative AI in Test Organizations • 40 Questions • 60 Minutes",
  icon: "Briefcase",
  questions: [
    {
      id: "q-5-1",
      code: "EX-5-1",

      text: "Which of the following best defines shadow AI within a test organization?",
      options: [
        "Deploying AI models in a secure, dark-site data center.",
        "The use of GenAI tools or systems without formal approval or oversight.",
        "Using AI to test legacy code that lacks documentation.",
        "Implementing AI agents that operate only during night-shift regression runs.",
      ],
      correctIndex: 1,
      explanation:
        "The syllabus defines Shadow AI as the use of tools without formal approval. Distractors: A, C, and D are fictional or irrelevant to the definition.",
    },
    {
      id: "q-5-2",
      code: "EX-5-2",

      text: "Scenario: A tester uses their personal subscription to a public LLM to debug a proprietary automation script. This primarily introduces a risk of:",
      options: [
        "Model overfitting.",
        "Information security and data privacy weaknesses.",
        "Reduced tokenization efficiency.",
        "Reasoning errors in the back-end.",
      ],
      correctIndex: 1,
      explanation:
        "Personal tools may lack robust security, leading to potential data breaches. Distractors: A, C, and D are technical concepts not directly caused by personal tool use as a risk category.",
    },
    {
      id: "q-5-3",
      code: "EX-5-3",

      text: "Why does using GenAI tools with unclear licensing agreements pose a risk?",
      options: [
        "It limits the context window.",
        "It prevents fine-tuning.",
        "It exposes users to intellectual property disputes.",
        "It increases output temperature.",
      ],
      correctIndex: 2,
      explanation:
        "Unclear licensing can lead to disputes if copyrighted data is processed. Distractors: A and B are technical model features; D relates to randomness settings.",
    },
    {
      id: "q-5-4",
      code: "EX-5-4",

      text: "Using unapproved AI tools in regulated industries can lead to:",
      options: [
        "Automatic anonymization of data.",
        "Non-compliance with industry standards and legal consequences.",
        "Improved test transparency.",
        "Faster accreditation.",
      ],
      correctIndex: 1,
      explanation:
        "Using unapproved tools can lead to non-compliance with industry standards. Distractors: A and C are positive outcomes (unlikely for unapproved tools); D is irrelevant to unapproved tool usage.",
    },
    {
      id: "q-5-5",
      code: "EX-5-5",

      text: "When defining a GenAI strategy, what is the first recommended step?",
      options: [
        "Buying high-end GPU hardware.",
        "Defining measurable test objectives.",
        "Hiring deep learning researchers.",
        "Retiring all manual testing roles.",
      ],
      correctIndex: 1,
      explanation:
        "Strategy begins with defining measurable test objectives like productivity and quality. Distractors: A, C, and D are implementation details or extreme measures not listed as the starting point.",
    },
    {
      id: "q-5-6",
      code: "EX-5-6",

      text: "Scenario: Requiring human review of all AI-generated test scripts is an example of:",
      options: [
        "Data minimization.",
        "Establishing quality gates and transparency obligations.",
        "Autonomous agent architecture.",
        "Reducing recurring costs.",
      ],
      correctIndex: 1,
      explanation:
        "Organizations should establish process guidelines including transparency and quality gates/review. Distractors: A is about using less data; C is about independent AI; D is about finances.",
    },
    {
      id: "q-5-7",
      code: "EX-5-7",

      text: "Which factor is critical because LLM-powered testing depends on it for trustworthy results?",
      options: [
        "Front-end brand.",
        "High-quality, accurate input data.",
        "Zero-shot prompting only.",
        "Number of testers.",
      ],
      correctIndex: 1,
      explanation:
        "Effectiveness depends on accurate, relevant input data. Distractors: A is aesthetic; C is a specific technique; D is a community factor, not data.",
    },
    {
      id: "q-5-8",
      code: "EX-5-8",

      text: "How should a GenAI strategy handle LLM selection?",
      options: [
        "Use one model for all tasks.",
        "Align selection with test objectives and scalability needs.",
        "Rely only on NLP benchmarks.",
        "Avoid fine-tuning models.",
      ],
      correctIndex: 1,
      explanation:
        "Selection should align with test objectives and scalability. Distractors: A ignores task-specific needs; C is too narrow; D ignores the benefit of specialization.",
    },
    {
      id: "q-5-9",
      code: "EX-5-9",

      text: "Why establish transparency obligations in a test strategy?",
      options: [
        "To track token counts.",
        "To disclose what content was generated using GenAI.",
        "To allow public database access.",
        "To publish neural network weights.",
      ],
      correctIndex: 1,
      explanation:
        "Transparency involves disclosing what was generated using GenAI. Distractors: A and C are too granular or compromise security; D is a technical impossibility for most commercial users.",
    },
    {
      id: "q-5-10",
      code: "EX-5-10",

      text: "Which selection criterion checks if a model can be adapted with domain-specific data?",
      options: [
        "Recurring cost.",
        "Fine-tuning potential.",
        "Community and support.",
        "Tokenization speed.",
      ],
      correctIndex: 1,
      explanation:
        "Fine-tuning potential evaluates the possibility of adapting the model with domain-specific data. Distractors: A is cost; C is help; D is speed.",
    },

    {
      id: "q-5-11",
      code: "EX-5-11",

      text: "Scenario: Choosing an LLM with strong documentation and user forums prioritizes:",
      options: [
        "Model performance.",
        "Community and support.",
        "Zero-shot capability.",
        "Data minimization.",
      ],
      correctIndex: 1,
      explanation:
        "This refers to choosing models with active community support and detailed documentation. Distractors: A is about speed/quality; C is a technique; D is about data volume.",
    },
    {
      id: "q-5-12",
      code: "EX-5-12",

      text: "What must be considered when evaluating recurring GenAI costs?",
      options: [
        "One-time setup fees.",
        "Licensing fees and operational expenses.",
        "Laptop electricity usage.",
        "Prompt writing time.",
      ],
      correctIndex: 1,
      explanation:
        "Recurring costs include licensing fees and operational expenses. Distractors: A is a one-time cost; C is negligible/indirect; D is a labor cost, not a model usage cost.",
    },
    {
      id: "q-5-13",
      code: "EX-5-13",

      text: "Why are general NLP benchmarks insufficient for selecting LLMs for testing?",
      options: [
        "They ignore temperature.",
        "Few focus on software test tasks.",
        "They apply only to foundation models.",
        "They ignore transformer size.",
      ],
      correctIndex: 1,
      explanation:
        "Only a few benchmarks specifically focus on software test tasks. Distractors: A, C, and D are technical details that don't explain why general benchmarks fail for testing specifically.",
    },
    {
      id: "q-5-14",
      code: "EX-5-14",

      text: "What is a primary activity in the Discovery phase?",
      options: [
        "Full AI integration.",
        "Awareness, capability building, and experimentation.",
        "Financial ROI prioritization.",
        "Hybrid team creation.",
      ],
      correctIndex: 1,
      explanation:
        "Discovery focuses on awareness, capability building, and experimenting. Distractors: A and C are for later phases; D is a structural outcome of maturity.",
    },
    {
      id: "q-5-15",
      code: "EX-5-15",

      text: "What marks the shift to the Utilization and iteration phase?",
      options: [
        "First prompt usage.",
        "Full integration with continuous monitoring.",
        "Switching to an SLM.",
        "Completing one exercise.",
      ],
      correctIndex: 1,
      explanation:
        "Utilization and iteration involve full integration and continuous monitoring. Distractors: A and D are too early; C is a design choice, not a phase marker.",
    },

    {
      id: "q-5-16",
      code: "EX-5-16",

      text: "Scenario: Different GenAI use cases are in different adoption phases. This shows that:",
      options: [
        "The roadmap failed.",
        "Adoption phases can run in parallel.",
        "Automation must come first.",
        "Shadow AI is present.",
      ],
      correctIndex: 1,
      explanation:
        "The syllabus states these phases can run in parallel for different use cases. Distractors: A and D are negative interpretations; C is a preference, not a rule.",
    },
    {
      id: "q-5-17",
      code: "EX-5-17",

      text: "Which phase involves evaluating LLM-powered test infrastructure?",
      options: [
        "Discovery.",
        "Initiation and usage definition.",
        "Utilization and iteration.",
        "Retirement.",
      ],
      correctIndex: 1,
      explanation:
        "Initiation includes identifying use cases and evaluating infrastructure. Distractors: A is for learning; C is for full use; D is not an adoption phase.",
    },
    {
      id: "q-5-18",
      code: "EX-5-18",

      text: "Which human factor concern should be addressed early?",
      options: [
        "Token cost.",
        "Fear of job displacement.",
        "Embedding accuracy.",
        "Vector DB size.",
      ],
      correctIndex: 1,
      explanation:
        "Early concerns such as fear of job displacement should be addressed. Distractors: A, C, and D are technical/financial metrics.",
    },
    {
      id: "q-5-19",
      code: "EX-5-19",

      text: "Which skill allows testers to judge AI-generated testware quality?",
      options: [
        "Python programming.",
        "Test review methods and domain expertise.",
        "Data poisoning techniques.",
        "GPU maintenance.",
      ],
      correctIndex: 1,
      explanation:
        "Testers combine domain/test expertise with AI skills to evaluate AI-generated testware. Distractors: A is for developers; C is a risk/attack; D is for IT support.",
    },
    {
      id: "q-5-20",
      code: "EX-5-20",

      text: "Scenario: Masking names in logs before sending to an LLM demonstrates:",
      options: [
        "Prompt chaining.",
        "Proper data sanitization.",
        "Meta prompting.",
        "Model fine-tuning.",
      ],
      correctIndex: 1,
      explanation:
        "Testers should implement proper data sanitization by removing or masking sensitive info. Distractors: A and C are prompting techniques; D is model training.",
    },

    {
      id: "q-5-21",
      code: "EX-5-21",

      text: "Why should testers choose right-sized models?",
      options: [
        "To increase randomness.",
        "To reduce computational and environmental impact.",
        "To ensure foundation LLM usage.",
        "To maximize token usage.",
      ],
      correctIndex: 1,
      explanation:
        "Testers should select right-sized models to reduce computational overhead/energy consumption. Distractors: A is negative; C is restrictive; D is inefficient.",
    },
    {
      id: "q-5-22",
      code: "EX-5-22",

      text: "What is a Prompt Pattern?",
      options: [
        "A recurring reasoning error.",
        "A reusable template for effective prompts.",
        "A back-end vulnerability.",
        "A token prediction sequence.",
      ],
      correctIndex: 1,
      explanation:
        "A prompt pattern is a reusable template for crafting effective prompts. Distractors: A is a defect; C is a threat; D is an internal process of the model.",
    },
    {
      id: "q-5-23",
      code: "EX-5-23",

      text: "How should teams develop GenAI know-how?",
      options: [
        "Theory only.",
        "Hands-on practice with guided exercises.",
        "Waiting for managers.",
        "Replacing the team.",
      ],
      correctIndex: 1,
      explanation:
        "A hands-on approach involves practicing with various models and guided exercises. Distractors: A lacks practice; C and D are anti-patterns for team capability.",
    },
    {
      id: "q-5-24",
      code: "EX-5-24",

      text: "What is the role of Internal Communities of Practice?",
      options: [
        "Enforce legal penalties.",
        "Support knowledge sharing and prompt libraries.",
        "Develop foundation models.",
        "Execute all AI tests manually.",
      ],
      correctIndex: 1,
      explanation:
        "Communities of practice support ongoing knowledge sharing and libraries. Distractors: A is for Legal/IT; C is for model developers; D is manual regression.",
    },
    {
      id: "q-5-25",
      code: "EX-5-25",

      text: "As GenAI is integrated, testers evolve into:",
      options: [
        "Hardware engineers.",
        "AI-assisted test specialists.",
        "Data entry clerks.",
        "Prompt-only engineers.",
      ],
      correctIndex: 1,
      explanation:
        "Testers evolve to AI-assisted specialists who guide and verify. Distractors: A, C, and D describe roles that move away from testing expertise.",
    },

    {
      id: "q-5-26",
      code: "EX-5-26",

      text: "What is a new responsibility for Test Managers?",
      options: [
        "Running regressions manually.",
        "Developing AI-based test strategy and governance.",
        "Writing transformer code.",
        "Eliminating risk-based testing.",
      ],
      correctIndex: 1,
      explanation:
        "Managers now develop AI-based strategy, risk management, and governance. Distractors: A is regression; C is development; D is a violation of testing principles.",
    },
    {
      id: "q-5-27",
      code: "EX-5-27",

      text: "Managing a hybrid team means coordinating:",
      options: [
        "Developers and testers.",
        "Manual and rule-based automation.",
        "Humans and GenAI-powered test agents.",
        "In-house and offshore staff.",
      ],
      correctIndex: 2,
      explanation:
        "Managers coordinate human testers and GenAI-powered test agents. Distractors: A, B, and D are traditional team structures.",
    },
    {
      id: "q-5-28",
      code: "EX-5-28",

      text: "Which new asset must testers help maintain?",
      options: [
        "Relational databases.",
        "Test-specific prompt libraries.",
        "GPU cooling systems.",
        "Pre-training datasets.",
      ],
      correctIndex: 1,
      explanation:
        "Testers now maintain test-specific prompt libraries. Distractors: A is IT/DBA; C is Facilities/IT; D is for model providers.",
    },
    {
      id: "q-5-29",
      code: "EX-5-29",

      text: "To support GenAI adoption, teams must maintain:",
      options: [
        "Only AI literacy.",
        "Traditional testing skills and AI literacy.",
        "No traditional skills.",
        "Knowledge of one LLM only.",
      ],
      correctIndex: 1,
      explanation:
        "Managers must ensure teams maintain both traditional competencies and AI literacy. Distractors: A, C, and D describe imbalanced or overly narrow skillsets.",
    },
    {
      id: "q-5-30",
      code: "EX-5-30",

      text: "Scenario: Measuring time saved by GenAI vs manual work is an example of:",
      options: [
        "A prompt pattern.",
        "A measurable test objective and metric.",
        "Shadow AI.",
        "Data minimization.",
      ],
      correctIndex: 1,
      explanation:
        "This follows the strategy of defining measurable objectives (productivity) and metrics. Distractors: A is a template; C is unauthorized use; D is data reduction.",
    },

    {
      id: "q-5-31",
      code: "EX-5-31",

      text: "Which measure helps avoid Shadow AI?",
      options: [
        "Disabling internet access.",
        "A structured GenAI strategy and roadmap.",
        "Encouraging any tool usage.",
        "Reducing AI budgets.",
      ],
      correctIndex: 1,
      explanation:
        "A strategy and steps for integration help avoid Shadow AI. Distractors: A and D are counter-productive; C is Shadow AI.",
    },
    {
      id: "q-5-32",
      code: "EX-5-32",

      text: "What is a key environmental consideration?",
      options: [
        "Website theme color.",
        "Balancing benefits with cost and energy use.",
        "Daylight-only usage.",
        "Avoiding neural networks.",
      ],
      correctIndex: 1,
      explanation:
        "This involves balancing benefits with cost and energy consumption. Distractors: A and C are irrelevant/illogical; D is not how GenAI works.",
    },
    {
      id: "q-5-33",
      code: "EX-5-33",

      text: "Which skill involves knowing how much text a model can process?",
      options: [
        "Embedding visualization.",
        "Understanding context windows.",
        "Token-free prompting.",
        "Fine-tuning validation.",
      ],
      correctIndex: 1,
      explanation:
        "Integration requires mastering techniques and understanding context windows. Distractors: A and D are technical backend processes; C is non-existent.",
    },
    {
      id: "q-5-34",
      code: "EX-5-34",

      text: "Scenario: Sharing a reusable API test prompt template is an example of:",
      options: [
        "A reasoning error.",
        "A prompt pattern library.",
        "Retrieval-augmented generation.",
        "Shadow AI.",
      ],
      correctIndex: 1,
      explanation:
        "Sharing libraries of prompt patterns is a key strategy for capability. Distractors: A is an error; C is a retrieval technique; D is an unauthorized use.",
    },
    {
      id: "q-5-35",
      code: "EX-5-35",

      text: "The Initiation phase focuses on:",
      options: [
        "Learning definitions.",
        "Identifying and prioritizing use cases.",
        "Continuous monitoring.",
        "Replacing managers.",
      ],
      correctIndex: 1,
      explanation:
        "Initiation focuses on identifying and prioritizing use cases. Distractors: A is Discovery; C is Utilization; D is not part of adoption.",
    },

    {
      id: "q-5-36",
      code: "EX-5-36",

      text: "Why is domain expertise still essential?",
      options: [
        "To bypass context windows.",
        "To evaluate and verify AI-generated testware.",
        "To write vector DB code.",
        "It is no longer essential.",
      ],
      correctIndex: 1,
      explanation:
        "Testers combine domain expertise with AI skills to evaluate and verify output. Distractors: A and C are technical backend tasks; D ignores the risk of hallucinations.",
    },
    {
      id: "q-5-37",
      code: "EX-5-37",

      text: "What are Quality Gates in a GenAI strategy?",
      options: [
        "Physical security locks.",
        "Reviews ensuring compliance and quality.",
        "Token limits.",
        "Generation speed.",
      ],
      correctIndex: 1,
      explanation:
        "Strategy should include quality gates with review of generated testware. Distractors: A is physical; C is a quota; D is latency.",
    },
    {
      id: "q-5-38",
      code: "EX-5-38",

      text: "Which criterion focuses on troubleshooting guides and user groups?",
      options: [
        "Model performance.",
        "Community and support.",
        "Fine-tuning potential.",
        "Recurring cost.",
      ],
      correctIndex: 1,
      explanation:
        "This refers to active community support and documentation to aid troubleshooting. Distractors: A, C, and D are different evaluation criteria.",
    },
    {
      id: "q-5-39",
      code: "EX-5-39",

      text: "Scenario: Using an on-prem open-source LLM mainly addresses:",
      options: [
        "Model performance.",
        "Data privacy and security risks.",
        "Few-shot prompting needs.",
        "Lack of domain expertise.",
      ],
      correctIndex: 1,
      explanation:
        "In-house infrastructure provides greater control to mitigate data privacy and security risks. Distractors: A and D are quality/skill concerns; C is a prompting technique.",
    },
    {
      id: "q-5-40",
      code: "EX-5-40",

      text: "What is the ultimate goal of a GenAI roadmap?",
      options: [
        "100% AI-only testing.",
        "Sustainable, scalable benefits through structured integration.",
        "Largest possible context window.",
        "Eliminating certifications.",
      ],
      correctIndex: 1,
      explanation:
        "Integration ensures sustainable benefits and scalability. Distractors: A is not the goal (hybrid teams are); C and D are incorrect or undesirable.",
    },
  ],
};
