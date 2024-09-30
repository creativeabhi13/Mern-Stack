import React from "react";
import { DialogContent, DialogTitle } from "../ui/dialog";

function AdminContactUsDetailsView({ contactDetails }) {
  if (!contactDetails) return null; // Return nothing if no details are available

  return (
    <DialogContent>
      <DialogTitle>Contact Us Message Details</DialogTitle>
      <p><strong>Name:</strong> {contactDetails.name}</p>
      <p><strong>Email:</strong> {contactDetails.email}</p>
      <p><strong>Message:</strong> {contactDetails.message}</p>
      {/* Add other relevant details here */}
    </DialogContent>
  );
}

export default AdminContactUsDetailsView;
