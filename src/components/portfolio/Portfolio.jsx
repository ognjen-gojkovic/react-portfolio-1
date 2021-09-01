import React from "react";
import "./Portfolio.scss";
import PortfolioList from "./portfolioList/PortfolioList";
import {
  contentPortfolio,
  designPortfolio,
  featuredPortfolio,
  mobilePortfolio,
  webPortfolio,
} from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = React.useState("featured");
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;

      default:
        break;
    }
  }, [selected]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            item={item}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div key={item.title} className="item">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
