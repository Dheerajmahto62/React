import "./Product.css";
import Price from "./price";

function Product({ title, idx }) {
    let oldPrices = ["12,495", "11,90", "1,599", "599", "7655"];
    let newPrices = ["8,234", "1045", "1243", "458", "6746"];
    let description = [
        ["8,000 DPI", "5 Programmable buttons"],
        ["intuitive surface", "designed for iPad Pro"],
        ["designed for iPad Pro", "intuitive surface"],
        ["Wireless", "Optical orientation"],
    ];
    return (
        <div className="Product">
            <h4>{title}</h4>
            
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

export default Product;