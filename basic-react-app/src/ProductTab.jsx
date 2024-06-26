import Product from "./Product.jsx";

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    };

    return (
        <div style={styles}>
            <Product title="Logitech Mx Master" idx={0} />
            <Product title="Apple Pencile(2nd Gen)" idx={1} />
            <Product title="Zebronics zeb-transformer" idx={2} />
            <Product title="Petronics Toad 23" idx={3} />
        </div>
    )
}

export default ProductTab;