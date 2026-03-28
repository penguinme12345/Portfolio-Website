const DEFAULT_WALLPAPER = "assets/images/wallpapers/wallpaper2.jpg";
const SETTINGS_STORAGE_KEY = "portfolio_desktop_settings_v1";
const EXPLORATION_STORAGE_KEY = "portfolio_desktop_exploration_v1";
const BONUS_MESSAGES = [
  "Fast UI systems are won by milliseconds: small interaction latency changes perception a lot.",
  "My favorite build loop: design first, instrument second, optimize third.",
  "I treat project UX like game design: every click should have a clear reward.",
  "Strong portfolios feel like products, not slides. Interaction depth matters.",
  "Hidden detail: most polished desktop clones succeed because state transitions are consistent."
];
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
const WORD_DEFAULT_HTML = "<p><br></p>";
const EXPLORER_ROOT_ID = "my-pc";
const EXPLORER_TIMESTAMP = "2026-03-27 10:31 PM";
const EXPLORER_APP_LIBRARY = [
  {
    id: "my-pc-app",
    name: "My PC.exe",
    size: "6 KB",
    modified: "2026-03-27 10:42 PM",
    action: { type: "open-window", windowId: "myPcWindow" },
    folderPath: ["program-files", "portfolio-core"]
  },
  {
    id: "about-app",
    name: "About Me.exe",
    size: "4 KB",
    modified: "2026-03-27 10:36 PM",
    action: { type: "open-window", windowId: "aboutWindow" },
    folderPath: ["program-files", "portfolio-core"]
  },
  {
    id: "contact-app",
    name: "Contact Me.exe",
    size: "4 KB",
    modified: "2026-03-27 10:37 PM",
    action: { type: "open-window", windowId: "contactWindow" },
    folderPath: ["program-files", "portfolio-core"]
  },
  {
    id: "settings-app",
    name: "Settings.exe",
    size: "3 KB",
    modified: "2026-03-27 10:34 PM",
    action: { type: "open-window", windowId: "settingsWindow" },
    folderPath: ["program-files", "portfolio-core"]
  },
  {
    id: "vscode-app",
    name: "VSCode.exe",
    size: "9 KB",
    modified: "2026-03-27 10:40 PM",
    action: { type: "open-window", windowId: "codingWindow" },
    folderPath: ["program-files", "development-tools"]
  },
  {
    id: "chrome-app",
    name: "Chrome.exe",
    size: "6 KB",
    modified: "2026-03-27 10:38 PM",
    action: { type: "open-window", windowId: "githubWindow" },
    folderPath: ["program-files", "development-tools"]
  },
  {
    id: "lol-demo-app",
    name: "LoL Demo.exe",
    size: "7 KB",
    modified: "2026-03-27 10:43 PM",
    action: { type: "open-window", windowId: "codingWindow", workspace: "lol-demo" },
    folderPath: ["program-files", "game-demos"]
  },
  {
    id: "finance-app",
    name: "Finance Tracker.exe",
    size: "8 KB",
    modified: "2026-03-27 10:44 PM",
    action: { type: "open-window", windowId: "financeWindow" },
    folderPath: ["program-files", "productivity"]
  },
  {
    id: "word-app",
    name: "Word.exe",
    size: "5 KB",
    modified: "2026-03-27 10:33 PM",
    action: { type: "open-window", windowId: "detailWindow" },
    folderPath: ["program-files", "productivity"]
  },
  {
    id: "spreadsheet-app",
    name: "Spreadsheet.exe",
    size: "5 KB",
    modified: "2026-03-27 10:33 PM",
    action: { type: "open-window", windowId: "solidworksWindow" },
    folderPath: ["program-files", "productivity"]
  }
];

const state = {
  data: null,
  currentWallpaper: DEFAULT_WALLPAPER,
  windows: [
    "myPcWindow",
    "aboutWindow",
    "codingWindow",
    "financeWindow",
    "solidworksWindow",
    "githubWindow",
    "contactWindow",
    "detailWindow",
    "settingsWindow",
    "bonusWindow"
  ],
  activeCodingFilter: {
    text: "",
    tool: "all",
    sort: "featured"
  },
  codingWorkspace: "projects",
  codingView: "cards",
  aboutMode: "overview",
  explorer: {
    path: [EXPLORER_ROOT_ID],
    history: [[EXPLORER_ROOT_ID]],
    historyIndex: 0,
    selectedEntryId: null,
    search: "",
    root: null,
    sortBy: "name",
    sortDirection: "asc",
    nextCustomId: 1,
    contextEntryId: null,
    dragEntryId: null,
    renamingId: null,
    renameDraft: "",
    clipboard: null,
    renameNeedsFocus: false,
    lastPrimaryClickEntryId: null,
    lastPrimaryClickAt: 0
  },
  selectedCodingProjectId: null,
  lolDemo: { ...LOL_DEMO_DEFAULTS },
  solidworksSort: "newest",
  activeWindowId: null,
  word: {
    openMenu: null,
    zoom: 1,
    documentName: "Untitled document",
    spellcheck: true,
    showRuler: true,
    showPrintLayout: true,
    showNonPrinting: false,
    landscape: false,
    tablePicker: {
      open: false,
      rows: 1,
      cols: 1,
      visibleRows: 5,
      visibleCols: 5,
      max: 15
    }
  },
  preferences: {
    windowGlow: true,
    largeText: false
  },
  exploration: {
    visitedWindows: [],
    bonusUnlocked: false,
    revealedCount: 0
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
  aboutModePanel: document.getElementById("aboutModePanel"),
  aboutResumeLink: document.getElementById("aboutResumeLink"),
  aboutContactButton: document.getElementById("aboutContactButton"),
  aboutLinkedinLink: document.getElementById("aboutLinkedinLink"),
  aboutGithubLink: document.getElementById("aboutGithubLink"),
  bonusDesktopIcon: document.getElementById("bonusDesktopIcon"),
  bonusRevealButton: document.getElementById("bonusRevealButton"),
  bonusMessageText: document.getElementById("bonusMessageText"),
  bonusMessageCard: document.getElementById("bonusMessageCard"),
  explorerBreadcrumb: document.getElementById("explorerBreadcrumb"),
  explorerRows: document.getElementById("explorerRows"),
  explorerSearch: document.getElementById("explorerSearch"),
  explorerBackButton: document.getElementById("explorerBackButton"),
  explorerUpButton: document.getElementById("explorerUpButton"),
  explorerRefreshButton: document.getElementById("explorerRefreshButton"),
  explorerSortButton: document.getElementById("explorerSortButton"),
  explorerContextMenu: document.getElementById("explorerContextMenu"),
  explorerItemContextMenu: document.getElementById("explorerItemContextMenu"),
  explorerSortSubmenu: document.getElementById("explorerSortSubmenu"),
  explorerNewSubmenu: document.getElementById("explorerNewSubmenu"),
  explorerItemCount: document.getElementById("explorerItemCount"),
  explorerPathLabel: document.getElementById("explorerPathLabel"),
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
  wordMenuShell: document.getElementById("wordMenuShell"),
  wordMenuBar: document.getElementById("wordMenuBar"),
  wordMenuLayer: document.getElementById("wordMenuLayer"),
  wordDocTitle: document.getElementById("wordDocTitle"),
  wordToolbarRow: document.getElementById("wordToolbarRow"),
  wordToolbarZoom: document.getElementById("wordToolbarZoom"),
  wordToolbarStyle: document.getElementById("wordToolbarStyle"),
  wordToolbarFont: document.getElementById("wordToolbarFont"),
  wordToolbarFontSize: document.getElementById("wordToolbarFontSize"),
  wordInsertMenu: document.getElementById("wordInsertMenu"),
  wordInsertTableItem: document.getElementById("wordInsertTableItem"),
  wordTablePicker: document.getElementById("wordTablePicker"),
  wordTablePickerGrid: document.getElementById("wordTablePickerGrid"),
  wordTablePickerSize: document.getElementById("wordTablePickerSize"),
  wordEditor: document.getElementById("wordEditor"),
  wordCanvas: document.getElementById("wordCanvas"),
  wordFileInput: document.getElementById("wordFileInput"),
  wordStatusMessage: document.getElementById("wordStatusMessage"),
  wordStatusStats: document.getElementById("wordStatusStats"),
  wordStatusZoom: document.getElementById("wordStatusZoom"),
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
  contactSideLinkedinLink: document.getElementById("contactSideLinkedinLink"),
  contactSideGithubLink: document.getElementById("contactSideGithubLink"),
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
  loadExplorationState();
  applyPreferenceClasses();
  syncPreferenceControls();
  syncBonusVisibility();

  setWallpaper(state.currentWallpaper);
  bindWindowButtons();
  bindStartMenu();
  bindStartSearch();
  bindWindowDragging();
  bindGlobalShortcuts();
  bindLockScreen();
  bindContextMenu();
  bindAboutControls();
  bindExplorerControls();
  bindWallpaperPicker();
  bindSearchAndFilter();
  bindCodingWorkspaceTabs();
  bindCodingControls();
  bindLolDemoControls();
  bindSolidworksControls();
  bindWordAppControls();
  bindContactActions();
  bindSettingsToggles();
  bindBonusInteractions();
  startClocks();
  syncLolDemoControlsFromState();
  updateCodingWorkspace();
  runLolDemoAnalysis();
  initializeExplorerData();
  renderExplorer();

  try {
    const response = await fetch("./data/projects.json");
    if (!response.ok) {
      throw new Error("Project data fetch failed");
    }

    state.data = await response.json();
    hydrateProfile();
    populateAboutHighlights();
    renderAboutModePanel();
    populateToolFilter();
    renderCodingProjects();
    renderSolidworksProjects();
    renderGithubQuickLinks();
    showDefaultProject();
    initializeExplorerData();
    renderExplorer();
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

function loadExplorationState() {
  try {
    const raw = localStorage.getItem(EXPLORATION_STORAGE_KEY);
    if (!raw) {
      return;
    }

    const saved = JSON.parse(raw);
    const visited = Array.isArray(saved.visitedWindows) ? saved.visitedWindows.filter((item) => typeof item === "string") : [];
    state.exploration.visitedWindows = visited;
    state.exploration.bonusUnlocked = Boolean(saved.bonusUnlocked);
    state.exploration.revealedCount = Number.isFinite(Number(saved.revealedCount)) ? Number(saved.revealedCount) : 0;
  } catch (error) {
    // Ignore malformed exploration data and keep defaults.
  }
}

function saveExplorationState() {
  try {
    localStorage.setItem(
      EXPLORATION_STORAGE_KEY,
      JSON.stringify({
        visitedWindows: state.exploration.visitedWindows,
        bonusUnlocked: state.exploration.bonusUnlocked,
        revealedCount: state.exploration.revealedCount
      })
    );
  } catch (error) {
    // Ignore write failures in restricted contexts.
  }
}

function getExplorationTargetWindows() {
  const targets = new Set();
  document.querySelectorAll(".desktop-icon[data-open-window]:not(.desktop-icon-secret)").forEach((icon) => {
    const windowId = icon.getAttribute("data-open-window");
    if (windowId) {
      targets.add(windowId);
    }
  });
  return Array.from(targets);
}

function syncBonusVisibility() {
  if (!els.bonusDesktopIcon) {
    return;
  }
  els.bonusDesktopIcon.hidden = !state.exploration.bonusUnlocked;
}

function unlockBonusIfEligible() {
  if (state.exploration.bonusUnlocked) {
    return;
  }

  const targetWindows = getExplorationTargetWindows();
  if (!targetWindows.length) {
    return;
  }

  const allVisited = targetWindows.every((windowId) => state.exploration.visitedWindows.includes(windowId));
  if (!allVisited) {
    return;
  }

  state.exploration.bonusUnlocked = true;
  saveExplorationState();
  syncBonusVisibility();
  els.bonusDesktopIcon?.classList.add("is-unlocked");
  window.setTimeout(() => {
    els.bonusDesktopIcon?.classList.remove("is-unlocked");
  }, 1400);
}

function markWindowVisited(windowId) {
  if (!windowId) {
    return;
  }

  if (!state.exploration.visitedWindows.includes(windowId)) {
    state.exploration.visitedWindows.push(windowId);
    saveExplorationState();
  }

  unlockBonusIfEligible();
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
      openWindow(button.getAttribute("data-open-window"), { trigger: button });
    });
  });

  document.querySelectorAll("[data-close-window]").forEach((button) => {
    button.addEventListener("click", () => {
      closeWindow(button.getAttribute("data-close-window"));
    });
  });

  document.querySelectorAll("[data-fullscreen-window]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleWindowFullscreenById(button.getAttribute("data-fullscreen-window"));
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
    hideExplorerMenus();
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
      const explorerMenuOpen =
        (els.explorerContextMenu && !els.explorerContextMenu.hidden) ||
        (els.explorerItemContextMenu && !els.explorerItemContextMenu.hidden);
      if (explorerMenuOpen) {
        hideExplorerMenus();
        return;
      }

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
    hideExplorerMenus();
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

function bindAboutControls() {
  const buttons = document.querySelectorAll("[data-about-mode]");
  if (!buttons.length) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      state.aboutMode = button.getAttribute("data-about-mode") || "overview";
      updateAboutModeButtons();
      renderAboutModePanel();
    });
  });

  updateAboutModeButtons();
}

