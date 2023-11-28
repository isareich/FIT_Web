function print() {
    let flat = document.getElementById('flat').value;
    let entrance = document.getElementById('entrance').value;
    let floor = document.getElementById('floor').value;
  
    if (flat > 108 || flat < 1) {
      alert('Номер квартири повинен бути від 1 до 108');
      return;
    }
  
    if (entrance > 3 || entrance < 1) {
      alert("Номер під'їзду повинен бути від 1 до 3.");
      return;
    }
  
    if (floor > 9 || floor < 1) {
      alert('Поверх повинен бути від 1 до 9.');
      return;
    }
  
    let result = `Номер квартири: ${flat}\nНомер під'їзду: ${entrance}\nПоверх: ${floor}`;
    document.getElementById('result').innerHTML = result;
  }
  
  function show() {
    alert("Я круте поле для вводу. Я люблю Пса Патрона");
  }