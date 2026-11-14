const STORAGE_KEYS = {
  TASKS: 'nasira_unimas_tasks_2026_v1',
  REMINDERS: 'nasira_unimas_reminders_2026_v1',
  NOTES: 'nasira_unimas_notes_2026_v1'
};

const COURSE_LABELS = {
  TMN2223: 'TMN2223 - OOSD',
  TMF3113: 'TMF3113 - PM',
  TMF3963: 'TMF3963 - E&P',
  TMN3093: 'TMN3093 - CSAM',
  TMN3223: 'TMN3223 - WEBAPP',
  TMN3233: 'TMN3233 - AI',
  MANDARIN: 'Mandarin Level 1'
};

// Pre-loaded 2026 UNIMAS Assignment, Project & Presentation Schedule
const DEFAULT_TASKS = [
  {
    id: 'tmf3963-a1',
    course: 'TMF3963',
    type: 'Assignment',
    title: 'ASSIGNMENT 1 (Ethics & Professionalism)',
    date: '2026-11-18',
    time: '17:00',
    priority: 'High',
    desc: 'Due Wednesday, 18 November 2026 (Before 5:00 PM).',
    completed: false
  },
  {
    id: 'tmn3233-a1',
    course: 'TMN3233',
    type: 'Assignment',
    title: 'ASSIGNMENT (Artificial Intelligence)',
    date: '2026-11-20',
    time: '17:00',
    priority: 'High',
    desc: 'Due Friday, 20 November 2026 (5:00 PM).',
    completed: false
  },
  {
    id: 'tmf3113-a1',
    course: 'TMF3113',
    type: 'Assignment',
    title: 'ASSIGNMENT (Project Management)',
    date: '2026-11-22',
    time: '23:59',
    priority: 'High',
    desc: 'Due Sunday, 22 November 2026 (11:59 PM).',
    completed: false
  },
  {
    id: 'tmn3223-p1',
    course: 'TMN3223',
    type: 'Project',
    title: 'PROJECT 1 (Web Application Development)',
    date: '2026-11-24',
    time: '00:00',
    priority: 'High',
    desc: 'Due Tuesday, 24 November 2026 (12:00 AM midnight).',
    completed: false
  },
  {
    id: 'tmn3093-p1',
    course: 'TMN3093',
    type: 'Project',
    title: 'PROJECT (Computer System Admin & Management)',
    date: '2026-12-09',
    time: '15:00',
    priority: 'High',
    desc: 'Due Wednesday, 9 December 2026 (Before 3:00 PM).',
    completed: false
  },
  {
    id: 'tmn3093-pres1',
    course: 'TMN3093',
    type: 'Presentation',
    title: 'PRESENTATION Session 1 (CSAM)',
    date: '2026-12-10',
    time: '09:00',
    priority: 'Medium',
    desc: 'Scheduled CSAM Project Presentation — 10 December 2026.',
    completed: false
  },
  {
    id: 'tmn2223-p1',
    course: 'TMN2223',
    type: 'Project',
    title: 'PROJECT (Object-Oriented Software Development)',
    date: '2026-12-14',
    time: '15:00',
    priority: 'High',
    desc: 'Due 14th December 2026 (3:00 PM).',
    completed: false
  },
  {
    id: 'tmn3223-p2',
    course: 'TMN3223',
    type: 'Project',
    title: 'PROJECT 2 (Web Application Development)',
    date: '2026-12-15',
    time: '00:00',
    priority: 'High',
    desc: 'Due Tuesday, 15 December 2026 (12:00 AM midnight).',
    completed: false
  },
  {
    id: 'tmn2223-pres',
    course: 'TMN2223',
    type: 'Presentation',
    title: 'PRESENTATION Window (15th – 23rd Dec 2026)',
    date: '2026-12-15',
    time: '09:00',
    priority: 'Medium',
    desc: 'OOSD Project Presentation period runs from 15th to 23rd December 2026.',
    completed: false
  },
  {
    id: 'tmn3093-pres2',
    course: 'TMN3093',
    type: 'Presentation',
    title: 'PRESENTATION Session 2 (CSAM)',
    date: '2026-12-17',
    time: '09:00',
    priority: 'Medium',
    desc: 'Scheduled CSAM Project Presentation — 17 December 2026.',
    completed: false
  },
  {
    id: 'tmf3113-p1',
    course: 'TMF3113',
    type: 'Project',
    title: 'PROJECT (Project Management)',
    date: '2026-12-27',
    time: '23:59',
    priority: 'High',
    desc: 'Due Sunday, 27 December 2026 (11:59 PM).',
    completed: false
  },
  {
    id: 'tmf3963-a2',
    course: 'TMF3963',
    type: 'Assignment',
    title: 'ASSIGNMENT 2 (Ethics & Professionalism)',
    date: '2026-12-30',
    time: '17:00',
    priority: 'Medium',
    desc: 'Due Wednesday, 30 December 2026 (Before 5:00 PM).',
    completed: false
  }
];

