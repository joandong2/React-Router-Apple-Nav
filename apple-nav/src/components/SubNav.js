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
        <ul>
            {Object.keys(products.children).map((oneKey, i) => {
                return <li key={i}>{products.children[oneKey]}</li>;
            })}
        </ul>
    );
};

export default SubNav;