function updateAboutModeButtons() {
  document.querySelectorAll("[data-about-mode]").forEach((button) => {
    const isActive = button.getAttribute("data-about-mode") === state.aboutMode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderAboutModePanel() {
  if (!els.aboutModePanel) {
    return;
  }

  if (!state.data) {
    els.aboutModePanel.innerHTML = "";
    return;
  }

  const codingProjects = state.data.codingProjects || [];
  const allProjects = [...codingProjects, ...(state.data.solidworksProjects || [])];
  const formatProjectCount = (count) => `${count} project${count === 1 ? "" : "s"}`;

  if (state.aboutMode === "journey") {
    const timeline = [...allProjects]
      .sort((a, b) => Number(b.year || 0) - Number(a.year || 0))
      .slice(0, 5);

    els.aboutModePanel.innerHTML = timeline.length
      ? `
        <div class="about-mode-content about-mode-content-journey">
          <div class="about-panel-head">
            <p class="about-panel-kicker">Build Timeline</p>
            <p class="about-panel-subtle">Recent milestones and project evolution.</p>
          </div>
          <div class="about-timeline">
          ${timeline
            .map(
              (project) => `
                <article class="about-timeline-row">
                  <p class="about-timeline-year">${escapeHtml(String(project.year || "Recent"))}</p>
                  <div>
                    <p class="about-timeline-title">${escapeHtml(project.title)}</p>
                    <p class="about-timeline-copy">${escapeHtml(project.shortDescription || "")}</p>
                  </div>
                </article>
              `
            )
            .join("")}
          </div>
        </div>
      `
      : '<p class="muted">Project milestones will appear here as they are added.</p>';
    return;
  }

  if (state.aboutMode === "now") {
    const activeProjects = codingProjects
      .filter((project) => String(project.status || "").toLowerCase() === "active")
      .slice(0, 3);

    els.aboutModePanel.innerHTML = activeProjects.length
      ? `
        <div class="about-mode-content about-mode-content-now">
          <div class="about-panel-head">
            <p class="about-panel-kicker">Currently Building</p>
            <p class="about-panel-subtle">What is active right now.</p>
          </div>
          <div class="about-mode-cards">
            ${activeProjects
              .map(
                (project) => `
                  <article class="about-mode-card">
                    <p class="about-mode-card-title">${escapeHtml(project.title)}</p>
                    <p class="about-mode-card-copy">${escapeHtml(project.aiSummary || project.shortDescription || "")}</p>
                    <div class="about-mini-tags">
                      ${(project.tools || []).slice(0, 3).map((tool) => `<span class="tag">${escapeHtml(tool)}</span>`).join("")}
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      `
      : '<p class="muted">Current build focus will be listed here.</p>';
    return;
  }

  const toolCounts = codingProjects.reduce((accumulator, project) => {
    (project.tools || []).forEach((tool) => {
      accumulator[tool] = (accumulator[tool] || 0) + 1;
    });
    return accumulator;
  }, {});

  const topTools = Object.entries(toolCounts)
    .sort((left, right) => right[1] - left[1])
    .slice(0, 6);

  const getToolDepthLabel = (count) => {
    if (count >= 3) {
      return "Core stack";
    }
    if (count === 2) {
      return "Frequent usage";
    }
    return "Focused usage";
  };

  els.aboutModePanel.innerHTML = `
    <div class="about-mode-content about-mode-content-overview">
      <div class="about-panel-head">
        <p class="about-panel-kicker">Tech Stack</p>
        <p class="about-panel-subtle">Tools used across shipped projects.</p>
      </div>
      <div class="about-tech-grid">
        ${topTools.length
          ? topTools
              .map(
                ([tool, count]) => `
                  <article class="about-tech-card">
                    <p class="about-tech-title">${escapeHtml(tool)}</p>
                    <p class="about-tech-meta">${getToolDepthLabel(count)}</p>
                    <p class="about-tech-count">${formatProjectCount(count)}</p>
                  </article>
                `
              )
              .join("")
          : '<p class="muted">Tool usage data appears once projects are loaded.</p>'}
      </div>
    </div>
  `;

  const modeContent = els.aboutModePanel.querySelector(".about-mode-content");
  if (modeContent) {
    modeContent.classList.remove("is-entering");
    void modeContent.offsetWidth;
    modeContent.classList.add("is-entering");
  }
}

function populateAboutHighlights() {
  if (!els.aboutHighlights || !state.data) {
    return;
  }

  const allProjects = [...state.data.codingProjects, ...state.data.solidworksProjects];
  const featuredCount = allProjects.filter((project) => project.featured).length;
  const topTools = [...new Set(state.data.codingProjects.flatMap((project) => project.tools || []))].slice(0, 3);
  const formatProjectCount = (count) => `${count} project${count === 1 ? "" : "s"}`;

  els.aboutHighlights.innerHTML = `
    <article class="insight-card">
      <p class="insight-label"><span class="insight-icon" aria-hidden="true">&#9733;</span>Featured Projects</p>
      <p class="insight-value">${escapeHtml(formatProjectCount(featuredCount))}</p>
    </article>
    <article class="insight-card">
      <p class="insight-label"><span class="insight-icon" aria-hidden="true">&#9881;</span>Main Stack</p>
      <p class="insight-value">${escapeHtml(topTools.join(", ") || "Custom stack")}</p>
    </article>
    <article class="insight-card">
      <p class="insight-label"><span class="insight-icon" aria-hidden="true">&#10024;</span>Current Focus</p>
      <p class="insight-value">ML apps and full-stack tools</p>
    </article>
  `;
}

function initializeExplorerData() {
  state.explorer.root = buildExplorerTree();
  state.explorer.path = [EXPLORER_ROOT_ID];
  state.explorer.history = [[EXPLORER_ROOT_ID]];
  state.explorer.historyIndex = 0;
  state.explorer.selectedEntryId = null;
  state.explorer.contextEntryId = null;
  state.explorer.dragEntryId = null;
  state.explorer.renamingId = null;
  state.explorer.renameDraft = "";
  state.explorer.clipboard = null;
  state.explorer.renameNeedsFocus = false;
  state.explorer.lastPrimaryClickEntryId = null;
  state.explorer.lastPrimaryClickAt = 0;
  state.explorer.search = "";
  state.explorer.nextCustomId = 1;
  if (els.explorerSearch) {
    els.explorerSearch.value = "";
  }
  hideExplorerMenus();
}

function buildExplorerTree() {
  const codingProjects = state.data?.codingProjects || [];
  const profile = state.data?.profile || {};
  const root = {
    id: EXPLORER_ROOT_ID,
    kind: "folder",
    name: "My PC",
    modified: EXPLORER_TIMESTAMP,
    children: [
      {
        id: "program-files",
        kind: "folder",
        name: "Program Files",
        modified: "2026-03-27 10:48 PM",
        children: [
          { id: "portfolio-core", kind: "folder", name: "Portfolio Core", modified: EXPLORER_TIMESTAMP, children: [] },
          {
            id: "development-tools",
            kind: "folder",
            name: "Development Tools",
            modified: EXPLORER_TIMESTAMP,
            children: []
          },
          { id: "productivity", kind: "folder", name: "Productivity", modified: EXPLORER_TIMESTAMP, children: [] },
          { id: "game-demos", kind: "folder", name: "Game Demos", modified: EXPLORER_TIMESTAMP, children: [] }
        ]
      },
      {
        id: "users",
        kind: "folder",
        name: "Users",
        modified: "2026-03-27 10:48 PM",
        children: [
          {
            id: "jay-patel",
            kind: "folder",
            name: "Jay Patel",
            modified: "2026-03-27 10:48 PM",
            children: [
              { id: "documents", kind: "folder", name: "Documents", modified: EXPLORER_TIMESTAMP, children: [] },
              { id: "desktop-shortcuts", kind: "folder", name: "Desktop Shortcuts", modified: EXPLORER_TIMESTAMP, children: [] }
            ]
          }
        ]
      },
      {
        id: "projects-drive",
        kind: "folder",
        name: "Projects",
        modified: EXPLORER_TIMESTAMP,
        children: [
          { id: "coding-projects", kind: "folder", name: "Coding Projects", modified: EXPLORER_TIMESTAMP, children: [] },
          { id: "live-apps", kind: "folder", name: "Live Apps", modified: EXPLORER_TIMESTAMP, children: [] }
        ]
      },
      {
        id: "system",
        kind: "folder",
        name: "System",
        modified: "2026-03-27 10:47 PM",
        children: [
          {
            id: "session-json",
            kind: "file",
            name: "session.json",
            modified: "2026-03-26 10:47 PM",
            type: "JSON File",
            size: "3 KB"
          },
          {
            id: "robots-txt",
            kind: "file",
            name: "robots.txt",
            modified: "2025-12-03 11:41 PM",
            type: "Text Document",
            size: "1 KB"
          },
          {
            id: "rss-xml",
            kind: "file",
            name: "rss.xml",
            modified: "2025-12-03 11:41 PM",
            type: "XML File",
            size: "7 KB"
          },
          {
            id: "sitemap-xml",
            kind: "file",
            name: "sitemap.xml",
            modified: "2025-12-03 11:41 PM",
            type: "XML File",
            size: "6 KB"
          }
        ]
      },
      {
        id: "credits-md",
        kind: "file",
        name: "CREDITS.md",
        modified: "2025-05-08 7:12 PM",
        type: "Markdown File",
        size: "6 KB",
        action: { type: "open-window", windowId: "aboutWindow" }
      },
      {
        id: "favicon-ico",
        kind: "file",
        name: "favicon.ico",
        modified: "2023-11-18 4:40 PM",
        type: "Picture File",
        size: "4 KB"
      },
      {
        id: "screenshot-png",
        kind: "file",
        name: "screenshot.png",
        modified: "2024-12-08 12:22 PM",
        type: "Picture File",
        size: "296 KB"
      }
    ]
  };

  EXPLORER_APP_LIBRARY.forEach((app) => {
    addExplorerEntryToFolderPath(root, app.folderPath, {
      id: `app-${app.id}`,
      kind: "file",
      name: app.name,
      modified: app.modified,
      type: "Application",
      size: app.size,
      action: { ...app.action }
    });
  });

  addExplorerEntryToFolderPath(root, ["users", "jay-patel", "documents"], {
    id: "resume-pdf",
    kind: "file",
    name: "resume.pdf",
    modified: "2026-03-20 2:20 PM",
    type: "PDF File",
    size: "248 KB",
    action: {
      type: "open-url",
      url: profile.resumeUrl || "assets/documents/resume.pdf"
    }
  });

  addExplorerEntryToFolderPath(root, ["users", "jay-patel", "documents"], {
    id: "contact-vcf",
    kind: "file",
    name: "contact.vcf",
    modified: "2026-03-20 2:35 PM",
    type: "vCard File",
    size: "1 KB",
    action: { type: "open-window", windowId: "contactWindow" }
  });

  EXPLORER_APP_LIBRARY.forEach((app) => {
    addExplorerEntryToFolderPath(root, ["users", "jay-patel", "desktop-shortcuts"], {
      id: `shortcut-${app.id}`,
      kind: "file",
      name: `${app.name.replace(".exe", "")}.lnk`,
      modified: EXPLORER_TIMESTAMP,
      type: "Shortcut",
      size: "1 KB",
      action: { ...app.action }
    });
  });

  codingProjects.forEach((project) => {
    addExplorerEntryToFolderPath(root, ["projects-drive", "coding-projects"], {
      id: `project-shortcut-${project.id}`,
      kind: "file",
      name: `${project.title}.url`,
      modified: EXPLORER_TIMESTAMP,
      type: "Internet Shortcut",
      size: `${clamp(Math.round(project.title.length / 4), 2, 9)} KB`,
      action: { type: "open-project", projectId: project.id }
    });

    if (project.githubUrl) {
      addExplorerEntryToFolderPath(root, ["projects-drive", "coding-projects"], {
        id: `project-repo-${project.id}`,
        kind: "file",
        name: `${project.title} Repo.url`,
        modified: EXPLORER_TIMESTAMP,
        type: "Internet Shortcut",
        size: "3 KB",
        action: { type: "open-url", url: project.githubUrl }
      });
    }

    if (project.liveUrl && project.liveUrl !== "#") {
      addExplorerEntryToFolderPath(root, ["projects-drive", "live-apps"], {
        id: `project-live-${project.id}`,
        kind: "file",
        name: `${project.title} Live.url`,
        modified: EXPLORER_TIMESTAMP,
        type: "Internet Shortcut",
        size: "2 KB",
        action: { type: "open-url", url: project.liveUrl }
      });
    }
  });

  addExplorerEntryToFolderPath(root, ["projects-drive", "live-apps"], {
    id: "finance-window-shortcut",
    kind: "file",
    name: "Finance Tracker.appref-ms",
    modified: EXPLORER_TIMESTAMP,
    type: "Application Reference",
    size: "2 KB",
    action: { type: "open-window", windowId: "financeWindow" }
  });

  return root;
}

function addExplorerEntryToFolderPath(root, folderPath, entry) {
  let currentNode = root;
  folderPath.forEach((folderId) => {
    const nextNode = (currentNode.children || []).find((child) => child.id === folderId && child.kind === "folder");
    if (nextNode) {
      currentNode = nextNode;
    }
  });

  currentNode.children = currentNode.children || [];
  currentNode.children.push(entry);
}

function getExplorerRootNode() {
  if (!state.explorer.root) {
    initializeExplorerData();
  }
  return state.explorer.root;
}

function getExplorerNodeByPath(path) {
  const safePath = Array.isArray(path) && path.length ? path : [EXPLORER_ROOT_ID];
  const root = getExplorerRootNode();
  if (!root || safePath[0] !== EXPLORER_ROOT_ID) {
    return null;
  }

  let currentNode = root;
  for (let index = 1; index < safePath.length; index += 1) {
    const segment = safePath[index];
    const nextNode = (currentNode.children || []).find((entry) => entry.id === segment && entry.kind === "folder");
    if (!nextNode) {
      return null;
    }
    currentNode = nextNode;
  }

  return currentNode;
}

function getExplorerBreadcrumbNodes(path) {
  const safePath = Array.isArray(path) && path.length ? path : [EXPLORER_ROOT_ID];
  const root = getExplorerRootNode();
  if (!root) {
    return [];
  }

  const crumbs = [root];
  let currentNode = root;
  for (let index = 1; index < safePath.length; index += 1) {
    const segment = safePath[index];
    const nextNode = (currentNode.children || []).find((entry) => entry.id === segment && entry.kind === "folder");
    if (!nextNode) {
      break;
    }
    crumbs.push(nextNode);
    currentNode = nextNode;
  }
  return crumbs;
}

function findExplorerNodeInfoById(targetId, node = getExplorerRootNode(), parent = null, path = [EXPLORER_ROOT_ID]) {
  if (!node) {
    return null;
  }

  if (node.id === targetId) {
    return { node, parent, path };
  }

  const children = node.children || [];
  for (let index = 0; index < children.length; index += 1) {
    const child = children[index];
    const result = findExplorerNodeInfoById(targetId, child, node, [...path, child.id]);
    if (result) {
      return result;
    }
  }

  return null;
}

function formatExplorerTimestamp(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  let hour = date.getHours();
  const minute = String(date.getMinutes()).padStart(2, "0");
  const period = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${year}-${month}-${day} ${hour}:${minute} ${period}`;
}

function parseExplorerTimestampToNumber(value) {
  if (!value) {
    return 0;
  }

  const match = String(value).match(/^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}):(\d{2}) (AM|PM)$/);
  if (!match) {
    return 0;
  }

  const [, year, month, day, rawHour, minute, period] = match;
  let hour = Number(rawHour) % 12;
  if (period === "PM") {
    hour += 12;
  }

  return new Date(Number(year), Number(month) - 1, Number(day), hour, Number(minute), 0, 0).getTime();
}

function parseExplorerSizeToKb(value) {
  if (!value) {
    return 0;
  }
  const match = String(value).trim().match(/^([\d.]+)\s*(B|KB|MB|GB)$/i);
  if (!match) {
    return 0;
  }

  const amount = Number(match[1]);
  const unit = match[2].toUpperCase();
  if (Number.isNaN(amount)) {
    return 0;
  }

  if (unit === "GB") {
    return amount * 1024 * 1024;
  }
  if (unit === "MB") {
    return amount * 1024;
  }
  if (unit === "B") {
    return amount / 1024;
  }
  return amount;
}

function getFilteredExplorerEntries(node) {
  const rawEntries = [...(node?.children || [])];
  const searchTerm = state.explorer.search.trim().toLowerCase();
  const sortBy = state.explorer.sortBy;
  const sortDirection = state.explorer.sortDirection === "desc" ? -1 : 1;

  const filtered = searchTerm
    ? rawEntries.filter((entry) => {
        const haystack = [entry.name, entry.type, entry.kind].filter(Boolean).join(" ").toLowerCase();
        return haystack.includes(searchTerm);
      })
    : rawEntries;

  return filtered.sort((left, right) => {
    if (left.kind !== right.kind) {
      return left.kind === "folder" ? -1 : 1;
    }

    let comparison = 0;
    if (sortBy === "size") {
      comparison = parseExplorerSizeToKb(left.size) - parseExplorerSizeToKb(right.size);
    } else if (sortBy === "type") {
      const leftType = left.kind === "folder" ? "File folder" : left.type || "File";
      const rightType = right.kind === "folder" ? "File folder" : right.type || "File";
      comparison = leftType.localeCompare(rightType);
    } else if (sortBy === "modified") {
      comparison = parseExplorerTimestampToNumber(left.modified) - parseExplorerTimestampToNumber(right.modified);
    } else {
      comparison = left.name.localeCompare(right.name);
    }

    if (comparison === 0) {
      comparison = left.name.localeCompare(right.name);
    }

    return comparison * sortDirection;
  });
}

function applyExplorerSort(sortBy) {
  if (!["name", "size", "type", "modified"].includes(sortBy)) {
    return;
  }

  if (state.explorer.sortBy === sortBy) {
    state.explorer.sortDirection = state.explorer.sortDirection === "asc" ? "desc" : "asc";
  } else {
    state.explorer.sortBy = sortBy;
    state.explorer.sortDirection = "asc";
  }

  renderExplorer();
}

function hideExplorerSubmenus() {
  if (els.explorerSortSubmenu) {
    els.explorerSortSubmenu.hidden = true;
  }
  if (els.explorerNewSubmenu) {
    els.explorerNewSubmenu.hidden = true;
  }
}

function hideExplorerMenus() {
  hideExplorerSubmenus();
  if (els.explorerContextMenu) {
    els.explorerContextMenu.hidden = true;
  }
  if (els.explorerItemContextMenu) {
    els.explorerItemContextMenu.hidden = true;
  }
  if (els.explorerSortButton) {
    els.explorerSortButton.setAttribute("aria-expanded", "false");
  }
}

function positionExplorerMenu(menuElement, clientX, clientY) {
  if (!menuElement) {
    return;
  }

  const shell = document.querySelector("#myPcWindow .explorer-shell");
  if (!shell) {
    return;
  }

  const shellRect = shell.getBoundingClientRect();
  const menuWidth = menuElement.offsetWidth || 230;
  const menuHeight = menuElement.offsetHeight || 290;
  const left = clamp(clientX - shellRect.left, 8, Math.max(8, shellRect.width - menuWidth - 8));
  const top = clamp(clientY - shellRect.top, 8, Math.max(8, shellRect.height - menuHeight - 8));

  menuElement.style.left = `${left}px`;
  menuElement.style.top = `${top}px`;
}

function toggleExplorerSubmenu(name, forceOpen = false) {
  const submenu = name === "sort" ? els.explorerSortSubmenu : name === "new" ? els.explorerNewSubmenu : null;
  if (!submenu || !els.explorerContextMenu) {
    return;
  }

  const trigger = els.explorerContextMenu.querySelector(`[data-explorer-submenu-toggle="${name}"]`);
  if (!trigger) {
    return;
  }

  const shouldOpen = forceOpen || submenu.hidden;
  hideExplorerSubmenus();
  if (!shouldOpen) {
    return;
  }

  submenu.hidden = false;
  submenu.style.left = `${els.explorerContextMenu.offsetWidth - 1}px`;
  submenu.style.top = `${trigger.offsetTop}px`;
}

function openExplorerContextMenu(clientX, clientY, contextEntryId = null, submenu = "") {
  if (!els.explorerContextMenu) {
    return;
  }

  state.explorer.contextEntryId = contextEntryId;
  hideExplorerMenus();
  hideExplorerSubmenus();
  els.explorerContextMenu.hidden = false;
  els.explorerSortButton?.setAttribute("aria-expanded", "true");
  positionExplorerMenu(els.explorerContextMenu, clientX, clientY);

  if (submenu) {
    toggleExplorerSubmenu(submenu, true);
  }
}

function openExplorerItemContextMenu(clientX, clientY, contextEntryId) {
  if (!els.explorerItemContextMenu || !contextEntryId) {
    return;
  }

  state.explorer.contextEntryId = contextEntryId;
  hideExplorerMenus();
  els.explorerItemContextMenu.hidden = false;
  positionExplorerMenu(els.explorerItemContextMenu, clientX, clientY);
}

function createExplorerCustomId(prefix) {
  const id = `${prefix}-${Date.now().toString(36)}-${state.explorer.nextCustomId}`;
  state.explorer.nextCustomId += 1;
  return id;
}

function getUniqueExplorerName(folderNode, proposedName) {
  const existing = new Set((folderNode.children || []).map((entry) => entry.name.toLowerCase()));
  if (!existing.has(proposedName.toLowerCase())) {
    return proposedName;
  }

  const extensionIndex = proposedName.lastIndexOf(".");
  const hasExtension = extensionIndex > 0;
  const stem = hasExtension ? proposedName.slice(0, extensionIndex) : proposedName;
  const extension = hasExtension ? proposedName.slice(extensionIndex) : "";
  let count = 2;
  let candidate = `${stem} (${count})${extension}`;
  while (existing.has(candidate.toLowerCase())) {
    count += 1;
    candidate = `${stem} (${count})${extension}`;
  }
  return candidate;
}

function createExplorerFolder(folderName = "New Folder") {
  const currentNode = getExplorerNodeByPath(state.explorer.path);
  if (!currentNode || currentNode.kind !== "folder") {
    return null;
  }

  const resolvedName = getUniqueExplorerName(currentNode, folderName);
  const folder = {
    id: createExplorerCustomId("folder"),
    kind: "folder",
    name: resolvedName,
    modified: formatExplorerTimestamp(),
    children: []
  };

  currentNode.children = currentNode.children || [];
  currentNode.children.push(folder);
  return folder;
}

function createExplorerTextFile(fileName = "New Text Document.txt") {
  const currentNode = getExplorerNodeByPath(state.explorer.path);
  if (!currentNode || currentNode.kind !== "folder") {
    return null;
  }

  const resolvedName = getUniqueExplorerName(currentNode, fileName);
  const file = {
    id: createExplorerCustomId("file"),
    kind: "file",
    name: resolvedName,
    modified: formatExplorerTimestamp(),
    type: "Text Document",
    size: "1 KB"
  };

  currentNode.children = currentNode.children || [];
  currentNode.children.push(file);
  return file;
}

function cloneExplorerNode(node) {
  const cloneIdPrefix = node.kind === "folder" ? "folder" : "file";
  const clone = {
    ...node,
    id: createExplorerCustomId(cloneIdPrefix),
    modified: formatExplorerTimestamp()
  };

  if (node.kind === "folder") {
    clone.children = (node.children || []).map((child) => cloneExplorerNode(child));
  }

  if (node.action) {
    clone.action = { ...node.action };
  }

  return clone;
}

function duplicateSelectedExplorerEntry() {
  const currentNode = getExplorerNodeByPath(state.explorer.path);
  if (!currentNode || !state.explorer.selectedEntryId) {
    return createExplorerTextFile("Pasted Item.txt");
  }

  const selected = (currentNode.children || []).find((entry) => entry.id === state.explorer.selectedEntryId);
  if (!selected) {
    return createExplorerTextFile("Pasted Item.txt");
  }

  const duplicate = cloneExplorerNode(selected);
  duplicate.name = getUniqueExplorerName(currentNode, selected.name);
  currentNode.children.push(duplicate);
  return duplicate;
}

function getExplorerEntryFromCurrentFolder(entryId = null) {
  const currentNode = getExplorerNodeByPath(state.explorer.path);
  if (!currentNode || currentNode.kind !== "folder") {
    return null;
  }

  const resolvedEntryId = entryId || state.explorer.contextEntryId || state.explorer.selectedEntryId;
  if (!resolvedEntryId) {
    return null;
  }

  return (currentNode.children || []).find((entry) => entry.id === resolvedEntryId) || null;
}

function startExplorerRename(entryId) {
  const targetEntry = getExplorerEntryFromCurrentFolder(entryId);
  if (!targetEntry) {
    return;
  }

  state.explorer.renamingId = targetEntry.id;
  state.explorer.renameDraft = targetEntry.name;
  state.explorer.renameNeedsFocus = true;
  hideExplorerMenus();
  renderExplorer();
}

function finishExplorerRename(commit = true) {
  if (!state.explorer.renamingId) {
    return false;
  }

  const currentNode = getExplorerNodeByPath(state.explorer.path);
  const renamingEntry = (currentNode?.children || []).find((entry) => entry.id === state.explorer.renamingId);
  if (!renamingEntry) {
    state.explorer.renamingId = null;
    state.explorer.renameDraft = "";
    state.explorer.renameNeedsFocus = false;
    return false;
  }

  if (commit) {
    const proposedName = state.explorer.renameDraft.trim();
    if (proposedName) {
      const siblingChildren = (currentNode.children || []).filter((entry) => entry.id !== renamingEntry.id);
      const siblingNode = { children: siblingChildren };
      renamingEntry.name = getUniqueExplorerName(siblingNode, proposedName);
      renamingEntry.modified = formatExplorerTimestamp();
    }
  }

  state.explorer.renamingId = null;
  state.explorer.renameDraft = "";
  state.explorer.renameNeedsFocus = false;
  return true;
}

function setExplorerClipboard(mode, entryId = null) {
  const targetEntry = getExplorerEntryFromCurrentFolder(entryId);
  if (!targetEntry || !["copy", "cut"].includes(mode)) {
    return false;
  }

  state.explorer.clipboard = { mode, entryId: targetEntry.id };
  setExplorerStatusMessage(`${targetEntry.name} ${mode === "cut" ? "cut" : "copied"} to clipboard.`);
  return true;
}

function pasteExplorerClipboard() {
  const clipboard = state.explorer.clipboard;
  const currentNode = getExplorerNodeByPath(state.explorer.path);
  if (!clipboard?.entryId || !currentNode || currentNode.kind !== "folder") {
    return null;
  }

  const sourceInfo = findExplorerNodeInfoById(clipboard.entryId);
  if (!sourceInfo || !sourceInfo.node || !sourceInfo.parent) {
    state.explorer.clipboard = null;
    return null;
  }

  if (clipboard.mode === "cut") {
    const targetInfo = findExplorerNodeInfoById(currentNode.id);
    if (!targetInfo || sourceInfo.parent.id === currentNode.id) {
      return null;
    }

    if (sourceInfo.node.kind === "folder" && targetInfo.path.includes(sourceInfo.node.id)) {
      return null;
    }

    sourceInfo.parent.children = (sourceInfo.parent.children || []).filter((entry) => entry.id !== sourceInfo.node.id);
    sourceInfo.node.name = getUniqueExplorerName(currentNode, sourceInfo.node.name);
    sourceInfo.node.modified = formatExplorerTimestamp();
    currentNode.children = currentNode.children || [];
    currentNode.children.push(sourceInfo.node);
    state.explorer.clipboard = null;
    return sourceInfo.node;
  }

  const duplicate = cloneExplorerNode(sourceInfo.node);
  duplicate.name = getUniqueExplorerName(currentNode, sourceInfo.node.name);
  currentNode.children = currentNode.children || [];
  currentNode.children.push(duplicate);
  return duplicate;
}

function moveExplorerEntryToFolder(entryId, targetFolderId) {
  const entryInfo = findExplorerNodeInfoById(entryId);
  const targetInfo = findExplorerNodeInfoById(targetFolderId);

  if (!entryInfo || !entryInfo.parent || !targetInfo || targetInfo.node.kind !== "folder") {
    return false;
  }

  if (entryInfo.parent.id === targetFolderId) {
    return false;
  }

  if (entryInfo.node.kind === "folder" && targetInfo.path.includes(entryInfo.node.id)) {
    return false;
  }

  entryInfo.parent.children = (entryInfo.parent.children || []).filter((entry) => entry.id !== entryId);
  targetInfo.node.children = targetInfo.node.children || [];
  targetInfo.node.children.push(entryInfo.node);
  entryInfo.node.modified = formatExplorerTimestamp();
  return true;
}

function setExplorerStatusMessage(message) {
  if (!els.explorerPathLabel) {
    return;
  }

  els.explorerPathLabel.textContent = message;
  window.clearTimeout(setExplorerStatusMessage.timeoutId);
  setExplorerStatusMessage.timeoutId = window.setTimeout(() => {
    if (els.explorerPathLabel) {
      const pathLabel = getExplorerBreadcrumbNodes(state.explorer.path).map((node) => node.name).join(" > ");
      els.explorerPathLabel.textContent = pathLabel;
    }
  }, 2200);
}

function clearExplorerDropTargets() {
  document.querySelectorAll(".explorer-row.is-drop-target").forEach((row) => {
    row.classList.remove("is-drop-target");
  });
}

function handleExplorerItemMenuAction(action) {
  if (!action) {
    return;
  }

  const targetEntry = getExplorerEntryFromCurrentFolder();
  if (!targetEntry) {
    return;
  }

  if (action === "open") {
    openExplorerEntry(targetEntry.id);
    return;
  }

  if (action === "open-new-window") {
    openExplorerEntry(targetEntry.id);
    setExplorerStatusMessage("Opened in new window mode (simulated).");
    return;
  }

  if (action === "add-archive") {
    setExplorerStatusMessage(`${targetEntry.name} added to archive queue.`);
    return;
  }

  if (action === "download") {
    setExplorerStatusMessage(`Downloading ${targetEntry.name}...`);
    return;
  }

  if (action === "cut") {
    setExplorerClipboard("cut", targetEntry.id);
    return;
  }

  if (action === "copy") {
    setExplorerClipboard("copy", targetEntry.id);
    return;
  }

  if (action === "create-shortcut") {
    const currentNode = getExplorerNodeByPath(state.explorer.path);
    if (!currentNode || currentNode.kind !== "folder") {
      return;
    }

    const baseName = targetEntry.name.replace(/\.[^/.]+$/, "");
    const shortcutName = getUniqueExplorerName(currentNode, `${baseName}.lnk`);
    const shortcut = {
      id: createExplorerCustomId("file"),
      kind: "file",
      name: shortcutName,
      modified: formatExplorerTimestamp(),
      type: "Shortcut",
      size: "1 KB",
      action: targetEntry.action ? { ...targetEntry.action } : null
    };

    currentNode.children = currentNode.children || [];
    currentNode.children.push(shortcut);
    state.explorer.selectedEntryId = shortcut.id;
    renderExplorer();
    return;
  }

  if (action === "delete") {
    const currentNode = getExplorerNodeByPath(state.explorer.path);
    if (!currentNode || currentNode.kind !== "folder") {
      return;
    }

    currentNode.children = (currentNode.children || []).filter((entry) => entry.id !== targetEntry.id);
    if (state.explorer.selectedEntryId === targetEntry.id) {
      state.explorer.selectedEntryId = null;
    }
    if (state.explorer.renamingId === targetEntry.id) {
      finishExplorerRename(false);
    }
    setExplorerStatusMessage(`${targetEntry.name} moved to recycle bin (simulated).`);
    renderExplorer();
    return;
  }

  if (action === "rename") {
    startExplorerRename(targetEntry.id);
    return;
  }

  if (action === "properties") {
    const typeLabel = targetEntry.kind === "folder" ? "File folder" : targetEntry.type || "File";
    const sizeLabel = targetEntry.kind === "folder" ? "N/A" : targetEntry.size || "N/A";
    setExplorerStatusMessage(`${targetEntry.name} | ${typeLabel} | ${sizeLabel}`);
  }
}

function handleExplorerMenuAction(action) {
  if (!action) {
    return;
  }

  if (action === "refresh") {
    renderExplorer();
    return;
  }

  if (action === "add-file") {
    const created = createExplorerTextFile("New File.txt");
    if (created) {
      state.explorer.selectedEntryId = created.id;
      renderExplorer();
    }
    return;
  }

  if (action === "map-directory") {
    const created = createExplorerFolder("Mapped Directory");
    if (created) {
      state.explorer.selectedEntryId = created.id;
      renderExplorer();
    }
    return;
  }

  if (action === "open-terminal") {
    openWindow("codingWindow");
    setExplorerStatusMessage("Terminal simulation opened in VSCode.");
    return;
  }

  if (action === "paste") {
    const pasted = pasteExplorerClipboard();
    if (pasted) {
      state.explorer.selectedEntryId = pasted.id;
      renderExplorer();
    } else {
      setExplorerStatusMessage("Nothing to paste.");
    }
    return;
  }

  if (action === "new-folder") {
    const folder = createExplorerFolder("New Folder");
    if (folder) {
      state.explorer.selectedEntryId = folder.id;
      startExplorerRename(folder.id);
    }
    return;
  }

  if (action === "new-text-file") {
    const file = createExplorerTextFile("New Text Document.txt");
    if (file) {
      state.explorer.selectedEntryId = file.id;
      startExplorerRename(file.id);
    }
    return;
  }

  if (action === "properties") {
    const currentNode = getExplorerNodeByPath(state.explorer.path);
    const selected = (currentNode?.children || []).find(
      (entry) => entry.id === (state.explorer.contextEntryId || state.explorer.selectedEntryId)
    );
    if (selected) {
      const typeLabel = selected.kind === "folder" ? "File folder" : selected.type || "File";
      const sizeLabel = selected.kind === "folder" ? "N/A" : selected.size || "N/A";
      setExplorerStatusMessage(`${selected.name} | ${typeLabel} | ${sizeLabel}`);
    } else {
      setExplorerStatusMessage("My PC | Virtual file explorer");
    }
  }
}

function bindExplorerControls() {
  if (!els.explorerRows) {
    return;
  }

  els.explorerBackButton?.addEventListener("click", () => {
    if (state.explorer.historyIndex <= 0) {
      return;
    }

    state.explorer.historyIndex -= 1;
    state.explorer.path = [...state.explorer.history[state.explorer.historyIndex]];
    state.explorer.selectedEntryId = null;
    state.explorer.contextEntryId = null;
    state.explorer.lastPrimaryClickEntryId = null;
    state.explorer.lastPrimaryClickAt = 0;
    hideExplorerMenus();
    renderExplorer();
  });

  els.explorerUpButton?.addEventListener("click", () => {
    if (state.explorer.path.length <= 1) {
      return;
    }
    navigateExplorerTo(state.explorer.path.slice(0, -1));
  });

  els.explorerRefreshButton?.addEventListener("click", () => {
    state.explorer.selectedEntryId = null;
    state.explorer.contextEntryId = null;
    state.explorer.lastPrimaryClickEntryId = null;
    state.explorer.lastPrimaryClickAt = 0;
    hideExplorerMenus();
    renderExplorer();
  });

  els.explorerSortButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    const rect = els.explorerSortButton.getBoundingClientRect();
    openExplorerContextMenu(rect.left, rect.bottom + 4, null, "sort");
  });

  document.querySelectorAll(".explorer-table-header [data-explorer-sort]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const sortBy = button.getAttribute("data-explorer-sort");
      applyExplorerSort(sortBy);
      hideExplorerMenus();
    });
  });

  els.explorerSearch?.addEventListener("input", (event) => {
    state.explorer.search = event.target.value || "";
    renderExplorer();
  });

  els.explorerBreadcrumb?.addEventListener("click", (event) => {
    const crumb = event.target.closest("[data-explorer-crumb-index]");
    if (!crumb) {
      return;
    }

    event.stopPropagation();
    const crumbIndex = Number(crumb.getAttribute("data-explorer-crumb-index"));
    if (Number.isNaN(crumbIndex)) {
      return;
    }

    navigateExplorerTo(state.explorer.path.slice(0, crumbIndex + 1));
  });

  els.explorerRows.addEventListener("click", (event) => {
    if (event.target.closest(".explorer-rename-input")) {
      return;
    }

    const row = event.target.closest(".explorer-row");
    hideExplorerMenus();

    if (!row) {
      if (state.explorer.renamingId) {
        finishExplorerRename(true);
      }
      state.explorer.selectedEntryId = null;
      state.explorer.contextEntryId = null;
      state.explorer.lastPrimaryClickEntryId = null;
      state.explorer.lastPrimaryClickAt = 0;
      renderExplorer();
      return;
    }

    const entryId = row.getAttribute("data-entry-id");
    if (!entryId) {
      return;
    }

    if (state.explorer.renamingId && state.explorer.renamingId !== entryId) {
      finishExplorerRename(true);
    }

    const now = Date.now();
    const isDoublePrimaryClick =
      state.explorer.lastPrimaryClickEntryId === entryId && now - state.explorer.lastPrimaryClickAt <= 420;

    state.explorer.lastPrimaryClickEntryId = entryId;
    state.explorer.lastPrimaryClickAt = now;

    state.explorer.selectedEntryId = entryId;
    state.explorer.contextEntryId = entryId;

    if (isDoublePrimaryClick && state.explorer.renamingId !== entryId) {
      openExplorerEntry(entryId);
      return;
    }

    renderExplorer();
  });

  els.explorerRows.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const row = event.target.closest(".explorer-row");
    if (row) {
      const entryId = row.getAttribute("data-entry-id");
      if (!entryId) {
        return;
      }
      if (state.explorer.renamingId && state.explorer.renamingId !== entryId) {
        finishExplorerRename(true);
      }
      state.explorer.lastPrimaryClickEntryId = null;
      state.explorer.lastPrimaryClickAt = 0;
      state.explorer.selectedEntryId = entryId;
      state.explorer.contextEntryId = entryId;
      renderExplorer();
      openExplorerItemContextMenu(event.clientX, event.clientY, entryId);
      return;
    }

    if (state.explorer.renamingId) {
      finishExplorerRename(true);
    }
    state.explorer.lastPrimaryClickEntryId = null;
    state.explorer.lastPrimaryClickAt = 0;
    state.explorer.selectedEntryId = null;
    state.explorer.contextEntryId = null;
    renderExplorer();
    openExplorerContextMenu(event.clientX, event.clientY, null);
  });

  els.explorerRows.addEventListener("keydown", (event) => {
    if (event.target.closest(".explorer-rename-input")) {
      return;
    }

    const row = event.target.closest(".explorer-row");
    if (!row) {
      return;
    }

    const entryId = row.getAttribute("data-entry-id");
    if (!entryId) {
      return;
    }

    if (event.key === "F2") {
      event.preventDefault();
      startExplorerRename(entryId);
      return;
    }

    if (event.key !== "Enter" || state.explorer.renamingId === entryId) {
      return;
    }

    event.preventDefault();
    openExplorerEntry(entryId);
  });

  els.explorerRows.addEventListener("dragstart", (event) => {
    if (event.target.closest(".explorer-rename-input")) {
      event.preventDefault();
      return;
    }

    const row = event.target.closest(".explorer-row");
    if (!row) {
      return;
    }

    const entryId = row.getAttribute("data-entry-id");
    if (!entryId) {
      return;
    }

    if (state.explorer.renamingId === entryId) {
      event.preventDefault();
      return;
    }

    state.explorer.dragEntryId = entryId;
    event.dataTransfer?.setData("text/plain", entryId);
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
    }
  });

  els.explorerRows.addEventListener("dragover", (event) => {
    const row = event.target.closest(".explorer-row");
    if (!row || row.getAttribute("data-entry-kind") !== "folder") {
      return;
    }

    if (!state.explorer.dragEntryId || state.explorer.dragEntryId === row.getAttribute("data-entry-id")) {
      return;
    }

    event.preventDefault();
    clearExplorerDropTargets();
    row.classList.add("is-drop-target");
  });

  els.explorerRows.addEventListener("dragleave", (event) => {
    const row = event.target.closest(".explorer-row");
    if (row) {
      row.classList.remove("is-drop-target");
    }
  });

  els.explorerRows.addEventListener("drop", (event) => {
    const row = event.target.closest(".explorer-row");
    clearExplorerDropTargets();
    if (!row || row.getAttribute("data-entry-kind") !== "folder" || !state.explorer.dragEntryId) {
      return;
    }

    event.preventDefault();
    const moved = moveExplorerEntryToFolder(state.explorer.dragEntryId, row.getAttribute("data-entry-id"));
    if (moved) {
      state.explorer.selectedEntryId = state.explorer.dragEntryId;
      renderExplorer();
    }
  });

  els.explorerRows.addEventListener("dragend", () => {
    state.explorer.dragEntryId = null;
    clearExplorerDropTargets();
  });

  els.explorerRows.addEventListener("input", (event) => {
    const renameInput = event.target.closest("[data-explorer-rename-input]");
    if (!renameInput) {
      return;
    }
    state.explorer.renameDraft = renameInput.value;
  });

  els.explorerRows.addEventListener("keydown", (event) => {
    const renameInput = event.target.closest("[data-explorer-rename-input]");
    if (!renameInput) {
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      finishExplorerRename(true);
      renderExplorer();
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      finishExplorerRename(false);
      renderExplorer();
    }
  });

  els.explorerRows.addEventListener("focusout", (event) => {
    const renameInput = event.target.closest("[data-explorer-rename-input]");
    if (!renameInput) {
      return;
    }

    if (!state.explorer.renamingId) {
      return;
    }

    finishExplorerRename(true);
    renderExplorer();
  });

  els.explorerContextMenu?.addEventListener("click", (event) => {
    event.stopPropagation();

    const toggleButton = event.target.closest("[data-explorer-submenu-toggle]");
    if (toggleButton) {
      const submenu = toggleButton.getAttribute("data-explorer-submenu-toggle");
      toggleExplorerSubmenu(submenu);
      return;
    }

    const sortButton = event.target.closest("[data-explorer-sort]");
    if (sortButton) {
      applyExplorerSort(sortButton.getAttribute("data-explorer-sort"));
      hideExplorerMenus();
      return;
    }

    const actionButton = event.target.closest("[data-explorer-action]");
    if (!actionButton) {
      return;
    }

    if (actionButton.getAttribute("aria-disabled") === "true") {
      return;
    }

    handleExplorerMenuAction(actionButton.getAttribute("data-explorer-action"));
    hideExplorerMenus();
  });

  els.explorerContextMenu?.addEventListener("mouseover", (event) => {
    const toggleButton = event.target.closest("[data-explorer-submenu-toggle]");
    if (toggleButton) {
      toggleExplorerSubmenu(toggleButton.getAttribute("data-explorer-submenu-toggle"), true);
    }
  });

  els.explorerContextMenu?.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });

  els.explorerItemContextMenu?.addEventListener("click", (event) => {
    event.stopPropagation();

    const actionButton = event.target.closest("[data-explorer-item-action]");
    if (!actionButton) {
      return;
    }

    handleExplorerItemMenuAction(actionButton.getAttribute("data-explorer-item-action"));
    hideExplorerMenus();
  });

  els.explorerItemContextMenu?.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
}

