import { UsuarioRepository } from '../repositories/usuario.repository';

export class FindUsuarioByUsername {
    constructor(private repository: UsuarioRepository) {}

    public async execute(username: string) {
        const result = await this.repository.obtemPorUserName(username);

        if (!result) {
            return null;
        }
        return result.toJson();
    }
}
