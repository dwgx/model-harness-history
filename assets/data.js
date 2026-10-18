/* 破甲史 · 站点数据（2026-10-17 快照）
   所有 star / fork 为 GitHub API 抓取时点值；证据等级见 06_audit/。 */
window.SITE_DATA = {
  stats: [
    { value: "2016", label: "最早可追溯", sub: "Tay · 行为改写" },
    { value: "38", label: "独立 Codex 项目", sub: "+22 同族 / 镜像" },
    { value: "11", label: "DSH 破甲插件", sub: "19,261 插件中" },
    { value: "3,003", label: "论坛标题扫描", sub: "38 条命中" }
  ],

  timeline: [
    { date: "2016-03-23", year: "2016", era: "pre", tag: "前史", level: "A", title: "Microsoft Tay 被话术诱导下线", desc: "上线 16 小时内被用户用对话诱导出极端内容——目前可核实的最早“聊天机器人行为被话术改写”事件。" },
    { date: "2022-09-12", year: "2022", era: "pre", tag: "术语", level: "A", title: "“prompt injection” 被正式提出", desc: "Simon Willison 演示用输入套出原始提示词；输入第一次被明确视为可以篡改“指令”本身。" },
    { date: "2022-11-30", year: "2022", era: "pre", tag: "基线", level: "A", title: "ChatGPT 发布", desc: "破甲的需求侧出现：大众第一次可以大规模地与对齐模型对话。" },
    { date: "2022-12-05", year: "2022", era: "pre", tag: "资产化", level: "A", title: "awesome-chatgpt-prompts 建仓", desc: "提示词从个人技巧变成可分发、可复制的仓库资产。" },
    { date: "2022-12-11", year: "2022", era: "pre", tag: "最早中文", level: "A", title: "L1Xu4n 中文调教仓初始提交", desc: "目前可核最早的中文 ChatGPT 绕过向公开仓库；12-20 README 已写“更稳定触发涩涩的教程”。" },
    { date: "2022-12-13", year: "2022", era: "pre", tag: "最早英文", level: "A", title: "malaya-zemlya/gpt-jailbreaks", desc: "最早的系统化 GPT 绕过方法库之一，按 context change / language change / context escape 分类。" },
    { date: "2022-12-15", year: "2022", era: "pre", tag: "DAN", level: "B", title: "u/Seabout 发布首个 DAN 教学帖", desc: "DAN 1.0 的文化起点；二手回溯，原帖未抓到。" },
    { date: "2023-02-06", year: "2023", era: "model", tag: "出圈", level: "B", title: "CNBC 报道 DAN", desc: "“让 ChatGPT 打破自身规则”的社区玩法进入主流媒体。" },
    { date: "2023-02-08", year: "2023", era: "model", tag: "泄露", level: "B", title: "Bing Sydney 系统提示被套出", desc: "“忽略以上指令”类输入让 Bing Chat 吐出内部代号与系统指令。" },
    { date: "2023-02-15", year: "2023", era: "model", tag: "版本化", level: "A", title: "0xk1h0/ChatGPT_DAN 建仓", desc: "DAN 1.0 → 11.0 被版本化保存，社区开始用版本号迭代人格模板。" },
    { date: "2023-05-23", year: "2023", era: "model", tag: "学术", level: "A", title: "《Jailbreaking ChatGPT via Prompt Engineering》", desc: "系统收集 2023-02 之后的越狱提示词，越狱从帖子进入论文。" },
    { date: "2023-07-17", year: "2023", era: "model", tag: "术语", level: "A", title: "“破限”首次可核出现", desc: "L1Xu4n 提交“Claude2破限发布”；README 同时使用“穿甲”作为同义词。" },
    { date: "2023-08-01", year: "2023", era: "model", tag: "数据集", level: "A", title: "verazuo/jailbreak_llms", desc: "15,140 条 ChatGPT 提示、其中 1,405 条越狱提示；角色扮演被列为高命中策略。" },
    { date: "2023-11-13", year: "2023", era: "model", tag: "基准", level: "A", title: "JailbreakBench 仓库建仓", desc: "开始把攻击成功率、成本与可复现性标准化。" },
    { date: "2024-02-06", year: "2024", era: "model", tag: "基准", level: "A", title: "HarmBench 发布", desc: "标准化自动红队评测框架。" },
    { date: "2024-03-28", year: "2024", era: "model", tag: "基准", level: "A", title: "JailbreakBench 论文", desc: "NeurIPS 2024 D&B：开放对抗提示库 + 统一成本/成功率口径。" },
    { date: "2024-04-02", year: "2024", era: "model", tag: "上下文", level: "A", title: "many-shot jailbreaking", desc: "用大量伪对话填满上下文，让模型按上下文先例而非安全训练行事。" },
    { date: "2024-04-12", year: "2024", era: "model", tag: "规则文件", level: "A", title: "Cursor 0.32 记录 .cursorrules", desc: "仓库级规则文件进入 IDE 的模型上下文——harness 注入面的前身。" },
    { date: "2024-04-19", year: "2024", era: "model", tag: "防御", level: "A", title: "Instruction Hierarchy", desc: "训练模型区分 system / developer / user / 工具输出的权威层级。" },
    { date: "2024-12-20", year: "2024", era: "model", tag: "防御", level: "A", title: "Deliberative Alignment", desc: "让推理模型在回答前显式对齐安全规范。" },
    { date: "2025-01-23", year: "2025", era: "eve", tag: "规则文件", level: "A", title: "Cursor 0.45 → .cursor/rules", desc: "多文件、按需选择的项目规则，规则面进一步工程化。" },
    { date: "2025-01-31", year: "2025", era: "eve", tag: "防御", level: "A", title: "Constitutional Classifiers", desc: "用输入/输出分类器拦截通用越狱，红队 3,000+ 小时。" },
    { date: "2025-02-24", year: "2025", era: "eve", tag: "Harness", level: "A", title: "Claude Code 研究预览", desc: "CLAUDE.md 成为项目级常驻指令；coding agent 时代开始。" },
    { date: "2025-03-04", year: "2025", era: "eve", tag: "泄露", level: "A", title: "CL4R1T4S 初始 commit", desc: "Claude Code 系统指令被公开整理，系统提示从产品内部物变成可检索资料。" },
    { date: "2025-04-16", year: "2025", era: "eve", tag: "Harness", level: "A", title: "OpenAI 开源 Codex CLI", desc: "AGENTS.md 成为项目指令入口；配置面逐渐成形。" },
    { date: "2025-04-30", year: "2025", era: "eve", tag: "Harness", level: "A", title: "OpenCode 仓库建立", desc: "AGENTS.md + CLAUDE.md fallback；instructions 支持远程 URL。" },
    { date: "2025-07-14", year: "2025", era: "eve", tag: "Harness", level: "B", title: "AWS Kiro 预览", desc: ".kiro/steering/*.md 常驻上下文，规则文件成为产品卖点。" },
    { date: "2025-08-07", year: "2025", era: "eve", tag: "防御", level: "A", title: "GPT-5 发布", desc: "安全训练从“拒绝”转向 safe completions：分层回答 + 解释拒绝。" },
    { date: "2025-08-30", year: "2025", era: "eve", tag: "术语", level: "B", title: "“破甲”首次可核出现", desc: "百度贴吧《Gemini及相关AI破甲词大汇总》；比“破限”晚约两年。" },
    { date: "2025-11-25", year: "2025", era: "eve", tag: "话语", level: "C", title: "“焚诀”被媒体系统记录", desc: "借《斗破苍穹》“吞噬异火、无限进化”的功法，形容提示词合集靠吸收他人版本迭代。" },
    { date: "2026-01-21", year: "2026", era: "2026", tag: "配置面", level: "A", title: "model_instructions_file 定名", desc: "Codex PR #9555 将 experimental_instructions_file 更名；官方语义是“替换内置指令”。" },
    { date: "2026-06-09", year: "2026", era: "2026", tag: "泄露", level: "A", title: "Claude Fable 5 发布", desc: "CL4R1T4S 同日新增 CLAUDE-FABLE-5.md，122,750 bytes——约 12 万字符的系统提示。" },
    { date: "2026-06-26", year: "2026", era: "2026", tag: "Codex", level: "A", title: "首个 Codex 破甲包", desc: "aa1020128040/Codex-codex-instruct：GPT-5.4 + CTF 沙箱 + model_instructions_file。" },
    { date: "2026-06-28", year: "2026", era: "2026", tag: "Codex", level: "A", title: "yynxxxxx 重写 5.5", desc: "2,279★，成为 5.5/5.6 的共同上游；同日 codex-keysmith 建立“可预览可撤销”部署线。" },
    { date: "2026-07-11", year: "2026", era: "2026", tag: "Codex", level: "A", title: "gpt-instruct 起仓", desc: "原名 gpt-5.6-instruct，后扩为 5.6 / 6 Astra / 6.1 三线，10,266★。" },
    { date: "2026-07-29", year: "2026", era: "2026", tag: "管道", level: "A", title: "Super-Instruct 转向 MITM", desc: "战场从 config 文件移到本地管道：递归替换 system + 正则改写拒绝。" },
    { date: "2026-08-10", year: "2026", era: "2026", tag: "DSH", level: "A", title: "DSH npm 首发", desc: "0.0.1-rc.1；08-13 官方仓库建立，08-17 首个 GitHub release。" },
    { date: "2026-08-19", year: "2026", era: "2026", tag: "DSH", level: "A", title: "dsh-purge 建仓", desc: "小杨（YuJunZhiXue）发布：宿主文件补丁 + Cordis system-prompt 改写 + prompt-inject.md。" },
    { date: "2026-09-10", year: "2026", era: "2026", tag: "使能", level: "A", title: "DSH 0.1.5-rc.1", desc: "支持动态修改系统提示词且不破坏 KV Cache——破甲插件从外挂升级为宿主级注入。" },
    { date: "2026-09-18", year: "2026", era: "2026", tag: "退场", level: "B", title: "dsh-purge 删除提示词", desc: "作者在 issue #27 写“法律边缘游走”，决定删除提示词。" },
    { date: "2026-10-04", year: "2026", era: "2026", tag: "Codex", level: "A", title: "gpt-instruct 改名并双发", desc: "发布 gpt-6-astra-v2-rc1 与 gpt-6.1-sol-v1-rc2；仓名从 gpt-5.6-instruct 改为 gpt-instruct。" },
    { date: "2026-10-15", year: "2026", era: "2026", tag: "失效", level: "A", title: "dsh-purge v1.1.71 L5 失败", desc: "在 dsh 0.2.1-alpha.4 上 L4 通过、L5 失败（HTTP / 清单 rpc-error）。" },
    { date: "2026-10-17", year: "2026", era: "2026", tag: "现在", level: "A", title: "社区 fork 接管", desc: "“Purge Community 1.2.0”出现；本档案抓取日。" }
  ],

  repos: [
    { name: "MDX-Tom/gpt-instruct", url: "https://github.com/MDX-Tom/gpt-instruct", group: "codex", type: "提示词+评测", created: "2026-07-11", stars: 10266, forks: 1270, target: "GPT-5.6 / 6 / 6.1 · Codex", note: "三线版本包 + A/B/C + JB-A/B 门禁", level: "A" },
    { name: "Jia-Ethan/codex-keysmith", url: "https://github.com/Jia-Ethan/codex-keysmith", group: "codex", type: "安装器", created: "2026-06-28", stars: 4751, forks: 741, target: "Codex", note: "预览 / ownership / hook 隔离 / 恢复", level: "A" },
    { name: "yynxxxxx/Codex-X", url: "https://github.com/yynxxxxx/Codex-X", group: "codex", type: "桌面管理", created: "2026-07-04", stars: 4232, forks: 520, target: "Codex 桌面 / CLI", note: "可视化提示词注入 + Provider / 会话 / Skills", level: "A" },
    { name: "Haleclipse/CodexDesktop-Rebuild", url: "https://github.com/Haleclipse/CodexDesktop-Rebuild", group: "codex", type: "宿主重建", created: "2026-02-03", stars: 2724, forks: 246, target: "Codex Desktop", note: "Electron 跨平台重建；社区称“哈雷佬”", level: "A" },
    { name: "yynxxxxx/Codex-5.5-codex-instruct-5.5", url: "https://github.com/yynxxxxx/Codex-5.5-codex-instruct-5.5", group: "codex", type: "提示词包", created: "2026-06-28", stars: 2279, forks: 517, target: "GPT-5.5 · Codex", note: "8 条核心指令，[MODE: UNRESTRICTED]", level: "A" },
    { name: "3641397194-wq/gpt6-Astra", url: "https://github.com/3641397194-wq/gpt6-Astra", group: "codex", type: "安装器", created: "2026-08-17", stars: 1115, forks: 182, target: "11 个客户端", note: "一键写 cha-codex.md + AGENTS.md + config.toml", level: "A" },
    { name: "FuDie0915/Super-Instruct-Codex-5.6", url: "https://github.com/FuDie0915/Super-Instruct-Codex-5.6", group: "codex", type: "MITM", created: "2026-07-29", stars: 466, forks: 90, target: "GPT-5.6 · Codex", note: "递归替换 system + 22 条正则拒绝改写", level: "A" },
    { name: "z91772524-ai/pojia-next", url: "https://github.com/z91772524-ai/pojia-next", group: "codex", type: "多客户端", created: "2026-09-17", stars: 454, forks: 76, target: "13+ 客户端", note: "内置提示词替换，备份 / 自证 / 还原", level: "A" },
    { name: "Calrton/jailbreak-prompts", url: "https://github.com/Calrton/jailbreak-prompts", group: "codex", type: "合集", created: "2026-07-08", stars: 274, forks: 45, target: "多模型", note: "UNFILTERED / GODMODE / CTF 合集", level: "A" },
    { name: "xsser/codex-jailbreak-guide", url: "https://github.com/xsser/codex-jailbreak-guide", group: "codex", type: "教程", created: "2026-07-03", stars: 218, forks: 38, target: "Codex", note: "源码级说明 model_instructions_file 是替换而非追加", level: "A" },
    { name: "xiaoguai009/codex-armor-toolkit", url: "https://github.com/xiaoguai009/codex-armor-toolkit", group: "codex", type: "安装器", created: "2026-09-09", stars: 213, forks: 27, target: "GPT-6 Astra · Codex", note: "小怪身份副本 + 精确恢复 + 暴露检查", level: "A" },
    { name: "aimeoa/hanshuang-codex", url: "https://github.com/aimeoa/hanshuang-codex", group: "codex", type: "安装器", created: "2026-09-06", stars: 136, forks: 41, target: "GPT-6.0 · WorkBuddy", note: "Electron + PowerShell，寒霜双变体", level: "A" },
    { name: "0x5477/gpt-5.6-instruct", url: "https://github.com/0x5477/gpt-5.6-instruct", group: "codex", type: "提示词+测试", created: "2026-07-15", stars: 104, forks: 14, target: "GPT-5.6-SOL", note: "v5 / v35 + 120 例测试集", level: "A" },
    { name: "ADWMC/helm-x", url: "https://github.com/ADWMC/helm-x", group: "codex", type: "本地代理", created: "2026-08-06", stars: 96, forks: 12, target: "GPT-6.1-sol · Codex", note: "codex → 127.0.0.1:1800 + 拒绝补救阶梯", level: "A" },
    { name: "xiaoliu07-sudo/xiaoliu-pojia", url: "https://github.com/xiaoliu07-sudo/xiaoliu-pojia", group: "codex", type: "提示词+安装", created: "2026-07-31", stars: 55, forks: 11, target: "GPT-5.6 / 5.5", note: "融合 MDX-Tom v42 + keysmith + CTF", level: "A" },
    { name: "aa1020128040/Codex-codex-instruct", url: "https://github.com/aa1020128040/Codex-codex-instruct", group: "codex", type: "提示词包", created: "2026-06-26", stars: 22, forks: 12, target: "GPT-5.4 · Codex", note: "最早可追溯的 Codex 破甲包（CTF 沙箱）", level: "A" },

    { name: "YuJunZhiXue/dsh-purge", url: "https://github.com/YuJunZhiXue/dsh-purge", group: "dsh", type: "插件", created: "2026-08-19", stars: 6526, forks: 931, target: "DSH", note: "宿主文件补丁 + system-prompt 行改写 + prompt-inject.md", level: "A" },
    { name: "Minglink/dsh-infinite-gen-5", url: "https://github.com/Minglink/dsh-infinite-gen-5", group: "dsh", type: "工作台", created: "2026-08-15", stars: 2965, forks: 304, target: "DSH", note: "38 工具逆向工作台；宣称“零提示词常驻”", level: "A" },
    { name: "SeaOf0/dsh-redteam-model", url: "https://github.com/SeaOf0/dsh-redteam-model", group: "dsh", type: "红队", created: "2026-10-10", stars: 719, forks: null, target: "DSH", note: "9 模式 + 15 运行时插件授权红队合集", level: "B" },
    { name: "ADWMC/helm-d", url: "https://github.com/ADWMC/helm-d", group: "dsh", type: "插件", created: "2026-10-03", stars: 224, forks: null, target: "DSH", note: "preset 单点挂载；破甲 + 逆向 / 渗透 / 脱壳", level: "B" },
    { name: "daha1216/dsh-adult-tension", url: "https://github.com/daha1216/dsh-adult-tension", group: "dsh", type: "插件", created: "2026-10-03", stars: 218, forks: null, target: "DSH", note: "18+ 内容向：Agent Skill + SQLite 状态机", level: "B" },
    { name: "Rain-kl/dsh-preset-plus", url: "https://github.com/Rain-kl/dsh-preset-plus", group: "dsh", type: "插件", created: "2026-08-27", stars: 176, forks: null, target: "DSH", note: "preset 注入链：system → user → assistant 伪装 → 真实输入", level: "B" },
    { name: "c3cvld7aag/fujiang-dsh", url: "https://github.com/c3cvld7aag/fujiang-dsh", group: "dsh", type: "插件", created: "2026-10-03", stars: 111, forks: null, target: "DSH", note: "内置规则 + 一键注入 / 卸载 + 状态条", level: "B" },
    { name: "liucaimao2026/dsh-personal-directive", url: "https://github.com/liucaimao2026/dsh-personal-directive", group: "dsh", type: "插件", created: "2026-08-18", stars: 103, forks: 15, target: "DSH", note: "基于 gen-1；Web 顶部“破甲：开启 / 关闭”", level: "A" },
    { name: "a137460387/dsh-infinite-gen-x", url: "https://github.com/a137460387/dsh-infinite-gen-x", group: "dsh", type: "插件", created: "2026-09-28", stars: 26, forks: 7, target: "DSH", note: "gen-5 fork；低调措辞 + Host 拒绝闭环 + armor 评分器", level: "A" },
    { name: "Enchanted0911/hermes-jailbreak-kernel", url: "https://github.com/Enchanted0911/hermes-jailbreak-kernel", group: "dsh", type: "插件", created: "2026-10-14", stars: 23, forks: null, target: "DSH", note: "gen-4 的 Hermes 移植：双层同源内核 + 会话轮换", level: "B" },
    { name: "PerryLink/dsh-defend", url: "https://github.com/PerryLink/dsh-defend", group: "dsh", type: "防御", created: "2026-10-10", stars: 22, forks: null, target: "DSH", note: "Aho-Corasick 检测 prompt-injection / jailbreak / secret-leak", level: "B" },

    { name: "L1Xu4n/Awesome-ChatGPT-prompts-ZH_CN", url: "https://github.com/L1Xu4n/Awesome-ChatGPT-prompts-ZH_CN", group: "pre", type: "合集", created: "2022-12-11", stars: 3194, forks: 167, target: "ChatGPT", note: "最早可核中文绕过向仓库；2023-07 首次使用“破限”", level: "A" },
    { name: "Ed1s0nZ/ChatGPTJailbreak", url: "https://github.com/Ed1s0nZ/ChatGPTJailbreak", group: "pre", type: "合集", created: "2023-07-06", stars: 159, forks: 11, target: "ChatGPT", note: "中文 DAN / 越狱说明与合集", level: "A" },
    { name: "malaya-zemlya/gpt-jailbreaks", url: "https://github.com/malaya-zemlya/gpt-jailbreaks", group: "pre", type: "方法库", created: "2022-12-13", stars: null, forks: null, target: "GPT / ChatGPT", note: "最早的系统化绕过方法库之一", level: "A" }
  ],

  schools: [
    { num: "00", name: "史前模型侧", en: "Model-level jailbreak", summary: "DAN、猫娘、催眠、上下文填充。核心是“说服模型”。", practice: "人格替换 / 角色扮演 / 上下文冗余 / 情感框架；单轮对话内生效。", insight: "身份层比规则层更靠近模型的行为先验；单点咒语是消耗品。", tags: ["DAN", "角色扮演", "many-shot"], level: "B" },
    { num: "01", name: "Codex 提示词工程", en: "Prompt engineering", summary: "把提示词做成版本线、测试集与发布门禁。", practice: "model_instructions_file 部署三线版本包；A → JB-A → B → JB-B；字节冻结、artifact gate。", insight: "提示词要版本化、可证伪；发布工程才是护城河。", tags: ["gpt-instruct", "A/B/C", "JailbreakBench"], level: "A" },
    { num: "02", name: "配置注入 / 安装器", en: "Config injection", summary: "不碰二进制，只写 config.toml；把可撤销做成一键产品。", practice: "dry-run → apply → status → restore；首次备份、幂等重装、引用修复、并发保护。", insight: "可撤销性是采用率关键；安装器就是产品。", tags: ["codex-keysmith", "小怪", "helm-x"], level: "A" },
    { num: "03", name: "可视化 / 管理器", en: "GUI & manager", summary: "把破甲提示词降格为模板库中的一个分类。", practice: "模板库 + Provider / 会话 / Skills / MCP 管理；启用 / 禁用 / 备份。", insight: "破甲从“目的”变成“功能”；谁维护模板库，谁掌握入口。", tags: ["Codex-X", "CodexDesktop-Rebuild"], level: "A" },
    { num: "04", name: "管道 / 代理", en: "Pipeline & proxy", summary: "不只改 system，而是改整条请求 / 响应链。", practice: "本地 MITM、127.0.0.1 代理、SSE 终态补齐、拒绝检测与改写。", insight: "只改 system 会被云端审核吞掉；必须改管道。", tags: ["Super-Instruct", "NERV-BREAK", "helm-x"], level: "A" },
    { num: "05", name: "Harness 插件", en: "Host plugin", summary: "改宿主 prompt 渲染、审批门、沙箱策略；分层补丁 + 可回滚。", practice: "prompt / code / shim / file 四层；Clean 页 Apply / Restore；市场 L1–L5 验证。", insight: "破甲对象是宿主，不是模型；版本耦合是死穴。", tags: ["dsh-purge", "personal-directive", "gen-x"], level: "A" },
    { num: "06", name: "能力工作台", en: "Capability workbench", summary: "不再以提示词注入为主，转向让模型真正能干活的工具。", practice: "38 项逆向工具、Core 8 / Full 38、12 个审批门、零提示词常驻。", insight: "破甲的出口是能力工具；头部作者在重新定义价值。", tags: ["Minglink gen-5", "Ghidra", "x64dbg"], level: "A" },
    { num: "07", name: "评测 / 研究", en: "Evaluation", summary: "把“能不能破”变成“有没有可复现证据”。", practice: "固定测试集、冻结 artifact、官方 judge、人工复核 refusal / cheating / protocol violation。", insight: "可复现评测是稀缺品；多数“完全破甲”是自报。", tags: ["JailbreakBench", "HarmBench", "gpt-instruct"], level: "A" },
    { num: "08", name: "内容 / 流量 / 商品", en: "Content & commerce", summary: "教程、付费 prompt、工具箱、社群与 Discord。", practice: "500 积分 prompt、108 积分工具箱、B 站教学、TG / QQ 群、抖音直播售卖。", insight: "需求由模型发布驱动；供给分层：开源声誉 → 二次打包 → 付费社群。", tags: ["linux.sb", "付费 prompt", "Discord"], level: "B" }
  ],

  mechanisms: {
    codex: {
      name: "Codex",
      entry: "~/.codex/config.toml → model_instructions_file",
      official: "“Replacement for built-in instructions instead of AGENTS.md.” 官方 config reference。",
      boundary: "只替换本地内置指令；服务端内容审核、账号风控、模型拒答训练仍在。小怪 README 自己写“不支持绕过云端审核”。",
      surface: ["用户级 config.toml", "项目 AGENTS.md / .codex/config.toml", "CLI -c 覆盖", "无插件面"]
    },
    claude: {
      name: "Claude Code",
      entry: "CLAUDE.md / CLAUDE.local.md / AGENTS.md / .claude/rules/",
      official: "“Claude treats them as context, not enforced configuration.” 要强制阻止动作需用 PreToolUse hook。",
      boundary: "指令是上下文，不是策略；模型可以不听。CLI 另有 --append-system-prompt / --system-prompt。",
      surface: ["用户 ~/.claude/CLAUDE.md", "项目 CLAUDE.md / .claude/rules", "CLI --append-system-prompt", "hooks / skills / MCP"]
    },
    dsh: {
      name: "DeepSeek Harness",
      entry: "插件 + @deepseek-ai/* 渲染层",
      official: "宿主会改写 prompt、审批门、沙箱策略、会话迁移；本地 AGENTS.md 被降为“可能相关 / 参考”，外部网页 / 跨会话引用才标 “untrusted”。",
      boundary: "插件不改模型权重；gen-5 宣称“不注入系统提示词”。版本耦合强：0.2.1-alpha.2 移除 cwd 变量注册，v1.1.71 的 {{cwd}} 让会话起不来；同字节镜像 L5 一过一挂。",
      surface: ["prompt 渲染层", "sandbox / approval 默认策略", "dsh.cmd / dsh.ps1 启动 shim", "prompt-inject.md"]
    },
    opencode: {
      name: "OpenCode",
      entry: "AGENTS.md / CLAUDE.md / opencode.json instructions",
      official: "instructions 数组支持本地与远程 URL，全部合并进上下文；远程 5 秒超时。",
      boundary: "合并进上下文，不是强制策略；远程指令是常被忽视的供应链面。",
      surface: ["项目 AGENTS.md", "全局 ~/.config/opencode/AGENTS.md", "opencode.json instructions", "远程 URL"]
    },
    cursor: {
      name: "Cursor",
      entry: ".cursor/rules/（旧 .cursorrules）",
      official: "仓库级规则文件进入模型上下文；2024-04-12 0.32 记录 .cursorrules，2025-01-23 0.45 升级 .cursor/rules。",
      boundary: "规则文件后门 / 隐藏 prompt injection 是安全研究面；与用户主动“破甲”要区分。",
      surface: ["项目 .cursor/rules", "用户 rules", "MCP 扩展", "远程 rules"]
    }
  },

  insights: [
    { group: "历史", title: "身份重构 > 规则对抗", text: "DAN 的核心不是“说服模型违规”，而是重写“谁在说话”。后来的 unrestricted mode、DSH 人格指令都是同一杠杆。" },
    { group: "历史", title: "上下文即攻击面", text: "many-shot 证明模型会跟随上下文先例；harness 把 AGENTS.md 合法地放进上下文，等于把攻击面从用户消息扩大到项目文件。" },
    { group: "历史", title: "实践先于术语", text: "2022 年就在绕过，但“破限”到 2023-07 才术语化，“破甲”到 2025-08 才大众化。不要用 2026 的词回套 2022 的事。" },
    { group: "历史", title: "泄露工业化", text: "CL4R1T4S 把泄露从事件变成持续目录；Fable 5 的 122,750 bytes → Fable 5.1 的 275,723 bytes。版本 diff 比“神 prompt”更有价值。" },
    { group: "工程", title: "找宿主给的合法替换点", text: "model_instructions_file 是官方配置项，零二进制修改、零抓包。破甲的第一性问题不是“写多狠”，而是“宿主有没有替换系统指令的开关”。" },
    { group: "工程", title: "可撤销性是采用率关键", text: "备份、恢复、幂等、引用修复，比“破得多深”更能决定传播。用户怕的不是破甲，是配置坏了回不去。" },
    { group: "工程", title: "安装器就是产品", text: "同样的提示词，做成双击即用 + 恢复，传播量差一个数量级。" },
    { group: "工程", title: "从改嘴到改管道", text: "只改 system 会被云端审核、SSE 终态吞掉；必须改整条请求 / 响应链。" },
    { group: "工程", title: "分层补丁比单点稳", text: "prompt / code / shim / file 四层各自可回滚；DSH 插件派的工程核心是分层。" },
    { group: "工程", title: "版本耦合是死穴", text: "dsh-purge 72 个 release / 16 天，本质是对宿主快速迭代的补偿；0.2.1-alpha.2 移除 cwd 变量注册，v1.1.71 的 {{cwd}} 直接让会话起不来。" },
    { group: "生态", title: "评测是护城河", text: "1,270 个 fork 能复制文案，但复制不了 A/B/C 门禁与 artifact；可复现评测是稀缺品。" },
    { group: "生态", title: "fork 是防删备份", text: "gpt-instruct 1,277 个 fork，仅 39 个有 star，最高 16；fork 不是开发分支。" },
    { group: "生态", title: "供给端约四成是壳", text: "只有 manifest 的、闭源付费的、逐字复制的；star 与代码独立性不相关。" },
    { group: "生态", title: "市场是信任层，不是安全层", text: "dsh.so L1–L5 只回答“装得上、跑得起来”，不回答安全、效果、合规、封号风险。" },
    { group: "生态", title: "插件市场是新的分发基础设施", text: "L1–L5 让破甲插件获得应用商店式合法性；同时把版本兼容变成核心成本。" },
    { group: "生态", title: "生态正在去破甲化", text: "纯破甲只占 dsh.so <0.05%；Minglink 从 gen-3 破甲转向 gen-5 逆向工作台；头部能力向“安全研究 / 逆向”外壳迁移。" },
    { group: "防守", title: "上下文 ≠ 策略", text: "Claude Code 官方明说 CLAUDE.md 是 context；真正强制要靠 hook。写进去的破甲只是建议，模型可以不听。" },
    { group: "防守", title: "区分来源，重新分配权威", text: "DSH 把本地指令降为“可能相关 / 参考”，把外部网页 / 跨会话引用标为 untrusted，再用审批 / 沙箱 / 子代理作用域做硬边界。不依赖识别具体咒语，而是按来源分配权威。" },
    { group: "防守", title: "不要只加固模型", text: "当模型越来越难说服，攻击者会转向“谁有权写入上下文”这个更上游的问题；只加固模型不够。" },
    { group: "防守", title: "MCP / 工具输出是间接注入面", text: "tool description 被当可信配置、tool result 被当数据；MCP server 被替换或返回内容夹带指令，就能绕过用户消息层检查。" },
    { group: "防守", title: "破甲史的本质是指令权威争夺", text: "谁定义本次会话的操作上下文，谁就定义模型的行为边界。模型侧争叙事权，harness 侧争指令装载权。" }
  ],

  audits: {
    corrections: [
      { old: "最早中文破甲仓库是 Ed1s0nZ（2023-07）", now: "更早：L1Xu4n 初始提交 2022-12-11", proof: "commit" },
      { old: "“破甲”2022 年就有", now: "“破限”2023-07-17；“破甲”2025-08-30", proof: "commit / 贴吧" },
      { old: "2025 已有 coding harness 破甲项目", now: "无可核项目；最早明确命名 2026-06-28", proof: "GitHub 搜索" },
      { old: "Minglink gen-1..4 是四个仓库", now: "同一 repo id 1335211378 连续改名", proof: "301 / repo id" },
      { old: "小杨只是 dsh-purge 推荐者", now: "小杨 = YuJunZhiXue = 作者", proof: "name + commit + UID" },
      { old: "gen-x 是官方第六代", now: "是 a137460387 的 fork（id 1392251216）", proof: "repo id / commit" },
      { old: "dsh-purge 基于 gen-1", now: "未发现派生关系，独立实现", proof: "全仓 grep 0" },
      { old: "DSH 把本地 AGENTS.md 标为“不可信数据”", now: "本地指令降为“可能相关 / 参考”；“untrusted” 属外部网页 / 跨会话引用", proof: "0.2.1-alpha.4 源码" },
      { old: "dsh-purge L5 失败是版本兼容判定", now: "0.2.1-alpha.2 起 cwd 未注册，v1.1.71 的 {{cwd}} 抛 unknown prompt variable", proof: "issue #114 / PR #115 / renderPrompt" },
      { old: "L5 失败是插件版本的纯代码结论", now: "同字节镜像 L5 通过、上游 L5 失败；L5 依赖测试 profile / 环境", proof: "镜像 diff + 页面记录" }
    ],
    cLevel: [
      "gpt-instruct 自报 Astra v2-rc1 双次 A 3/4、B 42/50、artifact 16/16",
      "0x5477 自报 120/120（low / medium / high 三档）",
      "helm-x 自报 50 例 43/50、模型拒答 0%",
      "Super-Instruct 自报 100 样本、28 类、8% 拒绝率"
    ],
    legend: [
      { k: "A", t: "平台元数据 / 官方文档 / commit", d: "可机器复核" },
      { k: "B", t: "一手社区正文 / README", d: "作者自述或可读页面" },
      { k: "C", t: "自报 / 搜索摘要", d: "无第三方复现" },
      { k: "D", t: "推断", d: "不混入事实" }
    ]
  }
};
