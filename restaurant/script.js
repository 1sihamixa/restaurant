let menu = [];
const loaded = async () => {
    try {
        const api = await fetch("data.JSON");
        const data = await api.json();
        console.log(data);

        let searchBar = document.getElementById("searchBar");

        searchBar.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase();

            const filteredResults = filterData(data.menu , searchTerm);
            console.log(filteredResults);

            display(filteredResults, searchTerm);
        });

    } catch (err) {
        console.error(err);
    }
};

const filterData = (data, searchTerm) => {
    return data.filter(item => {
        return item.name.includes(searchTerm)
    })
};

const display = (result, searchTerm) => {
    const list = document.getElementById("lis");
    list.innerHTML = "";

    result.forEach((category) => {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "category";

        const categoryTitle = document.createElement("button");
        categoryTitle.className = "category-title";
        categoryTitle.innerHTML = category.name;
        console.log(category)

        categoryTitle.addEventListener("click", (e) => {
            const sub = filterData(result, e.target.innerHTML);
            // console.log(subFilteredResults);
            for(let i in sub[0]){
                
                const div = document.createElement("div");
                const title = document.createElement("div");
                const price = document.createElement("div");
                const description = document.createElement("div");
                title.innerHTML=sub[0][i]
                div.className = "divi";
                div.appendChild(title);
                categoryDiv.appendChild(div);
            }
            // display(subFilteredResults, searchTerm);
        });

        categoryDiv.appendChild(categoryTitle);

        // if (typeof data === "object") {
        //     Object.entries(data).forEach(([key, value]) => {
        //         const div = document.createElement("div");
        //         div.className = "divi";

        //         const parKey = document.createElement("p");
        //         parKey.className = "title";
        //         parKey.innerHTML = key;

        //         const parValue = document.createElement("p");
        //         parValue.className = "part";

        //         if (Array.isArray(value)) {
        //             parValue.innerHTML = value.join(", ");
        //         } else if (typeof value === "object") {
        //             parValue.innerHTML = JSON.stringify(value);
        //         } else {
        //             parValue.innerHTML = value;
        //         }

        //         div.appendChild(parKey);
        //         div.appendChild(parValue);

        //         categoryDiv.appendChild(div);
        //     });
        // } else {
        //     const div = document.createElement("div");
        //     div.className = "divi";

        //     const parValue = document.createElement("p");
        //     parValue.className = "part";
        //     parValue.innerHTML = data;

        //     div.appendChild(parValue);
        //     categoryDiv.appendChild(div);
        // }

        list.appendChild(categoryDiv);
    });

    console.log(result);
};

loaded();
