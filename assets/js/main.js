import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".Hyst",
  `Encarregado da supervisão e verificação meticulosa dos fluxos de dados relativos ao estoque e às vendas dos clientes em DB, 
  bem como da implementação de ajustes necessários. Responsável, adicionalmente, pela otimização, atualização e verificação dos 
  painéis de controle (Dashboards) utilizados pelos clientes em Power BI.
  Além de otimização de scripts e automações de tarefas repetitivas e rotineiras.`,
  "Analista BI",
  "Hyst",
  "Jan 2024 - Hoje"
);