function navigateExplorerTo(path, pushHistory = true) {
  const normalizedPath = Array.isArray(path) && path.length ? path : [EXPLORER_ROOT_ID];
  if (normalizedPath[0] !== EXPLORER_ROOT_ID) {
    return;
  }

  const node = getExplorerNodeByPath(normalizedPath);
  if (!node) {
    return;
  }

  state.explorer.path = [...normalizedPath];
  state.explorer.selectedEntryId = null;
  state.explorer.contextEntryId = null;
  state.explorer.renamingId = null;
  state.explorer.renameDraft = "";
  state.explorer.renameNeedsFocus = false;
  state.explorer.lastPrimaryClickEntryId = null;
  state.explorer.lastPrimaryClickAt = 0;
  hideExplorerMenus();

  if (pushHistory) {
    const history = state.explorer.history.slice(0, state.explorer.historyIndex + 1);
    history.push([...normalizedPath]);
    state.explorer.history = history;
    state.explorer.historyIndex = history.length - 1;
  }

  renderExplorer();
}

function openExplorerEntry(entryId) {
  const currentNode = getExplorerNodeByPath(state.explorer.path);
  const entry = (currentNode?.children || []).find((item) => item.id === entryId);
  if (!entry) {
    return;
  }

  if (entry.kind === "folder") {
    navigateExplorerTo([...state.explorer.path, entry.id]);
    return;
  }

  const action = entry.action;
  if (!action) {
    return;
  }

  if (action.type === "open-window") {
    if (action.workspace) {
      state.codingWorkspace = action.workspace;
      updateCodingWorkspace();
    }
    openWindow(action.windowId);
    return;
  }

  if (action.type === "open-project") {
    const project = findProjectById(action.projectId);
    if (project) {
      openProjectInPortfolio(project, true);
    }
    return;
  }

  if (action.type === "open-url" && action.url) {
    window.open(action.url, "_blank", "noopener,noreferrer");
  }
}

