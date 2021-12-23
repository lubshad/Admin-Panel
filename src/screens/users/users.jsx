import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import "./users.scss"
import { Delete, DeleteOutline } from '@mui/icons-material';

import { useState } from 'react';

export default function Users() {


    var rows = [];

    for (let i = 0; i < 25; i++) {
        rows.push({ id: i, username: 'john', profile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", email: 'Jondoe@gmail.com', status: "active", action: "edit", transaction: "$200", })
    }


    const [data, setdata] = useState(rows)


    const deleteUser = (id) => {
        const filteredItems = data.filter((item) => item.id !== id)
        setdata(filteredItems)
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className="user-name-with-image">
                        <img src={params.row.profile} alt="" className="profile-pick" />
                        <span>{params.row.username}</span>
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 200,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="actions">
                        <button className="action-button">Action</button>
                        <DeleteOutline className="action-icon" onClick={() => deleteUser(params.row.id)}></DeleteOutline>
                    </div>
                )
            }
        },
    ];




    return (
        <div className='users-screen'>
            <DataGrid
                disableSelectionOnClick
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection />
        </div>
    )
}
