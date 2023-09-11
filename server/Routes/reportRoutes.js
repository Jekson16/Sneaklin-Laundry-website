
import express from "express";
import asyncHandler from "express-async-handler";
import Order from "../Models/OrderModel.js";
import Product from "../Models/ProductModel.js";

const router = express.Router();

// Route untuk mendapatkan laporan hasil penjualan
router.get(
  "/sales-report",
  asyncHandler(async (req, res) => {
    try {
      const orders = await Order.find({}).populate("user", "name email");
      const reportData = {};

      // Proses data pesanan untuk menghitung total produk terjual dan total pendapatan berdasarkan produk
      orders.forEach((order) => {
        order.orderItems.forEach((item) => {
          if (reportData[item.product]) {
            reportData[item.product].totalSold += item.qty;
            reportData[item.product].totalRevenue += item.price * item.qty;
          } else {
            reportData[item.product] = {
              name: item.name,
              totalSold: item.qty,
              totalRevenue: item.price * item.qty,
            };
          }
        });
      });

      // Ubah objek reportData menjadi array
      const reportArray = Object.values(reportData);

      res.json(reportArray);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  })
);

export default router;

