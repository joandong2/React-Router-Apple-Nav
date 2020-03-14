import React from "react";
import "./styles/Navigation.css";

const SubNav = (props) => {
    const products = props.links.find((item) => {
        return (
            `${props.toLowerCase(item.parent)}` ===
            props.match.params.productName
        );
    });

    return (
        <div className="subNav">
            <div className="wrapper">
                <ul>
                    {Object.keys(products.children).map((product, i) => {
                        let productPath = props.toLowerCase(
                            products.children[product]
                        );
                        return (
                            <li key={i}>
                                <p>
                                    <img
                                        src={require(`./images/${productPath}.png`)}
                                        alt={productPath}
                                        width="90"
                                        height="70"
                                    />
                                </p>
                                <span className="product-title">
                                    {products.children[product]}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SubNav;
