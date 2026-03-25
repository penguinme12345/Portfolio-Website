const DEFAULT_WALLPAPER = "assets/images/wallpapers/default_wallpaper.jpg";

const state = {
  data: null,
  currentWallpaper: DEFAULT_WALLPAPER,
  windows: [
    "aboutWindow",
    "codingWindow",
    "solidworksWindow",
    "githubWindow",
    "contactWindow",
    "detailWindow",
    "settingsWindow"
  ],
  activeCodingFilter: {
    text: "",
    tool: "all"
  },
  activeWindowId: null,
  zIndex: 50
};

const els = {
  wallpaper: document.getElementById("wallpaper"),
  desktopShell: document.getElementById("desktopShell"),
  lockScreen: document.getElementById("lockScreen"),
  unlockButton: document.getElementById("unlockButton"),
  lockScreenTime: document.getElementById("lockScreenTime"),
  lockScreenDate: document.getElementById("lockScreenDate"),
  startButton: document.getElementById("startButton"),
  startMenu: document.getElementById("startMenu"),
  startSearch: document.getElementById("startSearch"),
  taskbarClock: document.getElementById("taskbarClock"),
  taskbarWindows: document.getElementById("taskbarWindows"),
  desktopContextMenu: document.getElementById("desktopContextMenu"),
  aboutSummary: document.getElementById("aboutSummary"),
  profileQuickFacts: document.getElementById("profileQuickFacts"),
  codingProjectsGrid: document.getElementById("codingProjectsGrid"),
  solidworksProjectsGrid: document.getElementById("solidworksProjectsGrid"),
  filterTools: document.getElementById("filterTools"),
  searchProjects: document.getElementById("searchProjects"),
  detailContent: document.getElementById("detailContent"),
  githubLink: document.getElementById("githubLink"),
  emailLink: document.getElementById("emailLink"),
  linkedinLink: document.getElementById("linkedinLink"),
  contactGithubLink: document.getElementById("contactGithubLink"),
  resumeLink: document.getElementById("resumeLink"),
  emailSocialLink: document.getElementById("emailSocialLink"),
  linkedinSocialLink: document.getElementById("linkedinSocialLink"),
  githubSocialLink: document.getElementById("githubSocialLink"),
  startUserName: document.getElementById("startUserName"),
  startEmailLink: document.getElementById("startEmailLink"),
  startLinkedinLink: document.getElementById("startLinkedinLink"),
  startGithubLink: document.getElementById("startGithubLink"),
  powerButton: document.getElementById("powerButton"),
  wallpaperPicker: document.getElementById("wallpaperPicker")
};

init();

async function init() {
  setWallpaper(state.currentWallpaper);
  bindWindowButtons();
  bindStartMenu();
  bindStartSearch();
  bindWindowDragging();
  bindGlobalShortcuts();
  bindLockScreen();
  bindContextMenu();
  bindWallpaperPicker();
  startClocks();

  try {
    const response = await fetch("./data/projects.json");
    if (!response.ok) {
      throw new Error("Project data fetch failed");
    }

    state.data = await response.json();
    hydrateProfile();
    populateToolFilter();
    renderCodingProjects();
    renderSolidworksProjects();
    bindSearchAndFilter();
    showDefaultProject();
  } catch (error) {
    renderDataError();
  }

  updateWindowButtons();
}

function bindWindowButtons() {
  document.querySelectorAll("[data-open-window]").forEach((button) => {
    button.addEventListener("click", () => {
      openWindow(button.getAttribute("data-open-window"));
    });
  });

  document.querySelectorAll("[data-close-window]").forEach((button) => {
    button.addEventListener("click", () => {
      closeWindow(button.getAttribute("data-close-window"));
    });
  });

  document.querySelectorAll(".window").forEach((windowEl) => {
    windowEl.addEventListener("pointerdown", () => {
      bringWindowToFront(windowEl);
    });
  });
}

function bindStartMenu() {
  if (!els.startButton || !els.startMenu) {
    return;
  }

  els.startButton.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleStartMenu();
  });

  els.startMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  els.powerButton?.addEventListener("click", () => {
    lockDesktop();
  });

  document.addEventListener("click", () => {
    closeStartMenu();
    hideContextMenu();
  });
}

