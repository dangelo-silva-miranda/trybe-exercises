function validaForm(event) {
    let form = event.target;
    // document.querySelectorAll('input');


}

window.onload = function init() {
    let form = {
        nome: {
            type: 'text',
            maxlength: 40,
            required: true
        },
        email: {
            type: 'text',
            maxlength: 50,
            required: true
        },
        cpf: {
            type: 'text',
            maxlength: 11,
            required: true
        },
        endereco: {
            type: 'text',
            maxlength: 200,
            required: true
        },
        cidade: {
            type: 'text',
            maxlength: 28,
            required: true
        },
        estado: {
            required: true
        },
        tipo: {
            required: true
        },
        resumo: {
            type: 'textarea'
        }
    }
}