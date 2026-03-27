const DEFAULT_WALLPAPER = "assets/images/wallpapers/default_wallpaper.jpg";
const SETTINGS_STORAGE_KEY = "portfolio_desktop_settings_v1";
const LOL_DEMO_DEFAULTS = {
  champion: "ahri",
  role: "MID",
  gameLength: 31,
  goldLead: 650,
  deaths: 4,
  vision: 58,
  objectives: 54,
  consistency: 68
};
const LOL_CHAMPION_PROFILES = {
  ahri: { playmaking: 8, scaling: 6, control: 7 },
  akali: { playmaking: 10, scaling: 6, control: 5 },
  anivia: { playmaking: 5, scaling: 8, control: 10 },
  annie: { playmaking: 7, scaling: 7, control: 7 },
  "aurelion-sol": { playmaking: 6, scaling: 10, control: 7 },
  azir: { playmaking: 7, scaling: 9, control: 8 },
  cassiopeia: { playmaking: 6, scaling: 9, control: 8 },
  diana: { playmaking: 8, scaling: 7, control: 6 },
  ekko: { playmaking: 9, scaling: 7, control: 6 },
  fizz: { playmaking: 10, scaling: 5, control: 4 },
  galio: { playmaking: 7, scaling: 6, control: 9 },
  irelia: { playmaking: 9, scaling: 6, control: 5 },
  "lee-sin": { playmaking: 9, scaling: 4, control: 6 },
  jinx: { playmaking: 6, scaling: 9, control: 5 },
  katarina: { playmaking: 10, scaling: 6, control: 4 },
  leblanc: { playmaking: 10, scaling: 5, control: 5 },
  lissandra: { playmaking: 7, scaling: 7, control: 9 },
  lux: { playmaking: 6, scaling: 7, control: 8 },
  malzahar: { playmaking: 6, scaling: 8, control: 9 },
  neeko: { playmaking: 7, scaling: 7, control: 8 },
  ornn: { playmaking: 5, scaling: 8, control: 8 },
  orianna: { playmaking: 6, scaling: 8, control: 9 },
  pantheon: { playmaking: 8, scaling: 5, control: 6 },
  qiyana: { playmaking: 10, scaling: 6, control: 5 },
  ryze: { playmaking: 6, scaling: 9, control: 8 },
  swain: { playmaking: 6, scaling: 8, control: 8 },
  sylas: { playmaking: 9, scaling: 7, control: 6 },
  talon: { playmaking: 10, scaling: 5, control: 4 },
  thresh: { playmaking: 8, scaling: 5, control: 9 },
  veigar: { playmaking: 5, scaling: 10, control: 8 },
  vex: { playmaking: 7, scaling: 7, control: 8 },
  viktor: { playmaking: 6, scaling: 8, control: 7 },
  yasuo: { playmaking: 9, scaling: 7, control: 5 },
  yone: { playmaking: 9, scaling: 8, control: 5 },
  zed: { playmaking: 10, scaling: 6, control: 4 },
  zoe: { playmaking: 8, scaling: 7, control: 7 }
};
const LOL_ROLE_MODIFIERS = {
  TOP: { objective: 2, vision: 0, deaths: 0 },
  JUNGLE: { objective: 7, vision: 2, deaths: 0 },
  MID: { objective: 2, vision: 1, deaths: 0 },
  ADC: { objective: 1, vision: 0, deaths: -1 },
  SUPPORT: { objective: 3, vision: 8, deaths: 0 }
};