function bindStartSearch() {
  if (!els.startSearch) {
    return;
  }

  els.startSearch.addEventListener("input", (event) => {
    filterStartEntries(event.target.value.trim().toLowerCase());
  });
}

function bindWindowDragging() {
  document.querySelectorAll(".window").forEach((windowEl) => {
    const handle = windowEl.querySelector("[data-drag-handle]");
    if (!handle) {
      return;
    }

    let dragState = null;

    handle.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 || event.target.closest(".window-controls")) {
        return;
      }

      bringWindowToFront(windowEl);

      const rect = windowEl.getBoundingClientRect();
      dragState = {
        pointerId: event.pointerId,
        offsetX: event.clientX - rect.left,
        offsetY: event.clientY - rect.top
      };

      handle.setPointerCapture(event.pointerId);
      event.preventDefault();
    });

    handle.addEventListener("pointermove", (event) => {
      if (!dragState || dragState.pointerId !== event.pointerId) {
        return;
      }

      positionWindow(windowEl, event.clientX - dragState.offsetX, event.clientY - dragState.offsetY);
    });

    const stopDragging = (event) => {
      if (!dragState || dragState.pointerId !== event.pointerId) {
        return;
      }

      dragState = null;
      if (handle.hasPointerCapture(event.pointerId)) {
        handle.releasePointerCapture(event.pointerId);
      }
    };

    handle.addEventListener("pointerup", stopDragging);
    handle.addEventListener("pointercancel", stopDragging);
  });
}

function bindGlobalShortcuts() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (els.desktopContextMenu && !els.desktopContextMenu.hidden) {
        hideContextMenu();
        return;
      }

      if (els.startMenu && !els.startMenu.hidden) {
        closeStartMenu();
        return;
      }

      if (state.activeWindowId) {
        closeWindow(state.activeWindowId);
      }
    }

    if (event.key === "Enter" && els.lockScreen && !els.lockScreen.hidden) {
      unlockDesktop();
    }
  });

  window.addEventListener("resize", () => {
    syncWindowPositions();
    hideContextMenu();
  });
}

function bindLockScreen() {
  els.unlockButton?.addEventListener("click", () => {
    unlockDesktop();
  });
}

function bindContextMenu() {
  if (!els.desktopShell || !els.desktopContextMenu) {
    return;
  }

  els.desktopShell.addEventListener("contextmenu", (event) => {
    event.preventDefault();

    const taskbarHeight = document.querySelector(".taskbar")?.offsetHeight || 40;
    const maxLeft = window.innerWidth - els.desktopContextMenu.offsetWidth - 12;
    const maxTop = window.innerHeight - taskbarHeight - 180;
    const left = clamp(event.clientX, 12, Math.max(12, maxLeft));
    const top = clamp(event.clientY, 12, Math.max(12, maxTop));

    els.desktopContextMenu.style.left = `${left}px`;
    els.desktopContextMenu.style.top = `${top}px`;
    els.desktopContextMenu.hidden = false;
  });

  els.desktopContextMenu.addEventListener("click", (event) => {
    event.stopPropagation();

    const actionButton = event.target.closest("[data-context-action]");
    if (!actionButton) {
      hideContextMenu();
      return;
    }

    if (actionButton.getAttribute("data-context-action") === "refresh") {
      syncWindowPositions();
    }

    hideContextMenu();
  });
}

function bindWallpaperPicker() {
  if (!els.wallpaperPicker) {
    return;
  }

  els.wallpaperPicker.querySelectorAll("[data-wallpaper]").forEach((button) => {
    button.addEventListener("click", () => {
      const wallpaper = button.getAttribute("data-wallpaper");
      setWallpaper(wallpaper);
    });
  });

  updateWallpaperSelection();
}

function startClocks() {
  const renderClock = () => {
    const now = new Date();

    if (els.taskbarClock) {
      els.taskbarClock.textContent = now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit"
      });
    }

    if (els.lockScreenTime) {
      els.lockScreenTime.textContent = now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit"
      });
    }

    if (els.lockScreenDate) {
      els.lockScreenDate.textContent = now.toLocaleDateString([], {
        weekday: "long",
        month: "long",
        day: "numeric"
      });
    }
  };

  renderClock();
  window.setInterval(renderClock, 30000);
}

function toggleStartMenu() {
  if (els.startMenu.hidden) {
    hideContextMenu();
    els.startMenu.hidden = false;
    els.startButton.setAttribute("aria-expanded", "true");
    els.startSearch?.focus();
    return;
  }

  closeStartMenu();
}

