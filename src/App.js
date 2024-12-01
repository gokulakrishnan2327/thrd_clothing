import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Updated imports
import { parseCSV } from './utils/csvParser';
import LoginForm from './componets/LoginForm';
import ProductPage from './componets/ProductPage';
import './styles/App.css';

import usersCSV from './assets/users.csv';
import purchaseHistoryCSV from './assets/purchase_history.csv';
import productsCSV from './assets/products.csv';

const App = () => {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [purchaseHistory, setPurchaseHistory] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [loginError, setLoginError] = useState('');

    useEffect(() => {
        // Load CSV data
        const loadData = async () => {
            const usersData = await parseCSV(usersCSV);
            const productsData = await parseCSV(productsCSV);
            const purchaseHistoryData = await parseCSV(purchaseHistoryCSV);
            setUsers(usersData);
            setProducts(productsData);
            setPurchaseHistory(purchaseHistoryData);
        };

        loadData();
    }, []);

    const handleLogin = (username, password) => {
        const user = users.find(
            (u) => u.Username === username && u.Password === password
        );

        if (user) {
            setCurrentUser(user);
            setLoginError('');
        } else {
            setLoginError('Invalid username or password');
        }
    };

    const handleLogout = () => {
        setCurrentUser(null);
    };

    const getUserPurchaseCategories = () => {
        const purchasedCategoryIds = purchaseHistory
            .filter((purchase) => purchase.UserID === currentUser.UserID)
            .map((purchase) => purchase.ProductID);

        return new Set(
            products
                .filter((product) => purchasedCategoryIds.includes(product.ProductID))
                .map((product) => product.Category)
        );
    };

    const getProductList = () => {
      if (!currentUser) return [];
  
      const purchasedCategories = getUserPurchaseCategories();
      const nonPurchasedProducts = products
          .filter((product) => !purchasedCategories.has(product.Category))
          .filter((product) => product.ProductName)  
          .sort((a, b) => (a.ProductName || '').localeCompare(b.ProductName || ''));  
  
      const purchasedProducts = products
          .filter((product) => purchasedCategories.has(product.Category))
          .filter((product) => product.ProductName) 
          .sort((a, b) => (a.ProductName || '').localeCompare(b.ProductName || ''));  //product listing logic
  
      return [...nonPurchasedProducts, ...purchasedProducts];
  };
  

    const productList = getProductList();

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={currentUser ? <Navigate to="/products" /> : <LoginForm handleLogin={handleLogin} loginError={loginError} />} />

                    <Route path="/products" element={currentUser ? <ProductPage products={productList} currentUser={currentUser} handleLogout={handleLogout} /> : <Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
