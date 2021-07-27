import React, { useState } from 'react'

import Button from "@material-ui/core/Button"
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function CatCollection() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");

    const handleClose = () => {
        setOpen(false)
        setName("")
    }

    const handleAddNewCat = () => {
        console.log("adding cat")
        handleClose()
    }

    return <div id="cat-collection">
        <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>Add Cat</Button>
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
    </div >
}