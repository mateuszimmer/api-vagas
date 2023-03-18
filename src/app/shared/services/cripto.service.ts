import * as bcrypt from "bcrypt";

export class CriptoService {
  public async criptografa(valor: string): Promise<string> {
    return await bcrypt.hash(valor, 10);
  }

  public async comparar(valor1: string, valor2: string): Promise<boolean> {
    return await bcrypt.compare(valor1, valor2);
  }
}
