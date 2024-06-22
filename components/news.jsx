import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";

const News = (props) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8d3ba79eec9a4a1abf5ef13592374f1f&page=${page}&pageSize=${props.pageSize}`;
    try {
      const data = await fetch(url);
      const parsedData = await data.json();
      console.log(parsedData);
      setArticle(parsedData.articles);
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading back to false when the API request is complete
    }
  };

  useEffect(() => {
    updateNews();
  }, [page]);

  const PrevClick = () => {
    updateNews()
    setPage(page - 1);
  };

  const NextClick = () => {
    if (page + 1 > Math.ceil(totalResults / 20)) {
      // Handle when there are no more pages
    } else {
      updateNews()
      setPage(page + 1);
    }
  };

  return (
    <div className="container my-5 py-2 text-center">
      <h2>News-Monkey Created by RBH</h2>
      {loading ? (
        <Loading />
      ) : (
        <div className="row">
          {article && article.length > 0 ? (
            article.map((element, index) => (
              <div className="col-md-4 my-3" key={index}>
                <NewsItem
                  imageurl={element.urlToImage}
                  author={element.author ? element.author : "NO AUTHOR"}
                  title={element.title ? element.title.slice(0, 44) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  url={element.url}
                />
              </div>
            ))
          ) : (
            <p>No articles to display</p>
          )}
        </div>
      )}
      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-outline-dark"
          onClick={PrevClick}
        >
          previous:&#8592;
        </button>
        <button
          type="button"
          className="btn btn-outline-dark"
          target="_blank"
          onClick={NextClick}
          disabled={page + 1 > Math.ceil(totalResults / 20)}
        >
          Next:&#8594;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "technology",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
