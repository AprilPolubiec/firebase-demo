import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

import firebase, { db } from "../firebase";
import { useAuth } from "../hooks/useAuth";

export default function CatCollection() {
  const auth = useAuth();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const unsubscribeCats = db
      .collection("users")
      .doc(auth.user.uid)
      .collection("cats")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        const cat_data = snap.docs
          .filter((d) => d.data().photo)
          .map((d) => d.data());
        setCats(cat_data);
      });
    return () => unsubscribeCats();
  }, []);

  const handleClose = () => {
    setOpen(false);
    setName("");
  };

  const handleAddNewCat = () => {
    console.log("adding cat");
    return db
      .collection("users")
      .doc(auth.user.uid)
      .collection("cats")
      .add({ name, createdAt: firebase.firestore.FieldValue.serverTimestamp() })
      .then(handleClose)
      .catch((e) => console.error(e));
  };

  return (
    <div id="cat-collection">
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Add Cat
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Give your cat a name!</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddNewCat} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      <ImageList rowHeight={180} style={{ width: 800, height: 500 }}>
        <ImageListItem key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">My Cats</ListSubheader>
        </ImageListItem>
        {cats.map((cat) => (
          <ImageListItem key={cat.photo}>
            <img src={cat.photo} alt={cat.name} />
            <ImageListItemBar
              title={cat.name}
              actionIcon={
                <IconButton aria-label={`info about ${cat.name}`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
