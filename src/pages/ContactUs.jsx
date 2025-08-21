import { useForm } from "react-hook-form";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input className="" type="text" id="name" {...register("name")} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" {...register("phone")} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" {...register("message")} />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
        
      </form>
    </div>
  );
}

export default ContactUs;