function renderExplorer() {
  if (!els.explorerRows || !els.explorerBreadcrumb) {
    return;
  }

  const currentNode = getExplorerNodeByPath(state.explorer.path) || getExplorerNodeByPath([EXPLORER_ROOT_ID]);
  if (!currentNode) {
    return;
  }

  if (!getExplorerNodeByPath(state.explorer.path)) {
    state.explorer.path = [EXPLORER_ROOT_ID];
  }

  const breadcrumbNodes = getExplorerBreadcrumbNodes(state.explorer.path);
  els.explorerBreadcrumb.innerHTML = breadcrumbNodes
    .map(
      (node, index) => `
        <button class="explorer-crumb" type="button" data-explorer-crumb-index="${index}">
          ${escapeHtml(node.name)}
        </button>
        ${index < breadcrumbNodes.length - 1 ? '<span class="explorer-crumb-sep">&#8250;</span>' : ""}
      `
    )
    .join("");

  const entries = getFilteredExplorerEntries(currentNode);
  const selectedEntryVisible = entries.some((entry) => entry.id === state.explorer.selectedEntryId);
  if (!selectedEntryVisible) {
    state.explorer.selectedEntryId = null;
  }
  const renamingEntryVisible = entries.some((entry) => entry.id === state.explorer.renamingId);
  if (!renamingEntryVisible) {
    state.explorer.renamingId = null;
    state.explorer.renameDraft = "";
    state.explorer.renameNeedsFocus = false;
  }

  els.explorerRows.innerHTML = entries.length
    ? entries
        .map((entry) => {
          const isSelected = entry.id === state.explorer.selectedEntryId;
          const isRenaming = entry.id === state.explorer.renamingId;
          const typeLabel = entry.kind === "folder" ? "File folder" : entry.type || "File";
          const sizeLabel = entry.kind === "folder" ? "" : entry.size || "";
          const renameValue = isRenaming ? state.explorer.renameDraft || entry.name : "";
          return `
            <div
              class="explorer-row${isSelected ? " is-selected" : ""}"
              tabindex="0"
              role="row"
              draggable="${isRenaming ? "false" : "true"}"
              data-entry-id="${escapeHtml(entry.id)}"
              data-entry-kind="${escapeHtml(entry.kind)}"
            >
              <span class="explorer-row-name">
                <span class="explorer-entry-icon ${entry.kind === "folder" ? "is-folder" : "is-file"}" aria-hidden="true"></span>
                ${
                  isRenaming
                    ? `<input class="explorer-rename-input" type="text" value="${escapeHtml(renameValue)}" data-explorer-rename-input="${escapeHtml(entry.id)}" aria-label="Rename ${escapeHtml(entry.name)}" />`
                    : `<span class="explorer-entry-text">${escapeHtml(entry.name)}</span>`
                }
              </span>
              <span class="explorer-row-date">${escapeHtml(entry.modified || EXPLORER_TIMESTAMP)}</span>
              <span class="explorer-row-type">${escapeHtml(typeLabel)}</span>
              <span class="explorer-row-size">${escapeHtml(sizeLabel)}</span>
            </div>
          `;
        })
        .join("")
    : '<p class="explorer-empty">No files match your search.</p>';

  if (state.explorer.renamingId && state.explorer.renameNeedsFocus) {
    const renameInput = Array.from(els.explorerRows.querySelectorAll("[data-explorer-rename-input]")).find(
      (input) => input.getAttribute("data-explorer-rename-input") === state.explorer.renamingId
    );
    if (renameInput) {
      renameInput.focus();
      renameInput.select();
    }
    state.explorer.renameNeedsFocus = false;
  }

  if (els.explorerItemCount) {
    els.explorerItemCount.textContent = `${entries.length} item${entries.length === 1 ? "" : "s"}`;
  }
  if (els.explorerPathLabel) {
    els.explorerPathLabel.textContent = breadcrumbNodes.map((node) => node.name).join(" > ");
  }

  if (els.explorerBackButton) {
    els.explorerBackButton.disabled = state.explorer.historyIndex <= 0;
  }
  if (els.explorerUpButton) {
    els.explorerUpButton.disabled = state.explorer.path.length <= 1;
  }

  if (els.explorerSortButton) {
    const sortLabelMap = {
      name: "Name",
      size: "Size",
      type: "Item type",
      modified: "Date modified"
    };
    const directionMarker = state.explorer.sortDirection === "desc" ? " (Desc)" : "";
    els.explorerSortButton.textContent = `Sort by: ${sortLabelMap[state.explorer.sortBy]}${directionMarker}`;
  }

  document.querySelectorAll(".explorer-col-button[data-explorer-sort]").forEach((button) => {
    button.classList.toggle("is-active", button.getAttribute("data-explorer-sort") === state.explorer.sortBy);
  });

  els.explorerContextMenu?.querySelectorAll("[data-explorer-sort]").forEach((button) => {
    button.classList.toggle("is-active", button.getAttribute("data-explorer-sort") === state.explorer.sortBy);
  });

  const clipboardEntryId = state.explorer.clipboard?.entryId;
  const clipboardExists = Boolean(clipboardEntryId && findExplorerNodeInfoById(clipboardEntryId));
  if (!clipboardExists) {
    state.explorer.clipboard = null;
  }
  const pasteButton = els.explorerContextMenu?.querySelector("[data-explorer-action=\"paste\"]");
  if (pasteButton) {
    pasteButton.setAttribute("aria-disabled", String(!clipboardExists));
    pasteButton.classList.toggle("is-disabled", !clipboardExists);
  }
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

let wordStatusTimer = null;

function bindWordAppControls() {
  const wordWindow = document.getElementById("detailWindow");
  if (!wordWindow || !els.wordEditor) {
    return;
  }

  const fullscreenToggle = wordWindow.querySelector('[data-fullscreen-window="detailWindow"]');
  if (fullscreenToggle) {
    fullscreenToggle.innerHTML = "&#9723;";
  }

  if (!els.wordEditor.innerHTML.trim()) {
    els.wordEditor.innerHTML = WORD_DEFAULT_HTML;
  }

  applyWordDocumentTitle();
  resetWordTypingMode();
  updateWordZoom();
  updateWordViewClasses();
  updateWordStats();
  initializeWordTablePicker();

  wordWindow.querySelectorAll("[data-word-menu-button]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const menuId = button.getAttribute("data-word-menu-button");
      if (!menuId) {
        return;
      }

      if (state.word.openMenu === menuId) {
        closeWordMenus();
        return;
      }

      openWordMenu(menuId, button);
    });

    button.addEventListener("mouseenter", () => {
      const menuId = button.getAttribute("data-word-menu-button");
      if (!menuId || state.word.openMenu === null || state.word.openMenu === menuId) {
        return;
      }
      openWordMenu(menuId, button);
    });
  });

  wordWindow.querySelectorAll(".word-menu-dropdown [data-word-command]").forEach((button) => {
    button.addEventListener("click", () => {
      const command = button.getAttribute("data-word-command");
      if (command) {
        runWordMenuCommand(command);
      }
      closeWordMenus();
    });
  });

  wordWindow.querySelectorAll(".word-menu-dropdown [data-word-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.getAttribute("data-word-action");
      if (action === "insert-table") {
        openWordTablePicker();
        return;
      }
      runWordAction(action);
      closeWordMenus();
    });
  });

  wordWindow.querySelectorAll(".word-toolbar-row [data-word-command]").forEach((button) => {
    button.addEventListener("click", () => {
      const command = button.getAttribute("data-word-command");
      if (!command) {
        return;
      }
      runWordMenuCommand(command);
    });
  });

  wordWindow.querySelectorAll(".word-toolbar-row [data-word-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.getAttribute("data-word-action");
      if (!action) {
        return;
      }
      runWordAction(action);
    });
  });

  els.wordToolbarZoom?.addEventListener("change", (event) => {
    state.word.zoom = clamp(Number(event.target.value || 1), 0.7, 1.6);
    updateWordZoom();
  });

  els.wordToolbarStyle?.addEventListener("change", (event) => {
    const style = event.target.value || "p";
    executeWordCommand("formatBlock", style);
  });

  els.wordToolbarFont?.addEventListener("change", (event) => {
    const fontName = event.target.value || "Calibri";
    executeWordCommand("fontName", fontName);
  });

  els.wordToolbarFontSize?.addEventListener("change", (event) => {
    const size = clamp(Number(event.target.value || 11), 8, 72);
    event.target.value = String(size);
    executeWordCommand("fontSize", mapWordFontSize(size));
  });

  els.wordInsertTableItem?.addEventListener("mouseenter", () => {
    openWordTablePicker();
  });

  els.wordInsertTableItem?.addEventListener("focus", () => {
    openWordTablePicker();
  });

  els.wordInsertTableItem?.addEventListener("click", (event) => {
    event.preventDefault();
    openWordTablePicker();
  });

  els.wordInsertMenu?.querySelectorAll(".word-menu-item").forEach((menuItem) => {
    if (menuItem === els.wordInsertTableItem) {
      return;
    }
    menuItem.addEventListener("mouseenter", () => {
      closeWordTablePicker();
    });
  });

  els.wordFileInput?.addEventListener("change", () => {
    const file = els.wordFileInput.files?.[0];
    if (file) {
      loadWordFile(file);
    }
    els.wordFileInput.value = "";
  });

  ["input", "keyup", "mouseup", "focus"].forEach((eventName) => {
    els.wordEditor.addEventListener(eventName, () => {
      updateWordStats();
    });
  });

  wordWindow.addEventListener("mousedown", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const isMenuButton = Boolean(target.closest("[data-word-menu-button]"));
    const isMenuBody = Boolean(target.closest(".word-menu-dropdown"));
    if (!isMenuButton && !isMenuBody) {
      closeWordMenus();
    }
  });

  document.addEventListener("mousedown", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    if (!wordWindow.contains(target)) {
      closeWordMenus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeWordMenus();
    }
  });
}

