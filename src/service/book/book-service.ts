import { BookDto } from "../../dto";
import { httpService } from '../../commons/http';
import { ServiceError } from "../../error";

export const getBooks = async (): Promise<BookDto[]> => {
  try {
    const result = await httpService.get<BookDto[]>('/book')
    return result
  } catch (error: Error | any) {
    throw new ServiceError('Não foi possivel obter lista dos livros... Verifique a conexão com o DB')
  }
}