const cpuPrices = {
    "Intel i5": 199,
    "Intel i7": 299,
    "AMD Ryzen 5": 219,
    "AMD Ryzen 7": 349
  };
  
  const motherboardPrices = {
    "ASUS Prime Z490-A": 259,
    "MSI MPG B550 Gaming Edge WIFI": 199,
    "Gigabyte AORUS X570 Master": 349,
    "ASRock B450M-HDV R4.0": 79
  };
  
  const ramPrices = {
    "Corsair Vengeance LPX 16GB": 99,
    "Crucial Ballistix 16GB": 89,
    "G.SKILL Ripjaws V Series 16GB": 79,
    "Kingston HyperX Fury 16GB": 94
  };
  
  const gpuPrices = {
    "NVIDIA GeForce RTX 3080": 699,
    "NVIDIA GeForce RTX 4070 Ti": 656,
    "AMD Radeon RX 7900 XTX": 579,
    "AMD Radeon RX 6700 XT": 712
  };
  
  const form = document.querySelector('form');
  const totalCost = document.querySelector('#total-cost');
  
  form.addEventListener('change', () => {
    const cpuPrice = cpuPrices[form.cpu.value];
    const motherboardPrice = motherboardPrices[form.motherboard.value];
    const ramPrice = ramPrices[form.ram.value];
    const gpuPrice = gpuPrices[form.gpu.value];
    const subtotal = cpuPrice + motherboardPrice + ramPrice + gpuPrice;
    totalCost.textContent = `Total Cost: $${subtotal}`;
  });
  