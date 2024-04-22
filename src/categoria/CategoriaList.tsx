import React, { useState, useEffect } from 'react';
import { getAllCategorias } from '../services/CategoriaService';

const CategoriaList: React.FC = () => {
  const [categorias, setCategorias] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const data = await getAllCategorias();
        setCategorias(data);
      } catch (error) {
        console.error('Erro ao obter categorias:', error);
      }
    };
    fetchCategorias();
  }, []);

  return (
    <div>
      <h2>Listagem de Categorias</h2>
      <ul>
        {categorias.map(categoria => (
          <li key={categoria.id}>{categoria.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriaList;
