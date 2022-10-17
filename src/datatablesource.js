export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "user",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
export const userRows = [
  {
    id: 1,
    userName: "Snow",
    img: "https://media.istockphoto.com/photos/knight-with-leather-costume-fur-cloak-and-sword-standing-in-on-cliff-picture-id1191064843",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    userName: "Snowadfasdf",
    img: "https://media.istockphoto.com/photos/knight-with-leather-costume-fur-cloak-and-sword-standing-in-on-cliff-picture-id1191064843",
    status: "active",
    email: "1sasdfnow@gmail.com",
    age: 36,
  },
  {
    id: 3,
    userName: "Snowasdf",
    img: "https://media.istockphoto.com/photos/knight-with-leather-costume-fur-cloak-and-sword-standing-in-on-cliff-picture-id1191064843",
    status: "active",
    email: "134now@gmail.com",
    age: 24,
  },
  {
    id: 4,
    userName: "now",
    img: "https://media.istockphoto.com/photos/knight-with-leather-costume-fur-cloak-and-sword-standing-in-on-cliff-picture-id1191064843",
    status: "pending",
    email: "3snow@gmail.com",
    age: 23,
  },
  {
    id: 5,
    userName: "Snowss",
    img: "https://media.istockphoto.com/photos/knight-with-leather-costume-fur-cloak-and-sword-standing-in-on-cliff-picture-id1191064843",
    status: "passive",
    email: "4snow@gmail.com",
    age: 22,
  },
  {
    id: 6,
    userName: "Snow",
    img: "https://media.istockphoto.com/photos/knight-with-leather-costume-fur-cloak-and-sword-standing-in-on-cliff-picture-id1191064843",
    status: "pending",
    email: "5snow@gmail.com",
    age: 32,
  },
  {
    id: 7,
    userName: "now",
    img: "https://media.istockphoto.com/photos/knight-with-leather-costume-fur-cloak-and-sword-standing-in-on-cliff-picture-id1191064843",
    status: "pending",
    email: "3snow@gmail.com",
    age: 23,
  },
  {
    id: 8,
    userName: "Snowss",
    img: "https://media.istockphoto.com/photos/knight-with-leather-costume-fur-cloak-and-sword-standing-in-on-cliff-picture-id1191064843",
    status: "passive",
    email: "4snow@gmail.com",
    age: 22,
  },
  {
    id: 9,
    userName: "Snow",
    img: "https://media.istockphoto.com/photos/knight-with-leather-costume-fur-cloak-and-sword-standing-in-on-cliff-picture-id1191064843",
    status: "pending",
    email: "5snow@gmail.com",
    age: 32,
  },
];