const state = {
  data: null,
  currentWallpaper: DEFAULT_WALLPAPER,
  windows: [
    "aboutWindow",
    "codingWindow",
    "financeWindow",
    "solidworksWindow",
    "githubWindow",
    "contactWindow",
    "detailWindow",
    "settingsWindow"
  ],
  activeCodingFilter: {
    text: "",
    tool: "all",
    sort: "featured"
  },
  codingWorkspace: "projects",
  codingView: "cards",
  selectedCodingProjectId: null,
  lolDemo: { ...LOL_DEMO_DEFAULTS },
  solidworksSort: "newest",
  activeWindowId: null,
  activeDetailProjectId: null,
  activeDetailTab: "overview",
  preferences: {
    windowGlow: true,
    largeText: false
  },
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
  aboutHighlights: document.getElementById("aboutHighlights"),
  profileQuickFacts: document.getElementById("profileQuickFacts"),
  codingProjectsWorkspace: document.getElementById("codingProjectsWorkspace"),
  lolDemoWorkspace: document.getElementById("lolDemoWorkspace"),
  codingProjectsGrid: document.getElementById("codingProjectsGrid"),
  codingPreviewPanel: document.getElementById("codingPreviewPanel"),
  codingResultMeta: document.getElementById("codingResultMeta"),
  codingCardsView: document.getElementById("codingCardsView"),
  codingListView: document.getElementById("codingListView"),
  solidworksProjectsGrid: document.getElementById("solidworksProjectsGrid"),
  solidworksSummary: document.getElementById("solidworksSummary"),
  solidworksTableBody: document.getElementById("solidworksTableBody"),
  sortCodingProjects: document.getElementById("sortCodingProjects"),
  solidworksSort: document.getElementById("solidworksSort"),
  filterTools: document.getElementById("filterTools"),
  searchProjects: document.getElementById("searchProjects"),
  lolDemoChampion: document.getElementById("lolDemoChampion"),
  lolDemoRole: document.getElementById("lolDemoRole"),
  lolDemoGameLength: document.getElementById("lolDemoGameLength"),
  lolDemoGameLengthValue: document.getElementById("lolDemoGameLengthValue"),
  lolDemoGoldLead: document.getElementById("lolDemoGoldLead"),
  lolDemoGoldLeadValue: document.getElementById("lolDemoGoldLeadValue"),
  lolDemoDeaths: document.getElementById("lolDemoDeaths"),
  lolDemoDeathsValue: document.getElementById("lolDemoDeathsValue"),
  lolDemoVision: document.getElementById("lolDemoVision"),
  lolDemoVisionValue: document.getElementById("lolDemoVisionValue"),
  lolDemoObjectives: document.getElementById("lolDemoObjectives"),
  lolDemoObjectivesValue: document.getElementById("lolDemoObjectivesValue"),
  lolDemoConsistency: document.getElementById("lolDemoConsistency"),
  lolDemoConsistencyValue: document.getElementById("lolDemoConsistencyValue"),
  lolDemoRunButton: document.getElementById("lolDemoRunButton"),
  lolDemoResetButton: document.getElementById("lolDemoResetButton"),
  lolDemoScoreRing: document.getElementById("lolDemoScoreRing"),
  lolDemoScoreValue: document.getElementById("lolDemoScoreValue"),
  lolDemoConfidence: document.getElementById("lolDemoConfidence"),
  lolDemoWinProbLabel: document.getElementById("lolDemoWinProbLabel"),
  lolDemoWinProbFill: document.getElementById("lolDemoWinProbFill"),
  lolDemoFocusGoal: document.getElementById("lolDemoFocusGoal"),
  lolDemoRecommendations: document.getElementById("lolDemoRecommendations"),
  lolDemoTrendBars: document.getElementById("lolDemoTrendBars"),
  lolDemoEventFeed: document.getElementById("lolDemoEventFeed"),
  detailContent: document.getElementById("detailContent"),
  detailTabs: document.getElementById("detailTabs"),
  githubLink: document.getElementById("githubLink"),
  githubQuickLinks: document.getElementById("githubQuickLinks"),
  githubFeaturedLinks: document.getElementById("githubFeaturedLinks"),
  emailLink: document.getElementById("emailLink"),
  linkedinLink: document.getElementById("linkedinLink"),
  contactGithubLink: document.getElementById("contactGithubLink"),
  resumeLink: document.getElementById("resumeLink"),
  emailSocialLink: document.getElementById("emailSocialLink"),
  linkedinSocialLink: document.getElementById("linkedinSocialLink"),
  githubSocialLink: document.getElementById("githubSocialLink"),
  copyEmailButton: document.getElementById("copyEmailButton"),
  contactToast: document.getElementById("contactToast"),
  startUserName: document.getElementById("startUserName"),
  startEmailLink: document.getElementById("startEmailLink"),
  startLinkedinLink: document.getElementById("startLinkedinLink"),
  startGithubLink: document.getElementById("startGithubLink"),
  powerButton: document.getElementById("powerButton"),
  wallpaperPicker: document.getElementById("wallpaperPicker"),
  toggleWindowGlow: document.getElementById("toggleWindowGlow"),
  toggleLargeText: document.getElementById("toggleLargeText")
};

init();

async function init() {
  loadSavedPreferences();
  applyPreferenceClasses();
  syncPreferenceControls();

  setWallpaper(state.currentWallpaper);
  bindWindowButtons();
  bindStartMenu();
  bindStartSearch();
  bindWindowDragging();
  bindGlobalShortcuts();
  bindLockScreen();
  bindContextMenu();
  bindWallpaperPicker();
  bindSearchAndFilter();
  bindCodingWorkspaceTabs();
  bindCodingControls();
  bindLolDemoControls();
  bindSolidworksControls();
  bindDetailTabs();
  bindContactActions();
  bindSettingsToggles();
  startClocks();
  syncLolDemoControlsFromState();
  updateCodingWorkspace();
  runLolDemoAnalysis();

  try {
    const response = await fetch("./data/projects.json");
    if (!response.ok) {
      throw new Error("Project data fetch failed");
    }

    state.data = await response.json();
    hydrateProfile();
    populateAboutHighlights();
    populateToolFilter();
    renderCodingProjects();
    renderSolidworksProjects();
    renderGithubQuickLinks();
    showDefaultProject();
  } catch (error) {
    renderDataError();
  }

  updateWindowButtons();
}

