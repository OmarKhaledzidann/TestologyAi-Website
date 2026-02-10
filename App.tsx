import React, { useState, useEffect } from "react";
import { PRACTICE_CHAPTERS } from "./data/chapter/chapters";
import { FaYoutube, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  BrainCircuit,
  MessageSquareText,
  Network,
  ShieldCheck,
  Briefcase,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  Bot,
  Layers,
  Award,
} from "lucide-react";
import { Question, Chapter, QuizState, ViewState, AIConfig } from "./types";
import FlipTimer from "./FlipTimer";
const Button: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  className?: string;
  disabled?: boolean;
}> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
}) => {
  const baseStyle =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200 hover:shadow-indigo-300",
    secondary:
      "bg-white text-indigo-600 border border-indigo-100 hover:bg-indigo-50 hover:border-indigo-200 shadow-sm",
    ghost: "text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/50",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    soft: "bg-transparent text-indigo-600 hover:bg-indigo-50",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}> = ({ children, className = "", onClick, hoverable = false }) => {
  return (
    <div
      onClick={onClick}
      className={`glass-card bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 
        ${
          hoverable
            ? "cursor-pointer hover:shadow-[0_8px_30px_rgb(79,70,229,0.1)] hover:-translate-y-1 transition-all duration-300"
            : ""
        } 
        ${className}`}
    >
      {children}
    </div>
  );
};

