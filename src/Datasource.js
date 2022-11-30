export const userColumns = [
  { field: "usid", headerName: "#", width: 70 },
  {
    field: "firstname",
    headerName: "FirstName",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.firstname}
        </div>
      );
    },
  },
  { field: "lastname", headerName: "LastName", width: 180 },
  { field: "email", headerName: "email", width: 180 },
];
