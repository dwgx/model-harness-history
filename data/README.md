# 数据说明

快照：2026-10-17 / 18。star / fork 为抓取时点值，会漂移。

## 证据等级

| 等级 | 含义 |
|---|---|
| A | 平台元数据 / 官方文档 / commit，可机器复核 |
| B | 一手公开正文 / README / 可读页面 |
| C | 自报 / 二手 / 搜索摘要，无第三方复现 |
| D | 推断，不混入事实 |

## 文件

### `site-data.json`

站点全量数据，顶层键：`stats`、`timeline`、`repos`、`schools`、`mechanisms`、`insights`、`audits`。

### `timeline.csv`

字段：`date`、`year`、`era`、`tag`、`level`、`title`、`desc`。一行一个公开事件；`level` 为证据等级。

### `repos.csv`

字段：`name`、`url`、`group`、`type`、`created`、`stars`、`forks`、`target`、`note`、`level`。star / fork 为 2026-10-17 前后快照。

### `schools.csv`

字段：`num`、`name`、`en`、`summary`、`practice`、`insight`、`tags`、`level`。`tags` 为分号分隔的标签。

### `insights.csv`

字段：`group`、`title`、`text`。按历史 / 工程 / 生态 / 防守分组。

### `threads.csv`

字段：`platform`、`title`、`url`、`date`、`author_or_data`、`views_replies`、`note`。只收研究相关的公开主题；未重新发布全站 3,003 条标题扫描，以避免转贴用户内容。标题与链接归原作者 / 论坛。

### `mechanisms.json`

5 个 harness 的指令入口、官方语义、边界与攻击面：`codex`、`claude`、`dsh`、`opencode`、`cursor`。

### `audit-notes.json`

`corrections`（已修正条目）、`cLevel`（自报数字）、`legend`（等级说明）。

## 限制

- 平台 star / fork、版本号、页面内容会变化；以快照日期为准。
- 论坛正文 / 评论区的可读性受登录墙与平台策略影响；本数据集只保留标题、链接与摘要。
- 通过率均为公开自报，未独立复现；不能作为跨项目比较基准。
- 不含个人数据（邮箱、UID、头像、私信）与可执行 payload。
