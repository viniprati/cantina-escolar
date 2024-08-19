document.addEventListener("DOMContentLoaded", function() {
    const menuItems = [
        {
            day: "Segunda-feira",
            items: ["Sanduíche Natural", "Suco de Laranja", "Biscoito Integral"]
        },
        {
            day: "Terça-feira",
            items: ["Salada de Frutas", "Água de Coco", "Barra de Cereal"]
        },
        {
            day: "Quarta-feira",
            items: ["Pão de Queijo", "Suco de Uva", "Iogurte Natural"]
        },
        {
            day: "Quinta-feira",
            items: ["Cachorro-quente", "Refrigerante", "Sorvete"]
        },
        {
            day: "Sexta-feira",
            items: ["Pizza", "Suco de Maracujá", "Pipoca"]
        }
    ];

    const menuGrid = document.getElementById("menu-grid");

    menuItems.forEach(menu => {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";

        const dayTitle = document.createElement("h3");
        dayTitle.textContent = menu.day;
        menuItem.appendChild(dayTitle);

        const itemList = document.createElement("ul");
        menu.items.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            itemList.appendChild(listItem);
        });

        menuItem.appendChild(itemList);
        menuGrid.appendChild(menuItem);
    });
});
