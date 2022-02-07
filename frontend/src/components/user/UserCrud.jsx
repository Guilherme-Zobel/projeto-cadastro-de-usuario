import React, { Components } from "react";
import Main from '../template/Main';

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: `Cadastro de usuários: Incluir, Listar Alterar e Excluir`
}

export default class UserCrud extends Components {
  render() {
    return(
        <Main {...headerProps}>
          Cadastro de Usuário
        </Main>
    );
  }
}