function closeStartMenu() {
  if (!els.startMenu || els.startMenu.hidden) {
    return;
  }

  els.startMenu.hidden = true;
  els.startButton?.setAttribute("aria-expanded", "false");

  if (els.startSearch) {
    els.startSearch.value = "";
    filterStartEntries("");
  }
}

function filterStartEntries(term) {
  document.querySelectorAll(".start-entry").forEach((entry) => {
    const entryText = entry.textContent.toLowerCase();
    entry.hidden = term.length > 0 && !entryText.includes(term);
  });
}

function openWindow(windowId) {
  const windowEl = document.getElementById(windowId);
  if (!windowEl) {
    return;
  }

  hideContextMenu();
  closeStartMenu();

  const wasHidden = windowEl.hidden;
  windowEl.hidden = false;

  if (wasHidden || !windowEl.dataset.positioned) {
    initializeWindowPosition(windowEl);
  }

  bringWindowToFront(windowEl);
}

function closeWindow(windowId) {
  const windowEl = document.getElementById(windowId);
  if (!windowEl || windowEl.hidden) {
    return;
  }

  windowEl.hidden = true;

  if (state.activeWindowId === windowId) {
    syncActiveWindow();
  }

  updateWindowButtons();
}

function bringWindowToFront(windowEl) {
  state.zIndex += 1;
  state.activeWindowId = windowEl.id;
  windowEl.style.zIndex = String(state.zIndex);
  updateWindowButtons();
}

function initializeWindowPosition(windowEl) {
  positionWindow(windowEl, Number(windowEl.dataset.x || 260), Number(windowEl.dataset.y || 80));
}

function positionWindow(windowEl, left, top) {
  const taskbarHeight = document.querySelector(".taskbar")?.offsetHeight || 40;
  const windowWidth = windowEl.offsetWidth || 360;
  const windowHeight = windowEl.offsetHeight || 280;
  const maxLeft = Math.max(12, window.innerWidth - windowWidth - 12);
  const maxTop = Math.max(12, window.innerHeight - taskbarHeight - windowHeight - 12);

  windowEl.style.left = `${clamp(left, 12, maxLeft)}px`;
  windowEl.style.top = `${clamp(top, 12, maxTop)}px`;
  windowEl.dataset.positioned = "true";
}

function syncWindowPositions() {
  state.windows.forEach((windowId, index) => {
    const windowEl = document.getElementById(windowId);
    if (!windowEl || windowEl.hidden) {
      return;
    }

    if (window.innerWidth <= 720) {
      positionWindow(windowEl, 12, 70 + index * 18);
      return;
    }

    const currentLeft = Number.parseFloat(windowEl.style.left || windowEl.dataset.x || "260");
    const currentTop = Number.parseFloat(windowEl.style.top || windowEl.dataset.y || "80");
    positionWindow(windowEl, currentLeft, currentTop);
  });
}

function syncActiveWindow() {
  const openWindows = getOpenWindows();
  if (!openWindows.length) {
    state.activeWindowId = null;
    return;
  }

  const topWindow = openWindows.sort((a, b) => Number(a.style.zIndex || 0) - Number(b.style.zIndex || 0)).at(-1);
  state.activeWindowId = topWindow?.id || null;
}

function updateWindowButtons() {
  updateTaskbarWindows();
  updateDesktopShortcutState();
}

function updateTaskbarWindows() {
  if (!els.taskbarWindows) {
    return;
  }

  const openWindows = getOpenWindows();

  els.taskbarWindows.innerHTML = openWindows
    .map((windowEl) => {
      const title = windowEl.dataset.windowTitle || windowEl.querySelector("h2")?.textContent || windowEl.id;
      const isActive = windowEl.id === state.activeWindowId;

      return `
        <button class="taskbar-window${isActive ? " is-active" : ""}" type="button" data-focus-window="${windowEl.id}">
          ${title}
        </button>
      `;
    })
    .join("");

  els.taskbarWindows.querySelectorAll("[data-focus-window]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-focus-window");
      if (targetId === state.activeWindowId) {
        closeWindow(targetId);
        return;
      }

      openWindow(targetId);
    });
  });
}

