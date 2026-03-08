const payrollRecords = [
  { name: "Asha", basePay: 30000, bonus: 2000, taxRate: 0.1 },
  { name: "Invalid Case", basePay: -500, bonus: 100, taxRate: 0.05 },
  { name: "Bob", basePay: 45000, bonus: 5000, taxRate: 0.2 }
];

const validRecords = payrollRecords.filter(emp => 
  emp.basePay > 0 && 
  emp.bonus >= 0 && 
  emp.taxRate >= 0 && emp.taxRate <= 1
);

const netPayReport = validRecords.map(emp => {
  const gross = emp.basePay + emp.bonus;
  return {
    name: emp.name,
    netPay: gross - (gross * emp.taxRate)
  };
});


const totalNetPayout = netPayReport.reduce((sum, emp) => sum + emp.netPay, 0);


console.log("Valid Records:", validRecords);
console.log("Net Pay Report:", netPayReport);
console.log("Total Net Payout:", totalNetPayout);
