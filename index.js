const btn = document.getElementById("searchBtn");
const Apikey = "YqIKjpnVYWCxy7fBzq1hCA==QlTHAvyR7LXiZOOC";
const parentul = document.getElementById("recipe-list");
const recipedetails = document.getElementById("recipeDetailsContainer");
const for_name = document.getElementById("for-name");
const for_ingri = document.getElementById("for-ingri");
const ingri_div = document.getElementById("ingri-div");

const options = {
    method: 'GET',
    headers: { 'X-Api-Key': Apikey, }
}

async function getrecipe() {
    const query = document.getElementById("searchInput").value;
    const url = `https://api.api-ninjas.com/v1/recipe?query=${query}`;
    const response = await fetch(url, options);
    const data = response.json();
    data.then((full) => {
        parentul.innerHTML = "";
        for (let i = 0; i < full.length; i++) {
           console.log(full)
            const node = document.createElement("li");
            const textnode = document.createTextNode(full[i].title);
            node.appendChild(textnode);
            const list = parentul.appendChild(node);

            function getfullrec() {
                for_name.innerHTML = full[i].title;
                for_ingri.innerHTML = "Ingredients:";

                const ingri = full[i].ingredients.split("|");
                ingri_div.innerHTML ="";
                ingri.forEach((val) => {
                    const node2 = document.createElement("li");
                    const textnode2 = document.createTextNode(val);
                    node2.appendChild(textnode2);
                    const list2 = ingri_div.appendChild(node2);
                });

                const servings = document.getElementById("for-serv").innerHTML = "Servings";

                

                const servpara = document.getElementById("serv");
                servpara.innerHTML="";
                const node3 = document.createElement("li");
                    const textnode3 = document.createTextNode(full[i].servings);
                    node3.appendChild(textnode3);
                    const list3 = servpara.appendChild(node3);

                const inst_head = document.getElementById("for-instruc");
                inst_head.innerHTML = "Instructions:";

                const detailspara = document.getElementById("for-details");
                detailspara.innerHTML = "";
                detailspara.innerHTML = full[i].instructions;

            }

            list.addEventListener('click', getfullrec)
        }

    })
}




btn.addEventListener('click', getrecipe);


