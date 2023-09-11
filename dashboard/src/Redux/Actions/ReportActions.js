// src/Redux/Actions/ReportActions.js

import axios from "axios";

// Action untuk mengambil data laporan penjualan
export const fetchSalesReport = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/https://charts.mongodb.com/charts-project-0-kxbyy/embed/charts?id=6493dd61-7081-4650-8111-cbf1738abd7c&maxDataAge=300&theme=light&autoRefresh=true"); // Ganti dengan URL API yang benar untuk mengambil data laporan penjualan dari server
    const salesReportData = response.data; // Ganti dengan cara yang sesuai untuk mengakses data laporan penjualan dari respons API
    dispatch({ type: "FETCH_SALES_REPORT_SUCCESS", payload: salesReportData });
  } catch (error) {
    dispatch({ type: "FETCH_SALES_REPORT_FAILURE", error: error.message });
  }
};
