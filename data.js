(function () {
  window.AI_MATH_DATA = {
    categories: [
      {
        slug: "formal-proof",
        name: "源泉初涌",
        english: "FORMAL PROOF",
        colorName: "冰川青",
        color: "#8FD3E8",
        intro: "AI处理数学问题所依赖的数理逻辑、计算理论、神经网络和早期自动推理技术。"
      },
      {
        slug: "symbolic-computation",
        name: "定渠载道",
        english: "SYMBOLIC COMPUTATION",
        colorName: "深渠蓝",
        color: "#356C9B",
        intro: "形式化证明的发展，形式语言、证明助手、数学知识库和自动定理证明系统。"
      },
      {
        slug: "automated-reasoning",
        name: "支流远引",
        english: "AUTOMATED REASONING",
        colorName: "青绿色",
        color: "#3FA58C",
        intro: "AI在数学之外领域取得的重要突破。"
      },
      {
        slug: "scientific-discovery",
        name: "百川竞发",
        english: "SCIENTIFIC DISCOVERY",
        colorName: "鲜明群青",
        color: "#3467D6",
        intro: "大语言模型的诞生与发展。"
      },
      {
        slug: "foundation-models",
        name: "同舟共济",
        english: "FOUNDATION MODELS",
        colorName: "暖金橙",
        color: "#D99A36",
        intro: "LLM如何作为数学家的研究助手，辅助查找文献、理解概念、解决习题和编写程序。"
      },
      {
        slug: "human-ai-collaboration",
        name: "自辟新河",
        english: "HUMAN × AI",
        colorName: "深紫红",
        color: "#8E477F",
        intro: "由AI独立发现新构造、新反例、新证明和其他原创数学结果的案例。"
      },
      {
        slug: "norms-and-governance",
        name: "立岸明约",
        english: "NORMS & GOVERNANCE",
        colorName: "岩岸赭",
        color: "#A5684A",
        intro: "数学界针对人工智能提出的目标、倡议、宣言和学术规范。"
      }
    ],
    events: [
      {
        id: "logic-theorist",
        year: "1956",
        title: "Logic Theorist：机器证明定理",
        summary: "早期人工智能第一次把寻找证明变成程序可以执行的任务。",
        detail: "它把数学推理展示为一种可搜索的符号过程，也让“机器是否能够推理”从哲学问题变成工程问题。",
        category: "automated-reasoning"
      },
      {
        id: "macsyma",
        year: "1968",
        title: "符号代数系统进入研究现场",
        summary: "复杂的微分、积分与代数化简开始交由计算机处理。",
        category: "symbolic-computation"
      },
      {
        id: "four-color",
        year: "1976",
        title: "四色定理与计算机辅助证明",
        summary: "一项著名证明依赖大规模计算，引发关于可读性与可信度的持续讨论。",
        detail: "它改变了“证明必须由人逐行读完”的默认想象，并提出今天仍关键的问题：我们究竟信任证明、程序，还是验证体系？",
        category: "formal-proof"
      },
      {
        id: "robins",
        year: "1996",
        title: "自动证明器解决长期开放问题",
        summary: "机器搜索在专门领域中展现出超越人工穷举的力量。",
        category: "automated-reasoning"
      },
      {
        id: "four-color-formal",
        year: "2005",
        title: "四色定理走向完整形式化",
        summary: "证明被重构为可由证明助理逐项核验的精确对象。",
        detail: "形式化不只是检查旧证明，也迫使数学知识被拆解、组织并建立可复用的数字基础设施。",
        category: "formal-proof"
      },
      {
        id: "mathlib",
        year: "2017",
        title: "协作式形式化数学知识库成长",
        summary: "开放社区开始共同建设机器可读、可复用的数学基础。",
        category: "human-ai-collaboration"
      },
      {
        id: "neural-proving",
        year: "2020",
        title: "神经网络进入定理证明搜索",
        summary: "学习到的策略开始帮助证明器选择更有希望的下一步。",
        category: "automated-reasoning"
      },
      {
        id: "language-math",
        year: "2022",
        title: "语言模型挑战复杂数学题",
        summary: "自然语言推理、分步解题与工具调用汇入同一条技术路线。",
        detail: "模型开始尝试理解人类书写的题目。这扩大了入口，也暴露了“看似合理但未经验证”的新风险。",
        category: "foundation-models"
      },
      {
        id: "alphatensor",
        year: "2022",
        title: "算法搜索发现新的计算策略",
        summary: "AI 在数学结构中寻找人类未曾写下的高效方案。",
        category: "scientific-discovery"
      },
      {
        id: "funsearch",
        year: "2023",
        title: "生成模型与评估器组成发现循环",
        summary: "候选方案被持续生成、执行、筛选并改进。",
        detail: "生成负责想象，严格评估负责淘汰。这提供了一种把开放式创造与可验证反馈结合起来的研究范式。",
        category: "scientific-discovery"
      },
      {
        id: "geometry",
        year: "2024",
        title: "几何推理连接学习与符号系统",
        summary: "模型的直觉式搜索与符号引擎的精确验证开始协同。",
        category: "human-ai-collaboration"
      },
      {
        id: "proof-systems",
        year: "2024",
        title: "端到端数学推理系统出现",
        summary: "从理解题目到构造证明，多种模型与验证工具组成完整系统。",
        detail: "真正的进步越来越少来自单一模型，而来自语言理解、搜索、形式化与验证之间精心设计的协作。",
        category: "foundation-models"
      },
      {
        id: "next-chapter",
        year: "未来",
        title: "从解题机器到研究伙伴",
        summary: "下一条重要定理，或许会诞生于人类直觉与机器搜索的交汇处。",
        category: "human-ai-collaboration"
      }
    ],
    futureThemes: [
      { index: "01", title: "可验证的创造力", text: "生成大胆猜想，同时把每一步推理交给形式系统核验。" },
      { index: "02", title: "新的数学界面", text: "自然语言、图形、代码与形式证明将自由转换。" },
      { index: "03", title: "超长程研究代理", text: "AI 将持续追踪文献、实验想法、修正路线并维护研究记忆。" },
      { index: "04", title: "共同理解", text: "把机器发现重新翻译成人类可以理解、验证并继承的知识。" }
    ]
  };

  window.AI_MATH_DATA.events = [
    ["1931-01", "formal-proof", true, "Gödel证明不完备定理", "https://plato.stanford.edu/entries/goedel-incompleteness/"],
    ["1936-05-28", "formal-proof", true, "可计算性理论出现", "https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf"],
    ["1943-12", "formal-proof", false, "McCulloch–Pitts提出二值形式神经元，用逻辑网络建立人工神经网络的数学起点", "https://doi.org/10.1007/BF02478259"],
    ["1950-10-01", "formal-proof", false, "图灵发表《计算机器与智能》，以模仿游戏将“机器能否思考”转化为可进行实验评价的问题", "https://academic.oup.com/mind/article/LIX/236/433/986238"],
    ["1956-06-15", "symbolic-computation", true, "Logic Theorist开始自动证明数学定理", "https://www.historyofinformation.com/detail.php?id=742"],
    ["1960年代—1980年代", "formal-proof", false, "符号计算逐步成为数学研究的重要组成部分"],
    ["1964-09-01", "formal-proof", false, "STUDENT首次阅读并求解代数应用题", "https://dspace.mit.edu/entities/publication/6ce87f48-f28a-46ca-85b8-ecdf887e735f"],
    ["1965-01-01", "symbolic-computation", false, "归结原理被提出，确定了自动证明规则", "https://dl.acm.org/doi/10.1145/321250.321253"],
    ["1967", "symbolic-computation", true, "Automath将数学写成机器可检查的语言", "https://research.tue.nl/en/publications/description-of-the-language-automath"],
    ["1970年代—1990年代", "symbolic-computation", false, "证明助手确立“小型可信内核”架构"],
    ["1973-11-14", "symbolic-computation", false, "机器开始拥有可读的数学文库（Mizar）", "https://mizar.uwb.edu.pl/"],
    ["1976-06-21", "foundation-models", true, "首次出现依赖于计算机的证明（四色定理）", "https://en.wikipedia.org/wiki/Four_color_theorem"],
    ["1976-07-01", "formal-proof", false, "AM尝试自主发现数学概念", "https://en.wikisource.org/wiki/File:ADA155378.djvu"],
    ["1980年代—1990年代", "formal-proof", false, "SAT与约束求解"],
    ["1996-10-10", "human-ai-collaboration", true, "自动证明机器EQP证明Robbins问题", "https://www.cs.unm.edu/~mccune/papers/robbins/"],
    ["1997-05-11", "automated-reasoning", true, "Deep Blue击败国际象棋世界冠军", "https://research.ibm.com/publications/deep-blue"],
    ["2005-04", "symbolic-computation", true, "四色定理获得完整的机器形式验证", "https://inria.hal.science/hal-04034866v1/document"],
    ["2012-09-20", "symbolic-computation", true, "奇阶定理完成形式化验证，证明助手开始处理复杂而深刻的现代数学成果", "https://github.com/math-comp/odd-order"],
    ["2013", "symbolic-computation", true, "Lean的提出", "https://lean-lang.org/fro/about/"],
    ["2014-08-10", "symbolic-computation", true, "Flyspeck给出Kepler猜想的完整形式验证", "https://arxiv.org/abs/1501.02155"],
    ["2015-09-21", "formal-proof", false, "GeoS在SAT几何题上接近平均考生水平", "https://www.washington.edu/news/2015/09/21/ai-system-solves-sat-geometry-questions-as-well-as-average-human-test-taker/"],
    ["2015-11-17", "formal-proof", false, "Todai Robot超过日本大学入学考试平均分", "https://www.wired.com/story/ai-passes-japanese-university-entrance-exam"],
    ["2016-03-15", "automated-reasoning", true, "AlphaGo在五番棋中击败李世乭", "https://deepmind.google/blog/deep-reinforcement-learning/"],
    ["2017-01-20", "symbolic-computation", false, "Lean3发布", "https://lean-lang.org/doc/reference/latest/Introduction/"],
    ["2017-06-07", "formal-proof", false, "AI-MATHS参加中国高考数学考试", "https://news.xinhuanet.com/english/2017-06/07/c_136347963.htm"],
    ["2017-06-12", "scientific-discovery", true, "Transformer被提出，奠定了大语言模型的理论基础", "https://arxiv.org/abs/1706.03762"],
    ["2017-07-21", "symbolic-computation", false, "mathlib社区形成", "https://github.com/leanprover-community/mathlib3"],
    ["2017-10-18", "automated-reasoning", true, "AlphaGo Zero开始用自我对弈取代人类棋谱", "https://deepmind.google/blog/alphago-zero-starting-from-scratch/"],
    ["2019-04-02", "formal-proof", false, "DeepMind发布Mathematics Dataset，通过程序生成的大规模数学题系统评测神经网络的数学推理与泛化能力", "https://arxiv.org/abs/1904.01557"],
    ["2019-09-07", "norms-and-governance", true, "数学界提出“AI获得IMO金牌”的明确目标", "https://leanprover-community.github.io/archive/stream/113488-general/topic/IMO.20Grand.20Challenge.html"],
    ["2019-12-02", "formal-proof", false, "神经网络开始直接执行复杂符号积分与微分方程求解", "https://arxiv.org/abs/1912.01412"],
    ["2020-05-28", "scientific-discovery", true, "GPT-3论文发表，AI开始拥有上下文学习能力", "https://arxiv.org/abs/2005.14165"],
    ["2020-09-07", "symbolic-computation", true, "形式化证明搜索开始参考语言模型（GPT-f）", "https://openai.com/index/generative-language-modeling-for-automated-theorem-proving/"],
    ["2020-11-30", "automated-reasoning", true, "AlphaFold 2突破蛋白质结构预测", "https://deepmind.google/science/alphafold/"],
    ["2020-12-06", "symbolic-computation", true, "Scholze公开向形式化数学界提出挑战，使用形式化数学验证凝聚态数学", "https://github.com/leanprover-community/lean-liquid"],
    ["2022-01-28", "scientific-discovery", true, "思维链提示引导大语言模型写出中间步骤，AI开始掌握多步推理能力", "https://arxiv.org/abs/2201.11903"],
    ["2022-02-02", "automated-reasoning", false, "AlphaCode编程达到竞赛选手中等水平", "https://deepmind.google/blog/competitive-programming-with-alphacode/"],
    ["2022-02-02", "symbolic-computation", false, "神经模型与Lean形成可验证证明循环", "https://openai.com/index/formal-math/"],
    ["2022-03-21", "scientific-discovery", false, "AI生成多条推理路径并对答案投票", "https://arxiv.org/abs/2203.11171"],
    ["2022-05-25", "symbolic-computation", false, "提出如何自动形式化自然语言证明", "https://arxiv.org/abs/2205.12615"],
    ["2022-06-30", "scientific-discovery", true, "Google发布数学模型Minerva，AI开始系统解答数学问题", "https://research.google/blog/minerva-solving-quantitative-reasoning-problems-with-language-models/"],
    ["2022-08-22", "automated-reasoning", true, "AI绘画进入大众视野（Stable Diffusion）", "https://stability.ai/news/stable-diffusion-public-release"],
    ["2022-10-05", "human-ai-collaboration", true, "Alpha Tensor发现新的矩阵乘法算法", "https://deepmind.google/blog/discovering-novel-algorithms-with-alphatensor/"],
    ["2022-11-30", "scientific-discovery", true, "ChatGPT向大众开放", "https://openai.com/index/chatgpt/"],
    ["2023-03-14", "scientific-discovery", false, "Claude发布", "https://www.anthropic.com/news/introducing-claude"],
    ["2023-03-14", "scientific-discovery", true, "GPT-4发布，大模型数学能力达到本科生水准", "https://openai.com/index/gpt-4-research/"],
    ["2023-04-11", "scientific-discovery", false, "中文大模型生态兴起（通义千问／Qwen）", "https://www.alibabacloud.com/blog/alibaba-cloud-unveils-new-ai-model-to-support-enterprises%EF%BF%BD-intelligence-transformation_599877"],
    ["2023-06-27", "symbolic-computation", false, "LeanDojo／ReProver等模型开始从Lean数学库中检索并生成证明", "https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html"],
    ["2023-11-27", "norms-and-governance", true, "AIMO Prize设立千万美元奖金，推动开放AI冲击IMO金牌", "https://aimoprize.com/updates/"],
    ["2023-12-06", "scientific-discovery", true, "Gemini发布", "https://blog.google/innovation-and-ai/technology/ai/google-gemini-ai/"],
    ["2024-01-17", "foundation-models", true, "AlphaGeometry被提出，代表AI有了解决平面几何的能力", "https://deepmind.google/blog/alphageometry-an-olympiad-level-ai-system-for-geometry/"],
    ["2024-02-05", "scientific-discovery", true, "DeepSeekMath将领域预训练与GRPO强化学习结合，推动开放数学模型进入专门化训练阶段", "https://arxiv.org/abs/2402.03300"],
    ["2024-02-15", "scientific-discovery", false, "Gemini 1.5可读入资料容量大幅提升，AI可以一次读入整本数学资料", "https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/"],
    ["2024-07-25", "symbolic-computation", true, "形式化证明AI AlphaProof达到IMO银牌水平", "https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/"],
    ["2024-08-08", "scientific-discovery", false, "中文开放模型Qwen2-Math形成数学专用分支", "https://qwenlm.github.io/zh/blog/qwen2-math/"],
    ["2024-09-12", "scientific-discovery", true, "OpenAI o1引入推理时计算功能", "https://openai.com/index/learning-to-reason-with-llms/"],
    ["2024-12-26", "scientific-discovery", true, "开源模型DeepSeek-V3等缩小了与闭源模型的差距", "https://api-docs.deepseek.com/news/news1226"],
    ["2025年全年", "foundation-models", false, "大语言模型开始被众多数学工作者所接受", "https://openai.com/index/accelerating-science-gpt-5/"],
    ["2025-01-20", "scientific-discovery", true, "以DeepSeek-R1为代表的开放推理模型开始普及", "https://api-docs.deepseek.com/news/news250120"],
    ["2025-02-02", "foundation-models", true, "Deep Research为AI提供了强大的文献搜索功能", "https://openai.com/index/introducing-deep-research/"],
    ["2025-02-24", "scientific-discovery", true, "Claude 3.7将快速回答与延长思考统一在同一模型中", "https://www.anthropic.com/news/claude-3-7-sonnet"],
    ["2025-05-20", "scientific-discovery", true, "Gemini Deep Think开始并行探索多个假设", "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/google-gemini-updates-io-2025/"],
    ["2025-07-21", "foundation-models", true, "Gemini Deep Think达到IMO金牌水平", "https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/"],
    ["2025-09", "norms-and-governance", false, "以莱顿会议为代表，数学界开始集中讨论AI时代的研究规范", "https://leidendeclaration.ai/"],
    ["2025-11-24", "foundation-models", true, "GPT-5协助数学家解决Nesterov加速梯度法的点收敛问题", "https://openai.com/index/gpt-5-mathematical-discovery/"],
    ["2026-02-11", "human-ai-collaboration", true, "研究智能体形成“生成—验证—批评—修改”循环", "https://deepmind.google/blog/accelerating-mathematical-and-scientific-discovery-with-gemini-deep-think/"],
    ["2026-02-14", "human-ai-collaboration", true, "First Proof计划开始，AI开始攻克开放问题", "https://openai.com/index/first-proof-submissions/"],
    ["2026-03-19", "human-ai-collaboration", false, "研究者将形式反例生成定义为大模型训练任务，要求模型寻找反例并生成可由Lean自动验证的证明", "https://arxiv.org/abs/2603.19514"],
    ["2026-03-26", "norms-and-governance", false, "Commelin、Jamnik、Venkatesh等数学家发表《塑造AI时代数学的未来》，呼吁数学共同体主动制定技术、教育与伦理方向", "https://arxiv.org/abs/2603.24914"],
    ["2026-05-13", "symbolic-computation", false, "Formal Conjectures将开放猜想整理为机器可验证的题库", "https://arxiv.org/abs/2605.13171"],
    ["2026-05-20", "human-ai-collaboration", true, "Unit distance猜想被推翻", "https://openai.com/index/model-disproves-discrete-geometry-conjecture/"],
    ["2026-05-21", "human-ai-collaboration", true, "形式证明智能体开始批量扫描开放问题", "https://arxiv.org/abs/2605.22763"],
    ["2026-06-02", "norms-and-governance", true, "《莱顿宣言》确立AI参与数学研究的基本规范", "https://leidendeclaration.ai/"],
    ["2026-06-03", "symbolic-computation", false, "LeanMarathon开始承担长篇形式化工程", "https://arxiv.org/abs/2606.05400"],
    ["2026-07-10", "human-ai-collaboration", false, "Cycle Double Cover猜想被证明", "https://arxiv.org/abs/2607.16356"],
    ["2026-07-19", "human-ai-collaboration", false, "三维Jacobian猜想被推翻", "https://terrytao.wordpress.com/2026/07/21/a-digestion-of-the-jacobian-conjecture-counterexample/"],
    ["2026-08-01", "human-ai-collaboration", false, "OpenAI公布十个相对重要结果的证明/反例", "https://openai.com/index/ten-advances-in-mathematics/"]
  ].map(function (item, index) {
    return {
      id: "event-" + String(index + 1).padStart(3, "0"),
      year: item[0],
      category: item[1],
      core: item[2],
      title: item[3],
      source: item[4] || ""
    };
  });
})();
