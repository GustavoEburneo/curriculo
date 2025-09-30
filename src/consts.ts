import * as svg from "@/assets/svgs";

export const accordionItems = [
  {
    value: "resumo",
    title: "Resumo Profissional",
    contents: [
      {
        title: null,
        subtitle: null,
        description: `Sou um desenvolvedor frontend com forte atuação em aplicações Vue.js e
      Nuxt.js. Tenho experiência em projetos da área de atuação e de
      manutenção de projetos legados, refinamento de demandas, apoio a
      desenvolvedores juniores e participação ativa em decisões de
      arquitetura. Tenho conhecimento no desenvolvimento de APIs utilizando
      Node.js, o que fortaleceu minha visão de produto e integração entre
      frontend e backend.`,
      },
    ],
  },
  {
    value: "formacao",
    title: "Formação",
    contents: [
      {
        title: "Análise e Desenvolvimento de Sistemas - Católica/Joinville-SC",
        subtitle: "2024 - 2025/2",
        description: "",
      },
      {
        title: "Bacharelado em Ciência da Computação - UDESC/Joinville-SC",
        subtitle: "2015 - 2022 (curso concluído em créditos, TCC pendente)",
        description: "",
      },
      {
        title: "Curso técnico em informática - IFSC/Caçador-SC",
        subtitle: "2011 - 2014",
        description: "",
      },
    ],
  },
  {
    value: "habilidades_tecnicas",
    title: "Habilidades Técnicas",
    contents: [
      {
        title: "Linguagens e frameworks:",
        subtitle:
          "JavaScript, TypeScript, HTML, CSS, Vue.js (2 e 3), Nuxt.js, ReactJS, Node.js",
        description: "",
      },
      {
        title: "Bibliotecas e Frameworks:",
        subtitle:
          "Tailwind, Vuex, Vite, Vitest, Faker.js, JWT, Zod, Cypress, Jest, Supertest",
        description: "",
      },
      {
        title: "Banco de Dados e Backend",
        subtitle:
          "PostgreSQL, MySQL, Drizzle ORM, Fastify, GraphQL, SpringBoot",
        description: "",
      },
      {
        title: "Processos e Ferramentas",
        subtitle:
          "Git, GitLab, GitHub, Scrum, Testes Automatizados, API RESTful",
        description: "",
      },
    ],
  },
  {
    value: "experiencia",
    title: "Experiência",
    contents: [
      {
        title: "Desenvolvedor Frontend Pleno",
        subtitle: "Nexdom Healthtech- 2023 | Atualmente",
        description:
          "Atuo como Frontend Pleno na Nexdom, com foco na criação de novas aplicações do ecossistema Unimed. Participo ativamente de decisões de arquitetura, liderando o refinamento técnico das tarefas em conjunto com o time de roadmap. Também atuo como padrinho técnico de desenvolvedores juniores, promovendo boas práticas e suporte contínuo.",
      },
      {
        title: "Desenvolvedor Frontend Junior",
        subtitle: "Zitrus Healthtech - 2020 | 2023",
        description:
          "Atuei no desenvolvimento e manutenção de aplicações frontend com foco em performance e clareza de código. Trabalhei em integração com APIs REST e GraphQL, aplicando boas práticas de componentes reutilizáveis, testes e versionamento.",
      },
      {
        title: "Estagiário",
        subtitle: "FESC Tecnologia - 2018 | 2020",
        description:
          "Iniciei minha trajetória na área de tecnologia com foco em frontend, atuando no desenvolvimento de interfaces web para sistemas da área da saúde. Trabalhei com HTML, CSS, JavaScript, Vue.js e Angular, além de colaborar na resolução de bugs, testes manuais e automação de tarefas repetitivas.",
      },
    ],
  },
  {
    value: "idiomas",
    title: "idiomas",
    contents: [
      {
        title: "Português - Nativo",
        subtitle: "",
        description: "",
      },
      {
        title:
          "Inglês - Intermediário em leitura, intermediário em escrita e básico em conversação",
        subtitle: "",
        description: "",
      },
    ],
  },
  {
    value: "cursoes_especializacoes",
    title: "Cursos e Expecializações",
    contents: [
      {
        title: "Desafio: Sua primeira API em Node.js",
        subtitle: "Rocketseat - 2025",
        description:
          "Desenvolvimento de uma API completa utilizando Fastify, TypeScript, JWT, Zod, PostgreSQL e Drizzle ORM. Implementação de autenticação, criação de entidades e testes automatizados com Vitest e Supertest, com foco na integração de conceitos de backend a partir da visão de um desenvolvedor frontend.",
      },
    ],
  },
];

export const svgs = [
  {
    id: "html",
    width: 50,
    path: svg.html,
  },
  {
    id: "javascript",
    width: 44,
    path: svg.javascript,
  },
  {
    id: "typescript",
    width: 50,
    path: svg.typescript,
  },
  {
    id: "nodejs",
    width: 50,
    path: svg.nodejs,
  },
  {
    id: "vue",
    width: 50,
    path: svg.vue,
  },
  {
    id: "react",
    width: 50,
    path: svg.react,
  },
  {
    id: "css",
    width: 50,
    path: svg.css,
  },
  {
    id: "tailwind",
    width: 50,
    path: svg.tailwind,
  },
  {
    id: "git",
    width: 50,
    path: svg.git,
  },
  {
    id: "gitlab",
    width: 50,
    path: svg.gitlab,
  },
  {
    id: "github",
    width: 50,
    path: svg.github_dark,
    darkMode: svg.github,
  },
  {
    id: "vuex",
    width: 50,
    path: svg.vuex,
  },
  {
    id: "pinia",
    width: 50,
    path: svg.pinia,
  },
  {
    id: "vite",
    width: 50,
    path: svg.vitejs,
  },
  {
    id: "vitest",
    width: 50,
    path: svg.vitest,
  },
  {
    id: "docker",
    width: 50,
    path: svg.docker,
  },
  {
    id: "mysql",
    width: 50,
    path: svg.mysql,
  },
  {
    id: "postgresql",
    width: 50,
    path: svg.postgresql,
  },
  {
    id: "fastify",
    width: 50,
    path: svg.fastify_dark,
    darkMode: svg.fastify,
  },
  {
    id: "drizzle",
    width: 50,
    path: svg.drizzle,
  },
];
