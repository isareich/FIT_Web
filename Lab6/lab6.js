let today = new Date();
var arrExhibitions = [];
arrExhibitions[0] = {
  theme: "Живопис",
  place: "Київ, Національний художній музей",
  organizer: "Державний комітет телебачення та радіомовлення України",
  startDate: new Date(2023, 12, 11),
  endDate: new Date(2023, 12, 13),
};
arrExhibitions[1] = {
  theme: "Скульптура",
  place: "Одеса, Одеський художній музей",
  organizer: "Одеський обласний державний центр народної творчості",
  startDate: new Date(2022, 6, 11),
  endDate: new Date(2023, 11, 28),
};
arrExhibitions[2] = {
  theme: "Фотографія",
  place: "Львів, Львівська національна галерея мистецтв імені Бориса Возницького",
  startDate: new Date(2023, 12, 11),
  endDate: new Date(2024, 1, 13),
};
arrExhibitions[3] = {
  theme: "Графіка",
  place: "Харків, Харківський художній музей",
  startDate: new Date(2023, 11, 11),
  endDate: new Date(2023, 11, 13),
};
arrExhibitions[4] = {
  theme: "Дизайн",
  place: "Дніпро, Дніпропетровський обласний художній музей",
  startDate: new Date(2022, 12, 11),
  endDate: new Date(2022, 12, 16),
};

function print() {
    let now = new Date();
    let html = "";
    html = html + "<table style='table; background:oldlace;'>";
    html = html + "<tr><td>Тематика</td>" +
      "<td>Місце проведення</td><td>Організатор</td>" +
      "<td>Дні до початку</td><td>Дні до закриття</td><td>Сьогодні</td></tr>";
  
    arrExhibitions.forEach(exhibition => {
      let daysToStart = Math.round((exhibition.startDate.getTime() - now.getTime()) / (1000 * 3600 * 24));
      let daysToClose = Math.round((exhibition.endDate.getTime() - now.getTime()) / (1000 * 3600 * 24));
      
      let isToday = today >= exhibition.startDate && today <= exhibition.endDate;

      html = html + "<tr>";
      html = html + "<td>" + exhibition.theme + "</td>";
      html = html + "<td>" + exhibition.place + "</td>";
      if (exhibition.organizer) {
        html = html + "<td>" + exhibition.organizer + "</td>";
      } else {
        html = html + "<td>Не вказано</td>";
      }
      
      if (daysToStart <= 0) {
        html = html + "<td>Вже почалося</td>";
      } else {
        html = html + "<td>" + daysToStart + "</td>";
      }
      
      if (daysToClose <= 0) {
        html = html + "<td>Вже закінчилося</td>";
      } else {
        html = html + "<td>" + daysToClose + "</td>";
      }

      if (isToday) {
        html = html + "<td>Так</td>";
      } else {
        html = html + "<td>Ні</td>";
      }
  
  
      html = html + "</tr>";
    });
  
    html = html + "</table>";
    document.getElementById("finish").innerHTML = html;
  }
  
  