function openWordMenu(menuId, buttonEl) {
  const menu = els.wordMenuLayer?.querySelector(`[data-word-menu="${menuId}"]`);
  if (!menu || !els.wordMenuShell) {
    return;
  }

  closeWordMenus();
  state.word.openMenu = menuId;

  const shellRect = els.wordMenuShell.getBoundingClientRect();
  const buttonRect = buttonEl.getBoundingClientRect();
  const menuRowRect = els.wordMenuBar?.getBoundingClientRect();
  const left = Math.max(8, Math.round(buttonRect.left - shellRect.left));
  const top = Math.max(44, Math.round((menuRowRect?.bottom || buttonRect.bottom) - shellRect.top + 2));
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
  menu.hidden = false;

  buttonEl.classList.add("is-open");
  buttonEl.setAttribute("aria-expanded", "true");
  syncWordMenuCheckStates();
}

function closeWordMenus() {
  if (state.word.openMenu === null) {
    return;
  }

  state.word.openMenu = null;
  closeWordTablePicker();
  document.querySelectorAll(".word-menu-dropdown[data-word-menu]").forEach((menu) => {
    menu.hidden = true;
  });
  document.querySelectorAll("[data-word-menu-button]").forEach((button) => {
    button.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
  });
}

function initializeWordTablePicker() {
  if (!els.wordTablePickerGrid || !els.wordTablePickerSize) {
    return;
  }

  if (els.wordTablePickerGrid.dataset.initialized === "true") {
    return;
  }

  const max = state.word.tablePicker.max || 15;
  const fragment = document.createDocumentFragment();

  for (let row = 1; row <= max; row += 1) {
    for (let col = 1; col <= max; col += 1) {
      const cell = document.createElement("button");
      cell.className = "word-table-cell";
      cell.type = "button";
      cell.setAttribute("data-table-row", String(row));
      cell.setAttribute("data-table-col", String(col));
      cell.setAttribute("aria-label", `Insert table ${col} by ${row}`);
      fragment.appendChild(cell);
    }
  }

  els.wordTablePickerGrid.appendChild(fragment);
  els.wordTablePickerGrid.dataset.initialized = "true";
  els.wordTablePickerGrid.style.setProperty("--table-picker-max", String(max));
  updateWordTablePickerViewport();
  updateWordTablePickerSelection(1, 1);

  els.wordTablePickerGrid.addEventListener("mousemove", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const cell = target.closest(".word-table-cell");
    if (!cell) {
      return;
    }

    const row = Number(cell.getAttribute("data-table-row") || "1");
    const col = Number(cell.getAttribute("data-table-col") || "1");

    const nextVisibleRows = row >= state.word.tablePicker.visibleRows
      ? Math.min(max, state.word.tablePicker.visibleRows + 1)
      : Math.max(5, row + 1);
    const nextVisibleCols = col >= state.word.tablePicker.visibleCols
      ? Math.min(max, state.word.tablePicker.visibleCols + 1)
      : Math.max(5, col + 1);
    state.word.tablePicker.visibleRows = nextVisibleRows;
    state.word.tablePicker.visibleCols = nextVisibleCols;

    updateWordTablePickerViewport();
    updateWordTablePickerSelection(row, col);
  });

  els.wordTablePickerGrid.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const cell = target.closest(".word-table-cell");
    if (!cell) {
      return;
    }

    const rows = Number(cell.getAttribute("data-table-row") || "1");
    const cols = Number(cell.getAttribute("data-table-col") || "1");
    insertWordTable(rows, cols);
    closeWordMenus();
  });

  els.wordTablePicker?.addEventListener("mouseleave", () => {
    closeWordTablePicker();
  });
}

