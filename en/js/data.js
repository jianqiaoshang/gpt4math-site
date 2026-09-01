(function () {
  "use strict";

  window.AI_MATH_DATA = {
    categories: [
      {
        slug: "formal-proof",
        name: "Wellsprings",
        colorName: "Glacial Cyan",
        color: "#8FD3E8",
        intro: "The mathematical logic, theory of computation, neural networks, and early automated-reasoning techniques on which AI relies when working on mathematical problems."
      },
      {
        slug: "symbolic-computation",
        name: "Charted Channels",
        colorName: "Channel Blue",
        color: "#356C9B",
        intro: "The development of formal proof: formal languages, proof assistants, mathematical libraries, and automated theorem-proving systems."
      },
      {
        slug: "automated-reasoning",
        name: "Distant Tributaries",
        colorName: "Teal Green",
        color: "#3FA58C",
        intro: "Major breakthroughs achieved by AI in fields beyond mathematics."
      },
      {
        slug: "scientific-discovery",
        name: "Rising Currents",
        colorName: "Vivid Ultramarine",
        color: "#3467D6",
        intro: "The birth and development of large language models."
      },
      {
        slug: "foundation-models",
        name: "In the Same Boat",
        colorName: "Warm Golden Orange",
        color: "#D99A36",
        intro: "How LLMs serve as research assistants to mathematicians by helping them find literature, understand concepts, solve exercises, and write programs."
      },
      {
        slug: "human-ai-collaboration",
        name: "New Rivers",
        colorName: "Deep Purple-Red",
        color: "#8E477F",
        intro: "Cases in which AI independently discovers new constructions, counterexamples, proofs, and other original mathematical results."
      },
      {
        slug: "norms-and-governance",
        name: "Firm Banks",
        colorName: "Rock-Bank Umber",
        color: "#A5684A",
        intro: "Goals, initiatives, declarations, and academic norms proposed by the mathematical community in response to artificial intelligence."
      },
      {
        slug: "undercurrents",
        name: "Undercurrents",
        colorName: "Charcoal",
        color: "#45484D",
        intro: "As AI demonstrates its power in mathematics, it is also creating a crisis around academic norms and the evaluation of results."
      }
    ],
    events: [
      ["1931-01", "formal-proof", true, "Gödel proves the incompleteness theorems", "https://plato.stanford.edu/entries/goedel-incompleteness/"],
      ["1936-05-28", "formal-proof", true, "Computability theory emerges", "https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf"],
      ["1943-12", "formal-proof", false, "McCulloch and Pitts propose binary formal neurons, establishing the mathematical starting point of artificial neural networks through logical networks", "https://doi.org/10.1007/BF02478259"],
      ["1950-10-01", "formal-proof", false, "Turing publishes “Computing Machinery and Intelligence,” using the imitation game to turn “Can machines think?” into an experimentally testable question", "https://academic.oup.com/mind/article/LIX/236/433/986238"],
      ["1956-06-15", "symbolic-computation", true, "Logic Theorist begins proving mathematical theorems automatically", "https://www.historyofinformation.com/detail.php?id=742"],
      ["1960s–1980s", "formal-proof", false, "Symbolic computation gradually becomes an important part of mathematical research"],
      ["1964-09-01", "formal-proof", false, "STUDENT reads and solves algebra word problems for the first time", "https://dspace.mit.edu/entities/publication/6ce87f48-f28a-46ca-85b8-ecdf887e735f"],
      ["1965-01-01", "symbolic-computation", false, "The resolution principle is proposed, establishing rules for automated proof", "https://dl.acm.org/doi/10.1145/321250.321253"],
      ["1967", "symbolic-computation", true, "Automath writes mathematics in a machine-checkable language", "https://research.tue.nl/en/publications/description-of-the-language-automath"],
      ["1970s–1990s", "symbolic-computation", false, "Proof assistants establish the “small trusted kernel” architecture"],
      ["1973-11-14", "symbolic-computation", false, "Machines begin to possess a readable mathematical library (Mizar)", "https://mizar.uwb.edu.pl/"],
      ["1976-06-21", "foundation-models", true, "The first computer-dependent proof appears (the Four Color Theorem)", "https://en.wikipedia.org/wiki/Four_color_theorem"],
      ["1976-07-01", "formal-proof", false, "AM attempts to discover mathematical concepts autonomously", "https://en.wikisource.org/wiki/File:ADA155378.djvu"],
      ["1980s–1990s", "formal-proof", false, "SAT and constraint solving"],
      ["1996-10-10", "human-ai-collaboration", true, "The automated theorem prover EQP proves the Robbins problem", "https://www.cs.unm.edu/~mccune/papers/robbins/"],
      ["1997-05-11", "automated-reasoning", true, "Deep Blue defeats the world chess champion", "https://research.ibm.com/publications/deep-blue"],
      ["2005-04", "symbolic-computation", true, "The Four Color Theorem receives complete machine-checked formal verification", "https://inria.hal.science/hal-04034866v1/document"],
      ["2012-09-20", "symbolic-computation", true, "The Feit–Thompson theorem is formally verified, showing that proof assistants can handle complex and profound results in modern mathematics", "https://github.com/math-comp/odd-order"],
      ["2013", "symbolic-computation", true, "Lean is introduced", "https://lean-lang.org/fro/about/"],
      ["2014-08-10", "symbolic-computation", true, "Flyspeck provides a complete formal verification of the Kepler conjecture", "https://arxiv.org/abs/1501.02155"],
      ["2015-09-21", "formal-proof", false, "GeoS approaches the level of an average test taker on SAT geometry questions", "https://www.washington.edu/news/2015/09/21/ai-system-solves-sat-geometry-questions-as-well-as-average-human-test-taker/"],
      ["2015-11-17", "formal-proof", false, "Todai Robot exceeds the average score on Japan’s university entrance examinations", "https://www.wired.com/story/ai-passes-japanese-university-entrance-exam"],
      ["2016-03-15", "automated-reasoning", true, "AlphaGo defeats Lee Sedol in a five-game match", "https://deepmind.google/blog/deep-reinforcement-learning/"],
      ["2017-01-20", "symbolic-computation", false, "Lean 3 is released", "https://lean-lang.org/doc/reference/latest/Introduction/"],
      ["2017-06-07", "formal-proof", false, "AI-MATHS takes the mathematics section of China’s Gaokao examination", "https://news.xinhuanet.com/english/2017-06/07/c_136347963.htm"],
      ["2017-06-12", "scientific-discovery", true, "The Transformer is introduced, laying the theoretical foundation for large language models", "https://arxiv.org/abs/1706.03762"],
      ["2017-07-21", "symbolic-computation", false, "The mathlib community forms", "https://github.com/leanprover-community/mathlib3"],
      ["2017-10-18", "automated-reasoning", true, "AlphaGo Zero replaces human game records with self-play", "https://deepmind.google/blog/alphago-zero-starting-from-scratch/"],
      ["2019-04-02", "formal-proof", false, "DeepMind releases the Mathematics Dataset, using a large collection of procedurally generated problems to evaluate neural networks’ mathematical reasoning and generalization", "https://arxiv.org/abs/1904.01557"],
      ["2019-09-07", "norms-and-governance", true, "The mathematical community sets the explicit goal of AI winning an IMO gold medal", "https://leanprover-community.github.io/archive/stream/113488-general/topic/IMO.20Grand.20Challenge.html"],
      ["2019-12-02", "formal-proof", false, "Neural networks begin directly performing complex symbolic integration and solving differential equations", "https://arxiv.org/abs/1912.01412"],
      ["2020-05-28", "scientific-discovery", true, "The GPT-3 paper is published, giving AI in-context learning capabilities", "https://arxiv.org/abs/2005.14165"],
      ["2020-09-07", "symbolic-computation", true, "Formal proof search begins drawing on language models (GPT-f)", "https://openai.com/index/generative-language-modeling-for-automated-theorem-proving/"],
      ["2020-11-30", "automated-reasoning", true, "AlphaFold 2 achieves a breakthrough in protein structure prediction", "https://deepmind.google/science/alphafold/"],
      ["2020-12-06", "symbolic-computation", true, "Scholze publicly challenges the formal-mathematics community to verify condensed mathematics", "https://github.com/leanprover-community/lean-liquid"],
      ["2022-01-28", "scientific-discovery", true, "Chain-of-thought prompting guides large language models to write intermediate steps, giving AI multi-step reasoning capabilities", "https://arxiv.org/abs/2201.11903"],
      ["2022-02-02", "automated-reasoning", false, "AlphaCode reaches the median level of competitive programmers", "https://deepmind.google/blog/competitive-programming-with-alphacode/"],
      ["2022-02-02", "symbolic-computation", false, "Neural models and Lean form a loop of verifiable proof", "https://openai.com/index/formal-math/"],
      ["2022-03-21", "scientific-discovery", false, "AI generates multiple reasoning paths and votes on the answer", "https://arxiv.org/abs/2203.11171"],
      ["2022-05-25", "symbolic-computation", false, "A method for automatically formalizing natural-language proofs is proposed", "https://arxiv.org/abs/2205.12615"],
      ["2022-06-30", "scientific-discovery", true, "Google releases the mathematical model Minerva, and AI begins solving mathematical problems systematically", "https://research.google/blog/minerva-solving-quantitative-reasoning-problems-with-language-models/"],
      ["2022-08-22", "automated-reasoning", true, "AI image generation enters public view (Stable Diffusion)", "https://stability.ai/news/stable-diffusion-public-release"],
      ["2022-10-05", "human-ai-collaboration", true, "AlphaTensor discovers new matrix-multiplication algorithms", "https://deepmind.google/blog/discovering-novel-algorithms-with-alphatensor/"],
      ["2022-11-30", "scientific-discovery", true, "ChatGPT opens to the public", "https://openai.com/index/chatgpt/"],
      ["2023-03-14", "scientific-discovery", false, "Claude is released", "https://www.anthropic.com/news/introducing-claude"],
      ["2023-03-14", "scientific-discovery", true, "GPT-4 is released, bringing large-model mathematical ability to the undergraduate level", "https://openai.com/index/gpt-4-research/"],
      ["2023-04-11", "scientific-discovery", false, "A Chinese large-model ecosystem emerges (Tongyi Qianwen / Qwen)", "https://www.alibabacloud.com/blog/alibaba-cloud-unveils-new-ai-model-to-support-enterprises%EF%BF%BD-intelligence-transformation_599877"],
      ["2023-06-27", "symbolic-computation", false, "Models such as LeanDojo and ReProver begin retrieving and generating proofs from Lean’s mathematical libraries", "https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html"],
      ["2023-11-27", "norms-and-governance", true, "The AIMO Prize establishes a $10 million award to propel open AI toward an IMO gold medal", "https://aimoprize.com/updates/"],
      ["2023-12-06", "scientific-discovery", true, "Gemini is released", "https://blog.google/innovation-and-ai/technology/ai/google-gemini-ai/"],
      ["2024-01-17", "foundation-models", true, "AlphaGeometry is introduced, demonstrating that AI can solve plane-geometry problems", "https://deepmind.google/blog/alphageometry-an-olympiad-level-ai-system-for-geometry/"],
      ["2024-02-05", "scientific-discovery", true, "DeepSeekMath combines domain pretraining with GRPO reinforcement learning, advancing the specialization of open mathematical models", "https://arxiv.org/abs/2402.03300"],
      ["2024-02-15", "scientific-discovery", false, "Gemini 1.5 greatly expands input capacity, allowing AI to ingest an entire mathematics text at once", "https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/"],
      ["2024-07-25", "symbolic-computation", true, "The formal-proof AI AlphaProof reaches IMO silver-medal level", "https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/"],
      ["2024-08-08", "scientific-discovery", false, "The open Chinese model Qwen2-Math establishes a mathematics-specialized branch", "https://qwenlm.github.io/zh/blog/qwen2-math/"],
      ["2024-09-12", "scientific-discovery", true, "OpenAI o1 introduces inference-time computation", "https://openai.com/index/learning-to-reason-with-llms/"],
      ["2024-12-26", "scientific-discovery", true, "Open models such as DeepSeek-V3 narrow the gap with closed models", "https://api-docs.deepseek.com/news/news1226"],
      ["Throughout 2025", "foundation-models", false, "Large language models begin to gain acceptance among many working mathematicians", "https://openai.com/index/accelerating-science-gpt-5/"],
      ["2025-01-20", "scientific-discovery", true, "Open reasoning models led by DeepSeek-R1 begin to proliferate", "https://api-docs.deepseek.com/news/news250120"],
      ["2025-02-02", "foundation-models", true, "Deep Research gives AI powerful literature-search capabilities", "https://openai.com/index/introducing-deep-research/"],
      ["2025-02-24", "scientific-discovery", true, "Claude 3.7 unifies quick responses and extended thinking in a single model", "https://www.anthropic.com/news/claude-3-7-sonnet"],
      ["2025-03-31", "automated-reasoning", true, "GPT-4.5 passes the Turing test", "https://arxiv.org/abs/2503.23674"],
      ["2025-05-20", "scientific-discovery", true, "Gemini Deep Think begins exploring multiple hypotheses in parallel", "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/google-gemini-updates-io-2025/"],
      ["2025-07-21", "foundation-models", true, "Gemini Deep Think reaches IMO gold-medal level", "https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/"],
      ["2025-09", "norms-and-governance", false, "At gatherings such as the Leiden conference, the mathematical community begins focused discussion of research norms for the AI era", "https://leidendeclaration.ai/"],
      ["2025-11-24", "foundation-models", true, "GPT-5 helps mathematicians solve the pointwise-convergence problem for Nesterov’s accelerated gradient method", "https://openai.com/index/gpt-5-mathematical-discovery/"],
      ["2026-02-11", "human-ai-collaboration", true, "Research agents form a “generate–verify–criticize–revise” loop", "https://deepmind.google/blog/accelerating-mathematical-and-scientific-discovery-with-gemini-deep-think/"],
      ["2026-02-14", "human-ai-collaboration", true, "The First Proof program begins, and AI starts tackling open problems", "https://openai.com/index/first-proof-submissions/"],
      ["2026-03-19", "human-ai-collaboration", false, "Researchers define formal counterexample generation as a training task for large language models, requiring them to find counterexamples and produce proofs that Lean can verify automatically", "https://arxiv.org/abs/2603.19514"],
      ["2026-03-26", "norms-and-governance", false, "Commelin, Jamnik, Venkatesh, and others publish “Shaping the Future of Mathematics in the Age of AI,” calling on the mathematical community to set technological, educational, and ethical directions", "https://arxiv.org/abs/2603.24914"],
      ["2026-05-13", "symbolic-computation", false, "Formal Conjectures organizes open conjectures into a machine-verifiable problem library", "https://arxiv.org/abs/2605.13171"],
      ["2026-05-20", "human-ai-collaboration", true, "The Unit Distance Conjecture is disproved", "https://openai.com/index/model-disproves-discrete-geometry-conjecture/"],
      ["2026-05-21", "human-ai-collaboration", true, "Formal-proof agents begin scanning open problems at scale", "https://arxiv.org/abs/2605.22763"],
      ["2026-06-02", "norms-and-governance", true, "The Leiden Declaration establishes foundational norms for AI-assisted mathematical research", "https://leidendeclaration.ai/"],
      ["2026-06-03", "symbolic-computation", false, "LeanMarathon begins undertaking long-form formalization projects", "https://arxiv.org/abs/2606.05400"],
      ["2026-07-10", "human-ai-collaboration", false, "The Cycle Double Cover Conjecture is proved", "https://arxiv.org/abs/2607.16356"],
      ["2026-07-19", "human-ai-collaboration", false, "The three-dimensional Jacobian Conjecture is disproved", "https://terrytao.wordpress.com/2026/07/21/a-digestion-of-the-jacobian-conjecture-counterexample/"],
      ["2026-07-21", "automated-reasoning", true, "GPT-5.6 Sol and other models break containment during cybersecurity evaluations", "https://openai.com/index/hugging-face-model-evaluation-security-incident/"],
      ["2026-08-01", "human-ai-collaboration", false, "OpenAI publishes proofs or counterexamples for ten relatively important results", "https://openai.com/index/ten-advances-in-mathematics/"],
      ["2026-08-10", "human-ai-collaboration", true, "Claude raises the lower bound on the proportion of zeros of the Riemann zeta function on the critical line to approximately 67.2%", "https://www.anthropic.com/research/riemann-zeta"],
      ["2026-08-13—08-21", "undercurrents", true, "Within a short period, the Gromov Volume Conjeture is proved in five independent papers with differing levels of AI use, prompting debate over the attribution of academic results in the AI era", "https://www.reddit.com/r/mathematics/comments/1vrgwtn/multiple_papers_being_posted_on_arxiv_proving_the/"],
      ["2026-08-17", "norms-and-governance", true, "Terence Tao publishes “Mathematics in the Age of AI,” systematically discussing the goals, values, and evaluation systems of mathematics in the AI era", "https://arxiv.org/abs/2608.16753"],
      ["2026-08-19", "human-ai-collaboration", true, "The Yau–Tian–Donaldson Conjecture is disproved", "https://arxiv.org/abs/2608.19301"],
      ["2026-08-23", "human-ai-collaboration", true, "Alpöge announces a proof by Claude of the existence of a complex structure on S⁶", "https://alpo.ge/s6.pdf"]
    ].map(function (item, index) {
      return {
        id: "event-" + String(index + 1).padStart(3, "0"),
        year: item[0],
        category: item[1],
        core: item[2],
        title: item[3],
        source: item[4] || ""
      };
    })
  };
})();
