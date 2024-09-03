import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import NewsGrid from "./components/NewsGrid";
import LocalityFilter from "./components/LocalityFilter";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [activeLocality, setActiveLocality] = useState(22);
  const [category, setCategory] = useState("general");
  const [local, setLocality] = useState("us");

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {fetchNews();}, [local, category])

  const fetchNews = async () => {
    const response = await fetch(
      //`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=00581d6a586e45e69f64bf1f4c02a970`
      //`https://newsdata.io/api/1/latest?apikey=pub_52059255838ecb7c20d23c2f7f961ead44cb0&category=${category}&country=cz`
      `https://api.thenewsapi.com/v1/news/top?api_token=${apiKey}&locale=${local}&limit=3&categories=${category}`
    )
    const data = await response.json();

    console.log(data);
    setItems(data.data);
  };

  return (
    <div className="App">
      <Header/>
      <LocalityFilter activeLocality={activeLocality} setActiveLocality={setActiveLocality} setLocality={setLocality} />
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
      <Footer />
    </div>
  );
}

export default App;
