import React, { useEffect, useState } from "react";
import "../../HomePage/HomePage.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store";
import { fetchProductFilter } from "../productSlice";
import NumberFormat from "react-number-format";
import { Link, useLocation } from "react-router-dom";
import { PaginationPage } from "../Pagination";
import { Rating } from "semantic-ui-react";
import "./styles.scss";
import { ICapacity, IColorPhoto } from "app/models/product";
import FilterBar from "../Filter";

function Products() {
  const [pageActive, setPageActive] = useState(1);
  const products = useSelector((state: RootState) => state.product.products);

  let location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(fetchProductFilter(location.search));
  }, []);

  const genPrice = (
    price: number,
    data: ICapacity[],
    colors: IColorPhoto[]
  ) => {
    let p = price;
    if (data.length > 0) {
      p += data[0].plusCost;
    }
    if (colors.length > 0) {
      p += colors[0].color.plusCost;
    }
    return p;
  };

  return (
    <>
      <div className="prod-list">
        <FilterBar />
        <div className="d-flex f-col w-100">
          <h2>Danh Sách Sản Phẩm</h2>
          <div className="pro-lst">
            <div className="row mt-1 ">
              {products.map((product) => (
                <Link to={`/products/detail/${product._id}`} className="col-4">
                  {product.installment && <div className="tg">Trả góp 0%</div>}
                  <div key={product._id}>
                    <div className="wrap-img">
                      <img src={product.colors[0].image.photo} alt="phone" />
                    </div>
                    <h4>{product.name}</h4>
                    <Rating icon="star" defaultRating={4} maxRating={5} />
                    <p>
                      <NumberFormat
                        value={genPrice(
                          product.priceOnSales,
                          product.capacities,
                          product.colors
                        )}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                      ₫
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex ali-cen jus-cen w-100">
        <PaginationPage pageActive={pageActive} />
      </div>
    </>
  );
}

export default Products;
