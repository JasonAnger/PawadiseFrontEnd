import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ShopPage from './pages/StorePage/ShopPage';
import ServicePage from './pages/StorePage/ServicePage';
import NewsPage from './pages/NewsPage/NewsPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ShopDetailsPage from './pages/StorePage/ShopDetailsPage';
import ServiceDetailsPage from './pages/StorePage/ServiceDetailsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/shop',
        exact: true,
        main: () => <ShopPage />
    },
    {
        path: '/service',
        exact: true,
        main: () => <ServicePage />
    },
    {
        path: '/news',
        exact: true,
        main: () => <NewsPage />
    },
    {
        path: '/gallery',
        exact: true,
        main: () => <GalleryPage />
    },
    {
        path: '/contact',
        exact: true,
        main: () => <ContactPage />
    },
    {
        path: '/stores/:slug',
        exact: true,
        main: ({match}) => <ShopDetailsPage match={match}/>
    },
    {
        path: '/services/:slug',
        exact: true,
        main: ({match}) => <ServiceDetailsPage match={match}/>
    },
    {
        path: '/contact',
        exact: true,
        main: () => <ContactPage />
    },
    {
        path: '/profile/:slug',
        exact: true,
        main: () => <ProfilePage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes;