import ContactUs from "../../models/ContactUs.js";
import enquiry from "../../utilities/enquiry.js";


export const addContactUs = async (req, res) => {
    try {
        const { name, email, subject, phone, message } = req.body;
    
        if (!name || !email || !subject || !phone || !message) {
        return res.status(400).json({
            success: false,
            message: "Invalid data provided!",
        });
        }

     
    
        const newlyCreatedContactUs = new ContactUs({
        name,
        email,
        subject,
        phone,
        message,
        });
    
        await newlyCreatedContactUs.save();
        enquiry({
            to: email,
            subject: "Your Query Has Been Received",
            name,
            email,
            phone,
            message,
            store_name: "Laptop Wala",
            });
    
        res.status(201).json(
         
            
            {
            
        success: true,
        data: newlyCreatedContactUs,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
        success: false,
        message: "Error",
        });
    }
    };

export const fetchAllContactUs = async (req, res) => {

    try {
        const contactUsList = await ContactUs.find();
        res.status(200).json({
        success: true,
        data: contactUsList,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
        success: false,
        message: "Error",
        });
    }
    }

export const deleteContactUs = async (req, res) => {

try {
    const { id } = req.params;
    if (!id) {
    return res.status(400).json({
        success: false,
        message: "Id is required!",
    });
    }

    await ContactUs.findByIdAndDelete(id);

    res.status(200).json({
    success: true,
    message: "Contact Us deleted successfully!",
    });
} catch (e) {
    console.log(e);
    res.status(500).json({
    success: false,
    message: "Error",
    });
}

}