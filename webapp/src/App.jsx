import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./components/Details";
import SearchParams from "./components/searchParams";
import AdoptedPetContext from "./context/AdoptedPetContext";
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 100000,
            cacheTime: 100000,
        },
    },
});

const App = () => {
    const adoptedPet = useState(null);
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <AdoptedPetContext.Provider value={adoptedPet}>
                    <header>
                        <Link to="/">Adopt Me!</Link>
                    </header>
                    <Routes>
                        <Route path="/details/:id" element={<Details />} />
                        <Route path="/" element={<SearchParams />} />
                    </Routes>
                </AdoptedPetContext.Provider>
            </QueryClientProvider>
        </BrowserRouter>
    );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
