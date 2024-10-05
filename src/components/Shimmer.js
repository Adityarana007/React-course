const Shimmer = () => {
  return (
    <div>
      <div className="flex justify-between my-4 mx-10">
      <div className="h-16 w-72 rounded-lg bg-gray-100"></div>
      <div className="h-16 w-80 rounded-lg bg-gray-100 mr-10"></div>

      </div>

      <div className="flex justify-center flex-wrap ">
        {Array.from({ length: 10 }).map((item) => (
          <div className="h-56 w-72  bg-gray-100 mx-4 my-4">
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
