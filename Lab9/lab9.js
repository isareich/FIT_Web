class Computer {
    constructor(model, manufacturer, price) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.price = price;
    }

    show() {
        let html = "";
        html += "<tr>";
        html += "<td>" + this.model + "</td>";
        html += "<td>" + this.manufacturer + "</td>";
        html += "<td>" + this.price + "</td>";
        html += "</tr>";
        return html;
    }
}
let computerArray = [
    new Computer('Inspiron 15', 'Dell', 799),
    new Computer('ThinkPad X1 Carbon', 'Lenovo', 1499),
    new Computer('MacBook Air', 'Apple', 999),
    new Computer('Surface Laptop 4', 'Microsoft', 1299),
    new Computer('Aspire 5', 'Acer', 599),
    new Computer('ROG Zephyrus G14', 'Asus', 1499)
]

function run(){

	var html = "<table class='b-table'>";
	html += "<tr class='b-table__th'><td>Модель</td><td>Марка</td><td>Ціна</td>></tr>"
	for (i=0;i<computerArray.length;i++){
		html += computerArray[i].show();
	}
	html += "</table>";
	document.getElementById("result").innerHTML = html;
}