import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
// import Home from './pages/Index'
import PurchasedReceipes from './pages/PurchasedReceipes'
// import ContactUs from './pages/Index'
import { ContactUs } from './pages/Index'
import DefaultWrapper from './layouts/DefaultWrapper'
import {
    Template00,
    Template01,
    Template02,
    Template04,
    Template05,
    Template09,
    GothamTemplate,
    IcotorialTemplate,
    PlainButtonTemplate,
} from './components/templates'
import Index from './pages/Index'
import About from './pages/About'
import SingleTermsAndConditions from './pages/SingleTermsAndConditions'
import Login from './pages/Login'
import Register from './pages/Register'
import FAQ from './pages/FAQ'
import DashboardWrapper from './layouts/DashboardWrapper'

const templates = [
    { id: '00', component: Template00 },
    { id: '01', component: Template01 },
    { id: '02', component: Template02 },
    { id: '04', component: Template04 },
    { id: '05', component: Template05 },
    { id: '09', component: Template09 },
    { id: '06', component: GothamTemplate },
    { id: '07', component: IcotorialTemplate },
    { id: '08', component: PlainButtonTemplate },
    // add your templates here and view at localhost:3000/templates/<template-id>/edit
]

function App() {
    return (
        <Routes>
            {/* DON'T DROP ANY ROUTE HERE. Read this file top to bottom to see where to drop your route */}

            <Route element={<DefaultWrapper />}>
                {/* All external page goes in here */}

                <Route path="/" element={<Index />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
                <Route path="/faqs" element={<FAQ />} />
                <Route
                    path="/terms-and-conditions"
                    element={<TermsAndConditions />}
                />
                <Route
                    path="/terms-and-conditions/:id"
                    element={<SingleTermsAndConditions />}
                />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                <Route
                    path="*"
                    element={
                        <div className="w-full h-[500px] flex items-center justify-center">
                            <h1 className="text-[56px] font-[700]">
                                Coming soon
                            </h1>
                        </div>
                    }
                />
            </Route>

            <Route element={<DashboardWrapper />}>
                {/* All pages that use Dashboard Layout (layout with sidebar) should go here */}

                <Route
                    path="/purchased-recipes"
                    element={<PurchasedReceipes />}
                />

                {templates.map(Template => (
                    <Route
                        key={Template.id}
                        path={`/templates/${Template.id}/edit`}
                        element={<Template.component editable="true" />}
                    />
                ))}
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default App