const DEFAULT_REMINDERS = [
  {
    id: 'rem-1',
    title: 'Final Proofread: TMF3963 E&P Assignment 1',
    date: '2026-11-18',
    time: '13:00',
    alertMinutes: 60
  },
  {
    id: 'rem-2',
    title: 'Deploy & Test TMN3223 WebApp Project 1',
    date: '2026-11-23',
    time: '20:00',
    alertMinutes: 60
  },
  {
    id: 'rem-3',
    title: 'Prepare Slides for TMN2223 OOSD Presentation',
    date: '2026-12-14',
    time: '18:00',
    alertMinutes: 1440
  }
];

const DEFAULT_NOTES = [
  {
    id: 'note-1',
    title: 'November Sprint Priority (Nov 18 – Nov 24)',
    tag: 'maroon',
    body: '1. TMF3963 E&P Assignment 1 (Nov 18, 5 PM)\n2. TMN3233 AI Assignment (Nov 20, 5 PM)\n3. TMF3113 PM Assignment (Nov 22, 11:59 PM)\n4. TMN3223 WebApp Project 1 (Nov 24, 12:00 AM)'
  },
  {
    id: 'note-2',
    title: 'December Project & Presentation Checklist',
    tag: 'olive',
    body: '• CSAM (TMN3093): Report due Dec 9 (3 PM), Presentations on Dec 10 & 17.\n• OOSD (TMN2223): Project due Dec 14 (3 PM), Presentations Dec 15–23.\n• WebApp Project 2: Dec 15 (12:00 AM).'
  }
];

// Application State
let tasks = loadState(STORAGE_KEYS.TASKS, DEFAULT_TASKS);
let reminders = loadState(STORAGE_KEYS.REMINDERS, DEFAULT_REMINDERS);
let notes = loadState(STORAGE_KEYS.NOTES, DEFAULT_NOTES);

let calYear = 2026;
let calMonth = 10; // November (0-indexed)
let selectedCalendarDate = null;

// Storage Helpers
function loadState(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : structuredClone(fallback);
  } catch {
    return structuredClone(fallback);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
  localStorage.setItem(STORAGE_KEYS.REMINDERS, JSON.stringify(reminders));
  localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.add('hidden'), 3000);
}

// Live Clock
function updateClock() {
  const now = new Date();
  const formatted = now.toLocaleString('en-MY', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  document.getElementById('liveClock').textContent = formatted;
}
setInterval(updateClock, 1000);
updateClock();

// Date & Time Formatting
function formatReadableDateTime(dateStr, timeStr) {
  const dt = new Date(`${dateStr}T${timeStr || '23:59'}`);
  if (isNaN(dt.getTime())) return `${dateStr} ${timeStr}`;
  const datePart = dt.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  const timePart = dt.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  return `${datePart} • ${timePart}`;
}

function getCountdownBadge(dateStr, timeStr, completed) {
  if (completed) return { text: 'Completed', urgent: false, done: true };
  const target = new Date(`${dateStr}T${timeStr || '23:59'}`);
  const now = new Date();
  const diffMs = target - now;
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffMs < 0) return { text: 'Past Due', urgent: true, done: false };
  if (diffDays === 0) return { text: 'Due Today', urgent: true, done: false };
  if (diffDays === 1) return { text: 'Tomorrow', urgent: true, done: false };
  if (diffDays <= 7) return { text: `In ${diffDays} days`, urgent: true, done: false };
  return { text: `In ${diffDays} days`, urgent: false, done: false };
}

