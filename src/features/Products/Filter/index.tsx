import React, { useEffect, useState } from "react";
import "./index.scss";
import { Rating, Radio, Button, Icon } from "semantic-ui-react";
import InputNumber from "app/common/components/InputNumber";
import { history } from "index";
import queryString, { UrlObject } from "query-string";
import { useLocation } from "react-router-dom";

const FilterBar = () => {
  const [priceFrom, setpriceFrom] = useState(0);

  const [priceTo, setpriceTo] = useState(0);

  const [isTG, setIsTG] = useState(true);

  const [capa, setcapa] = useState("64");

  const [rate, setrate] = useState(5);

  const handleFilter = () => {
    let urlObject: UrlObject = {
      url: "",
      query: {},
    };

    if (priceFrom !== 0) {
      urlObject.query["priceFrom"] = priceFrom;
    }
    if (priceTo !== 0) {
      urlObject.query["priceTo"] = priceTo;
    }
    if (!isTG) {
      urlObject.query["installment"] = false;
    }
    if (rate !== 5) {
      urlObject.query["rating"] = rate;
    }
    if (capa) {
      urlObject.query["capacity"] = capa;
    }
    const query = queryString.stringifyUrl(urlObject);

    history.push(`/products${query}`);
  };

  const locatation = useLocation();

  useEffect(() => {
    const objUrl = queryString.parseUrl(locatation.search);

    if (objUrl.query["priceFrom"]) {
      try {
        setpriceFrom(parseInt(objUrl.query["priceFrom"] + ""));
      } catch {}
    }
    if (objUrl.query["priceTo"]) {
      try {
        setpriceTo(parseInt(objUrl.query["priceTo"] + ""));
      } catch {}
    }
    if (objUrl.query["installment"]) {
      try {
        setIsTG(objUrl.query["installment"] === "true");
      } catch {}
    }
    if (objUrl.query["rating"]) {
      try {
        setrate(parseInt(objUrl.query["rating"] + ""));
      } catch {}
    }
    if (objUrl.query["capacity"]) {
      setcapa(objUrl.query["capacity"] + "");
    }
  }, []);

  return (
    <div className="fil-bar">
      <div>
        <p className="title">Bộ lọc sản phẩm</p>
      </div>

      <div className="d-flex f-col mt-1">
        <div className="title-filter"> Đánh giá sản phẩm</div>
        <div className="mt-1">
          <Rating
            icon="star"
            defaultRating={5}
            rating={rate}
            maxRating={5}
            onRate={(e, { rating }) => {
              const rateNumber = parseInt(rating + "");
              setrate(rateNumber);
            }}
          />
        </div>
      </div>

      <div className="divide"></div>

      <div className="d-flex f-col">
        <div className="d-flex f-col">
          <div className="title-filter">
            <p>Giá từ</p>
            <InputNumber value={priceFrom} setValue={setpriceFrom} />
          </div>
          <div className="title-filter">
            <p>Giá đến</p>
            <InputNumber value={priceTo} setValue={setpriceTo} />
          </div>
        </div>
      </div>

      <div className="divide"></div>

      <div className="d-flex f-col">
        <div className="title-filter">Trả góp</div>
        <div className="d-flex f-row mt-1">
          <Radio checked={isTG} label="Có" onClick={(e) => setIsTG(true)} />
          <Radio
            className="ml-auto"
            checked={!isTG}
            label="Không"
            onClick={(e) => setIsTG(false)}
          />
        </div>
      </div>

      <div className="divide mt-1"></div>

      <div className="d-flex f-col mt-1">
        <div className="title-filter">Dung LượngLưu Trữ</div>
        <div className="d-flex f-col mt-1">
          <Radio
            checked={capa === "64"}
            label="64Gb"
            name="64"
            onClick={(e, { name }) => {
              setcapa(name + "");
            }}
          />
          <Radio
            checked={capa === "128"}
            name="128"
            label="128Gb"
            className="mt-1"
            onClick={(e, { name }) => {
              setcapa(name + "");
            }}
          />
          <Radio
            checked={capa === "256"}
            label="256Gb"
            name="256"
            className="mt-1"
            onClick={(e, { name }) => {
              setcapa(name + "");
            }}
          />
          <Radio
            checked={capa === "512"}
            label="512Gb"
            name="512"
            className="mt-1"
            onClick={(e, { name }) => {
              setcapa(name + "");
            }}
          />
        </div>
      </div>

      <div className="mt-2 d-flex">
        <Button onClick={(e) => history.push("/products")}>Reset</Button>
        <Button
          className="ml-auto"
          basic
          color="blue"
          onClick={(e) => handleFilter()}
        >
          <Icon name="fire" />
          Lọc
        </Button>
      </div>
    </div>
  );
};

export default React.memo(FilterBar);