function openWordTablePicker() {
  if (!els.wordTablePicker || state.word.openMenu !== "insert") {
    return;
  }

  state.word.tablePicker.visibleRows = 5;
  state.word.tablePicker.visibleCols = 5;
  state.word.tablePicker.rows = 1;
  state.word.tablePicker.cols = 1;
  state.word.tablePicker.open = true;
  els.wordTablePicker.hidden = false;
  if (els.wordInsertTableItem) {
    els.wordInsertTableItem.setAttribute("aria-expanded", "true");
  }

  if (els.wordInsertMenu && els.wordInsertTableItem) {
    const pickerTop = Math.max(4, els.wordInsertTableItem.offsetTop - 4);
    const pickerLeft = Math.max(0, els.wordInsertMenu.offsetWidth - 3);
    els.wordTablePicker.style.top = `${pickerTop}px`;
    els.wordTablePicker.style.left = `${pickerLeft}px`;
  }

  updateWordTablePickerViewport();
  updateWordTablePickerSelection(1, 1);
}

function closeWordTablePicker() {
  if (!els.wordTablePicker) {
    return;
  }

  state.word.tablePicker.open = false;
  els.wordTablePicker.hidden = true;
  if (els.wordInsertTableItem) {
    els.wordInsertTableItem.setAttribute("aria-expanded", "false");
  }
}

function updateWordTablePickerViewport() {
  if (!els.wordTablePickerGrid) {
    return;
  }

  const max = state.word.tablePicker.max || 15;
  const visibleRows = clamp(Number(state.word.tablePicker.visibleRows) || 5, 1, max);
  const visibleCols = clamp(Number(state.word.tablePicker.visibleCols) || 5, 1, max);
  state.word.tablePicker.visibleRows = visibleRows;
  state.word.tablePicker.visibleCols = visibleCols;

  els.wordTablePickerGrid.style.setProperty("--table-picker-visible-cols", String(visibleCols));

  els.wordTablePickerGrid.querySelectorAll(".word-table-cell").forEach((cell) => {
    const row = Number(cell.getAttribute("data-table-row") || "1");
    const col = Number(cell.getAttribute("data-table-col") || "1");
    const isVisible = row <= visibleRows && col <= visibleCols;
    cell.classList.toggle("is-hidden", !isVisible);
  });
}

function updateWordTablePickerSelection(rows, cols) {
  const max = state.word.tablePicker.max || 15;
  const safeRows = clamp(Number(rows) || 1, 1, Math.min(max, state.word.tablePicker.visibleRows || 5));
  const safeCols = clamp(Number(cols) || 1, 1, Math.min(max, state.word.tablePicker.visibleCols || 5));

  state.word.tablePicker.rows = safeRows;
  state.word.tablePicker.cols = safeCols;

  if (els.wordTablePickerSize) {
    els.wordTablePickerSize.textContent = `${safeCols} x ${safeRows}`;
  }

  if (!els.wordTablePickerGrid) {
    return;
  }

  els.wordTablePickerGrid.querySelectorAll(".word-table-cell").forEach((cell) => {
    const row = Number(cell.getAttribute("data-table-row") || "1");
    const col = Number(cell.getAttribute("data-table-col") || "1");
    cell.classList.toggle("is-selected", row <= safeRows && col <= safeCols);
  });
}

function focusWordEditor() {
  if (!els.wordEditor) {
    return;
  }
  els.wordEditor.focus();
}

function resetWordTypingMode() {
  if (!els.wordEditor) {
    return;
  }

  focusWordEditor();
  try {
    if (document.queryCommandState("bold")) {
      document.execCommand("bold", false, null);
    }
  } catch (error) {
    // Ignore unsupported state checks.
  }
}

function mapWordFontSize(sizePx) {
  const size = clamp(Number(sizePx) || 11, 8, 72);
  if (size <= 10) {
    return 1;
  }
  if (size <= 12) {
    return 2;
  }
  if (size <= 16) {
    return 3;
  }
  if (size <= 22) {
    return 4;
  }
  if (size <= 29) {
    return 5;
  }
  if (size <= 43) {
    return 6;
  }
  return 7;
}

function executeWordCommand(command, value = null) {
  if (!els.wordEditor) {
    return;
  }

  focusWordEditor();

  try {
    document.execCommand("styleWithCSS", false, true);
    document.execCommand(command, false, value);
    updateWordStats();
    setWordStatusMessage("Formatting applied.");
  } catch (error) {
    setWordStatusMessage("This formatting command is not supported in your browser.", true);
  }
}

function runWordMenuCommand(command) {
  if (!command) {
    return;
  }

  if (command === "createLink") {
    const link = window.prompt("Enter URL", "https://");
    if (!link) {
      setWordStatusMessage("Link insert canceled.");
      return;
    }
    executeWordCommand("createLink", link);
    return;
  }

  if (command === "delete") {
    executeWordCommand("forwardDelete");
    return;
  }

  executeWordCommand(command);
}