// Calendar Sync Builders (Google Calendar & .ICS)
function buildGoogleCalendarUrl(title, dateStr, timeStr, description) {
  const start = new Date(`${dateStr}T${timeStr || '09:00'}`);
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  const fmt = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${fmt(start)}/${fmt(end)}`,
    details: description || 'UNIMAS Student Planner Event'
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function formatIcsDate(dateStr, timeStr) {
  const d = new Date(`${dateStr}T${timeStr || '09:00'}`);
  return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

function escapeIcsText(str) {
  return (str || '').replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
}

function downloadIcsEvents(events, filename = 'unimas_planner_sync.ics') {
  if (!events.length) {
    showToast('No pending events to export.');
    return;
  }

  let ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Nur Nasira UNIMAS Student Planner//EN',
    'CALSCALE:GREGORIAN'
  ];

  events.forEach((ev, idx) => {
    const dtStart = formatIcsDate(ev.date, ev.time);
    const endObj = new Date(new Date(`${ev.date}T${ev.time || '09:00'}`).getTime() + 3600000);
    const dtEnd = endObj.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    ics.push(
      'BEGIN:VEVENT',
      `UID:nasira-unimas-${ev.id || idx}-${Date.now()}@planner.local`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'}`,
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      `SUMMARY:${escapeIcsText(ev.title)}`,
      `DESCRIPTION:${escapeIcsText(ev.desc || '')}`,
      'BEGIN:VALARM',
      'TRIGGER:-PT60M',
      'ACTION:DISPLAY',
      `DESCRIPTION:Reminder: ${escapeIcsText(ev.title)}`,
      'END:VALARM',
      'END:VEVENT'
    );
  });

  ics.push('END:VCALENDAR');

  const blob = new Blob([ics.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
  showToast(`Downloaded ${filename} for calendar sync!`);
}

// Render Stats
function renderStats() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pendingList = tasks
    .filter(t => !t.completed)
    .sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`));

  document.getElementById('statTotal').textContent = total;
  document.getElementById('statPending').textContent = pendingList.length;
  document.getElementById('statCompleted').textContent = completed;
  document.getElementById('statReminders').textContent = reminders.length;

  const pct = total ? Math.round((completed / total) * 100) : 0;
  document.getElementById('progressBar').style.width = `${pct}%`;

  if (pendingList.length > 0) {
    const next = pendingList[0];
    document.getElementById('statNextDue').textContent = `Next: ${next.course} (${next.date})`;
  } else {
    document.getElementById('statNextDue').textContent = 'All tasks completed!';
  }
}

// Render Tasks
function renderTasks() {
  const container = document.getElementById('taskList');
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const courseFilter = document.getElementById('courseFilter').value;
  const typeFilter = document.getElementById('typeFilter').value;
  const statusFilter = document.getElementById('statusFilter').value;

  const banner = document.getElementById('activeDateFilterBanner');
  if (selectedCalendarDate) {
    banner.classList.remove('hidden');
    document.getElementById('filteredDateText').textContent = selectedCalendarDate;
  } else {
    banner.classList.add('hidden');
  }

  const filtered = tasks
    .filter(t => {
      if (courseFilter !== 'ALL' && t.course !== courseFilter) return false;
      if (typeFilter !== 'ALL' && t.type !== typeFilter) return false;
      if (statusFilter === 'PENDING' && t.completed) return false;
      if (statusFilter === 'COMPLETED' && !t.completed) return false;
      if (selectedCalendarDate && t.date !== selectedCalendarDate) return false;
      if (query) {
        const hay = `${t.title} ${t.course} ${COURSE_LABELS[t.course] || ''} ${t.desc}`.toLowerCase();
        if (!hay.includes(query)) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (a.completed !== b.completed) return a.completed ? 1 : -1;
      return new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`);
    });

  if (!filtered.length) {
    container.innerHTML = `<div class="empty-state">No assignments, projects, or presentations match your current filters.</div>`;
    return;
  }

  container.innerHTML = filtered.map(task => {
    const countdown = getCountdownBadge(task.date, task.time, task.completed);
    const fullTitle = `[${task.course}] ${task.title}`;
    const gcalUrl = buildGoogleCalendarUrl(fullTitle, task.date, task.time, task.desc);

    return `
      <div class="task-item type-${task.type} ${task.completed ? 'completed' : ''}">
        <div class="task-top">
          <div class="task-main-left">
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTaskComplete('${task.id}')" />
            <div>
              <div class="badges">
                <span class="badge badge-course">${COURSE_LABELS[task.course] || task.course}</span>
                <span class="badge badge-type-${task.type}">${task.type}</span>
                <span class="badge badge-priority-${task.priority}">${task.priority}</span>
              </div>
              <div class="task-title">${escapeHtml(task.title)}</div>
              ${task.desc ? `<div class="task-desc">${escapeHtml(task.desc)}</div>` : ''}
            </div>
          </div>
        </div>
        <div class="task-bottom">
          <div class="due-info">
            <span>🕑 ${formatReadableDateTime(task.date, task.time)}</span>
            <span class="countdown-pill ${countdown.urgent ? 'urgent' : ''} ${countdown.done ? 'done' : ''}">
              ${countdown.text}
            </span>
          </div>
          <div class="task-actions">
            <a href="${gcalUrl}" target="_blank" rel="noopener" class="action-chip" title="Add to Google Calendar">Google Cal</a>
            <button class="action-chip" onclick="exportSingleTaskIcs('${task.id}')" title="Download .ICS file">.ICS</button>
            <button class="action-chip" onclick="openEditTask('${task.id}')">Edit</button>
            <button class="action-chip delete" onclick="deleteTask('${task.id}')">Delete</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Render Mini Calendar
function renderCalendar() {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  document.getElementById('calendarMonthTitle').textContent = `${monthNames[calMonth]} ${calYear}`;

  document.getElementById('jumpNovBtn').classList.toggle('active', calYear === 2026 && calMonth === 10);
  document.getElementById('jumpDecBtn').classList.toggle('active', calYear === 2026 && calMonth === 11);

  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const container = document.getElementById('calendarDays');

  let html = '';
  for (let i = 0; i < firstDay; i++) {
    html += `<div class="cal-day empty"></div>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const mm = String(calMonth + 1).padStart(2, '0');
    const dd = String(day).padStart(2, '0');
    const iso = `${calYear}-${mm}-${dd}`;

    const dayTasks = tasks.filter(t => t.date === iso);
    const hasEvents = dayTasks.length > 0;
    const isSelected = selectedCalendarDate === iso;

    const types = [...new Set(dayTasks.map(t => t.type))];
    const dotsHtml = types.map(type => {
      const color = type === 'Project' ? 'olive' : type === 'Presentation' ? 'amber' : 'maroon';
      return `<i class="dot ${color}"></i>`;
    }).join('');

    html += `
      <div class="cal-day ${hasEvents ? 'has-events' : ''} ${isSelected ? 'selected' : ''}" onclick="toggleCalendarDate('${iso}')">
        <span>${day}</span>
        ${hasEvents ? `<div class="day-dots">${dotsHtml}</div>` : ''}
      </div>
    `;
  }

  container.innerHTML = html;
}

