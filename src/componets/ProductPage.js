import React from 'react';

const ProductPage = ({ products, currentUser, handleLogout }) => {
    return (
        <div className="shopping-page">
            <div className="navbar">
                <h2>Welcome, {currentUser.Username}</h2>
                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
            </div>

            <div className="products">
                {products.map((product) => (
                    <div key={product.ProductID} className="product-card">
                        <img
                            src={product.ImageURL}
                            alt={product.ProductName}
                            className="product-image"
                        />
                        <h3 className="product-name">{product.ProductName}</h3>
                        <p className="product-category">{product.Category}</p>
                        <p className="product-price">${product.Price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