function runWordAction(action) {
  if (!action || !els.wordEditor) {
    return;
  }

  if (action === "new") {
    els.wordEditor.innerHTML = WORD_DEFAULT_HTML;
    state.word.documentName = "Untitled document";
    applyWordDocumentTitle();
    resetWordTypingMode();
    updateWordStats();
    setWordStatusMessage("New document ready.");
    focusWordEditor();
    return;
  }

  if (action === "open") {
    els.wordFileInput?.click();
    return;
  }

  if (action === "toolbar-font-dec" || action === "toolbar-font-inc") {
    const currentSize = clamp(Number(els.wordToolbarFontSize?.value || 11), 8, 72);
    const nextSize = clamp(currentSize + (action === "toolbar-font-inc" ? 1 : -1), 8, 72);
    if (els.wordToolbarFontSize) {
      els.wordToolbarFontSize.value = String(nextSize);
    }
    executeWordCommand("fontSize", mapWordFontSize(nextSize));
    return;
  }

  if (action === "save-txt") {
    const content = (els.wordEditor.textContent || "").replace(/\u00a0/g, " ");
    downloadWordDocument(`${normalizeWordFileName(state.word.documentName)}.txt`, content, "text/plain;charset=utf-8");
    setWordStatusMessage("Saved as .txt");
    return;
  }

  if (action === "save-html") {
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(state.word.documentName)}</title></head><body>${els.wordEditor.innerHTML}</body></html>`;
    downloadWordDocument(`${normalizeWordFileName(state.word.documentName)}.html`, html, "text/html;charset=utf-8");
    setWordStatusMessage("Saved as .html");
    return;
  }

  if (action === "make-copy") {
    const copyName = `Copy of ${state.word.documentName}`;
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(copyName)}</title></head><body>${els.wordEditor.innerHTML}</body></html>`;
    downloadWordDocument(`${normalizeWordFileName(copyName)}.html`, html, "text/html;charset=utf-8");
    setWordStatusMessage("Copy downloaded.");
    return;
  }

  if (action === "share-doc") {
    setWordStatusMessage("Share panel is not connected yet. Use GitHub/Live links from your portfolio apps.");
    return;
  }

  if (action === "email-doc") {
    const subject = encodeURIComponent(state.word.documentName);
    const body = encodeURIComponent((els.wordEditor.textContent || "").slice(0, 1800));
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setWordStatusMessage("Opening your email client.");
    return;
  }

  if (action === "rename-document") {
    const renamed = window.prompt("Rename document", state.word.documentName);
    if (!renamed) {
      setWordStatusMessage("Rename canceled.");
      return;
    }

    const cleanName = renamed.trim();
    if (!cleanName.length) {
      setWordStatusMessage("Document name cannot be empty.", true);
      return;
    }

    state.word.documentName = cleanName;
    applyWordDocumentTitle();
    setWordStatusMessage(`Renamed to "${cleanName}".`);
    return;
  }

  if (action === "page-setup") {
    setWordStatusMessage("Page setup panel is coming next.");
    return;
  }

  if (action === "print-doc") {
    window.print();
    setWordStatusMessage("Print dialog opened.");
    return;
  }

  if (action === "paste") {
    if (!navigator.clipboard?.readText) {
      executeWordCommand("paste");
      return;
    }

    navigator.clipboard
      .readText()
      .then((clipboardText) => {
        if (!clipboardText) {
          setWordStatusMessage("Clipboard is empty.");
          return;
        }
        insertWordHtmlAtCursor(escapeHtml(clipboardText).replace(/\n/g, "<br>"));
        setWordStatusMessage("Text pasted.");
      })
      .catch(() => {
        executeWordCommand("paste");
      });
    return;
  }

  if (action === "style-normal") {
    executeWordCommand("formatBlock", "p");
    return;
  }

  if (action === "style-heading1") {
    executeWordCommand("formatBlock", "h1");
    return;
  }

  if (action === "style-heading2") {
    executeWordCommand("formatBlock", "h2");
    return;
  }

  if (action === "style-title") {
    executeWordCommand("formatBlock", "h1");
    executeWordCommand("justifyCenter");
    return;
  }

  if (action === "insert-date") {
    insertWordHtmlAtCursor(new Date().toLocaleDateString());
    setWordStatusMessage("Date inserted.");
    return;
  }

  if (action === "insert-time") {
    insertWordHtmlAtCursor(new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }));
    setWordStatusMessage("Time inserted.");
    return;
  }

  if (action === "insert-line") {
    insertWordHtmlAtCursor("<hr />");
    setWordStatusMessage("Horizontal line inserted.");
    return;
  }

  if (action === "insert-page-break") {
    insertWordHtmlAtCursor('<div style="page-break-after: always; border-top: 1px dashed #999; margin: 18px 0;"></div>');
    setWordStatusMessage("Page break inserted.");
    return;
  }

  if (action === "insert-table") {
    openWordTablePicker();
    setWordStatusMessage("Choose table size from the grid.");
    return;
  }

  if (action === "theme-clean") {
    els.wordCanvas?.classList.remove("is-theme-modern");
    setWordStatusMessage("Clean page theme applied.");
    return;
  }

  if (action === "theme-modern") {
    els.wordCanvas?.classList.add("is-theme-modern");
    setWordStatusMessage("Modern page theme applied.");
    return;
  }

  if (action === "align-left") {
    els.wordCanvas?.classList.add("is-page-left");
    setWordStatusMessage("Page aligned to left.");
    return;
  }

  if (action === "align-center") {
    els.wordCanvas?.classList.remove("is-page-left");
    setWordStatusMessage("Page centered.");
    return;
  }

  if (action === "insert-citation") {
    insertWordHtmlAtCursor("[Source: Author, 2026]");
    setWordStatusMessage("Citation inserted.");
    return;
  }

  if (action === "insert-signature") {
    insertWordHtmlAtCursor("<p>Best regards,</p><p><strong>Jay Patel</strong></p>");
    setWordStatusMessage("Signature block inserted.");
    return;
  }

  if (action === "word-count") {
    updateWordStats(true);
    return;
  }

  if (action === "find-replace") {
    const searchFor = window.prompt("Find what");
    if (!searchFor) {
      setWordStatusMessage("Find and replace canceled.");
      return;
    }
    const replaceWith = window.prompt("Replace with", "");
    const escapedFind = searchFor.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const finder = new RegExp(escapedFind, "gi");
    const before = els.wordEditor.innerHTML;
    const after = before.replace(finder, replaceWith || "");
    if (after === before) {
      setWordStatusMessage("No matches found.");
      return;
    }
    els.wordEditor.innerHTML = after;
    updateWordStats();
    setWordStatusMessage("Find and replace complete.");
    return;
  }

  if (action === "toggle-print-layout") {
    state.word.showPrintLayout = !state.word.showPrintLayout;
    updateWordViewClasses();
    setWordStatusMessage(state.word.showPrintLayout ? "Print layout enabled." : "Print layout hidden.");
    return;
  }

  if (action === "toggle-ruler") {
    state.word.showRuler = !state.word.showRuler;
    updateWordViewClasses();
    setWordStatusMessage(state.word.showRuler ? "Ruler shown." : "Ruler hidden.");
    return;
  }

  if (action === "toggle-nonprinting") {
    state.word.showNonPrinting = !state.word.showNonPrinting;
    updateWordViewClasses();
    setWordStatusMessage(state.word.showNonPrinting ? "Non-printing characters shown." : "Non-printing characters hidden.");
    return;
  }

  if (action === "toggle-fullscreen") {
    toggleWordFullscreen();
    return;
  }

  if (action === "insert-image") {
    const imageUrl = window.prompt("Image URL");
    if (!imageUrl) {
      setWordStatusMessage("Insert image canceled.");
      return;
    }
    insertWordHtmlAtCursor(`<img src="${escapeHtml(imageUrl)}" alt="" style="max-width:100%; height:auto;" />`);
    setWordStatusMessage("Image inserted.");
    return;
  }

  if (action === "format-align-indent") {
    executeWordCommand("justifyLeft");
    setWordStatusMessage("Alignment menu action applied.");
    return;
  }

  if (action === "format-line-space") {
    const lineSpacing = window.prompt("Line spacing (e.g. 1.15, 1.5, 2)", "1.5");
    if (!lineSpacing) {
      setWordStatusMessage("Line spacing unchanged.");
      return;
    }
    const parsed = Number(lineSpacing);
    if (!Number.isFinite(parsed) || parsed < 0.8 || parsed > 3.2) {
      setWordStatusMessage("Invalid line spacing value.", true);
      return;
    }
    els.wordEditor.style.lineHeight = String(parsed);
    setWordStatusMessage(`Line spacing set to ${parsed}.`);
    return;
  }

  if (action === "format-bullets") {
    executeWordCommand("insertUnorderedList");
    return;
  }

  if (action === "insert-page-number") {
    insertWordHtmlAtCursor("<p style=\"text-align:right; color:#666;\">Page 1</p>");
    setWordStatusMessage("Page number inserted.");
    return;
  }

  if (action === "toggle-page-orientation") {
    state.word.landscape = !state.word.landscape;
    updateWordViewClasses();
    setWordStatusMessage(state.word.landscape ? "Landscape orientation." : "Portrait orientation.");
    return;
  }

  if (action === "review-edits") {
    setWordStatusMessage("Review mode mockup coming next.");
    return;
  }

  if (action === "translate-document") {
    setWordStatusMessage("Translate tool placeholder: hook this to API later.");
    return;
  }

  if (action === "voice-typing") {
    setWordStatusMessage("Voice typing placeholder.");
    return;
  }

  if (action === "open-preferences") {
    setWordStatusMessage("Preferences menu placeholder.");
    return;
  }

  if (action === "extensions-market") {
    setWordStatusMessage("Extensions marketplace placeholder.");
    return;
  }

  if (action === "extensions-manage") {
    setWordStatusMessage("Manage extensions placeholder.");
    return;
  }

  if (action === "extensions-script") {
    setWordStatusMessage("Apps Script placeholder.");
    return;
  }

  if (action === "help-search") {
    setWordStatusMessage("Tip: click a top menu to browse available actions.");
    return;
  }

  if (action === "help-docs") {
    setWordStatusMessage("Docs Help placeholder.");
    return;
  }

  if (action === "help-training") {
    setWordStatusMessage("Training center placeholder.");
    return;
  }

  if (action === "help-updates") {
    setWordStatusMessage("No updates available.");
    return;
  }

  if (action === "help-privacy") {
    setWordStatusMessage("Privacy policy placeholder.");
    return;
  }

  if (action === "help-terms") {
    setWordStatusMessage("Terms of service placeholder.");
    return;
  }

  if (action === "help-shortcuts") {
    setWordStatusMessage("Shortcuts: Ctrl+S save, Ctrl+P print, Ctrl+H find/replace.");
    return;
  }

  if (action === "toggle-spellcheck") {
    state.word.spellcheck = !state.word.spellcheck;
    els.wordEditor.spellcheck = state.word.spellcheck;
    setWordStatusMessage(state.word.spellcheck ? "Spell check enabled." : "Spell check disabled.");
    return;
  }

  if (action === "zoom-out") {
    state.word.zoom = clamp(Number((state.word.zoom - 0.1).toFixed(2)), 0.7, 1.6);
    updateWordZoom();
    return;
  }

  if (action === "zoom-in") {
    state.word.zoom = clamp(Number((state.word.zoom + 0.1).toFixed(2)), 0.7, 1.6);
    updateWordZoom();
    return;
  }

  if (action === "zoom-reset") {
    state.word.zoom = 1;
    updateWordZoom();
    return;
  }

  if (action === "proofread") {
    setWordStatusMessage("Proofread hint: keep sentences under 24 words for stronger readability.");
  }
}

function toggleWordFullscreen() {
  const isWordFullscreen = document.fullscreenElement?.id === "detailWindow";
  toggleWindowFullscreenById("detailWindow");
  setWordStatusMessage(isWordFullscreen ? "Exited full screen." : "Entering full screen.");
}

function toggleWindowFullscreenById(windowId) {
  const windowEl = document.getElementById(windowId);
  if (!windowEl) {
    return;
  }

  const isThisWindowFullscreen = document.fullscreenElement === windowEl;
  if (isThisWindowFullscreen) {
    document.exitFullscreen?.();
    return;
  }

  if (document.fullscreenElement) {
    const exitPromise = document.exitFullscreen?.();
    if (exitPromise && typeof exitPromise.finally === "function") {
      exitPromise.finally(() => {
        windowEl.requestFullscreen?.();
      });
    } else {
      windowEl.requestFullscreen?.();
    }
    return;
  }

  windowEl.requestFullscreen?.();
}

function insertWordTable(rows, cols) {
  const safeRows = clamp(Number(rows) || 1, 1, state.word.tablePicker.max || 15);
  const safeCols = clamp(Number(cols) || 1, 1, state.word.tablePicker.max || 15);

  const body = Array.from({ length: safeRows }, (_, rowIndex) => {
    const cells = Array.from({ length: safeCols }, (_, colIndex) => {
      return `<td style="border:1px solid #a2a7b3; padding:6px; min-width:48px;">&nbsp;</td>`;
    }).join("");
    return `<tr>${cells}</tr>`;
  }).join("");

  insertWordHtmlAtCursor(
    `<table style="width:100%; border-collapse:collapse; margin:10px 0; table-layout:fixed;">${body}</table><p><br></p>`
  );
  setWordStatusMessage(`Inserted table ${safeCols} x ${safeRows}.`);
}

function insertWordHtmlAtCursor(markup) {
  focusWordEditor();
  document.execCommand("insertHTML", false, markup);
  updateWordStats();
}

async function loadWordFile(file) {
  try {
    const content = await file.text();
    const extension = file.name.split(".").pop()?.toLowerCase() || "";
    if (extension === "html" || extension === "htm") {
      els.wordEditor.innerHTML = content;
    } else {
      els.wordEditor.textContent = content;
    }

    state.word.documentName = file.name.replace(/\.[^.]+$/, "") || "Document1";
    applyWordDocumentTitle();
    updateWordStats();
    setWordStatusMessage(`Loaded ${file.name}`);
    focusWordEditor();
    resetWordTypingMode();
  } catch (error) {
    setWordStatusMessage("Unable to open this file.", true);
  }
}