// Render Reminders
function renderReminders() {
  const container = document.getElementById('reminderList');
  if (!reminders.length) {
    container.innerHTML = `<div class="empty-state">No reminders yet. Add one to sync with your calendar!</div>`;
    return;
  }

  const sorted = [...reminders].sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`));

  container.innerHTML = sorted.map(rem => {
    const gcalUrl = buildGoogleCalendarUrl(rem.title, rem.date, rem.time, `Alert: ${rem.alertMinutes} mins before`);
    return `
      <div class="reminder-item">
        <div class="reminder-info">
          <h4>${escapeHtml(rem.title)}</h4>
          <span>${formatReadableDateTime(rem.date, rem.time)}</span>
        </div>
        <div class="reminder-btns">
          <a href="${gcalUrl}" target="_blank" rel="noopener" class="action-chip">Google</a>
          <button class="action-chip" onclick="exportSingleReminderIcs('${rem.id}')">.ICS</button>
          <button class="action-chip delete" onclick="deleteReminder('${rem.id}')">×</button>
        </div>
      </div>
    `;
  }).join('');
}

// Render Notes
function renderNotes() {
  const container = document.getElementById('notesList');
  if (!notes.length) {
    container.innerHTML = `<div class="empty-state">No study notes yet. Click "+ Note" to jot down ideas.</div>`;
    return;
  }

  container.innerHTML = notes.map(note => `
    <div class="note-card ${note.tag}">
      <div class="note-header">
        <h4>${escapeHtml(note.title)}</h4>
        <div class="task-actions">
          <button class="action-chip" onclick="openEditNote('${note.id}')">Edit</button>
          <button class="action-chip delete" onclick="deleteNote('${note.id}')">×</button>
        </div>
      </div>
      <div class="note-body">${escapeHtml(note.body)}</div>
    </div>
  `).join('');
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"');
}

// Task Actions
window.toggleTaskComplete = function (id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveState();
    renderAll();
  }
};

window.deleteTask = function (id) {
  tasks = tasks.filter(t => t.id !== id);
  saveState();
  renderAll();
  showToast('Item removed.');
};

window.openEditTask = function (id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;
  document.getElementById('taskModalTitle').textContent = 'Edit Assignment / Project';
  document.getElementById('taskId').value = task.id;
  document.getElementById('taskTitle').value = task.title;
  document.getElementById('taskCourse').value = task.course;
  document.getElementById('taskType').value = task.type;
  document.getElementById('taskDate').value = task.date;
  document.getElementById('taskTime').value = task.time;
  document.getElementById('taskPriority').value = task.priority;
  document.getElementById('taskDesc').value = task.desc || '';
  document.getElementById('taskModal').classList.remove('hidden');
};

window.exportSingleTaskIcs = function (id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;
  downloadIcsEvents([{
    id: task.id,
    title: `[${task.course}] ${task.title}`,
    date: task.date,
    time: task.time,
    desc: task.desc
  }], `${task.course}_${task.type}.ics`);
};

// Calendar Actions
window.toggleCalendarDate = function (iso) {
  selectedCalendarDate = selectedCalendarDate === iso ? null : iso;
  renderCalendar();
  renderTasks();
};

// Reminder Actions
window.deleteReminder = function (id) {
  reminders = reminders.filter(r => r.id !== id);
  saveState();
  renderAll();
  showToast('Reminder deleted.');
};

window.exportSingleReminderIcs = function (id) {
  const rem = reminders.find(r => r.id === id);
  if (!rem) return;
  downloadIcsEvents([{
    id: rem.id,
    title: `Reminder: ${rem.title}`,
    date: rem.date,
    time: rem.time,
    desc: `Alert set ${rem.alertMinutes} minutes prior.`
  }], 'reminder.ics');
};

// Note Actions
window.openEditNote = function (id) {
  const note = notes.find(n => n.id === id);
  if (!note) return;
  document.getElementById('noteModalTitle').textContent = 'Edit Study Note';
  document.getElementById('noteId').value = note.id;
  document.getElementById('noteTitle').value = note.title;
  document.getElementById('noteTag').value = note.tag;
  document.getElementById('noteBody').value = note.body;
  document.getElementById('noteModal').classList.remove('hidden');
};

window.deleteNote = function (id) {
  notes = notes.filter(n => n.id !== id);
  saveState();
  renderNotes();
  showToast('Note deleted.');
};

// Event Listeners
document.getElementById('openTaskModalBtn').addEventListener('click', () => {
  document.getElementById('taskModalTitle').textContent = 'Add Assignment / Project';
  document.getElementById('taskForm').reset();
  document.getElementById('taskId').value = '';
  document.getElementById('taskDate').value = '2026-11-25';
  document.getElementById('taskModal').classList.remove('hidden');
});

document.getElementById('taskForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const id = document.getElementById('taskId').value;
  const payload = {
    id: id || 'task-' + Date.now(),
    title: document.getElementById('taskTitle').value.trim(),
    course: document.getElementById('taskCourse').value,
    type: document.getElementById('taskType').value,
    date: document.getElementById('taskDate').value,
    time: document.getElementById('taskTime').value,
    priority: document.getElementById('taskPriority').value,
    desc: document.getElementById('taskDesc').value.trim(),
    completed: false
  };

  if (id) {
    const idx = tasks.findIndex(t => t.id === id);
    if (idx !== -1) {
      payload.completed = tasks[idx].completed;
      tasks[idx] = payload;
    }
    showToast('Task updated!');
  } else {
    tasks.push(payload);
    showToast('New task added!');
  }

  saveState();
  renderAll();
  document.getElementById('taskModal').classList.add('hidden');
});

document.getElementById('openReminderModalBtn').addEventListener('click', () => {
  document.getElementById('reminderForm').reset();
  document.getElementById('reminderDate').value = '2026-11-18';
  document.getElementById('reminderModal').classList.remove('hidden');
});

document.getElementById('reminderForm').addEventListener('submit', (e) => {
  e.preventDefault();
  reminders.push({
    id: 'rem-' + Date.now(),
    title: document.getElementById('reminderTitle').value.trim(),
    date: document.getElementById('reminderDate').value,
    time: document.getElementById('reminderTime').value,
    alertMinutes: Number(document.getElementById('reminderAlert').value)
  });
  saveState();
  renderAll();
  document.getElementById('reminderModal').classList.add('hidden');
  showToast('Reminder added!');
});

document.getElementById('openNoteModalBtn').addEventListener('click', () => {
  document.getElementById('noteModalTitle').textContent = 'Add Study Note';
  document.getElementById('noteForm').reset();
  document.getElementById('noteId').value = '';
  document.getElementById('noteModal').classList.remove('hidden');
});

document.getElementById('noteForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const id = document.getElementById('noteId').value;
  const payload = {
    id: id || 'note-' + Date.now(),
    title: document.getElementById('noteTitle').value.trim(),
    tag: document.getElementById('noteTag').value,
    body: document.getElementById('noteBody').value.trim()
  };

  if (id) {
    const idx = notes.findIndex(n => n.id === id);
    if (idx !== -1) notes[idx] = payload;
    showToast('Note updated!');
  } else {
    notes.unshift(payload);
    showToast('Note saved!');
  }

  saveState();
  renderNotes();
  document.getElementById('noteModal').classList.add('hidden');
});

// Close Modals
document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById(btn.getAttribute('data-close')).classList.add('hidden');
  });
});

// Filters & Calendar Navigation
['searchInput', 'courseFilter', 'typeFilter', 'statusFilter'].forEach(id => {
  document.getElementById(id).addEventListener('input', renderTasks);
  document.getElementById(id).addEventListener('change', renderTasks);
});

document.getElementById('clearDateFilterBtn').addEventListener('click', () => {
  selectedCalendarDate = null;
  renderCalendar();
  renderTasks();
});

document.getElementById('prevMonthBtn').addEventListener('click', () => {
  calMonth--;
  if (calMonth < 0) {
    calMonth = 11;
    calYear--;
  }
  renderCalendar();
});

document.getElementById('nextMonthBtn').addEventListener('click', () => {
  calMonth++;
  if (calMonth > 11) {
    calMonth = 0;
    calYear++;
  }
  renderCalendar();
});

document.getElementById('jumpNovBtn').addEventListener('click', () => {
  calYear = 2026;
  calMonth = 10;
  renderCalendar();
});

document.getElementById('jumpDecBtn').addEventListener('click', () => {
  calYear = 2026;
  calMonth = 11;
  renderCalendar();
});

// Sync All Pending Tasks & Reminders to .ICS
document.getElementById('syncAllIcsBtn').addEventListener('click', () => {
  const pendingEvents = tasks
    .filter(t => !t.completed)
    .map(t => ({
      id: t.id,
      title: `[${t.course}] ${t.title}`,
      date: t.date,
      time: t.time,
      desc: t.desc
    }));

  const reminderEvents = reminders.map(r => ({
    id: r.id,
    title: `Reminder: ${r.title}`,
    date: r.date,
    time: r.time,
    desc: 'Personal Study Reminder'
  }));

  downloadIcsEvents([...pendingEvents, ...reminderEvents], 'Nasira_UNIMAS_2026_Schedule.ics');
});

// Reset to Default 2026 Schedule
document.getElementById('resetDefaultBtn').addEventListener('click', () => {
  if (confirm('Restore your original 2026 UNIMAS assignment and project schedule?')) {
    tasks = structuredClone(DEFAULT_TASKS);
    reminders = structuredClone(DEFAULT_REMINDERS);
    notes = structuredClone(DEFAULT_NOTES);
    selectedCalendarDate = null;
    saveState();
    renderAll();
    showToast('Default 2026 schedule restored.');
  }
});

function renderAll() {
  renderStats();
  renderTasks();
  renderCalendar();
  renderReminders();
  renderNotes();
}

renderAll();