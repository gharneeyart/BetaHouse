import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';

const PropertyC = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(() => {
        const savedPage = localStorage.getItem('currentPage');
        return savedPage ? parseInt(savedPage, 9) : 1;
    });
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/products/all?page=${currentPage}`);
                setProducts(response.data.products);
                setTotalPages(response.data.totalPages);
                localStorage.setItem('currentPage', currentPage);
            } catch (err) {
                setError('Failed to fetch products');
                console.error('Error fetching products:', err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
                {products.map((property) => (
                    <PropertyCard key={property._id} property={property} />
                ))}
            </div>
            <div className="flex justify-center items-center space-x-2 my-4">
      <span className="font-bold text-2xl">&lt;</span>
      {Array.from({ length: totalPages }, (_, index) => (
         <button
         key={index}
         onClick={() => handlePageChange(index + 1)}
         disabled={currentPage === index + 1}
         className={`px-3 py-1  border ${
           currentPage === index + 1
             ? 'bg-[#3D9970] text-white '
             : 'bg-transparent text-black '
         } hover:bg-green-700 hover:text-white font-semibold text-[22.37px]`}
       >
         {index + 1}
       </button>
      ))}
      <span className="font-bold text-2xl">&gt;</span>
    </div>
        </div>
    );
};

export default PropertyC;
