const Shimmer = () => {
  return (
    <div>
      <div className="button-filter"></div>

      <div className="shimmer-container">
        {Array.from({ length: 10 }).map((item) => (
          <div className="shimmer-cards">
            <div className="img-container">
              <div className="card-img"></div>
            </div>
            <div class="line-shimmer"></div>
            <div class="line-shimmer2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
