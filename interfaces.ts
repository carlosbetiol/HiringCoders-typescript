interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: 'Carlos',
        email: 'carlos@carlos'
    }
}

function setUser(usuario: Usuario){
    //...
}

