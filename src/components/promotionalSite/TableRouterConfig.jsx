import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {FaFilePdf, FaYoutube} from 'react-icons/fa';

const PaginationButton = ({onClick, disabled, children}) => (
   <button
      onClick={onClick}
      disabled={disabled}
      className="text-zc-neutral-100 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-xl cursor-pointer border-[1px]"
   >
      {children}
   </button>
);
PaginationButton.propTypes = {
   onClick: PropTypes.func.isRequired, // Validar que onClick sea una función requerida
   disabled: PropTypes.bool, // Validar que disabled sea un booleano opcional
   children: PropTypes.node.isRequired // Validar que children sea un nodo (elemento React) requerido
};


const TableRouterConfig = ({data}) => {
   const [currentPage, setCurrentPage] = useState(0);
   const [searchTerm, setSearchTerm] = useState('');
   const windowSize = useWindowSize(); // Llama a useWindowSize directamente

   // Determina el número de elementos por página basado en el tamaño de la ventana
   const itemsPerPage = windowSize === 'sm' || windowSize === 'md' ? 7 : 10;

   const handleChangePage = (pageIndex) => {
      setCurrentPage(pageIndex);
   };

   const matchesSearchTerm = (item) =>
      item.nombreDispositivo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.fabricante.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.descripción.toLowerCase().includes(searchTerm.toLowerCase());

   const filteredData = data.filter(matchesSearchTerm);
   const paginatedData = filteredData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
   const pagesCount = Math.ceil(filteredData.length / itemsPerPage);

   return (
      <div className="bg-zc-neutral-100 mb-8">
         <h1
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center pt-2 text-zc-neutral-500 font-medium mb-2">
            Configura la contraseña de tu router
         </h1>
         <div className="w-[99%] md:w-[99%] mx-auto pt-2 pb-4 bg-zc-first rounded-2xl px-8">
            <div className="flex justify-center md:justify-end">
               <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-gray-800 text-gray-100 border border-gray-500 rounded px-5 mb-4 text-start text-sm sm:text-base md:text-lg lg:text-xl"
               />
            </div>
            <div className="overflow-x-auto">
               <table className="min-w-full">
                  <thead className="bg-gray-800">
                  <tr className="border-[1px]">
                     {['Nombre', 'Fabricante', 'Modelo', 'Descripción', 'PDF', 'Youtube'].map((header) => (
                        <th
                           key={header}
                           className="px-4 py-2 text-left text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-300 uppercase tracking-wider"
                        >
                           {header}
                        </th>
                     ))}
                  </tr>
                  </thead>
                  <tbody className="bg-gray-700">
                  {paginatedData.map((item, index) => (
                     <tr key={index} className="hover:bg-gray-600">
                        {['nombreDispositivo', 'fabricante', 'modelo', 'descripción', 'linkPdf', 'linkYouTube'].map(
                           (field) => (
                              <td
                                 key={field}
                                 className="px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 border-b-[1px]"
                              >
                                 {field === 'linkPdf' || field === 'linkYouTube' ? (
                                    <a
                                       href={item[field]}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="flex items-center gap-2"
                                    >
                                       {field === 'linkPdf' ? (
                                          <FaFilePdf className="text-lg md:text-xl lg:text-2xl"/>
                                       ) : (
                                          <FaYoutube className="text-lg md:text-xl lg:text-2xl"/>
                                       )}
                                       {field === 'linkPdf' ? 'Ver pdf' : 'Ver video'}
                                    </a>
                                 ) : (
                                    item[field]
                                 )}
                              </td>
                           )
                        )}
                     </tr>
                  ))}
                  </tbody>
               </table>
            </div>
            <div className="flex justify-center md:justify-end mt-4 gap-8">
               <PaginationButton
                  onClick={() => handleChangePage(currentPage - 1)}
                  disabled={currentPage === 0}
               >
                  Anterior
               </PaginationButton>
               <PaginationButton
                  onClick={() => handleChangePage(currentPage + 1)}
                  disabled={currentPage === pagesCount - 1 || paginatedData.length === 0}
               >
                  Siguiente
               </PaginationButton>
            </div>
         </div>
      </div>
   );
};

TableRouterConfig.propTypes = {
   data: PropTypes.array.isRequired,
};

const useWindowSize = () => {
   const [windowSize, setWindowSize] = useState(getSize);

   function getSize() {
      const {innerWidth} = window;
      if (innerWidth >= 768 && innerWidth < 1024) {
         return 'md';
      } else if (innerWidth < 768) {
         return 'sm';
      } else {
         return 'lg';
      }
   }

   useEffect(() => {
      function handleResize() {
         setWindowSize(getSize());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return windowSize;
};

export default TableRouterConfig;
