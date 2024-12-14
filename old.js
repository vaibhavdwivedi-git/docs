const data = {
  $schema: "https://mintlify.com/schema.json",
  name: "ReScan",
  logo: {
    dark: "/logo/rescan-dark.svg",
    light: "/logo/rescan-light.svg",
  },
  favicon: "/favicon.svg",
  colors: {
    primary: "#0D9373",
    light: "#07C983",
    dark: "#0D9373",
    anchors: {
      from: "#0D9373",
      to: "#07C983",
    },
  },
  api: {
    auth: {
      method: "key",
      name: "x-api-key",
      inputPrefix:
        "1mPU/TsWuVYqPx6fQNXbWQ==:T4fa4ltXa+LybOfCxz2eVhrZtLeqWz+0d4m691U+S4XPlpEKTJg5OM6Ok+ziqsjDOHadoeowzP+CJmwawtjSmw==",
    },
    baseUrl: "https://api.blockflow.network/rest",
  },
  topbarLinks: [
    {
      name: "Support",
      url: "mailto:support@blockflow.network",
    },
    {
      name: "Get API Key",
      url: "https://app.blockflow.network/",
    },
  ],
  tabs: [
    {
      name: "Documentation",
      url: "documentation",
    },
    {
      name: "EigenLayer",
      url: "eigen-reference",
    },
    {
      name: "EigenDA",
      url: "eigenda-reference",
    },
    {
      name: "EigenScan",
      url: "eigenlayer-reference",
    },
  ],
  navigation: [
    {
      group: "API Documentation",
      pages: [
        "documentation/introduction",
        "documentation/prerequisites",
        "documentation/errors",
      ],
    },
    {
      group: "AVS",
      pages: [
        "eigen-reference/avs/index",
        "eigen-reference/avs/avs-all-address",
        "eigen-reference/avs/avs-by-address",
        "eigen-reference/avs/stakers-by-avs",
        "eigen-reference/avs/operators-by-avs",
      ],
    },
    {
      group: "Operator",
      pages: [
        "eigen-reference/operators/index",
        "eigen-reference/operators/operator-by-address",
        "eigen-reference/operators/operator-all-address",
        "eigen-reference/operators/operator-stakers",
        "eigen-reference/operators/operator-staker-history",
        "eigen-reference/operators/operator-avs-history",
      ],
    },
    {
      group: "Stakers",
      pages: [
        "eigen-reference/stakers/index",
        "eigen-reference/stakers/staker-by-address",
        "eigen-reference/stakers/staker-withdrawals-all",
        "eigen-reference/stakers/staker-withdrawals-queued",
        "eigen-reference/stakers/staker-withdrawal-completed",
        "eigen-reference/stakers/deposits-by-staker",
      ],
    },
    {
      group: "Pods",
      pages: [
        "eigen-reference/pods/index",
        "eigen-reference/pods/pods-all-address",
        "eigen-reference/pods/pod-by-address",
        "eigen-reference/pods/pods-by-owner",
        "eigen-reference/pods/pods-transaction",
        "eigen-reference/pods/pod-transaction",
      ],
    },
    {
      group: "Deposits and Withdrawals",
      pages: [
        "eigen-reference/withdrawals-deposits/deposits",
        "eigen-reference/withdrawals-deposits/withdrawals",
        "eigen-reference/withdrawals-deposits/withdrawal-by-root",
      ],
    },
    {
      group: "Rewards",
      pages: [
        "eigen-reference/rewards/all-avs-rewards-submission",
        "eigen-reference/rewards/avs-rewards-submission-by-hash",
        "eigen-reference/rewards/all-distribution-roots",
        "eigen-reference/rewards/all-rewards-claim",
        "eigen-reference/rewards/avs-rewards-submission-by-avs",
        "eigen-reference/rewards/avs-rewards-submission-by-tokenUsed",
        "eigen-reference/rewards/distribution-roots-by-status",
      ],
    },
    {
      group: "Batches",
      pages: [
        "eigenda-reference/batches/all",
        "eigenda-reference/batches/batch-info",
        "eigenda-reference/batches/batch-nonsigners",
        "eigenda-reference/batches/batch-by-batchId",
        "eigenda-reference/batches/batch-by-hash",
      ],
    },
    {
      group: "Operators",
      pages: [
        "eigenda-reference/operators/all",
        "eigenda-reference/operators/operator-info",
        "eigenda-reference/operators/operators-by-status",
        "eigenda-reference/operators/operators-by-ejection",
        "eigenda-reference/operators/operator-activity",
        "eigenda-reference/operators/operator-with-issues",
        "eigenda-reference/operators/operator-nonsignings",
      ],
    },
    {
      group: "Quorums",
      pages: [
        "eigenda-reference/quorums/all",
        "eigenda-reference/quorums/quorum-info",
        "eigenda-reference/quorums/quorum-operators",
        "eigenda-reference/quorums/quorum-activity",
      ],
    },
    {
      group: "Tracker",
      pages: ["documentation/tracker/activity", "documentation/tracker/tokens"],
    },
    {
      group: "AVS",
      pages: [
        "eigenlayer-reference/avs/all",
        "eigenlayer-reference/avs/operators",
        "eigenlayer-reference/avs/info",
        "eigenlayer-reference/avs/apy",
        "eigenlayer-reference/avs/activity",
        "eigenlayer-reference/avs/rewards",
      ],
    },
    {
      group: "Operators",
      pages: [
        "eigenlayer-reference/operator/all",
        "eigenlayer-reference/operator/avs",
        "eigenlayer-reference/operator/info",
        "eigenlayer-reference/operator/historical",
        "eigenlayer-reference/operator/strategies",
        "eigenlayer-reference/operator/tvl",
        "eigenlayer-reference/operator/activity",
      ],
    },
    {
      group: "Stakers",
      pages: [
        "eigenlayer-reference/staker/all",
        "eigenlayer-reference/staker/info",
        "eigenlayer-reference/staker/historical",
        "eigenlayer-reference/staker/activity",
      ],
    },
    {
      group: "Strategies",
      pages: [
        "eigenlayer-reference/strategy/all",
        "eigenlayer-reference/strategy/info",
        "eigenlayer-reference/strategy/historical",
        "eigenlayer-reference/strategy/activity",
      ],
    },
    {
      group: "Pods",
      pages: [
        "eigenlayer-reference/pod/all",
        "eigenlayer-reference/pod/info",
        "eigenlayer-reference/pod/historical",
        "eigenlayer-reference/pod/activity",
      ],
    },
    {
      group: "Rewards",
      pages: [
        "eigenlayer-reference/reward/all",
        "eigenlayer-reference/reward/info",
        "eigenlayer-reference/reward/claim",
        "eigenlayer-reference/reward/strategy",
      ],
    },
    {
      group: "Withdrawals",
      pages: [
        "eigenlayer-reference/withdrawal/all",
        "eigenlayer-reference/withdrawal/info",
      ],
    },
    {
      group: "Distribution Roots",
      pages: [
        "eigenlayer-reference/distributionRoot/all",
        "eigenlayer-reference/distributionRoot/info",
      ],
    },
  ],
  footerSocials: {
    x: "https://x.com/blockflowLabs",
    github: "https://github.com/blockflowlabs",
    linkedin: "https://in.linkedin.com/company/blockflowlabs",
  },
};