function updateDesktopShortcutState() {
  document.querySelectorAll(".desktop-icon").forEach((icon) => {
    const targetId = icon.getAttribute("data-open-window");
    const targetWindow = document.getElementById(targetId);
    icon.classList.toggle("is-open", Boolean(targetWindow && !targetWindow.hidden));
  });
}

function getOpenWindows() {
  return state.windows
    .map((windowId) => document.getElementById(windowId))
    .filter((windowEl) => windowEl && !windowEl.hidden)
    .sort((a, b) => Number(a.style.zIndex || 0) - Number(b.style.zIndex || 0));
}

function unlockDesktop() {
  if (!els.lockScreen) {
    return;
  }

  els.lockScreen.hidden = true;
}

function lockDesktop() {
  if (!els.lockScreen) {
    return;
  }

  state.windows.forEach((windowId) => closeWindow(windowId));
  closeStartMenu();
  hideContextMenu();
  els.lockScreen.hidden = false;
}

function hideContextMenu() {
  if (els.desktopContextMenu) {
    els.desktopContextMenu.hidden = true;
  }
}

function setWallpaper(wallpaperPath) {
  state.currentWallpaper = wallpaperPath;
  if (els.wallpaper) {
    els.wallpaper.style.backgroundImage = `url("${wallpaperPath}")`;
  }
  updateWallpaperSelection();
}

function updateWallpaperSelection() {
  if (!els.wallpaperPicker) {
    return;
  }

  els.wallpaperPicker.querySelectorAll("[data-wallpaper]").forEach((button) => {
    button.classList.toggle("is-selected", button.getAttribute("data-wallpaper") === state.currentWallpaper);
  });
}

function hydrateProfile() {
  const { profile } = state.data;
  const mailtoHref = `mailto:${profile.email}`;

  document.title = `${profile.name} Desktop Portfolio`;
  els.startUserName.textContent = profile.name;
  els.aboutSummary.textContent = `${profile.name} is a ${profile.title}. ${profile.tagline}`;

  const quickFacts = [
    `Location: ${profile.location}`,
    `Coding projects: ${state.data.codingProjects.length}`,
    `CAD projects: ${state.data.solidworksProjects.length}`,
    "Theme: Portfolio_OS_Theme Windows desktop"
  ];

  els.profileQuickFacts.innerHTML = quickFacts.map((fact) => `<li>${escapeHtml(fact)}</li>`).join("");

  els.githubLink.href = profile.github || "#";
  els.contactGithubLink.href = profile.github || "#";
  els.githubSocialLink.href = profile.github || "#";
  els.startGithubLink.href = profile.github || "#";

  els.linkedinLink.href = profile.linkedin || "#";
  els.linkedinSocialLink.href = profile.linkedin || "#";
  els.startLinkedinLink.href = profile.linkedin || "#";

  els.resumeLink.href = profile.resumeUrl || "#";

  els.emailLink.href = mailtoHref;
  els.emailLink.textContent = profile.email;
  els.emailSocialLink.href = mailtoHref;
  els.startEmailLink.href = mailtoHref;
}

function populateToolFilter() {
  const tools = new Set();

  state.data.codingProjects.forEach((project) => {
    (project.tools || []).forEach((tool) => tools.add(tool));
  });

  Array.from(tools)
    .sort((a, b) => a.localeCompare(b))
    .forEach((tool) => {
      const option = document.createElement("option");
      option.value = tool.toLowerCase();
      option.textContent = tool;
      els.filterTools.appendChild(option);
    });
}

function bindSearchAndFilter() {
  if (!els.searchProjects || !els.filterTools) {
    return;
  }

  els.searchProjects.addEventListener("input", (event) => {
    state.activeCodingFilter.text = event.target.value.trim().toLowerCase();
    renderCodingProjects();
  });

  els.filterTools.addEventListener("change", (event) => {
    state.activeCodingFilter.tool = event.target.value;
    renderCodingProjects();
  });
}

function renderCodingProjects() {
  const { text, tool } = state.activeCodingFilter;

  const filtered = state.data.codingProjects.filter((project) => {
    const haystack = [project.title, project.shortDescription, ...(project.tags || []), ...(project.tools || [])]
      .join(" ")
      .toLowerCase();

    const matchesText = text.length === 0 || haystack.includes(text);
    const matchesTool = tool === "all" || (project.tools || []).some((entry) => entry.toLowerCase() === tool);
    return matchesText && matchesTool;
  });

  els.codingProjectsGrid.innerHTML = filtered.length
    ? filtered.map(projectCardMarkup).join("")
    : '<p class="muted">No coding projects match this filter.</p>';

  bindDetailButtons(els.codingProjectsGrid);
}