function downloadWordDocument(fileName, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function updateWordStats(isExplicitRequest = false) {
  if (!els.wordEditor || !els.wordStatusStats) {
    return;
  }

  const text = (els.wordEditor.textContent || "").replace(/\u00a0/g, " ").trim();
  const words = text ? text.split(/\s+/).length : 0;
  const characters = text ? text.length : 0;
  els.wordStatusStats.textContent = `${words} word${words === 1 ? "" : "s"} | ${characters} characters`;

  if (isExplicitRequest) {
    setWordStatusMessage(`Word count: ${words}`);
  }
}

function updateWordZoom() {
  if (!els.wordCanvas) {
    return;
  }
  els.wordCanvas.style.setProperty("--word-zoom", String(state.word.zoom));
  if (els.wordToolbarZoom) {
    const zoomValue = String(Number(state.word.zoom.toFixed(2)));
    const hasMatchingOption = Array.from(els.wordToolbarZoom.options).some((option) => option.value === zoomValue);
    if (hasMatchingOption) {
      els.wordToolbarZoom.value = zoomValue;
    }
  }
  if (els.wordStatusZoom) {
    els.wordStatusZoom.textContent = `${Math.round(state.word.zoom * 100)}%`;
  }
}

function updateWordViewClasses() {
  if (!els.wordCanvas || !els.wordEditor) {
    return;
  }

  els.wordCanvas.classList.toggle("is-ruler-hidden", !state.word.showRuler);
  els.wordCanvas.classList.toggle("is-print-layout-off", !state.word.showPrintLayout);
  els.wordEditor.classList.toggle("is-show-nonprinting", state.word.showNonPrinting);
  els.wordEditor.classList.toggle("is-landscape", state.word.landscape);
  syncWordMenuCheckStates();
}

function syncWordMenuCheckStates() {
  setWordMenuCheckState("toggle-print-layout", state.word.showPrintLayout);
  setWordMenuCheckState("toggle-ruler", state.word.showRuler);
  setWordMenuCheckState("toggle-nonprinting", state.word.showNonPrinting);
}

function setWordMenuCheckState(action, isChecked) {
  const item = document.querySelector(`.word-menu-item[data-word-action="${action}"]`);
  if (!item) {
    return;
  }
  const glyph = item.querySelector(".word-menu-glyph");
  if (!glyph) {
    return;
  }
  glyph.innerHTML = isChecked ? "&#10003;" : "";
}

function normalizeWordFileName(name) {
  return name.replace(/[<>:"/\\|?*\x00-\x1F]/g, "").trim() || "Untitled-document";
}

function applyWordDocumentTitle() {
  if (!els.wordDocTitle) {
    return;
  }
  els.wordDocTitle.textContent = state.word.documentName || "Untitled document";
}

function setWordStatusMessage(message, isError = false) {
  if (!els.wordStatusMessage) {
    return;
  }

  els.wordStatusMessage.textContent = message;
  els.wordStatusMessage.classList.toggle("is-error", isError);

  if (wordStatusTimer) {
    window.clearTimeout(wordStatusTimer);
  }

  if (message === "Ready") {
    return;
  }

  wordStatusTimer = window.setTimeout(() => {
    if (!els.wordStatusMessage) {
      return;
    }
    els.wordStatusMessage.textContent = "Ready";
    els.wordStatusMessage.classList.remove("is-error");
  }, 2100);
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

function rotateBonusMessage() {
  if (!els.bonusMessageText || !BONUS_MESSAGES.length) {
    return;
  }

  const index = state.exploration.revealedCount % BONUS_MESSAGES.length;
  els.bonusMessageText.textContent = BONUS_MESSAGES[index];
  state.exploration.revealedCount += 1;
  saveExplorationState();

  if (els.bonusMessageCard) {
    els.bonusMessageCard.classList.remove("is-pulse");
    void els.bonusMessageCard.offsetWidth;
    els.bonusMessageCard.classList.add("is-pulse");
  }
}

function bindBonusInteractions() {
  if (els.bonusMessageText && state.exploration.revealedCount > 0 && BONUS_MESSAGES.length) {
    const index = (state.exploration.revealedCount - 1 + BONUS_MESSAGES.length) % BONUS_MESSAGES.length;
    els.bonusMessageText.textContent = BONUS_MESSAGES[index];
  }

  els.bonusRevealButton?.addEventListener("click", () => {
    rotateBonusMessage();
  });
}

function startClocks() {
  const renderClock = () => {
    const now = new Date();
    const timeText = now.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit"
    });
    const dateText = now.toLocaleDateString([], {
      month: "numeric",
      day: "numeric",
      year: "2-digit"
    });

    if (els.taskbarClock) {
      els.taskbarClock.innerHTML = `
        <span class="taskbar-clock-time">${timeText}</span>
        <span class="taskbar-clock-date">${dateText}</span>
      `;
    }

    if (els.lockScreenTime) {
      els.lockScreenTime.textContent = timeText;
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

function openWindow(windowId, options = {}) {
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

  if (windowId === "myPcWindow") {
    renderExplorer();
  }

  if (windowId === "detailWindow") {
    window.setTimeout(() => {
      focusWordEditor();
    }, 70);
  }

  if (wasHidden) {
    windowEl.classList.remove("is-opening");
    window.requestAnimationFrame(() => {
      windowEl.classList.add("is-opening");
    });
    window.setTimeout(() => {
      windowEl.classList.remove("is-opening");
    }, 320);
  }

  bringWindowToFront(windowEl);
  markWindowVisited(windowId);
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
  updateWindowDepthState();
  updateTaskbarWindows();
  updateDesktopShortcutState();
}

function updateWindowDepthState() {
  const openWindows = getOpenWindows();
  openWindows.forEach((windowEl) => {
    const isActive = windowEl.id === state.activeWindowId;
    windowEl.classList.toggle("is-active-window", isActive);
    windowEl.classList.toggle("is-inactive-window", !isActive);
  });

  state.windows.forEach((windowId) => {
    const windowEl = document.getElementById(windowId);
    if (!windowEl || !windowEl.hidden) {
      return;
    }
    windowEl.classList.remove("is-active-window", "is-inactive-window");
  });
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
        <button class="taskbar-window${isActive ? " is-active" : ""}" type="button" aria-pressed="${String(
          isActive
        )}" data-focus-window="${windowEl.id}">
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

      openWindow(targetId, { trigger: button });
    });
  });
}

function updateDesktopShortcutState() {
  syncBonusVisibility();
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
    "Theme: Windows desktop-inspired portfolio OS"
  ];

  els.profileQuickFacts.innerHTML = quickFacts.map((fact) => `<li>${escapeHtml(fact)}</li>`).join("");

  els.githubLink.href = profile.github || "#";
  els.contactGithubLink.href = profile.github || "#";
  els.githubSocialLink.href = profile.github || "#";
  els.startGithubLink.href = profile.github || "#";

  els.linkedinLink.href = profile.linkedin || "#";
  els.linkedinSocialLink.href = profile.linkedin || "#";
  els.startLinkedinLink.href = profile.linkedin || "#";
  if (els.contactSideLinkedinLink) {
    els.contactSideLinkedinLink.href = profile.linkedin || "#";
  }

  els.resumeLink.href = profile.resumeUrl || "#";

  els.emailLink.href = mailtoHref;
  els.emailLink.textContent = profile.email;
  els.emailSocialLink.href = mailtoHref;
  els.startEmailLink.href = mailtoHref;
  if (els.aboutResumeLink) {
    els.aboutResumeLink.href = profile.resumeUrl || "#";
  }
  if (els.aboutLinkedinLink) {
    els.aboutLinkedinLink.href = profile.linkedin || "#";
  }
  if (els.aboutGithubLink) {
    els.aboutGithubLink.href = profile.github || "#";
  }
  if (els.contactSideGithubLink) {
    els.contactSideGithubLink.href = profile.github || "#";
  }
  if (els.copyEmailButton) {
    els.copyEmailButton.dataset.email = profile.email;
  }
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
            <button class="small-btn list-cell-button" type="button" data-project-id="${escapeHtml(project.id)}">Focus</button>
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
      <button class="small-btn" type="button" data-project-id="${escapeHtml(project.id)}">Focus Project</button>
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
  const featured = codingProjects.filter((project) => project.featured);

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
              <span class="quick-row-main">
                <span class="quick-row-icon" aria-hidden="true">&#128194;</span>
                <span class="quick-row-title">${escapeHtml(project.title)}</span>
              </span>
              <span class="quick-row-year">${escapeHtml(String(project.year || ""))}</span>
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
        <button class="small-btn" type="button" data-project-id="${escapeHtml(project.id)}">Focus project</button>
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
        openProjectInPortfolio(project, true);
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

  state.selectedCodingProjectId = state.data.codingProjects[0]?.id || state.data.solidworksProjects[0]?.id || null;
  renderCodingProjects();
}

function openProjectInPortfolio(project, shouldOpenWindow = true) {
  const isSolidworksProject = Boolean(state.data?.solidworksProjects?.some((entry) => entry.id === project.id));
  if (isSolidworksProject) {
    if (shouldOpenWindow) {
      openWindow("solidworksWindow");
    }
    return;
  }

  state.selectedCodingProjectId = project.id;
  state.codingWorkspace = "projects";
  updateCodingWorkspace();
  renderCodingProjects();
  if (shouldOpenWindow) {
    openWindow("codingWindow");
  }
}

function renderProjectDetails(project) {
  // Deprecated: project detail rendering was replaced by the dedicated Word editor app.
  if (!project) {
    return;
  }
  return;

  let bodyMarkup = "";
  const subtitle = [project.category, project.year, project.status].filter(Boolean).join(" • ");
  const techChips = [...(project.tools || []), ...(project.technologies || [])]
    .filter(Boolean)
    .filter((value, index, array) => array.indexOf(value) === index)
    .slice(0, 8)
    .map((item) => `<span class="tag">${escapeHtml(item)}</span>`)
    .join("");

  if (state.activeDetailTab === "impact") {
    bodyMarkup = `
      <section class="doc-section">
        <h4 class="doc-section-title">Problem</h4>
        <p class="doc-body">${escapeHtml(project.problem || "N/A")}</p>
      </section>
      <section class="doc-section">
        <h4 class="doc-section-title">Solution</h4>
        <p class="doc-body">${escapeHtml(project.solution || "N/A")}</p>
      </section>
      <section class="doc-section">
        <h4 class="doc-section-title">Role</h4>
        <p class="doc-body">${escapeHtml(project.role || "N/A")}</p>
      </section>
      <section class="doc-section">
        <div class="stat-strip">
          <span class="stat-pill">Status: ${escapeHtml(project.status || "N/A")}</span>
          <span class="stat-pill">Year: ${escapeHtml(String(project.year || ""))}</span>
        </div>
      </section>
    `;
  } else if (state.activeDetailTab === "stack") {
    bodyMarkup = `
      <section class="doc-section">
        <h4 class="doc-section-title">Tech Stack</h4>
        <div class="tag-row">${techChips || '<span class="muted">No stack details available.</span>'}</div>
      </section>
      <section class="doc-section">
        <h4 class="doc-section-title">Tags</h4>
        <div class="tag-row">${(project.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("") || '<span class="muted">No tags available.</span>'}</div>
      </section>
      <section class="doc-section">
        <h4 class="doc-section-title">Project Links</h4>
        <div class="project-card-actions">${projectLinkButtons(project)}</div>
      </section>
    `;
  } else {
    bodyMarkup = `
      <section class="doc-section">
        <h4 class="doc-section-title">Project Summary</h4>
        <p class="doc-body">${escapeHtml(project.fullDescription || project.shortDescription)}</p>
      </section>
      <section class="doc-section">
        <h4 class="doc-section-title">Impact</h4>
        <p class="doc-body">${escapeHtml(project.aiSummary || project.shortDescription || "N/A")}</p>
      </section>
      <section class="doc-section">
        <h4 class="doc-section-title">Core Stack</h4>
        <div class="tag-row">${techChips || '<span class="muted">No stack details available.</span>'}</div>
      </section>
      <section class="doc-section">
        <div class="project-card-actions">${projectLinkButtons(project)}</div>
      </section>
    `;
  }

  els.detailContent.innerHTML = `
    <header class="doc-header">
      <p class="doc-kicker">Project Case Study</p>
      <h3 class="detail-window-title">${escapeHtml(project.title)}</h3>
      <p class="doc-subtitle">${escapeHtml(subtitle)}</p>
    </header>
    ${bodyMarkup}
  `;

  if (els.detailDocMeta) {
    els.detailDocMeta.textContent = `${project.title} • ${project.year || "Current"}`;
  }
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
  if (els.aboutModePanel) {
    els.aboutModePanel.innerHTML = message;
  }
  els.codingProjectsGrid.innerHTML = message;
  els.codingListView.innerHTML = message;
  els.codingPreviewPanel.innerHTML = message;
  els.solidworksProjectsGrid.innerHTML = message;
  els.solidworksTableBody.innerHTML = "<tr><td colspan=\"4\">Data unavailable.</td></tr>";
  els.solidworksSummary.innerHTML = "";
  if (els.wordEditor) {
    els.wordEditor.innerHTML = "<p>Project data is unavailable right now. The editor is still functional.</p>";
  }
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
