import React from "react";

const ProductsStatistics = () => {
  return (
    <div className="table-responsive">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Statistik Penjualan</h5>
          <iframe
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
              width: "50%",
              height: "500px",
            }}
            src="https://charts.mongodb.com/charts-project-0-kxbyy/embed/charts?id=64c0ba19-01cf-42d9-8b06-2ff6109a5098&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default ProductsStatistics;
