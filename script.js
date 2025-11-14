// Lista de projetos – edite com os seus!
const projects = [
  {
    title: "API de Gestão de Tarefas",
    description:
      "API REST em Python (FastAPI) com autenticação JWT, CRUD completo e documentação automática.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    codeUrl: "https://github.com/seu-usuario/api-tarefas",
    demoUrl: "" // se não tiver demo, deixa string vazia
  },
  {
    title: "Dashboard de Análise de Vendas",
    description:
      "Pipeline em Python + SQL para tratar dados e dashboard web em JS exibindo gráficos interativos.",
    tags: ["Python", "SQL", "JavaScript"],
    codeUrl: "https://github.com/seu-usuario/dashboard-vendas",
    demoUrl: ""
  },
  {
    title: "Automação de Relatórios Diários",
    description:
      "Script em Python que gera relatórios a partir do banco SQL e envia por e-mail automaticamente.",
    tags: ["Python", "SQL", "Automação"],
    codeUrl: "https://github.com/seu-usuario/automacao-relatorios",
    demoUrl: ""
  }
];

function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.className = "project-desc";
    desc.textContent = project.description;

    const tagsContainer = document.createElement("div");
    tagsContainer.className = "project-tags";
    project.tags.forEach((tagText) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = tagText;
      tagsContainer.appendChild(tag);
    });

    const linksContainer = document.createElement("div");
    linksContainer.className = "project-links";

    if (project.codeUrl) {
      const codeLink = document.createElement("a");
      codeLink.href = project.codeUrl;
      codeLink.target = "_blank";
      codeLink.className = "btn secondary";
      codeLink.textContent = "Código";
      linksContainer.appendChild(codeLink);
    }

    if (project.demoUrl) {
      const demoLink = document.createElement("a");
      demoLink.href = project.demoUrl;
      demoLink.target = "_blank";
      demoLink.className = "btn primary";
      demoLink.textContent = "Demo";
      linksContainer.appendChild(demoLink);
    }

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(tagsContainer);
    card.appendChild(linksContainer);

    container.appendChild(card);
  });
}

// ano no footer
function setYear() {
  const span = document.getElementById("year");
  if (span) {
    span.textContent = new Date().getFullYear();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setYear();
});
