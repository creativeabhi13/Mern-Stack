import { useState } from "react";
import CommonForm from "../common/form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { contactFormControls } from "@/config";
import { useToast } from "../ui/use-toast";
import { addNewQuery } from "@/store/shop/contactus-slice";
import { useDispatch, useSelector } from "react-redux";

const initialContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function ContactUs() {
  const [formData, setFormData] = useState(initialContactFormData);
  const { toast } = useToast();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleContactSubmit(event) {
    event.preventDefault();

    // Dispatch the form data as a single object
    dispatch(addNewQuery(formData)).then((data) => {
      if (data?.payload?.success) {
        setFormData(initialContactFormData);
        toast({
          title: "Message sent successfully!",
        });
      }
    });
  }

  function isFormValid() {
    return Object.keys(formData)
      .map((key) => formData[key].trim() !== "")
      .every((item) => item);
  }

  return (
    <div className="space-y-8">
      {/* Contact Information Section */}
      <Card className="p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Display Address, Phone, and Email in one row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-lg font-semibold">Our Address</h3>
              <p>#13, Janakpuri West, New Delhi, India - 110058</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone Number</h3>
              <p>+1 (800) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p>support@laptopwala.com</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Form and Map Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Form Section */}
        <Card className="flex flex-col justify-center items-center">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 w-full max-w-md">
            <CommonForm
              formControls={contactFormControls}
              formData={formData}
              setFormData={setFormData}
              buttonText="Send Message"
              onSubmit={handleContactSubmit}
              isBtnDisabled={!isFormValid()}
            />
          </CardContent>
        </Card>

        {/* Map Section */}
        <div className="flex justify-center items-center">
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29730.331089995787!2d77.04081458777597!3d28.630431946175985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bf7c533001%3A0x99b0bceec126243a!2sJanakpuri%20West%2C%20District%20Centre%2C%20Janakpuri%2C%20Delhi%2C%20110018!5e1!3m2!1sen!2sin!4v1727682580005!5m2!1sen!2sin" 
         width="100%"
         height="450"
         style={{ border: 0 }}
         allowFullScreen=""
         loading="lazy"
         title="Company Location"
         className="rounded-lg"  ></iframe>
         
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
