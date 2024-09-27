const whatsappButton = document.getElementById("send-whatsapp");

whatsappButton.addEventListener("click", () => {
  const whatsappContentField = document.getElementById(
    "whatsapp-message-content"
  );
  const whatsappContent = whatsappContentField.value;
  window.open(
    `https://api.whatsapp.com/send?phone=32486790423&text=${whatsappContent}`,
    "_blank"
  );
  // console.log(`https://wa.me/32486790423?text=${whatsappContent}`, "_blank");
});