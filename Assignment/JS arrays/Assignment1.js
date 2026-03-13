let queue = [
  { id: "T101", priority: "MEDIUM", resolved: false },
  { id: "T102", priority: "LOW",    resolved: true },
  { id: "T103", priority: "HIGH",   resolved: false },
  { id: "T104", priority: "LOW",    resolved: false },
  { id: "T105", priority: "MEDIUM", resolved: true }
];


queue.unshift({ id: "T100", priority: "HIGH", resolved: false });
queue.push(
  { id: "T106", priority: "MEDIUM", resolved: false },
  { id: "T107", priority: "MEDIUM", resolved: false }
);
const currentTicket = queue.shift();
const droppedTicket = queue.pop();
const pending = queue.filter(t => !t.resolved);
const pendingIds = pending.map(t => t.id);
console.log("Current Ticket:", currentTicket);
console.log("Dropped Ticket:", droppedTicket);
console.log("Pending Queue:", pending);
console.log("Pending IDs:", pendingIds);
