import React, { useState } from 'react'
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
        DialogActions,
        DialogContent,
        DialogContentText,
        DialogTitle } from '@material-ui/core';
import { CarForm } from '../CarForm';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'make', headerName: 'Make', flex: 1 },
    { field: 'model', headerName: 'Model', flex: 1 },
    { field: 'year', headerName: 'Year', flex: 1},
    { field: 'color', headerName: 'Color', flex: 2},
];

interface gridData {
    data: {
        id?:string
    }
}

export const DataTable = () => {

    let { carData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}});
    const [selectionModel, setSelectionModel] = useState<any>([]);

    const [dialogOpen, setDialogOpen] = useState(false);



    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };

    const handleDialogClickOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClickClose = () => {
        setDialogOpen(false);
    };

    let deleteData = () => {
        server_calls.delete(selectionModel);
        getData();
        setTimeout( () => { window.location.reload(); }, 1000)
    }

    // if (gridData.data) {
    //     console.log(gridData.data.id!);
    //   }


  return (
    <>
    <div style={{ height: 50, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ display: 'inline-block' }}>My Garage</h2>
        <Button style={{ float: 'right' }} onClick={handleDialogClickOpen}>Create New Car</Button>
        {/* Dialog Pop Up */}
        <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id="form-dialog-title">Add New Car</DialogTitle>
            <DialogContent>
                <DialogContentText></DialogContentText>
                <CarForm />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDialogClickClose} color='primary'>Cancel</Button>
                <Button onClick={handleDialogClickOpen} color='primary'>Done</Button>
            </DialogActions>
        </Dialog>
        {/* End dialog pop-up */}
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id='form-dialog-title'>Update Car {selectionModel}</DialogTitle>
        <DialogContent>
            <DialogContentText>Update Car</DialogContentText>
                <CarForm id={selectionModel!} />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose} color='primary'>Cancel</Button>
        <Button onClick={handleClose} color='primary'>Done</Button>
        </DialogActions>
    </Dialog>
    </div>
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid rows={ carData } columns={ columns } pageSize={ 5 } checkboxSelection={true}
    onSelectionModelChange={ (item) => {
        setSelectionModel(item)
    }}
    />
    <Button onClick={handleOpen}>Update</Button>
    <Button variant='contained' color='secondary' onClick={deleteData}>Delete</Button>
    </div>
    </>
  )
}
