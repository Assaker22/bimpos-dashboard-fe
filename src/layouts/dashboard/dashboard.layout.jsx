import "./dashboard.layout.scss";

import Navbar from "../../components/navbar/navbar.component";
import Product from "../../views/product/product.component";
import useWindowDimensions from "../../hooks/useWindowDimensions.hook";

export default function DashboardLayout() {
  const { isMobile } = useWindowDimensions();

  return (
    <main className={isMobile ? "mobile" : ""}>
      <Navbar />
      <Product />
    </main>
  );
}
