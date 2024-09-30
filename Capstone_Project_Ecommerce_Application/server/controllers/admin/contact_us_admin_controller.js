import ContactUs from "../../models/ContactUs.js";

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
  };


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




  
export const fetchContactUsById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Id is required!",
        });
      }
  
      const contactUs = await ContactUs.findById(id);
  
      if (!contactUs) {
        return res.status(404).json({
          success: false,
          message: "Contact Us not found!",
        });
      }
  
      res.status(200).json({
        success: true,
        data: contactUs,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Error",
      });
    }
  };


    export const updateContactUs = async (req, res) => {
        try {
        const { id } = req.params;
        const { name, email, subject, phone, message } = req.body;
    
        if (!id) {
            return res.status(400).json({
            success: false,
            message: "Id is required!",
            });
        }
    
        if (!name || !email || !subject || !phone || !message) {
            return res.status(400).json({
            success: false,
            message: "Invalid data provided!",
            });
        }
    
        const updatedContactUs = await ContactUs.findByIdAndUpdate(
            id,
            { name, email, subject, phone, message },
            { new: true }
        );
    
        res.status(200).json({
            success: true,
            data: updatedContactUs,
        });
        } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Error",
        });
        }
    };