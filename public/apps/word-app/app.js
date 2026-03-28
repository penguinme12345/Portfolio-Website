const STORAGE_KEY = "word_app_document_v1";

const els = {
  editor: document.getElementById("editor"),
  statusMessage: document.getElementById("statusMessage"),
  stats: document.getElementById("stats"),
  openDocInput: document.getElementById("openDocInput"),
  openDocButton: document.getElementById("openDocButton"),
  newDocButton: document.getElementById("newDocButton"),
  saveTxtButton: document.getElementById("saveTxtButton"),
  saveHtmlButton: document.getElementById("saveHtmlButton")
};

initialize();

function initialize() {
  hydrateDocument();
  bindToolbarFormatting();
  bindFileActions();
  bindEditorEvents();
  updateStats();
}

function hydrateDocument() {
  const saved = localStorage.getItem(STORAGE_KEY);
  els.editor.innerHTML = saved || "<p>Start typing your document here...</p>";
}

function bindToolbarFormatting() {
  const formatButtons = document.querySelectorAll("button[data-cmd]");

  formatButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const command = button.getAttribute("data-cmd");
      if (!command) {
        return;
      }

      els.editor.focus();
      document.execCommand(command, false);
      setStatus(`Applied ${button.textContent} formatting`);
      updateStats();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (!event.ctrlKey && !event.metaKey) {
      return;
    }

    const key = event.key.toLowerCase();
    if (key === "b" || key === "i" || key === "u") {
      event.preventDefault();
      const map = { b: "bold", i: "italic", u: "underline" };
      document.execCommand(map[key], false);
      setStatus(`Applied ${map[key]} formatting`);
      updateStats();
    }
  });
}

function bindFileActions() {
  els.newDocButton.addEventListener("click", () => {
    if (!confirm("Clear this document and start a new one?")) {
      return;
    }

    els.editor.innerHTML = "<p><br></p>";
    persistDocument();
    updateStats();
    setStatus("Created new document");
  });

  els.openDocButton.addEventListener("click", () => {
    els.openDocInput.click();
  });

  els.openDocInput.addEventListener("change", async (event) => {
    const input = event.target;
    const file = input.files && input.files[0];
    if (!file) {
      return;
    }

    const text = await file.text();
    const isHtml = file.name.toLowerCase().endsWith(".html") || file.name.toLowerCase().endsWith(".htm");
    els.editor.innerHTML = isHtml ? text : wrapPlainText(text);
    persistDocument();
    updateStats();
    setStatus(`Opened ${file.name}`);
    input.value = "";
  });

  els.saveTxtButton.addEventListener("click", () => {
    const textContent = getEditorText();
    downloadFile("document.txt", textContent, "text/plain;charset=utf-8");
    setStatus("Saved as TXT");
  });

  els.saveHtmlButton.addEventListener("click", () => {
    const html = els.editor.innerHTML;
    downloadFile("document.html", html, "text/html;charset=utf-8");
    setStatus("Saved as HTML");
  });
}

function bindEditorEvents() {
  els.editor.addEventListener("input", () => {
    persistDocument();
    updateStats();
  });
}

function wrapPlainText(text) {
  return text
    .split(/\r?\n/)
    .map((line) => `<p>${escapeHtml(line) || "<br>"}</p>`)
    .join("");
}

function persistDocument() {
  localStorage.setItem(STORAGE_KEY, els.editor.innerHTML);
}

function getEditorText() {
  return els.editor.textContent ? els.editor.textContent.trim() : "";
}

function updateStats() {
  const text = getEditorText();
  const words = text ? text.split(/\s+/).length : 0;
  const chars = text.length;
  els.stats.textContent = `Words: ${words} | Characters: ${chars}`;
}

function setStatus(message) {
  els.statusMessage.textContent = message;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function downloadFile(name, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}
