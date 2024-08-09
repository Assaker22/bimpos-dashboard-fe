import "./dashboard.layout.scss";

import Navbar from "../../components/navbar/navbar.component";
import Product from "../../views/product/product.component";

export default function DashboardLayout() {
  return (
    <main>
      <Navbar />
      <Product />
    </main>
  );
}
