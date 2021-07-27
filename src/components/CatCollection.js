import React from 'react'

import Button from "@material-ui/core/Button"

export default function CatCollection() {
    const handleAddNewCat = () => {
        console.log("adding cat")
    }

    return <div id="cat-collection">
        <Button variant="outlined" color="primary" onClick={handleAddNewCat}>Add Cat</Button>
    </div>
}