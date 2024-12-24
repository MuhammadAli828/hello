import React, { useState } from "react";
import "./Menu.css";


const Menu = () => {
  const [activeMenu, setActiveMenu] = useState("breakfast");

  // Static Menu Data
  const menus = {
    breakfast: [
      { id: 1, name: "Chicken Burger", price: "$115", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-1.jpg" },
      { id: 2, name: "Pancakes", price: "$120", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-2.jpg" },
      { id: 3, name: "Pancakes", price: "$120", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-3.jpg" },
      { id: 4, name: "Pancakes", price: "$120", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-3.jpg" },
      { id: 5, name: "Pancakes", price: "$120", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-3.jpg" },
      { id: 6, name: "Pancakes", price: "$120", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-3.jpg" },
      { id: 7, name: "Pancakes", price: "$120", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-3.jpg" },
      { id: 8, name: "Grilled Steak", price: "$130", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-4.jpg"  },




    ],
    lunch: [
      { id: 9, name: "Grilled Steak", price: "$130", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-4.jpg"  },
      { id: 10, name: "Pasta", price: "$125", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-5.jpg"  },
      { id: 11, name: "Pasta", price: "$125", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-6.jpg"  },
      { id: 12, name: "Grilled Steak", price: "$130", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-2.jpg"  },
      { id: 13, name: "Grilled Steak", price: "$130", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-1.jpg"  },
      { id: 14, name: "Grilled Steak", price: "$130", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-8.jpg"  },
      { id: 15, name: "Grilled Steak", price: "$130", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-4.jpg"  },
      { id: 16, name: "Grilled Steak", price: "$130", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-3.jpg"  },




    ],
    dinner: [
      { id: 17, name: "Roasted Chicken", price: "$140", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-7.jpg"  },
      { id: 18, name: "Pizza", price: "$115", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-8.jpg" },
      { id: 19, name: "Pizza", price: "$115", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-1.jpg" },
      { id: 20, name: "Grilled Steak", price: "$130", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-2.jpg"  },
      { id: 21, name: "Grilled Steak", price: "$130", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-5.jpg"  },
      { id: 22, name: "Grilled Steak", price: "$130", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-7.jpg"  },
      { id: 23, name: "Grilled Steak", price: "$130", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-8.jpg"  },
      { id: 24, name: "Grilled Steak", price: "$130", description: "Ipsum ipsum clita erat amet dolor justo diam",image: "/menu-4.jpg"  },


    ],
  };

  return (
    <div className="menu-container">
      <h1 className="menu-title">Food Menu</h1>
      <h2 className="menu-subtitle">Most Popular Items</h2>

      {/* Buttons */}
      <div className="menu-buttons">
        <button
          className={activeMenu === "breakfast" ? "active" : ""}
          onClick={() => setActiveMenu("breakfast")}
        >
          <i class="fa-solid fa-mug-saucer"></i>Popular Breakfast
        </button>
        <button
          className={activeMenu === "lunch" ? "active" : ""}
          onClick={() => setActiveMenu("lunch")}
        >
          <i class="fa-solid fa-burger"></i> Special Launch
        </button>
        <button
          className={activeMenu === "dinner" ? "active" : ""}
          onClick={() => setActiveMenu("dinner")}
        >
          <i class="fa-solid fa-utensils"></i>Lovely Dinner
        </button>
      </div>

      {/* Menu Table */}
      <div className="menu-table">
        {menus[activeMenu].map((item) => (
          <div className="menu-row" key={item.id}>
            <div className="menu-item">
              <img src={item.image} alt={item.name} />
              <div className="menu-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
            <span className="menu-price">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