function loadSavedPreferences() {
  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!raw) {
      return;
    }

    const saved = JSON.parse(raw);
    state.preferences.windowGlow = Boolean(saved.windowGlow);
    state.preferences.largeText = Boolean(saved.largeText);
  } catch (error) {
    // Keep defaults when local storage is unavailable or malformed.
  }
}

function savePreferences() {
  try {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(state.preferences));
  } catch (error) {
    // Ignore write failures in restricted contexts.
  }
}

function applyPreferenceClasses() {
  document.body.classList.toggle("enhanced-glow", state.preferences.windowGlow);
  document.body.classList.toggle("large-text-mode", state.preferences.largeText);
}

function syncPreferenceControls() {
  if (els.toggleWindowGlow) {
    els.toggleWindowGlow.checked = state.preferences.windowGlow;
  }
  if (els.toggleLargeText) {
    els.toggleLargeText.checked = state.preferences.largeText;
  }
}

function bindWindowButtons() {
  document.querySelectorAll("[data-open-window]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetWorkspace = button.getAttribute("data-open-coding-workspace");
      if (targetWorkspace) {
        state.codingWorkspace = targetWorkspace;
        updateCodingWorkspace();
      }
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

function bindCodingWorkspaceTabs() {
  document.querySelectorAll("[data-coding-workspace]").forEach((button) => {
    button.addEventListener("click", () => {
      state.codingWorkspace = button.getAttribute("data-coding-workspace") || "projects";
      updateCodingWorkspace();
    });
  });
}

function updateCodingWorkspace() {
  const showProjects = state.codingWorkspace === "projects";
  if (els.codingProjectsWorkspace) {
    els.codingProjectsWorkspace.hidden = !showProjects;
  }
  if (els.lolDemoWorkspace) {
    els.lolDemoWorkspace.hidden = showProjects;
  }

  document.querySelectorAll("[data-coding-workspace]").forEach((button) => {
    const isActive = button.getAttribute("data-coding-workspace") === state.codingWorkspace;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function bindCodingControls() {
  els.sortCodingProjects?.addEventListener("change", (event) => {
    state.activeCodingFilter.sort = event.target.value;
    renderCodingProjects();
  });

  document.querySelectorAll("[data-coding-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.codingView = button.getAttribute("data-coding-view") || "cards";
      updateCodingView();
    });
  });
}

function bindLolDemoControls() {
  const numericIds = [
    "lolDemoGameLength",
    "lolDemoGoldLead",
    "lolDemoDeaths",
    "lolDemoVision",
    "lolDemoObjectives",
    "lolDemoConsistency"
  ];

  numericIds.forEach((id) => {
    const input = els[id];
    if (!input) {
      return;
    }

    input.addEventListener("input", () => {
      syncLolDemoStateFromControls();
      updateLolDemoValueLabels();
      runLolDemoAnalysis();
    });
  });

  [els.lolDemoChampion, els.lolDemoRole].forEach((input) => {
    input?.addEventListener("change", () => {
      syncLolDemoStateFromControls();
      runLolDemoAnalysis();
    });
  });

  els.lolDemoRunButton?.addEventListener("click", () => {
    syncLolDemoStateFromControls();
    runLolDemoAnalysis();
  });

  els.lolDemoResetButton?.addEventListener("click", () => {
    state.lolDemo = { ...LOL_DEMO_DEFAULTS };
    syncLolDemoControlsFromState();
    runLolDemoAnalysis();
  });
}

function syncLolDemoControlsFromState() {
  if (!els.lolDemoChampion) {
    return;
  }

  const { champion, role, gameLength, goldLead, deaths, vision, objectives, consistency } = state.lolDemo;
  els.lolDemoChampion.value = champion;
  els.lolDemoRole.value = role;
  els.lolDemoGameLength.value = String(gameLength);
  els.lolDemoGoldLead.value = String(goldLead);
  els.lolDemoDeaths.value = String(deaths);
  els.lolDemoVision.value = String(vision);
  els.lolDemoObjectives.value = String(objectives);
  els.lolDemoConsistency.value = String(consistency);
  updateLolDemoValueLabels();
}

function syncLolDemoStateFromControls() {
  state.lolDemo = {
    champion: els.lolDemoChampion?.value || LOL_DEMO_DEFAULTS.champion,
    role: els.lolDemoRole?.value || LOL_DEMO_DEFAULTS.role,
    gameLength: Number(els.lolDemoGameLength?.value || LOL_DEMO_DEFAULTS.gameLength),
    goldLead: Number(els.lolDemoGoldLead?.value || LOL_DEMO_DEFAULTS.goldLead),
    deaths: Number(els.lolDemoDeaths?.value || LOL_DEMO_DEFAULTS.deaths),
    vision: Number(els.lolDemoVision?.value || LOL_DEMO_DEFAULTS.vision),
    objectives: Number(els.lolDemoObjectives?.value || LOL_DEMO_DEFAULTS.objectives),
    consistency: Number(els.lolDemoConsistency?.value || LOL_DEMO_DEFAULTS.consistency)
  };
}

function updateLolDemoValueLabels() {
  if (!els.lolDemoGameLengthValue) {
    return;
  }

  const { gameLength, goldLead, deaths, vision, objectives, consistency } = state.lolDemo;
  els.lolDemoGameLengthValue.textContent = `${gameLength} min`;
  els.lolDemoGoldLeadValue.textContent = `${goldLead >= 0 ? "+" : ""}${goldLead}g`;
  els.lolDemoDeathsValue.textContent = String(deaths);
  els.lolDemoVisionValue.textContent = String(vision);
  els.lolDemoObjectivesValue.textContent = String(objectives);
  els.lolDemoConsistencyValue.textContent = String(consistency);
}

function bindSolidworksControls() {
  els.solidworksSort?.addEventListener("change", (event) => {
    state.solidworksSort = event.target.value;
    renderSolidworksProjects();
  });
}

function bindDetailTabs() {
  if (!els.detailTabs) {
    return;
  }

  els.detailTabs.querySelectorAll("[data-detail-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeDetailTab = button.getAttribute("data-detail-tab") || "overview";
      renderDetailTabs();

      const project = findProjectById(state.activeDetailProjectId);
      if (project) {
        renderProjectDetails(project);
      }
    });
  });
}