const Header: React.FC<{
  currentView: ViewState;
  onHome: () => void;
  onChapters: () => void;
  onGenerate: () => void;
}> = ({ currentView, onHome, onChapters, onGenerate }) => (
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-12 md:h-14">
    <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
      
      <div onClick={onHome} className="flex items-center gap-2 cursor-pointer">
        <img
          src="/assets/logo.png"
          alt="AIXam Logo"
          className="w-8 h-8 object-contain"
        />
        <span className="font-bold text-base">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
           <span className="text-xl font-semibold text-black">TestologyAI</span>
          </span>
        </span>
      </div>

      {/* Nav */}
      <nav className="hidden md:flex items-center gap-12 text-sm">
  <span
    onClick={onHome}
    className={`cursor-pointer text-lg font-semibold ${
      currentView === "HOME"
        ? "text-indigo-600 font-medium"
        : "text-slate-500 hover:text-indigo-600"
    }`}
  >
    Home
  </span>

  <span
    onClick={onChapters}
    className={`cursor-pointer text-lg font-semibold ${
      currentView === "CHAPTERS"
        ? "text-indigo-600 font-medium"
        : "text-slate-500 hover:text-indigo-600"
    }`}
  >
    Chapters
  </span>
</nav>

      {/* Avatar */}
      <a
  href="https://www.linkedin.com/in/omar-zidan-%F0%9F%8D%89-56b851108"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="/assets/omar.jpg"
    className="w-12 h-12 rounded-full object-cover border cursor-pointer hover:scale-105 transition"
    alt="Omar LinkedIn"
  />
</a>


    </div>
  </header>
);
const Footer = () => {
  return (
    <footer className="md:fixed static bottom-0 left-0 right-0 border-t border-slate-200 bg-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
        {/* Icons */}
        <div className="flex items-center gap-8">
          <a
            href="https://youtube.com/@testologygeeks?si=G00dkV08idhW44vD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-red-600 transition"
          >
            <FaYoutube className="w-7 h-7 text-red-600 hover:text-red-700" />
          </a>

          <a
            href="https://www.linkedin.com/in/omar-zidan-%F0%9F%8D%89-56b851108"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-600 transition"
          >
            <FaLinkedin className="w-7 h-7 text-blue-700 hover:text-blue-800" />
          </a>

          <a
            href="https://www.facebook.com/groups/750516570186092"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-700 transition"
          >
            <FaFacebook className="w-7 h-7 text-blue-600 hover:text-blue-700" />
          </a>

          <a
            href="https://chat.whatsapp.com/DkquGZvYaVl6LhhWE7CznY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-green-600 transition"
          >
            <FaWhatsapp className="w-7 h-7 text-green-500 hover:text-green-600" />
          </a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Logic ---

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="px-6 py-4 rounded-2xl bg-white shadow border">
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm text-slate-500">{label}</div>
  </div>
);

const Badge = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`px-5 py-3 rounded-2xl bg-white shadow text-center text-indigo-600 font-semibold ${className}`}
  >
    {children}
  </div>
);
const Celebration = () => {
  const emojis = ["🎉", "🎈"];

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {/* 🎆 FIREWORKS */}
      {[...Array(8)].map((_, i) => (
        <span
          key={`fw-${i}`}
          className="firework"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            animationDelay: `${Math.random() * 1.5}s`,
          }}
        />
      ))}

      {/* 🎉 FLOATING EMOJIS */}
      {[...Array(40)].map((_, i) => (
        <span
          key={`emoji-${i}`}
          className="celebration-emoji"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 1.5}s`,
            fontSize: `${24 + Math.random() * 22}px`,
          }}
        >
          {emojis[Math.floor(Math.random() * emojis.length)]}
        </span>
      ))}
    </div>
  );
};
const ChapterOptionsPage = ({
  startChapter,
  startChapterExam,
}: {
  startChapter: (chapter: Chapter) => void;
  startChapterExam: (chapter: Chapter) => void;
}) => {
  const { chapterId } = useParams();
  const navigate = useNavigate();

  const chapter =
    PRACTICE_CHAPTERS.find((c) => c.id === chapterId) || null;

  if (!chapter) {
    navigate("/chapters", { replace: true });
    return null;
  }

  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/backGround.png')" }}
    >
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <h2 className="text-4xl font-bold text-slate-900 mb-3 text-center">
          {chapter.title}
        </h2>

        <p className="text-slate-500 text-center mb-16">
          Choose how you want to start this chapter
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

          <Card
            hoverable
            onClick={() => startChapter(chapter)}
            className="text-center py-16"
          >
            <Bot className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-3">Practice Mode</h3>
            <p className="text-slate-500 mb-8">
              Learn step by step with practice questions.
            </p>
            <Button className="w-full justify-center">Start Practice</Button>
          </Card>

          {chapter.exam && (
            <Card
              hoverable
              onClick={() => startChapterExam(chapter)}
              className="
  text-center
  py-10 md:py-16
  px-6
"
            >
              <Award className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">Exam Mode</h3>
              <p className="text-slate-500 mb-8">
                Simulate the real certification exam.
              </p>
              <Button className="w-full justify-center">Start Exam</Button>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};
const BackButton = ({
  isInQuiz,
  onExitQuiz,
}: {
  isInQuiz: boolean;
  onExitQuiz: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        if (isInQuiz) {
          onExitQuiz();
        } else {
          navigate(-1);
        }
      }}
      className="
        group
        fixed z-50
        top-14 left-3        /* 📱 موبايل */
        md:top-20 md:left-6  /* 💻 ديسكتوب */

        flex items-center gap-2
        px-4 py-2            /* 📱 */
        md:px-5 md:py-2.5    /* 💻 */

        rounded-full
        bg-gradient-to-r from-indigo-600 to-violet-600
        text-white font-semibold
        text-sm md:text-base

        shadow-lg
        border border-transparent
        transition-all duration-300
        active:scale-95

        hover:bg-white
        hover:text-transparent
        hover:bg-clip-text
        hover:border-indigo-300
      "
    >
      <ChevronRight
        className="
          w-4 h-4 rotate-180
          text-white
          transition-colors duration-300
          group-hover:text-indigo-600
        "
      />
      Back
    </button>
  );
};


export default function App() {
  const [view, setView] = useState<ViewState>("HOME");
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);
  const [isExamMode, setIsExamMode] = useState(false);
  const QUIZ_STORAGE_KEY = "testology_quiz_state";
  const navigate = useNavigate();
  const [quizState, setQuizState] = useState<QuizState>({
    answers: [],
    isSubmitted: false,
    score: 0,
  });

  const [aiConfig, setAiConfig] = useState<AIConfig>({
    isLoading: false,
    error: null,
  });

  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<null | "HOME" | "CHAPTERS">(null);
const location = useLocation();

const isInQuiz = location.pathname === "/quiz";

const hideBackButton =
  location.pathname === "/" ||
  location.pathname === "/quiz" ||
  location.pathname === "/results";


  /* ================= TIMER ================= */
  const EXAM_DURATION = 60 * 60; // 60 minutes
  const [timeLeft, setTimeLeft] = useState<number | null>(null);


  useEffect(() => {
    if (timeLeft === null) return;

    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [view]);
  useEffect(() => {
  if (!isInQuiz) return;

  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
  };

  window.addEventListener("beforeunload", handleBeforeUnload);

  return () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };
}, [isInQuiz]);
useEffect(() => {
  if (!isInQuiz) return;

  const handlePopState = (e: PopStateEvent) => {
    e.preventDefault();

    // كل مرة نرجّع state جديد
    window.history.pushState(null, "", window.location.href);

    // وكل مرة نطلع المودال
    setPendingNavigation("HOME");
    setShowExitConfirm(true);
  };

  window.addEventListener("popstate", handlePopState);

  return () => {
    window.removeEventListener("popstate", handlePopState);
  };
}, [isInQuiz]);

useEffect(() => {
  if (!activeChapter || currentQuestions.length === 0) return;

  sessionStorage.setItem(
    QUIZ_STORAGE_KEY,
    JSON.stringify({
      activeChapter,
      currentQuestions,
      quizState,
      isExamMode,
      timeLeft,
    })
  );
}, [activeChapter, currentQuestions, quizState, isExamMode, timeLeft]);
useEffect(() => {
  const saved = sessionStorage.getItem(QUIZ_STORAGE_KEY);
  if (!saved) return;

  const data = JSON.parse(saved);

  setActiveChapter(data.activeChapter);
  setCurrentQuestions(data.currentQuestions);
  setQuizState(data.quizState);
  setIsExamMode(data.isExamMode);
  setTimeLeft(data.timeLeft ?? null);

  // لو كان في Quiz قبل الريلود
  if (location.pathname === "/quiz" || location.pathname === "/results") {
    navigate(location.pathname, { replace: true });
  }
}, []);


  const confirmExit = () => {
  setShowExitConfirm(false);

  setActiveChapter(null);
  setCurrentQuestions([]);
  setQuizState({ answers: [], isSubmitted: false, score: 0 });
  setTimeLeft(null);
  setIsExamMode(false);

  if (pendingNavigation === "HOME") navigate("/");
  if (pendingNavigation === "CHAPTERS") navigate("/chapters");

  setPendingNavigation(null);
};

const cancelExit = () => {
  setShowExitConfirm(false);
  setPendingNavigation(null);
};


  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BrainCircuit":
        return <BrainCircuit className="w-6 h-6" />;
      case "MessageSquareText":
        return <MessageSquareText className="w-6 h-6" />;
      case "Network":
        return <Network className="w-6 h-6" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6" />;
      default:
        return <Layers className="w-6 h-6" />;
    }
  };

  const startChapter = (chapter: Chapter) => {
    setActiveChapter(chapter);
    setCurrentQuestions(chapter.questions);
    setQuizState({
      answers: new Array(chapter.questions.length).fill(null),
      isSubmitted: false,
      score: 0,
    });
    navigate("/quiz", { replace: false });
window.history.pushState(null, "", window.location.href);
  };
  const startChapterExam = (chapter: Chapter) => {
    if (!chapter.exam) return;

    setIsExamMode(true); // ✅ تايمر يشتغل في الاتنين
    setActiveChapter(chapter.exam);
    setCurrentQuestions(chapter.exam.questions);

    setQuizState({
      answers: new Array(chapter.exam.questions.length).fill(null),
      isSubmitted: false,
      score: 0,
    });

    setTimeLeft(EXAM_DURATION);
    navigate("/quiz", { replace: false });
window.history.pushState(null, "", window.location.href);
  };

  const handleGenerateAI = async () => {
    setAiConfig({ isLoading: true, error: null });
    try {
      // Simulate selecting a random topic or comprehensive
      const questions = await generateQuestions(
        "General Generative AI Concepts for Certification"
      );
      const generatedChapter: Chapter = {
        id: "ai-generated",
        title: "AI Generated Practice",
        description: "Custom questions generated by Gemini just for you.",
        icon: "Sparkles",
        questions: questions,
      };
      startChapter(generatedChapter);
    } catch (err) {
      setAiConfig({
        isLoading: false,
        error: "Failed to generate questions. Please try again.",
      });
    } finally {
      setAiConfig((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleAnswerSelect = (questionIndex: number, optionIndex: number) => {
    if (quizState.isSubmitted) return;

    const newAnswers = [...quizState.answers];
    newAnswers[questionIndex] = optionIndex;
    setQuizState({ ...quizState, answers: newAnswers });
  };

  const handleSubmit = () => {
    let score = 0;
    currentQuestions.forEach((q, idx) => {
      if (quizState.answers[idx] === q.correctIndex) {
        score++;
      }
    });

    const percentage = (score / currentQuestions.length) * 100;
    const isFinalExam = isExamMode;

    setQuizState({ ...quizState, isSubmitted: true, score });
    navigate("/results");

    // ✅ لفوق فورًا بعد السبمت
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });

    // 🎆 Celebration
    if (percentage >= 80) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 5000);
    }
  };

  // --- Views ---
  const renderHome = () => (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />

      <div className="
  relative max-w-7xl mx-auto
  px-4 sm:px-6
  pt-20 sm:pt-24
  grid grid-cols-1 lg:grid-cols-2
  gap-16 lg:gap-28
  items-center
">

        {/* ================= LEFT ================= */}
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
            ✨ AI-Powered Certification Prep
          </span>

          <h1 className="
  text-4xl sm:text-5xl lg:text-6xl
  font-bold leading-tight text-slate-900
">

            Discover Smarter <br />
            Learning With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              AI
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl">
            Prepare for your Gen AI certification with chapter-based practice
            and AI-generated questions tailored to your learning journey.
          </p>

          <div className="flex items-center gap-6">
            <Button
  onClick={() => navigate("/chapters")}
  className="
    px-10 rounded-full
    bg-indigo-600 text-white hover:bg-indigo-700
    w-full sm:w-auto
  "
>
  Get Started <ArrowRight className="w-5 h-5" />
</Button>
          </div>
        </div>
        {/* ================= RIGHT ================= */}
        <div className="relative flex justify-center">
          {/* Glow خلف الروبوت */}
          <div className="
  absolute
  w-[320px] h-[320px]
  sm:w-[420px] sm:h-[420px]
  md:w-[520px] md:h-[520px]
  lg:w-[720px] lg:h-[720px]
  bg-indigo-200/40
  rounded-full
  blur-3xl
  pointer-events-none
"/>


          <div className="relative">
            {/* Badge فوق */}
            <div
              className="
 absolute -top-10 left-1/2
  -translate-x-1/2 translate-x-9
  bg-white/95 backdrop-blur
  px-6 py-3 rounded-2xl
  shadow-lg
  text-slate-900
  font-semibold
  animate-float
"
            >
              <div className="text-sm tracking-wide">Hi👋</div>
              <div className="text-xs font-bold tracking-wider text-slate-700">
                I'm Za'atar
              </div>
            </div>

 <img
  src="/assets/robot.png"
  alt="AI Robot"
  className="
    w-[720px]
    max-w-none

    scale-[0.55]        /* 📱 موبايل */
    sm:scale-[0.7]      /* موبايل كبير */
    md:scale-[0.85]     /* تابلت */
    lg:scale-100        /* ديسكتوب */

    animate-float
    drop-shadow-2xl
    relative
    z-10
    origin-center
  "
/>

          </div>
        </div>
      </div>
    </section>
  );
const chapterNumbers = [
  "/assets/one.png",
  "/assets/two.png",
  "/assets/three.png",
  "/assets/four.png",
  "/assets/five.png",
  "/assets/logo.png",
];

  const renderChapters = () => (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: "url('/assets/backGround.png')",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-6 pt-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* ================= LEFT ================= */}
          <div className="space-y-6 mt-6">
            <h2 className="text-4xl font-bold text-slate-900">
              Choose a Chapter
            </h2>

            <p className="text-slate-500 mb-6">
              Select a chapter to start practicing.
            </p>
            {PRACTICE_CHAPTERS.map((chapter, index) => (
              <div
                key={chapter.id}
                onClick={() => {
                  if (chapter.id === "GenAI-Mock-exam") {
                    startChapterExam(chapter); // ✅ Exam Mode + Timer
                  } else {
navigate(`/chapters/${chapter.id}`);
                  }
                }}
                className={`
                              px-6 py-5 rounded-2xl backdrop-blur-md
                              cursor-pointer transition-all duration-300 w-full
                              ${
                                index === 1
                                  ? "bg-[#FFF4D6]"
                                  : index === 2
                                  ? "bg-[#EAF6FF]"
                                  : index === 3
                                  ? "bg-[#FFEAEA]"
                                  : index === 4
                                  ? "bg-[#F3EDFF]"
                                  : index === 5
                                  ? "bg-[#E6FFFA]"
                                  : "bg-white/90"
                              }
                              hover:scale-[1.02]
                        
                            `}
              >
                <div className="flex items-center gap-4">
<div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow">
  {index < 6  ? (
    <img
      src={chapterNumbers[index]}
      alt={`Chapter ${index + 1}`}
      className="w-6 h-6 object-contain"
    />
  ) : (
    <Bot className="w-5 h-5 text-indigo-600" />
  )}
</div>

                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {chapter.title}
                    </h4>
                    <span className="text-sm text-slate-500">
                      Click to choose mode
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Generate AI */}
            {/*<button
              onClick={handleGenerateAI}
              disabled={aiConfig.isLoading}
              className="
              mt-6 w-full
              flex items-center justify-center gap-3
              bg-green-500 hover:bg-green-600
              text-white py-5 rounded-2xl
              font-semibold transition
            "
            >
              <Sparkles className="w-5 h-5" />
              {aiConfig.isLoading ? "Generating..." : "Generate AI Questions"}
            </button>*/}
          </div>

          {/* ================= RIGHT (ROBOT SAME AS HOME) ================= */}
          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="
  absolute
  w-[320px] h-[320px]
  sm:w-[420px] sm:h-[420px]
  md:w-[520px] md:h-[520px]
  lg:w-[720px] lg:h-[720px]
  bg-indigo-200/40
  rounded-full
  blur-3xl
  pointer-events-none
"/>


            <img
              src="/assets/robot.png"
              alt="AI Robot"
              className="w-[720px] max-w-none animate-float drop-shadow-2xl fixed z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
  const OptionCard = ({
    text,
    selected,
    onClick,
  }: {
    text: string;
    selected: boolean;
    onClick: () => void;
  }) => (
    <div
      onClick={onClick}
      className={`
      rounded-2xl border p-4 cursor-pointer transition-all
      ${
        selected
          ? "border-indigo-600 bg-indigo-50 shadow"
          : "border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50"
      }
    `}
    >
      <div className="flex items-center gap-3">
        <div
          className={`
          w-5 h-5 rounded-full border flex items-center justify-center
          ${selected ? "border-indigo-600 bg-indigo-600" : "border-slate-400"}
        `}
        >
          {selected && <div className="w-2 h-2 rounded-full bg-white" />}
        </div>

        <span className="text-slate-700 text-sm">{text}</span>
      </div>
    </div>
  );


  const QuizHeader = ({
    title,
    answered,
    total,
    isFinalExam,
  }: {
    title?: string;
    answered: number;
    total: number;
    isFinalExam: boolean;
  }) => (
    <Card className="mb-8 bg-indigo-50 border border-indigo-100">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-indigo-700">{title}</h4>

            {isFinalExam && (
              <span
                className="
              px-3 py-1 rounded-full
              bg-red-50 text-red-700
              text-xs font-bold
            "
              >
                Final Mock Exam
              </span>
            )}
          </div>

          <p className="text-sm text-slate-500">
            {isFinalExam ? "Exam Mode" : "Practice Mode"}
          </p>
        </div>

        <Badge>
          {answered} / {total}
        </Badge>
      </div>
    </Card>
  );
  

  /* ================= QUIZ RENDER ================= */
  const renderQuiz = () => {
    const isFinalExam = activeChapter?.id.includes("exam") ?? false;

    return (
      <section
        className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{ backgroundImage: "url('/assets/backGround.png')" }}
      >
       
{isFinalExam && timeLeft !== null && (
  <div
    className="
      fixed
      top-16
      right-3
      z-50

      scale-[0.65]
      sm:scale-90
      md:scale-100

      origin-top-right
      bg-white/90
      backdrop-blur
      rounded-xl
      shadow-lg
      px-2 py-1
    "
  >
    <FlipTimer timeLeft={timeLeft} />
  </div>
)}


        {/* ===== FLOATING HALF ROBOT ===== */}
        <img
          src="/assets/halfRobot.png"
          alt="AI Robot"
          className="
          fixed right-8 top-1/2 translate-y-8
          w-40 lg:w-48 xl:w-56
          z-20 pointer-events-none"
        />

        <div className="max-w-4xl mx-auto px-6 pt-14 pb-32 space-y-10">
          {/* ===== TOP INFO ===== */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl px-6 py-4 flex items-center justify-between shadow-sm">
            <div>
              <h2 className="font-bold text-lg text-indigo-600">
                {activeChapter?.title}
              </h2>
              <p className="text-sm text-slate-500">
                {isFinalExam ? "Exam Mode" : "Practice Mode"}
              </p>
            </div>

            <span className="text-sm font-semibold text-slate-500">
              {quizState.answers.filter((a) => a !== null).length} /{" "}
              {currentQuestions.length}
            </span>
          </div>

          {/* ===== QUESTIONS ===== */}
          {currentQuestions.map((q, qIdx) => (
            <div
              key={q.id}
              className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-slate-400">
                  Q{qIdx + 1}
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-semibold">
                  {q.kLevel}
                </span>
              </div>

              <h3 className="font-semibold text-slate-800 mb-6">{q.text}</h3>

              <div className="space-y-3">
                {q.options.map((opt, oIdx) => {
                  const selected = quizState.answers[qIdx] === oIdx;

                  return (
                    <div
                      key={oIdx}
                      onClick={() => handleAnswerSelect(qIdx, oIdx)}
                      className={`
                      flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer
                      border transition
                      ${
                        selected
                          ? "border-indigo-500 bg-indigo-50"
                          : "border-slate-200 hover:bg-slate-50"
                      }
                    `}
                    >
                      <div
                        className={`
                        w-4 h-4 rounded-full border flex items-center justify-center
                        ${
                          selected
                            ? "border-indigo-500 bg-indigo-500"
                            : "border-slate-400"
                        }
                      `}
                      >
                        {selected && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>

                      <span className="text-sm text-slate-700">{opt}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* ===== SUBMIT ===== */}
          <div className="flex justify-end pt-6">
            <Button
              className="px-14 rounded-full"
              disabled={quizState.answers.includes(null)}
              onClick={handleSubmit}
            >
              Submit
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    );
  };
  const handleRetry = () => {
    setQuizState({
      answers: new Array(currentQuestions.length).fill(null),
      isSubmitted: false,
      score: 0,
    });

    if (activeChapter?.id.includes("exam")) {
      setTimeLeft(EXAM_DURATION);
    }

    navigate("/quiz");
  };

  const renderResults = () => {
    const percentage = Math.round(
      (quizState.score / currentQuestions.length) * 100
    );
    const showCelebration = percentage >= 80;

    const isPassing = percentage >= 70;

    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
          {/* ===== Score Box ===== */}
          <div className="relative bg-indigo-900 rounded-3xl p-10 text-white text-center mb-14 overflow-hidden">
            <img
              src="/assets/halfRobot.png"
              className="absolute right-8 top-6 w-28 opacity-90"
            />

            <div className="relative z-10">
              <div className="text-4xl font-bold mb-2">{percentage}%</div>
              <p className="text-indigo-200 mb-6">
                You scored {quizState.score} out of {currentQuestions.length}
              </p>

              <div className="flex justify-center gap-4">
                <Button variant="secondary" onClick={handleRetry}>
                  <RotateCcw className="w-4 h-4" />
                  Retry
                </Button>
                <Button onClick={() => navigate("/chapters")}>
                  Back to Chapters
                </Button>
              </div>
            </div>
          </div>

          {/* ===== Answer Review ===== */}
          <h3 className="text-2xl font-bold mb-6">Answer Review</h3>

          <div className="space-y-6">
            {currentQuestions.map((q, qIdx) => {
              const userAnswer = quizState.answers[qIdx];
              const isCorrect = userAnswer === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className={`bg-white rounded-2xl p-6 border-l-4 shadow-sm
                  ${isCorrect ? "border-green-300" : "border-red-300"}
                `}
                >
                  <h4 className="font-semibold mb-3">{q.text}</h4>

                  {!isCorrect && (
                    <div className="text-sm mb-2 bg-red-50 text-red-700 px-3 py-2 rounded-lg w-fit">
                      Your Answer: {q.options[userAnswer ?? 0]}
                    </div>
                  )}

                  <div className="text-sm bg-green-50 text-green-700 px-3 py-2 rounded-lg w-fit mb-3">
                    Correct Answer: {q.options[q.correctIndex]}
                  </div>

                  <p className="text-sm text-slate-600">{q.explanation}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
const ExitConfirmModal = ({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => void;
  onCancel: () => void;
}) => (
  <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-center justify-center">
    <div className="bg-white rounded-3xl w-[440px] p-8 shadow-2xl border border-slate-100">
      
      {/* Icon */}
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
        <XCircle className="w-7 h-7 text-red-500" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-slate-800 text-center mb-2">
        Leave Quiz?
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-600 text-center leading-relaxed mb-8">
        You’re about to leave the current session.<br />
        Your progress and selected answers will be
        <span className="font-semibold text-slate-800"> permanently discarded</span>.
      </p>

      {/* Actions */}
      <div className="flex gap-4">
        <Button
          variant="secondary"
          className="w-full"
          onClick={onCancel}
        >
          Stay & Continue
        </Button>

        <Button
          className="w-full bg-red-600 hover:bg-red-700 text-white"
          onClick={onConfirm}
        >
          Exit Quiz
        </Button>
      </div>
    </div>
  </div>
);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
     <Header
        currentView={view}
        onHome={() => {
          if (isInQuiz) {
            setPendingNavigation("HOME");
            setShowExitConfirm(true);
          } else {
            navigate("/");
          }
        } }
        onChapters={() => {
          if (isInQuiz) {
            setPendingNavigation("CHAPTERS");
            setShowExitConfirm(true);
          } else {
            navigate("/chapters");
          }
        } } onGenerate={function (): void {
          throw new Error("Function not implemented.");
        } }/>

 {!hideBackButton && (
      <BackButton
        isInQuiz={isInQuiz}
        onExitQuiz={() => {
          setPendingNavigation("HOME");
          setShowExitConfirm(true);
        }}
      />
    )}

{showExitConfirm && (
  <ExitConfirmModal
    onConfirm={confirmExit}
    onCancel={cancelExit}
  />
)}


      {showCelebration && <Celebration />}
     <main className="animate-in fade-in slide-in-from-bottom-4 duration-500">
  <Routes>
    <Route path="/" element={renderHome()} />
    <Route path="/chapters" element={renderChapters()} />
    <Route path="/quiz" element={renderQuiz()} />
    <Route path="/results" element={renderResults()} />
    <Route path="*" element={<Navigate to="/" />} />
    <Route
  path="/chapters/:chapterId"
  element={<ChapterOptionsPage
      startChapter={startChapter}
      startChapterExam={startChapterExam}
    />
  }
/>

  </Routes>
</main>
      <Footer />
    </div>
  );
}
