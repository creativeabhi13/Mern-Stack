import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Dialog } from "../ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import AdminContactUsDetailsView from "./contactus-details"; 
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllContacts,
  fetchContactById,
  updateContact,

} from "@/store/admin/contactus-admin-slice";

function AdminContactUsView() {
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const { contacts } = useSelector((state) => state.adminContactUs);
  const dispatch = useDispatch();

  function handleFetchContactDetails(contactId) {
    dispatch(fetchContactById(contactId));
  }

  useEffect(() => {
    dispatch(fetchAllContacts(

    ));
  }, [dispatch]);

//   useEffect(() => {
//     if (contactDetails !== null) setOpenDetailsDialog(true);
//   }, [contactDetails]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Us Messages</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Message ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>
                <span className="sr-only">Details</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts && contacts.length > 0 ? (
              contacts.map((contactItem) => (
                <TableRow key={contactItem._id}>
                  <TableCell>{contactItem._id}</TableCell>
                  <TableCell>{contactItem.name}</TableCell>
                  <TableCell>{contactItem.email}</TableCell>
                  <TableCell>{contactItem.message}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleFetchContactDetails(contactItem._id)}>
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  No messages found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
      {/* <Dialog
        open={openDetailsDialog}
        onOpenChange={() => {
          setOpenDetailsDialog(false);
          dispatch(updateContact());
        }}
      >
        {contactDetails ? (
          <AdminContactUsDetailsView contactDetails={contactDetails} />
        ) : (
          <div>Loading...</div>
        )}
      </Dialog> */}
    </Card>
  );
}

export default AdminContactUsView;
