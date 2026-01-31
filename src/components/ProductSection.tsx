"use client";

import Image from "next/image";
// import Link from "next/link";

interface ProductItem {
  name: string;
  price: string;
  image: string;
  priceLabel?: string;
  description?: string; // added
}

interface ProductSectionProps {
  title: string;
  products: ProductItem[];
  sliderId: string;
  imageClass: string;
  // showLoader?: boolean;
  sectionClass?: string;
}

export default function ProductSection({
  title,
  products,
  sliderId,
  imageClass,
  // showLoader = false,
  sectionClass = "fashion_section",
}: ProductSectionProps) {
  const priceLabel = products[0]?.priceLabel || "Price";

  return (
    <div className={sectionClass}>
      <div id={sliderId} className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {[1, 2, 3].map((slide) => (
            <div
              key={slide}
              className={`carousel-item ${slide === 1 ? "active" : ""}`}
            >
              <div className="container">
                <h1 className="fashion_taital">{title}</h1>
                <div className="fashion_section_2">
                  <div className="row">
                    {products.map((product, index) => (
                      <div key={index} className="col-lg-4 col-sm-4">
                        <div className="box_main">
                          <h4 className="shirt_text">{product.name}</h4>

                          <div className={imageClass}>
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={200}
                              height={250}
                              style={{ width: "auto", height: "auto" }}
                            />
                          </div>

                          {/* Description Below Image */}
                          <p className="product_desc text-sm text-gray-700 mt-2">
                            {product.description}
                          </p>

                          {/* Price Below Description */}
                          <p className="price_text">
                            {priceLabel}{" "}
                            <span style={{ color: "#262626" }}>
                              {product.price}
                            </span>
                          </p>

                          <button
                            onClick={() =>
                              window.dispatchEvent(new Event("add-to-cart"))
                            }
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          className="carousel-control-prev"
          href={`#${sliderId}`}
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-angle-left"></i>
        </a>

        <a
          className="carousel-control-next"
          href={`#${sliderId}`}
          role="button"
          data-slide="next"
        >
          <i className="fa fa-angle-right"></i>
        </a>

        {/* {showLoader && (
          <div className="loader_main">
            <div className="loader"></div>
          </div>
        )} */}
      </div>
    </div>
  );
}
