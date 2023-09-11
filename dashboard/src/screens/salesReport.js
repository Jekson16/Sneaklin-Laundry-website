import React from "react";
const SaleStatistics = () => {
  return (
    <div className="table-responsive">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Tabel Laporan Penjualan</h5>
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            }}
          >
            <iframe
              title="Laporan Penjualan"
              style={{
                border: "none",
                width: "100%",
                height: "900px", // Sesuaikan tinggi sesuai keinginan
              }}
              src="https://charts.mongodb.com/charts-project-0-kxbyy/embed/charts?id=6493dd61-7081-4650-8111-cbf1738abd7c&maxDataAge=300&theme=light&autoRefresh=true"
            ></iframe>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
