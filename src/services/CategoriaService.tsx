import axios from 'axios';

const API_URL = 'https://sua-api-backend.com/api/categorias';

export const getAllCategorias = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter todas as categorias');
  }
};

export const createCategoria = async (categoriaData: any) => {
  try {
    const response = await axios.post(API_URL, categoriaData);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar categoria');
  }
};

export const updateCategoria = async (categoriaId: string, categoriaData: any) => {
  try {
    const response = await axios.put(`${API_URL}/${categoriaId}`, categoriaData);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar categoria');
  }
};

export const deleteCategoria = async (categoriaId: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${categoriaId}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao excluir categoria');
  }
};
