jsonwebtoken
     1 - Login
        -- Criar um payload com informações relevantes para criptograr
            -- UUID
            -- TIPO ( admin, recrutador ou candidato )

            {
                uuid: 'xxxx',
                tipo: 'A'
            }

        -- Criptografar e gerar um TOKEN.

    2 - Nas requisições para rotas protegidas
        -- O cliente deve enviar um token valido

    3 - No backend vamos criar um Middleware para verificar o token
