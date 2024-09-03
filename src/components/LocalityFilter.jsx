import React from "react";

function LocalityFilter({ activeLocality, setActiveLocality, setLocality }) {
  const localities = [
    { id: 1, name: "Australia", value: "au" },
    { id: 2, name: "Austria", value: "at" },
    { id: 3, name: "Belgium", value: "be" },
    { id: 4, name: "Canada", value: "ca" },
    { id: 5, name: "China", value: "cn" },
    { id: 6, name: "Croatia", value: "hr" },
    { id: 7, name: "Czechia", value: "cz" },
    { id: 8, name: "France", value: "fr" },
    { id: 9, name: "Germany", value: "de" },
    { id: 10, name: "India", value: "in" },
    { id: 11, name: "Italy", value: "it" },
    { id: 12, name: "Japan", value: "jp" },
    { id: 13, name: "Korea", value: "kr" },
    { id: 14, name: "Netherlands", value: "nl" },
    { id: 15, name: "Poland", value: "pl" },
    { id: 16, name: "Portugal", value: "pt" },
    { id: 17, name: "Spain", value: "es" },
    { id: 18, name: "Switzerland", value: "ch" },
    { id: 19, name: "Turkey", value: "tr" },
    { id: 20, name: "Thailand", value: "th" },
    { id: 21, name: "United Kingdom", value: "gb" },
    { id: 22, name: "United States", value: "us" },
  ];
  function onClick(id, value) {
    setActiveLocality(id);
    setLocality(value);
  }
  return (
    <nav className="menu">
      <ul>
        {localities.map((locality) => (
          <li
            key={locality.id}
            className={activeLocality === locality.id ? "active" : "inactive"}
            onClick={() => onClick(locality.id, locality.value)}
          >
            {locality.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default LocalityFilter;