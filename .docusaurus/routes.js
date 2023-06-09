import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '11e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '221'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '0ce'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '1d7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'e7f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '969'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'dd5'),
    exact: true
  },
  {
    path: '/archive',
    component: ComponentCreator('/archive', '141'),
    exact: true
  },
  {
    path: '/cp-roadmap-for-beginners-and-people-below-specialist',
    component: ComponentCreator('/cp-roadmap-for-beginners-and-people-below-specialist', 'a11'),
    exact: true
  },
  {
    path: '/leetcode/implement-queue-using-stacks',
    component: ComponentCreator('/leetcode/implement-queue-using-stacks', '531'),
    exact: true
  },
  {
    path: '/leetcode/longest-common-subsequence',
    component: ComponentCreator('/leetcode/longest-common-subsequence', 'c28'),
    exact: true
  },
  {
    path: '/mongodb-tutorial',
    component: ComponentCreator('/mongodb-tutorial', '215'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags', '24c'),
    exact: true
  },
  {
    path: '/tags/back-end',
    component: ComponentCreator('/tags/back-end', '251'),
    exact: true
  },
  {
    path: '/tags/code-chef',
    component: ComponentCreator('/tags/code-chef', '011'),
    exact: true
  },
  {
    path: '/tags/code-forces',
    component: ComponentCreator('/tags/code-forces', '468'),
    exact: true
  },
  {
    path: '/tags/cp',
    component: ComponentCreator('/tags/cp', 'dc3'),
    exact: true
  },
  {
    path: '/tags/dsa',
    component: ComponentCreator('/tags/dsa', 'd34'),
    exact: true
  },
  {
    path: '/tags/dynamic-programming',
    component: ComponentCreator('/tags/dynamic-programming', '460'),
    exact: true
  },
  {
    path: '/tags/leet-code',
    component: ComponentCreator('/tags/leet-code', '815'),
    exact: true
  },
  {
    path: '/tags/leetcode-daily',
    component: ComponentCreator('/tags/leetcode-daily', '363'),
    exact: true
  },
  {
    path: '/tags/mongo-db',
    component: ComponentCreator('/tags/mongo-db', 'f5d'),
    exact: true
  },
  {
    path: '/tags/queue',
    component: ComponentCreator('/tags/queue', '3ff'),
    exact: true
  },
  {
    path: '/tags/roadmap',
    component: ComponentCreator('/tags/roadmap', 'c40'),
    exact: true
  },
  {
    path: '/tags/stack',
    component: ComponentCreator('/tags/stack', '5b4'),
    exact: true
  },
  {
    path: '/tags/string',
    component: ComponentCreator('/tags/string', '070'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '4db'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '231'),
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
        path: '/category/web-development',
        component: ComponentCreator('/category/web-development', '255'),
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
        component: ComponentCreator('/standard-problems/Blind75', 'e2a'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/standard-problems/CSES ProblemSet',
        component: ComponentCreator('/standard-problems/CSES ProblemSet', 'a41'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/web-development/JavaScript/javascript-scopes',
        component: ComponentCreator('/web-development/JavaScript/javascript-scopes', '2ec'),
        exact: true,
        sidebar: "webDevelopment"
      },
      {
        path: '/web-development/JavaScript/promise',
        component: ComponentCreator('/web-development/JavaScript/promise', 'ac4'),
        exact: true,
        sidebar: "webDevelopment"
      },
      {
        path: '/web-development/mongodb-tutorial',
        component: ComponentCreator('/web-development/mongodb-tutorial', '584'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/web-development/react-hooks',
        component: ComponentCreator('/web-development/react-hooks', '97f'),
        exact: true,
        sidebar: "sidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
