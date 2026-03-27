const STORAGE_KEYS = {
  transactions: "pft_transactions_v1",
  budgets: "pft_budgets_v1"
};

const state = {
  transactions: [],
  budgets: {},
  selectedMonth: "",
  selectedCategory: "all"
};

const els = {
  transactionForm: document.getElementById("transactionForm"),
  budgetForm: document.getElementById("budgetForm"),
  txType: document.getElementById("txType"),
  txAmount: document.getElementById("txAmount"),
  txCategory: document.getElementById("txCategory"),
  txDate: document.getElementById("txDate"),
  txNote: document.getElementById("txNote"),
  budgetCategory: document.getElementById("budgetCategory"),
  budgetAmount: document.getElementById("budgetAmount"),
  monthFilter: document.getElementById("monthFilter"),
  categoryFilter: document.getElementById("categoryFilter"),
  metricIncome: document.getElementById("metricIncome"),
  metricExpenses: document.getElementById("metricExpenses"),
  metricNet: document.getElementById("metricNet"),
  metricSavingsRate: document.getElementById("metricSavingsRate"),
  budgetList: document.getElementById("budgetList"),
  txTableBody: document.getElementById("txTableBody"),
  cashflowChart: document.getElementById("cashflowChart"),
  trendLabel: document.getElementById("trendLabel"),
  statusText: document.getElementById("statusText"),
  loadSampleButton: document.getElementById("loadSampleButton"),
  exportJsonButton: document.getElementById("exportJsonButton"),
  exportCsvButton: document.getElementById("exportCsvButton"),
  clearDataButton: document.getElementById("clearDataButton")
};

init();

function init() {
  const now = new Date();
  state.selectedMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

  loadState();
  bindEvents();

  els.monthFilter.value = state.selectedMonth;
  els.txDate.value = `${state.selectedMonth}-15`;
  renderCategoryFilter();
  renderAll();
}

function loadState() {
  try {
    const txRaw = localStorage.getItem(STORAGE_KEYS.transactions);
    const budgetsRaw = localStorage.getItem(STORAGE_KEYS.budgets);

    state.transactions = txRaw ? JSON.parse(txRaw) : [];
    state.budgets = budgetsRaw ? JSON.parse(budgetsRaw) : {};
  } catch (error) {
    state.transactions = [];
    state.budgets = {};
    setStatus("Could not load saved data, using empty state.", true);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEYS.transactions, JSON.stringify(state.transactions));
  localStorage.setItem(STORAGE_KEYS.budgets, JSON.stringify(state.budgets));
}

function bindEvents() {
  els.transactionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addTransaction();
  });

  els.budgetForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveBudget();
  });

  els.monthFilter.addEventListener("change", () => {
    state.selectedMonth = els.monthFilter.value || state.selectedMonth;
    renderAll();
  });

  els.categoryFilter.addEventListener("change", () => {
    state.selectedCategory = els.categoryFilter.value;
    renderTable();
  });

  els.loadSampleButton.addEventListener("click", () => {
    loadSampleData();
    renderCategoryFilter();
    renderAll();
    setStatus("Sample data loaded.");
  });

  els.exportJsonButton.addEventListener("click", () => {
    downloadFile("finance-data.json", JSON.stringify({ transactions: state.transactions, budgets: state.budgets }, null, 2));
    setStatus("JSON export downloaded.");
  });

  els.exportCsvButton.addEventListener("click", () => {
    const header = "id,date,type,category,amount,note";
    const rows = state.transactions.map((tx) =>
      [tx.id, tx.date, tx.type, tx.category, tx.amount.toFixed(2), `"${(tx.note || "").replace(/"/g, '""')}"`].join(",")
    );
    downloadFile("transactions.csv", [header, ...rows].join("\n"));
    setStatus("CSV export downloaded.");
  });

  els.clearDataButton.addEventListener("click", () => {
    const shouldClear = window.confirm("Clear all finance transactions and budgets?");
    if (!shouldClear) {
      return;
    }

    state.transactions = [];
    state.budgets = {};
    saveState();
    renderCategoryFilter();
    renderAll();
    setStatus("All tracker data cleared.");
  });

  els.txType.addEventListener("change", () => {
    if (els.txType.value === "income") {
      if (["Food", "Housing", "Transport", "Entertainment", "Health", "Shopping", "Education", "Utilities"].includes(els.txCategory.value)) {
        els.txCategory.value = "Salary";
      }
      return;
    }

    if (["Salary", "Freelance"].includes(els.txCategory.value)) {
      els.txCategory.value = "Food";
    }
  });
}

function addTransaction() {
  const type = els.txType.value;
  const amount = Number(els.txAmount.value);
  const category = els.txCategory.value;
  const date = els.txDate.value;
  const note = els.txNote.value.trim();

  if (!date || !Number.isFinite(amount) || amount <= 0) {
    setStatus("Please provide a valid amount and date.", true);
    return;
  }

  state.transactions.push({
    id: crypto.randomUUID(),
    type,
    amount,
    category,
    date,
    note
  });

  saveState();
  renderCategoryFilter();
  renderAll();
  els.transactionForm.reset();
  els.txType.value = "income";
  els.txCategory.value = "Salary";
  els.txDate.value = date;
  setStatus("Transaction added.");
}

