const users = [
  { id: 1, username: "user1", status: "active" },
  { id: 2, username: "user2", status: "inactive" },
  { id: 3, username: "user3", status: "active" },
  { id: 4, username: "user4", status: "active" },
  { id: 5, username: "user5", status: "inactive" },
  { id: 6, username: "user6", status: "active" },
  { id: 7, username: "user7", status: "inactive" },
  { id: 8, username: "user8", status: "active" },
  { id: 9, username: "user9", status: "inactive" },
  { id: 10, username: "user10", status: "active" },
  { id: 11, username: "user11", status: "active" },
  { id: 12, username: "user12", status: "inactive" }
];

export const getUsers = (req, res) => {
  res.json(users);
};

export const getUserById = (req, res) => {

  const id = parseInt(req.params.id);

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "Usuario no encontrado"
    });
  }

  res.json(user);
};

export const createUser = (req, res) => {

  const { username, status } = req.body;

  if (!username || !status) {
    return res.status(400).json({
      message: "username y status son requeridos"
    });
  }

  const newUser = {
    id: users.length + 1,
    username,
    status
  };

  users.push(newUser);

  res.status(201).json({
    message: "Usuario creado",
    data: newUser
  });

};

export const updateUser = (req, res) => {

  const id = parseInt(req.params.id);
  const { username, status } = req.body;

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "Usuario no encontrado"
    });
  }

  user.username = username || user.username;
  user.status = status || user.status;

  res.json({
    message: "Usuario actualizado",
    data: user
  });

};

export const deleteUser = (req, res) => {

  const id = parseInt(req.params.id);

  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Usuario no encontrado"
    });
  }

  users.splice(index, 1);

  res.json({
    message: "Usuario eliminado"
  });

};

export const getUsersPagination = (req, res) => {

  let page = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit) || 5;
  let search = req.query.search || "";
  let orderBy = req.query.orderBy || "id";
  let orderDir = req.query.orderDir || "DESC";

  const allowedLimits = [5,10,15,20];
  const allowedOrderBy = ["id","username","status"];
  const allowedOrderDir = ["ASC","DESC"];

  if (!allowedLimits.includes(limit)) {
    return res.status(400).json({
      message: "limit debe ser 5, 10, 15 o 20"
    });
  }

  if (!allowedOrderBy.includes(orderBy)) {
    return res.status(400).json({
      message: "orderBy debe ser id, username o status"
    });
  }

  if (!allowedOrderDir.includes(orderDir)) {
    return res.status(400).json({
      message: "orderDir debe ser ASC o DESC"
    });
  }

  let filtered = users.filter(user =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  filtered.sort((a,b)=>{

    if(orderDir === "ASC"){
      return a[orderBy] > b[orderBy] ? 1 : -1
    }else{
      return a[orderBy] < b[orderBy] ? 1 : -1
    }

  });

  const total = filtered.length;
  const pages = Math.ceil(total / limit);

  const start = (page - 1) * limit;
  const end = start + limit;

  const data = filtered.slice(start,end);

  res.json({
    success: true,
    total,
    page,
    pages,
    data
  });

};