function renderSolidworksProjects() {
  els.solidworksProjectsGrid.innerHTML = state.data.solidworksProjects.length
    ? state.data.solidworksProjects.map(projectCardMarkup).join("")
    : '<p class="muted">No CAD projects are available yet.</p>';

  bindDetailButtons(els.solidworksProjectsGrid);
}

function projectCardMarkup(project) {
  const toolTags = (project.tools || [])
    .slice(0, 4)
    .map((tool) => `<span class="tag">${escapeHtml(tool)}</span>`)
    .join("");

  return `
    <article class="project-card">
      <div class="project-card-top">
        <span class="project-kind">${escapeHtml(project.category)}</span>
        <span class="project-year">${escapeHtml(String(project.year || ""))}</span>
      </div>
      <div class="project-card-copy">
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.shortDescription)}</p>
      </div>
      <div class="tag-row">${toolTags}</div>
      <div class="project-card-actions">
        <button class="small-btn" type="button" data-project-id="${escapeHtml(project.id)}">Open details</button>
      </div>
    </article>
  `;
}

function bindDetailButtons(container) {
  container.querySelectorAll("[data-project-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const project = findProjectById(button.getAttribute("data-project-id"));
      if (project) {
        showProjectDetails(project);
      }
    });
  });
}

function findProjectById(projectId) {
  const allProjects = [...state.data.codingProjects, ...state.data.solidworksProjects];
  return allProjects.find((project) => project.id === projectId) || null;
}

function showDefaultProject() {
  const featuredProject = [
    ...state.data.codingProjects.filter((project) => project.featured),
    ...state.data.solidworksProjects.filter((project) => project.featured)
  ][0];

  if (featuredProject) {
    showProjectDetails(featuredProject, false);
  }
}

function showProjectDetails(project, shouldOpenWindow = true) {
  const links = [
    project.githubUrl
      ? `<a class="external-link" href="${project.githubUrl}" target="_blank" rel="noreferrer">GitHub Repository</a>`
      : "",
    project.liveUrl && project.liveUrl !== "#"
      ? `<a class="external-link" href="${project.liveUrl}" target="_blank" rel="noreferrer">Live Demo</a>`
      : "",
    project.externalUrl && project.externalUrl !== "#"
      ? `<a class="external-link" href="${project.externalUrl}" target="_blank" rel="noreferrer">External Link</a>`
      : ""
  ].join("");

  els.detailContent.innerHTML = `
    <h3 class="detail-window-title">${escapeHtml(project.title)}</h3>
    <p class="detail-copy">${escapeHtml(project.fullDescription)}</p>
    <p class="detail-metric"><strong>Category:</strong> ${escapeHtml(project.category)}</p>
    <p class="detail-metric"><strong>Problem:</strong> ${escapeHtml(project.problem)}</p>
    <p class="detail-metric"><strong>Solution:</strong> ${escapeHtml(project.solution)}</p>
    <p class="detail-metric"><strong>Role:</strong> ${escapeHtml(project.role)}</p>
    <p class="detail-metric"><strong>Tools:</strong> ${escapeHtml((project.tools || []).join(", "))}</p>
    <p class="detail-metric"><strong>Year:</strong> ${escapeHtml(String(project.year || ""))}</p>
    <p class="detail-metric"><strong>Status:</strong> ${escapeHtml(project.status)}</p>
    <div class="tag-row">${(project.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
    <div class="project-card-actions">${links}</div>
  `;

  if (shouldOpenWindow) {
    openWindow("detailWindow");
  }
}

function renderDataError() {
  const message = '<p class="muted">Project data could not be loaded. The OS theme still works while the content file is being fixed.</p>';

  els.aboutSummary.textContent =
    "The Portfolio_OS_Theme shell is active, but the portfolio content file could not be loaded right now.";
  els.profileQuickFacts.innerHTML = "<li>Check data/projects.json for formatting or fetch issues.</li>";
  els.codingProjectsGrid.innerHTML = message;
  els.solidworksProjectsGrid.innerHTML = message;
  els.detailContent.innerHTML = message;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[char];
  });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
