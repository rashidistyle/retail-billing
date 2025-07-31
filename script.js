function printBill() {
  const bill = document.getElementById("billToPrint").innerHTML;
  const win = window.open('', '', 'height=600,width=800');
  win.document.write('<html><head><title>Bill</title></head><body>');
  win.document.write(bill);
  win.document.write('</body></html>');
  win.document.close();
  win.print();
}
