import React from 'react';
export const BreadCrumb = (productName:any) => {
return (
    <nav aria-label="breadcrumb" className="w-full p-4 dark:bg-gray-800 dark:text-gray-100 px-20">
        <ol className="flex h-8 space-x-2 dark:text-gray-100">
            <li className="flex items-center">
                <a rel="noopener noreferrer" href="#" title="Back to homepage" className="flex items-center hover:underline">Aluminum</a>
            </li>
            <li className="flex items-center space-x-1">
                <span className="dark:text-gray-400">/</span>
                <a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline">{productName.productName}</a>
            </li>
        </ol>
    </nav>
)

};