function bindContactActions() {
  els.copyEmailButton?.addEventListener("click", async () => {
    const email = els.copyEmailButton?.dataset.email;
    if (!email) {
      setContactToast("No email is loaded yet.", true);
      return;
    }

    const copied = await copyTextToClipboard(email);
    if (!copied) {
      setContactToast("Clipboard permission blocked. Please copy manually.", true);
      return;
    }

    setContactToast("Email copied to clipboard.");
  });
}

function bindSettingsToggles() {
  els.toggleWindowGlow?.addEventListener("change", (event) => {
    state.preferences.windowGlow = event.target.checked;
    applyPreferenceClasses();
    savePreferences();
  });

  els.toggleLargeText?.addEventListener("change", (event) => {
    state.preferences.largeText = event.target.checked;
    applyPreferenceClasses();
    savePreferences();
  });
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

  if (wasHidden) {
    windowEl.classList.remove("is-opening");
    window.requestAnimationFrame(() => {
      windowEl.classList.add("is-opening");
    });
    window.setTimeout(() => {
      windowEl.classList.remove("is-opening");
    }, 240);
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
  if (els.copyEmailButton) {
    els.copyEmailButton.dataset.email = profile.email;
  }
}

function populateAboutHighlights() {
  if (!els.aboutHighlights || !state.data) {
    return;
  }

  const allProjects = [...state.data.codingProjects, ...state.data.solidworksProjects];
  const featuredCount = allProjects.filter((project) => project.featured).length;
  const topTools = [...new Set(state.data.codingProjects.flatMap((project) => project.tools || []))].slice(0, 4);

  els.aboutHighlights.innerHTML = `
    <article class="insight-card">
      <p class="insight-label">Featured Work</p>
      <p class="insight-value">${escapeHtml(String(featuredCount))} projects</p>
    </article>
    <article class="insight-card">
      <p class="insight-label">Top Stack</p>
      <p class="insight-value">${escapeHtml(topTools.join(", ") || "Custom stack")}</p>
    </article>
    <article class="insight-card">
      <p class="insight-label">Dual Track</p>
      <p class="insight-value">Software + Mechanical</p>
    </article>
  `;
}

function populateToolFilter() {
  if (!els.filterTools) {
    return;
  }

  const tools = new Set();
  els.filterTools.innerHTML = '<option value="all">All tools</option>';

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

function getFilteredCodingProjects() {
  const { text, tool, sort } = state.activeCodingFilter;
  const matches = state.data.codingProjects.filter((project) => {
    const haystack = [project.title, project.shortDescription, ...(project.tags || []), ...(project.tools || [])]
      .join(" ")
      .toLowerCase();

    const matchesText = text.length === 0 || haystack.includes(text);
    const matchesTool = tool === "all" || (project.tools || []).some((entry) => entry.toLowerCase() === tool);
    return matchesText && matchesTool;
  });

  const sorted = [...matches];
  if (sort === "newest") {
    sorted.sort((a, b) => Number(b.year || 0) - Number(a.year || 0));
  } else if (sort === "oldest") {
    sorted.sort((a, b) => Number(a.year || 0) - Number(b.year || 0));
  } else if (sort === "title") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    sorted.sort((a, b) => {
      const featuredDelta = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
      if (featuredDelta !== 0) {
        return featuredDelta;
      }
      return Number(b.year || 0) - Number(a.year || 0);
    });
  }

  return sorted;
}

function renderCodingProjects() {
  if (!state.data) {
    return;
  }

  const filtered = getFilteredCodingProjects();

  if (!filtered.some((project) => project.id === state.selectedCodingProjectId)) {
    state.selectedCodingProjectId = filtered[0]?.id || null;
  }

  if (els.codingResultMeta) {
    const countLabel = filtered.length === 1 ? "1 project shown" : `${filtered.length} projects shown`;
    els.codingResultMeta.textContent = countLabel;
  }

  els.codingProjectsGrid.innerHTML = filtered.length
    ? filtered.map((project) => projectCardMarkup(project, project.id === state.selectedCodingProjectId)).join("")
    : '<p class="muted">No coding projects match this filter.</p>';

  bindProjectActionButtons(els.codingProjectsGrid);

  renderCodingListView(filtered);
  updateCodingPreview(findProjectById(state.selectedCodingProjectId));
  updateCodingView();
}

function updateCodingView() {
  if (els.codingCardsView) {
    els.codingCardsView.hidden = state.codingView !== "cards";
  }
  if (els.codingListView) {
    els.codingListView.hidden = state.codingView !== "list";
  }

  document.querySelectorAll("[data-coding-view]").forEach((button) => {
    const isActive = button.getAttribute("data-coding-view") === state.codingView;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderCodingListView(filteredProjects) {
  if (!els.codingListView) {
    return;
  }

  if (!filteredProjects.length) {
    els.codingListView.innerHTML = '<p class="muted">No files to show for this filter.</p>';
    return;
  }

  els.codingListView.innerHTML = `
    <div class="list-header">
      <span>Name</span>
      <span>Tools</span>
      <span>Year</span>
      <span>Open</span>
    </div>
    ${filteredProjects
      .map((project) => {
        const tools = (project.tools || []).slice(0, 2).join(", ");
        const isSelected = project.id === state.selectedCodingProjectId;
        return `
          <article class="list-row${isSelected ? " is-selected" : ""}">
            <button class="list-cell list-link" type="button" data-select-project="${escapeHtml(project.id)}">${escapeHtml(project.title)}</button>
            <span class="list-cell">${escapeHtml(tools)}</span>
            <span class="list-cell">${escapeHtml(String(project.year || ""))}</span>
            <button class="small-btn list-cell-button" type="button" data-project-id="${escapeHtml(project.id)}">Details</button>
          </article>
        `;
      })
      .join("")}
  `;

  bindProjectActionButtons(els.codingListView);
}

function updateCodingPreview(project) {
  if (!els.codingPreviewPanel) {
    return;
  }

  if (!project) {
    els.codingPreviewPanel.innerHTML = '<p class="muted">Select a project to preview details here.</p>';
    return;
  }

  const linksMarkup = projectLinkButtons(project);
  const technologies = (project.technologies || []).slice(0, 6).join(", ");

  els.codingPreviewPanel.innerHTML = `
    <p class="preview-label">Preview</p>
    <h3 class="preview-title">${escapeHtml(project.title)}</h3>
    <p class="detail-copy">${escapeHtml(project.aiSummary || project.fullDescription || project.shortDescription)}</p>
    <p class="detail-metric"><strong>Role:</strong> ${escapeHtml(project.role || "Contributor")}</p>
    <p class="detail-metric"><strong>Technologies:</strong> ${escapeHtml(technologies || "N/A")}</p>
    <div class="tag-row">${(project.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
    <div class="project-card-actions">
      <button class="small-btn" type="button" data-project-id="${escapeHtml(project.id)}">Open in Word</button>
      ${linksMarkup}
    </div>
  `;

  bindProjectActionButtons(els.codingPreviewPanel);
}

function runLolDemoAnalysis() {
  if (!els.lolDemoScoreValue) {
    return;
  }

  const model = state.lolDemo;
  const championProfile = LOL_CHAMPION_PROFILES[model.champion] || LOL_CHAMPION_PROFILES.ahri;
  const roleProfile = LOL_ROLE_MODIFIERS[model.role] || LOL_ROLE_MODIFIERS.MID;

  const leadScore = ((model.goldLead + 2500) / 5000) * 100;
  const tempoBonus = model.gameLength <= 28 ? 2 : model.gameLength >= 36 ? -1 : 0;
  const rawIndex =
    14 +
    leadScore * 0.24 +
    model.objectives * 0.25 +
    model.vision * 0.16 +
    model.consistency * 0.21 +
    championProfile.playmaking * 1.25 +
    championProfile.control * 0.9 +
    roleProfile.objective +
    roleProfile.vision -
    model.deaths * (3.4 + Math.max(0, roleProfile.deaths * -0.25)) +
    tempoBonus;

  const performanceIndex = clamp(Math.round(rawIndex), 18, 98);
  const winProbability = clamp(
    Math.round((1 / (1 + Math.exp(-(performanceIndex - 52) / 9.5))) * 100),
    12,
    97
  );
  const confidenceScore = clamp(
    Math.round(model.consistency * 0.58 + Math.abs(model.goldLead) / 70 + model.objectives * 0.22),
    30,
    99
  );
  const confidenceLabel = confidenceScore >= 75 ? "High" : confidenceScore >= 58 ? "Medium" : "Low";

  const recommendations = buildLolRecommendations(model, performanceIndex);
  const trend = buildLolTrendSeries(model, performanceIndex);
  const events = buildLolTimelineSignals(model, winProbability);

  renderLolDemoOutput({
    performanceIndex,
    winProbability,
    confidenceLabel,
    recommendations,
    trend,
    events
  });
}

function buildLolRecommendations(model, performanceIndex) {
  const recos = [];

  if (model.deaths >= 6) {
    recos.push(`Death control: hold deaths to ${Math.max(2, model.deaths - 2)} for an estimated +${6 + model.deaths}% win rate.`);
  } else if (model.deaths >= 4) {
    recos.push(`Risk trim: remove one death in mid-game skirmishes for around +5% win chance.`);
  }

  if (model.vision < 55) {
    recos.push(`Vision cycle: push wards and clears to ${Math.min(85, model.vision + 14)} impact for +4 to +7% consistency.`);
  }

  if (model.objectives < 60) {
    recos.push(`Objective discipline: increase dragon/herald control to ${Math.min(80, model.objectives + 12)} for stronger closeout odds.`);
  }

  if (model.goldLead < 0) {
    recos.push(`Early stabilization: play for wave + jungle timing to flip lane state before 15m.`);
  } else if (model.goldLead < 500) {
    recos.push(`Lane pressure: convert early tempo into a larger lead and first objective setup.`);
  }

  if (model.consistency < 65) {
    recos.push(`Consistency path: repeat your highest-value two habits across each game block.`);
  }

  if (!recos.length) {
    recos.push("Execution is strong. Keep this structure and focus on cleaner objective setups for marginal gains.");
  }

  if (performanceIndex >= 80) {
    recos.unshift("Performance tier is high. Shift focus to closing discipline and objective sequencing.");
  }

  return recos.slice(0, 4);
}

function buildLolTrendSeries(model, performanceIndex) {
  const trend = [];
  for (let index = 0; index < 7; index += 1) {
    const wave = Math.sin((index + 1) * (0.8 + model.consistency / 120));
    const momentum = (index - 3) * 0.9;
    const variance = wave * 4 + model.goldLead / 950 - model.deaths * 0.35 + momentum;
    trend.push(clamp(Math.round(performanceIndex + variance), 24, 98));
  }
  return trend;
}

function buildLolTimelineSignals(model, winProbability) {
  const leadLabel =
    model.goldLead >= 900 ? "Strong lane advantage" : model.goldLead >= 250 ? "Slight lane advantage" : "Unstable lane state";
  const objectiveLabel =
    model.objectives >= 68 ? "Objective conversion is clean" : model.objectives >= 50 ? "Objectives are contestable" : "Objective setup is late";
  const lateLabel =
    winProbability >= 65 ? "Late-game closeout pattern is favorable" : "Late-game fights remain volatile";

  return [
    `12:00 - ${leadLabel}; projected map control ${Math.max(38, Math.min(84, Math.round((model.goldLead + 2500) / 60)))}%.`,
    `20:00 - ${objectiveLabel}; suggested call: prioritize vision pockets before neutral spawn.`,
    `28:00 - ${lateLabel}; confidence rises when deaths stay under ${Math.max(3, model.deaths)}.`
  ];
}

function renderLolDemoOutput(result) {
  els.lolDemoScoreValue.textContent = String(result.performanceIndex);
  els.lolDemoScoreRing.style.setProperty("--score", String(result.performanceIndex));

  els.lolDemoWinProbLabel.textContent = `${result.winProbability}%`;
  els.lolDemoWinProbFill.style.width = `${result.winProbability}%`;

  els.lolDemoConfidence.textContent = result.confidenceLabel;
  els.lolDemoConfidence.classList.remove("confidence-high", "confidence-medium", "confidence-low");
  els.lolDemoConfidence.classList.add(
    result.confidenceLabel === "High"
      ? "confidence-high"
      : result.confidenceLabel === "Medium"
        ? "confidence-medium"
        : "confidence-low"
  );

  const topReco = result.recommendations[0] || "Keep executing current game plan.";
  const focusText = topReco.split(".")[0];
  els.lolDemoFocusGoal.textContent = `Focus: ${focusText}`;

  els.lolDemoRecommendations.innerHTML = result.recommendations
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");

  const peak = Math.max(...result.trend, 1);
  els.lolDemoTrendBars.innerHTML = result.trend
    .map((score, index) => {
      const height = Math.max(16, Math.round((score / peak) * 90));
      return `
        <div class="trend-bar-wrap">
          <span class="trend-bar" style="height: ${height}px"></span>
          <span class="trend-label">G${index + 1}</span>
        </div>
      `;
    })
    .join("");

  els.lolDemoEventFeed.innerHTML = result.events.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function getSortedSolidworksProjects() {
  const projects = [...state.data.solidworksProjects];
  if (state.solidworksSort === "oldest") {
    projects.sort((a, b) => Number(a.year || 0) - Number(b.year || 0));
  } else if (state.solidworksSort === "title") {
    projects.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    projects.sort((a, b) => Number(b.year || 0) - Number(a.year || 0));
  }
  return projects;
}

function renderSolidworksProjects() {
  if (!state.data) {
    return;
  }

  const projects = getSortedSolidworksProjects();
  const newestYear = projects.length ? Math.max(...projects.map((project) => Number(project.year || 0))) : null;
  const featuredCount = projects.filter((project) => project.featured).length;
  const toolCount = new Set(projects.flatMap((project) => project.tools || [])).size;

  if (els.solidworksSummary) {
    els.solidworksSummary.innerHTML = `
      <span class="stat-pill">Featured: ${escapeHtml(String(featuredCount))}</span>
      <span class="stat-pill">Latest year: ${escapeHtml(newestYear ? String(newestYear) : "N/A")}</span>
      <span class="stat-pill">Unique tools: ${escapeHtml(String(toolCount))}</span>
    `;
  }

  if (els.solidworksTableBody) {
    els.solidworksTableBody.innerHTML = projects.length
      ? projects
          .map(
            (project) => `
          <tr>
            <td>${escapeHtml(project.title)}</td>
            <td>${escapeHtml(String(project.year || ""))}</td>
            <td>${escapeHtml(project.status || "N/A")}</td>
            <td><button class="small-btn" type="button" data-project-id="${escapeHtml(project.id)}">Open</button></td>
          </tr>
        `
          )
          .join("")
      : '<tr><td colspan="4">No CAD projects are available yet.</td></tr>';

    bindProjectActionButtons(els.solidworksTableBody);
  }

  els.solidworksProjectsGrid.innerHTML = projects.length
    ? projects.map((project) => projectCardMarkup(project, false)).join("")
    : '<p class="muted">No CAD projects are available yet.</p>';

  bindProjectActionButtons(els.solidworksProjectsGrid);
}

function renderGithubQuickLinks() {
  if (!state.data) {
    return;
  }

  const { profile, codingProjects } = state.data;
  const featured = codingProjects.filter((project) => project.featured).slice(0, 3);

  if (els.githubQuickLinks) {
    els.githubQuickLinks.innerHTML = `
      <p class="window-lead">Quick destinations</p>
      <div class="project-card-actions">
        <a class="external-link" href="${escapeHtml(profile.github || "#")}" target="_blank" rel="noreferrer">GitHub Home</a>
        <a class="external-link" href="${escapeHtml(profile.linkedin || "#")}" target="_blank" rel="noreferrer">LinkedIn</a>
        <a class="external-link" href="${escapeHtml(profile.resumeUrl || "#")}" target="_blank" rel="noreferrer">Resume</a>
      </div>
    `;
  }

  if (els.githubFeaturedLinks) {
    els.githubFeaturedLinks.innerHTML = `
      <p class="window-lead">Pinned projects</p>
      ${featured
        .map(
          (project) => `
            <button class="quick-row" type="button" data-project-id="${escapeHtml(project.id)}">
              <span>${escapeHtml(project.title)}</span>
              <span>${escapeHtml(String(project.year || ""))}</span>
            </button>
          `
        )
        .join("")}
    `;

    bindProjectActionButtons(els.githubFeaturedLinks);
  }
}

function projectCardMarkup(project, isSelected) {
  const toolTags = (project.tools || [])
    .slice(0, 4)
    .map((tool) => `<span class="tag">${escapeHtml(tool)}</span>`)
    .join("");

  return `
    <article class="project-card${isSelected ? " is-selected" : ""}">
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
        <button class="small-btn" type="button" data-select-project="${escapeHtml(project.id)}">Preview</button>
        <button class="small-btn" type="button" data-project-id="${escapeHtml(project.id)}">Open details</button>
      </div>
    </article>
  `;
}

function bindProjectActionButtons(container) {
  container.querySelectorAll("[data-select-project]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCodingProjectId = button.getAttribute("data-select-project");
      renderCodingProjects();
    });
  });

  container.querySelectorAll("[data-project-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const project = findProjectById(button.getAttribute("data-project-id"));
      if (project) {
        showProjectDetails(project, true, "overview");
      }
    });
  });
}

function findProjectById(projectId) {
  if (!state.data || !projectId) {
    return null;
  }

  const allProjects = [...state.data.codingProjects, ...state.data.solidworksProjects];
  return allProjects.find((project) => project.id === projectId) || null;
}

function showDefaultProject() {
  if (!state.data) {
    return;
  }

  const featuredProject = [
    ...state.data.codingProjects.filter((project) => project.featured),
    ...state.data.solidworksProjects.filter((project) => project.featured)
  ][0];

  if (!featuredProject) {
    return;
  }

  state.selectedCodingProjectId = state.data.codingProjects[0]?.id || null;
  showProjectDetails(featuredProject, false, "overview");
  renderCodingProjects();
}

function showProjectDetails(project, shouldOpenWindow = true, tab = "overview") {
  state.activeDetailProjectId = project.id;
  state.activeDetailTab = tab;

  renderDetailTabs();
  renderProjectDetails(project);

  if (shouldOpenWindow) {
    openWindow("detailWindow");
  }
}

function renderDetailTabs() {
  if (!els.detailTabs) {
    return;
  }

  els.detailTabs.querySelectorAll("[data-detail-tab]").forEach((button) => {
    const isActive = button.getAttribute("data-detail-tab") === state.activeDetailTab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

function renderProjectDetails(project) {
  let bodyMarkup = "";

  if (state.activeDetailTab === "impact") {
    bodyMarkup = `
      <p class="detail-metric"><strong>Problem:</strong> ${escapeHtml(project.problem || "N/A")}</p>
      <p class="detail-metric"><strong>Solution:</strong> ${escapeHtml(project.solution || "N/A")}</p>
      <p class="detail-metric"><strong>Role:</strong> ${escapeHtml(project.role || "N/A")}</p>
      <div class="stat-strip">
        <span class="stat-pill">Status: ${escapeHtml(project.status || "N/A")}</span>
        <span class="stat-pill">Year: ${escapeHtml(String(project.year || ""))}</span>
      </div>
    `;
  } else if (state.activeDetailTab === "stack") {
    bodyMarkup = `
      <p class="detail-metric"><strong>Tools:</strong> ${escapeHtml((project.tools || []).join(", ") || "N/A")}</p>
      <p class="detail-metric"><strong>Technologies:</strong> ${escapeHtml(
        (project.technologies || []).join(", ") || "N/A"
      )}</p>
      <div class="tag-row">${(project.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
      <div class="project-card-actions">${projectLinkButtons(project)}</div>
    `;
  } else {
    bodyMarkup = `
      <p class="detail-copy">${escapeHtml(project.fullDescription || project.shortDescription)}</p>
      <p class="detail-metric"><strong>Category:</strong> ${escapeHtml(project.category || "N/A")}</p>
      <p class="detail-metric"><strong>Summary:</strong> ${escapeHtml(project.aiSummary || project.shortDescription || "N/A")}</p>
      <div class="tag-row">${(project.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
    `;
  }

  els.detailContent.innerHTML = `
    <h3 class="detail-window-title">${escapeHtml(project.title)}</h3>
    ${bodyMarkup}
  `;
}

function projectLinkButtons(project) {
  const links = [
    project.githubUrl
      ? `<a class="external-link" href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noreferrer">GitHub Repository</a>`
      : "",
    project.liveUrl && project.liveUrl !== "#"
      ? `<a class="external-link" href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noreferrer">Live Demo</a>`
      : "",
    project.externalUrl && project.externalUrl !== "#"
      ? `<a class="external-link" href="${escapeHtml(project.externalUrl)}" target="_blank" rel="noreferrer">External Link</a>`
      : ""
  ].filter(Boolean);

  return links.join("") || '<span class="muted">No external links available.</span>';
}

function renderDataError() {
  const message = '<p class="muted">Project data could not be loaded. The OS theme still works while the content file is being fixed.</p>';

  els.aboutSummary.textContent =
    "The Portfolio_OS_Theme shell is active, but the portfolio content file could not be loaded right now.";
  els.profileQuickFacts.innerHTML = "<li>Check data/projects.json for formatting or fetch issues.</li>";
  els.aboutHighlights.innerHTML = "";
  els.codingProjectsGrid.innerHTML = message;
  els.codingListView.innerHTML = message;
  els.codingPreviewPanel.innerHTML = message;
  els.solidworksProjectsGrid.innerHTML = message;
  els.solidworksTableBody.innerHTML = "<tr><td colspan=\"4\">Data unavailable.</td></tr>";
  els.solidworksSummary.innerHTML = "";
  els.detailContent.innerHTML = message;
  if (els.githubQuickLinks) {
    els.githubQuickLinks.innerHTML = message;
  }
  if (els.githubFeaturedLinks) {
    els.githubFeaturedLinks.innerHTML = "";
  }
}

async function copyTextToClipboard(value) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch (error) {
      return false;
    }
  }

  try {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "true");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(textarea);
    return copied;
  } catch (error) {
    return false;
  }
}

function setContactToast(message, isError = false) {
  if (!els.contactToast) {
    return;
  }

  els.contactToast.textContent = message;
  els.contactToast.classList.toggle("is-error", isError);

  window.clearTimeout(setContactToast.timeoutId);
  setContactToast.timeoutId = window.setTimeout(() => {
    if (els.contactToast) {
      els.contactToast.textContent = "";
      els.contactToast.classList.remove("is-error");
    }
  }, 2200);
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
