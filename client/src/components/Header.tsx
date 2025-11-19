import React from "react";

export function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src="http://localhost:4000/images/logo.png" className="logo-img" alt="Логотип" />
                    <div className="logo-text">Кулинарный<br/>Блог</div>
                </div>
            </div>
        </header>
    );
}
