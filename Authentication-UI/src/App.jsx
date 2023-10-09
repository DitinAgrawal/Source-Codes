import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Authentication />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
