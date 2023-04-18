import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '4bf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'c1a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'e6f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '951'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '677'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '09c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'b9f'),
    exact: true
  },
  {
    path: '/archive',
    component: ComponentCreator('/archive', 'fde'),
    exact: true
  },
  {
    path: '/cp-roadmap-for-beginners-and-people-below-specialist',
    component: ComponentCreator('/cp-roadmap-for-beginners-and-people-below-specialist', 'f9d'),
    exact: true
  },
  {
    path: '/leetcode/implement-queue-using-stacks',
    component: ComponentCreator('/leetcode/implement-queue-using-stacks', 'c9a'),
    exact: true
  },
  {
    path: '/leetcode/longest-common-subsequence',
    component: ComponentCreator('/leetcode/longest-common-subsequence', '018'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags', 'cf0'),
    exact: true
  },
  {
    path: '/tags/code-chef',
    component: ComponentCreator('/tags/code-chef', 'ec2'),
    exact: true
  },
  {
    path: '/tags/code-forces',
    component: ComponentCreator('/tags/code-forces', 'e6a'),
    exact: true
  },
  {
    path: '/tags/cp',
    component: ComponentCreator('/tags/cp', '9cd'),
    exact: true
  },
  {
    path: '/tags/dsa',
    component: ComponentCreator('/tags/dsa', 'afb'),
    exact: true
  },
  {
    path: '/tags/dynamic-programming',
    component: ComponentCreator('/tags/dynamic-programming', '953'),
    exact: true
  },
  {
    path: '/tags/leet-code',
    component: ComponentCreator('/tags/leet-code', 'ecd'),
    exact: true
  },
  {
    path: '/tags/leetcode-daily',
    component: ComponentCreator('/tags/leetcode-daily', '4e5'),
    exact: true
  },
  {
    path: '/tags/queue',
    component: ComponentCreator('/tags/queue', '574'),
    exact: true
  },
  {
    path: '/tags/roadmap',
    component: ComponentCreator('/tags/roadmap', '93e'),
    exact: true
  },
  {
    path: '/tags/stack',
    component: ComponentCreator('/tags/stack', '02b'),
    exact: true
  },
  {
    path: '/tags/string',
    component: ComponentCreator('/tags/string', 'b95'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '36c'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '114'),
    routes: [
      {
        path: '/algorithms/intro',
        component: ComponentCreator('/algorithms/intro', 'ac2'),
        exact: true,
        sidebar: "algorithms"
      },
      {
        path: '/algorithms/kadanes-algorithm',
        component: ComponentCreator('/algorithms/kadanes-algorithm', '461'),
        exact: true,
        sidebar: "algorithms"
      },
      {
        path: '/algorithms/kadanes-algorithm/flip-bits',
        component: ComponentCreator('/algorithms/kadanes-algorithm/flip-bits', '6ea'),
        exact: true,
        sidebar: "algorithms"
      },
      {
        path: '/algorithms/kadanes-algorithm/maximum-subarray-sum',
        component: ComponentCreator('/algorithms/kadanes-algorithm/maximum-subarray-sum', 'c47'),
        exact: true,
        sidebar: "algorithms"
      },
      {
        path: '/algorithms/monotonic-stack',
        component: ComponentCreator('/algorithms/monotonic-stack', '301'),
        exact: true,
        sidebar: "algorithms"
      },
      {
        path: '/algorithms/string-algorithms',
        component: ComponentCreator('/algorithms/string-algorithms', '24e'),
        exact: true,
        sidebar: "algorithms"
      },
      {
        path: '/category/algorithms',
        component: ComponentCreator('/category/algorithms', 'bfa'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/category/data-structures',
        component: ComponentCreator('/category/data-structures', 'ed1'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/category/standard-problems',
        component: ComponentCreator('/category/standard-problems', '9ed'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/data-structures/graph',
        component: ComponentCreator('/data-structures/graph', '385'),
        exact: true,
        sidebar: "dataStructures"
      },
      {
        path: '/data-structures/graph/bipartite-graph',
        component: ComponentCreator('/data-structures/graph/bipartite-graph', '117'),
        exact: true,
        sidebar: "dataStructures"
      },
      {
        path: '/data-structures/graph/bipartite-graph/possible_bipartition',
        component: ComponentCreator('/data-structures/graph/bipartite-graph/possible_bipartition', '2a4'),
        exact: true,
        sidebar: "dataStructures"
      },
      {
        path: '/data-structures/graph/connected-components',
        component: ComponentCreator('/data-structures/graph/connected-components', 'fec'),
        exact: true,
        sidebar: "dataStructures"
      },
      {
        path: '/data-structures/intro',
        component: ComponentCreator('/data-structures/intro', '0e0'),
        exact: true,
        sidebar: "dataStructures"
      },
      {
        path: '/data-structures/tree',
        component: ComponentCreator('/data-structures/tree', 'ad5'),
        exact: true,
        sidebar: "dataStructures"
      },
      {
        path: '/data-structures/tree/dfs',
        component: ComponentCreator('/data-structures/tree/dfs', 'c45'),
        exact: true,
        sidebar: "dataStructures"
      },
      {
        path: '/data-structures/tree/root-shifting',
        component: ComponentCreator('/data-structures/tree/root-shifting', '9ff'),
        exact: true,
        sidebar: "dataStructures"
      },
      {
        path: '/standard-problems/Blind75',
        component: ComponentCreator('/standard-problems/Blind75', 'ba2'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/standard-problems/CSES ProblemSet',
        component: ComponentCreator('/standard-problems/CSES ProblemSet', '168'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/standard-problems/intro',
        component: ComponentCreator('/standard-problems/intro', 'ac8'),
        exact: true,
        sidebar: "StandardProblems"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
