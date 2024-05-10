const botaoForm = document.getElementById("aux"); //id inserido por inspecionar

function redirecionarParaProximaURL() {
    let usuario = {
        nome: document.getElementById("form-field-field_8a1e448").value,
        email: document.getElementById("form-field-name").value,
        whatsapp:document.getElementById("form-field-field_8d7e7ef").value,
        negocio: document.getElementById("form-field-email").value,
        faturamento: document.getElementById("form-field-field_eaa4eb3").value

    };

    var proximaURL = "https://suasaudemental.com.br/?nome=" + encodeURIComponent(usuario.nome) + "&email=" + encodeURIComponent(usuario.email) + "&whatsapp=" + encodeURIComponent(usuario.whatsapp) + "&negocio=" + encodeURIComponent(usuario.negocio) + "&faturamento=" + encodeURIComponent(usuario.faturamento);
    
    window.open(proximaURL);
}

document.querySelector(".elementor-button-text").addEventListener("click", function(event) {
    event.preventDefault(); 
    redirecionarParaProximaURL(); 
});

botaoForm.addEventListener("mousedown", (event) => {redirecionarParaProximaURL()});

/*campo nome:
name="form_fields[field_8a1e448]" id="form-field-field_8a1e448"

campo email:
name="form_fields[name]" id="form-field-name"

campo whatsapp:
name="form_fields[field_8d7e7ef]" id="form-field-field_8d7e7ef"

campo negócio:
name="form_fields[email]" id="form-field-email"

campo faturamento:
name="form_fields[field_eaa4eb3]" id="form-field-field_eaa4eb3"

botão enviar:
<span class="elementor-button-text">Receber Demonstração</span>

próxima url:
https://suasaudemental.com.br/*/