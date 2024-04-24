import React, { useState } from 'react';
import { createCategoria, updateCategoria } from '../services/CategoriaService';

interface CategoriaFormProps {
  categoria: any;
}

const CategoriaForm: React.FC<CategoriaFormProps> = ({ categoria }) => {
  const [nome, setNome] = useState(categoria ? categoria.nome : '');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (categoria) {
        await updateCategoria(categoria.id, { nome });
      } else {
        await createCategoria({ nome });
      }
      // Redirecionar ou exibir uma mensagem de sucesso, etc.
    } catch (error) {
      console.error('Erro ao enviar categoria:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
      </label>
      <button type="submit">{categoria ? 'Atualizar' : 'Adicionar'}</button>
    </form>
  );
};

export default CategoriaForm;
