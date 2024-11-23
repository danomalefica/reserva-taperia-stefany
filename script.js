function sendReservation() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;
    const area = document.getElementById("area").value;

    // Validar que todos los campos estén completos
    if (!name || !phone || !date || !time || !people || !area) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Formatear la fecha en formato DD/MM/AAAA
    if (date.includes("-")) {
        const [year, month, day] = date.split("-");
        var formattedDate = `${day}/${month}/${year}`;
    } else {
        alert("Formato de fecha no válido.");
        return;
    }

    const whatsappNumber = "34665124987"; 
    const message = 
        `RESERVA:
        Soy ${name} 
        Mi número es ${phone}
        Para ${people} personas 
        El ${formattedDate}  
        A las ${time} 
        En la ${area}.`; 

    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

    window.location.href = whatsappLink;
}
