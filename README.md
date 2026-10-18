# Model Harness History · 模型 Harness 破甲史

独立、可核来源的历史 / 统计研究档案：2016–2026.10，记录公开社区如何讨论“谁有权定义本次会话的指令上下文”，以及各代做法的机制与启发。

**在线站点：** https://dwgx.github.io/model-harness-history/

## 这是什么

- 历史 / 统计研究，不是操作指南。
- 来源：平台元数据、官方文档、commit、公开 README、公开论坛帖。
- 不含可执行 payload、绕过步骤、私信或非公开数据。

## 这不是什么

- 不代表任何厂商、仓库或论坛；非官方。
- 不是 benchmark；所有通过率均为公开自报，未独立复现。
- 不构成法律或合规建议。

## 数据

| 文件 | 内容 |
|---|---|
| `data/site-data.json` | 站点全量数据（时间线、仓库、流派、机制、启发、审计注记） |
| `data/timeline.csv` | 43 条时间线 |
| `data/repos.csv` | 30 个仓库 / 插件 |
| `data/schools.csv` | 9 个流派 |
| `data/insights.csv` | 21 条启发 |
| `data/threads.csv` | 16 条研究相关的公开论坛主题 |
| `data/mechanisms.json` | 5 个 harness 的指令面 |
| `data/audit-notes.json` | 证据等级与已修正条目 |

字段、快照日期与口径见 [`data/README.md`](data/README.md)。

## 方法

- 快照：2026-10-17 / 18；star / fork 为抓取时点值，会漂移。
- 证据等级：A = 平台元数据 / 官方文档 / commit；B = 一手公开正文；C = 自报 / 二手；D = 推断。
- 数字尽量带日期与分母；冲突保留，不取平均。
- 更正：开 issue 或 PR。

## License

- 原创文字与数据：**CC BY-SA 4.0**（见 `LICENSE`）。
- 站点代码：**MIT**（见 `LICENSE-MIT`）。
- 第三方仓库名、README 摘录、论坛标题归原作者，见 `NOTICE`；不在本仓库许可范围内。
- 按“现状”提供，不承担任何明示或默示担保或责任。
