import "../styles/components/WhatsappButton.css"; // Ensure this CSS file exists

const WhatsappButton = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER; // This is the WhatsApp number

    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="Chat on WhatsApp"
            />
        </a>
    );
};

export default WhatsappButton;
