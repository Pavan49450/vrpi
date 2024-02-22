import ContactUsForm from "../../components/ContactUs/ContactForm/ContactUsForm";

export default function ContactUs() {
  return (
    <div>
      <div>
        <h1>Get in Touch</h1>
        <div>
          <img src={require(`../../assets/contactUs1.png`)} alt="" />
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}
