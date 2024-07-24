import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".Oakem",
  `Responsável pelo gerenciamento do sistema ERP, controle de documentação, geração de relatórios em Power BI para tomada de decisões, 
   controle de Data Bases,
   manipulação de dados em staging, custeio dos produtos e setores. Ajudante em tarefas de faturamento e contabilidade.`,
  "Auxiliar Financeiro",
  "Oakem",
  "Nov 2021 - Jan 2024 (3 ano)"
);

hoverChangeExperience(
  ".Hyst",
  `Encarregado da supervisão e verificação meticulosa dos fluxos de dados relativos ao estoque e às vendas dos clientes em DB,
  bem como da implementação de ajustes necessários. Responsável, adicionalmente, pela otimização, atualização e verificação dos painéis de controle (Dashboards) 
  utilizados pelos clientes em Power BI. Além de otimização de scripts e automações de tarefas repetitivas e rotineiras.`,
  "Analista BI",
  "Hyst",
  "Jan 2024 - Hoje"
);

hoverChangeExperience(
  ".codigofontetv",
  `Trabalhei como Social Media e Designer no Código Fonte TV, 
  onde teve como foco as criações de conteúdos sobre programação 
  para a comunidade dev através das redes sociais.`,
  "Social Media e Designer",
  "Código Fonte TV",
  "Jun 2021 - Jan 2022 (8 meses)"
);

hoverChangeExperience(
  ".contweb",
  `Realizei o estágio na ContWeb, uma empresa de contabilidade. 
  Onde pela primeira vez tive experiência com o React. Além do
  desenvolvimento frontend criei os designs da nova plataforma da empresa.`,
  "Developer frontend e UI Designer",
  "ContWeb",
  "Set 2021 - Nov 2021 (3 meses)"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".sass",
  "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);
hoverChangeDescription(
  ".styled",
  "styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);
hoverChangeDescription(
  ".radix",
  "Radix é uma biblioteca que fornece componentes acessíveis e sem estilos para a criação de aplicação em React."
);
hoverChangeDescription(
  ".cypress",
  "Cypress é um framework para automação de testes end-to-end, onde atualmente usa a linguagem JavaScript."
);
hoverChangeDescription(
  ".storybook",
  "Storybook é uma ferramenta que tem como objetivo documentar e testar os componentes da aplicação."
);