function saveBudget() {
  const category = els.budgetCategory.value;
  const amount = Number(els.budgetAmount.value);

  if (!Number.isFinite(amount) || amount < 0) {
    setStatus("Please enter a valid budget amount.", true);
    return;
  }

  state.budgets[category] = amount;
  saveState();
  renderBudget();
  els.budgetForm.reset();
  setStatus(`Saved ${category} budget.`);
}

function getMonthTransactions() {
  return state.transactions.filter((tx) => tx.date.startsWith(state.selectedMonth));
}

function getVisibleTransactions() {
  const monthTx = getMonthTransactions();
  if (state.selectedCategory === "all") {
    return monthTx;
  }
  return monthTx.filter((tx) => tx.category === state.selectedCategory);
}

function renderAll() {
  renderSummary();
  renderBudget();
  renderTable();
  renderChart();
}

function renderSummary() {
  const tx = getMonthTransactions();
  const income = tx.filter((entry) => entry.type === "income").reduce((sum, entry) => sum + entry.amount, 0);
  const expenses = tx.filter((entry) => entry.type === "expense").reduce((sum, entry) => sum + entry.amount, 0);
  const net = income - expenses;
  const savingsRate = income > 0 ? (net / income) * 100 : 0;

  els.metricIncome.textContent = formatCurrency(income);
  els.metricExpenses.textContent = formatCurrency(expenses);
  els.metricNet.textContent = formatCurrency(net);
  els.metricNet.className = net >= 0 ? "text-positive" : "text-negative";
  els.metricSavingsRate.textContent = `${Math.round(savingsRate)}%`;
  els.metricSavingsRate.className = savingsRate >= 0 ? "text-positive" : "text-negative";
}

