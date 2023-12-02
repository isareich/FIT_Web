class facultet {
    constructor(name,isT){
        this.name = name;
        if (typeof(cf) == "boolean") this.isTechnician = isT;
        else this.isTechnician = false;
    }
}

facultets = new Array();
async function populate(){
    const requestURL = "https://api.jsonbin.io/v3/b/656b69b59207ee75c9cb799e";
    const request = new Request(requestURL);
    const response = await fetch(request);
    if(response.ok){
        const ani = await response.json();

        newFacultet(ani.record);
        showHeader();
        showFacultet();
    }
    else{
        alert("Mistake");
    }
}

function newFacultet(obj){
    let ani = obj;
    for (a of ani){
        let facl = new facultet(a.name,a.isTechnician);
        facultets.push(facl);
    }
}

function showHeader() {
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    myH1.innerText = "The list of facultets";
    header.appendChild(myH1);
}

function showFacultet(){
    const main = document.querySelector("article");
    const divisTechnician = document.createElement("div");
    const divisnotTechnician = document.createElement("div");
    const myH2Technician = document.createElement("h2");
    const myH2notTechnician = document.createElement("h2");
    myH2Technician.textContent = "Facultets which are technician";
    myH2notTechnician.textContent = "Facultets are not technician";
    const myFaclTechnician = document.createElement("ul");
    const myFaclnotTechnician = document.createElement("ul");
    for(a of facultets){
        const listItem = document.createElement("li");
        listItem.textContent = a.name;
        if(a.isTechnician) 
        myFaclTechnician.appendChild(listItem);

        else(a.isTechnician) 
        myFaclnotTechnician.appendChild(listItem);
    }
    divisTechnician.appendChild(myH2Technician)
    divisTechnician.appendChild(myFaclTechnician);
    divisnotTechnician.appendChild(myH2notTechnician)
    divisnotTechnician.appendChild(myFaclnotTechnician);
    main.appendChild(divisTechnician);
    main.appendChild(divisnotTechnician);
}
populate