function renderBudget() {
  const monthExpenses = getMonthTransactions().filter((tx) => tx.type === "expense");
  const grouped = groupBy(monthExpenses, (tx) => tx.category);
  const categories = Object.keys({ ...state.budgets, ...grouped }).sort((a, b) => a.localeCompare(b));

  if (!categories.length) {
    els.budgetList.innerHTML = '<p class="empty-text">Add a budget or expense transaction to see budget health.</p>';
    return;
  }

  els.budgetList.innerHTML = categories
    .map((category) => {
      const spent = (grouped[category] || []).reduce((sum, tx) => sum + tx.amount, 0);
      const budget = Number(state.budgets[category] || 0);
      const ratio = budget > 0 ? Math.round((spent / budget) * 100) : 0;
      const fillWidth = Math.min(100, Math.max(0, ratio));
      const fillClass = ratio > 100 ? "budget-fill over-limit" : "budget-fill";

      return `
        <article class="budget-item">
          <div class="budget-row">
            <strong>${escapeHtml(category)}</strong>
            <span>${formatCurrency(spent)} / ${budget > 0 ? formatCurrency(budget) : "No budget"}</span>
          </div>
          <div class="budget-track">
            <div class="${fillClass}" style="width: ${fillWidth}%"></div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderTable() {
  const tx = getVisibleTransactions().sort((a, b) => b.date.localeCompare(a.date));

  if (!tx.length) {
    els.txTableBody.innerHTML = '<tr><td colspan="6" class="empty-text">No transactions for this filter.</td></tr>';
    return;
  }

  els.txTableBody.innerHTML = tx
    .map(
      (entry) => `
      <tr>
        <td>${escapeHtml(entry.date)}</td>
        <td><span class="pill ${entry.type === "income" ? "pill-income" : "pill-expense"}">${escapeHtml(entry.type)}</span></td>
        <td>${escapeHtml(entry.category)}</td>
        <td class="${entry.type === "income" ? "text-positive" : "text-negative"}">${entry.type === "income" ? "+" : "-"}${formatCurrency(entry.amount)}</td>
        <td>${escapeHtml(entry.note || "-")}</td>
        <td><button type="button" data-remove-id="${escapeHtml(entry.id)}">Delete</button></td>
      </tr>
    `
    )
    .join("");

  els.txTableBody.querySelectorAll("[data-remove-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-remove-id");
      state.transactions = state.transactions.filter((entry) => entry.id !== id);
      saveState();
      renderAll();
      setStatus("Transaction removed.");
    });
  });
}

function renderChart() {
  const tx = getMonthTransactions().sort((a, b) => a.date.localeCompare(b.date));
  if (!tx.length) {
    els.cashflowChart.innerHTML = "";
    els.trendLabel.textContent = "Add transactions to render your trend chart.";
    return;
  }

  const byDay = new Map();
  tx.forEach((entry) => {
    const day = Number(entry.date.slice(8, 10));
    const signed = entry.type === "income" ? entry.amount : -entry.amount;
    byDay.set(day, (byDay.get(day) || 0) + signed);
  });

  const points = [];
  let running = 0;
  const days = Array.from(byDay.keys()).sort((a, b) => a - b);
  days.forEach((day) => {
    running += byDay.get(day) || 0;
    points.push({ day, value: running });
  });

  const min = Math.min(...points.map((point) => point.value), 0);
  const max = Math.max(...points.map((point) => point.value), 0);
  const range = Math.max(1, max - min);

  const chartWidth = 720;
  const chartHeight = 180;
  const padX = 18;
  const padY = 16;
  const usableWidth = chartWidth - padX * 2;
  const usableHeight = chartHeight - padY * 2;

  const polylinePoints = points
    .map((point, index) => {
      const x = padX + (index / Math.max(1, points.length - 1)) * usableWidth;
      const y = padY + (1 - (point.value - min) / range) * usableHeight;
      return `${x},${y}`;
    })
    .join(" ");

  const lastValue = points.at(-1)?.value || 0;
  els.trendLabel.textContent = `Month-to-date net: ${lastValue >= 0 ? "+" : ""}${formatCurrency(lastValue)}`;

  els.cashflowChart.innerHTML = `
    <defs>
      <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#2f86d4"></stop>
        <stop offset="100%" stop-color="#31c6aa"></stop>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="${chartWidth}" height="${chartHeight}" fill="#ffffff"></rect>
    <line x1="${padX}" y1="${padY}" x2="${padX}" y2="${chartHeight - padY}" stroke="#d7e2f2" />
    <line x1="${padX}" y1="${chartHeight - padY}" x2="${chartWidth - padX}" y2="${chartHeight - padY}" stroke="#d7e2f2" />
    <polyline points="${polylinePoints}" fill="none" stroke="url(#lineGradient)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></polyline>
    ${points
      .map((point, index) => {
        const x = padX + (index / Math.max(1, points.length - 1)) * usableWidth;
        const y = padY + (1 - (point.value - min) / range) * usableHeight;
        return `<circle cx="${x}" cy="${y}" r="3.2" fill="#0e5ea5"></circle>`;
      })
      .join("")}
  `;
}

function renderCategoryFilter() {
  const categories = [...new Set(state.transactions.map((tx) => tx.category))].sort((a, b) => a.localeCompare(b));
  const previousValue = state.selectedCategory;

  els.categoryFilter.innerHTML = '<option value="all">All categories</option>';
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    els.categoryFilter.appendChild(option);
  });

  if (previousValue && categories.includes(previousValue)) {
    state.selectedCategory = previousValue;
    els.categoryFilter.value = previousValue;
  } else {
    state.selectedCategory = "all";
    els.categoryFilter.value = "all";
  }
}

function loadSampleData() {
  const selectedMonth = state.selectedMonth || `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}`;
  const sample = [
    makeSample("income", 4200, "Salary", `${selectedMonth}-01`, "Monthly salary"),
    makeSample("expense", 1200, "Housing", `${selectedMonth}-02`, "Rent"),
    makeSample("expense", 160, "Utilities", `${selectedMonth}-04`, "Hydro + internet"),
    makeSample("expense", 94, "Transport", `${selectedMonth}-06`, "Transit pass"),
    makeSample("expense", 68, "Food", `${selectedMonth}-07`, "Groceries"),
    makeSample("income", 460, "Freelance", `${selectedMonth}-09`, "Website work"),
    makeSample("expense", 42, "Entertainment", `${selectedMonth}-10`, "Streaming + movie"),
    makeSample("expense", 130, "Shopping", `${selectedMonth}-12`, "Clothes"),
    makeSample("expense", 58, "Health", `${selectedMonth}-14`, "Supplements"),
    makeSample("expense", 88, "Education", `${selectedMonth}-16`, "Course subscription"),
    makeSample("expense", 72, "Food", `${selectedMonth}-18`, "Dining out"),
    makeSample("expense", 45, "Transport", `${selectedMonth}-20`, "Ride share"),
    makeSample("income", 240, "Freelance", `${selectedMonth}-23`, "Automation script")
  ];

  state.transactions = sample;
  state.budgets = {
    Housing: 1300,
    Utilities: 200,
    Food: 400,
    Transport: 180,
    Entertainment: 120,
    Health: 100,
    Shopping: 220,
    Education: 120
  };

  saveState();
}

function makeSample(type, amount, category, date, note) {
  return {
    id: crypto.randomUUID(),
    type,
    amount,
    category,
    date,
    note
  };
}

function downloadFile(name, content) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  URL.revokeObjectURL(url);
}

function setStatus(message, isError = false) {
  els.statusText.textContent = message;
  els.statusText.className = `status-text${isError ? " text-negative" : ""}`;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value || 0);
}

function groupBy(items, keyFn) {
  return items.reduce((acc, item) => {
    const key = keyFn(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return map[char];
  });
}
