export default function NameCard({ names }) {
  

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">IP Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {names.map((name) => {
            return (
              <tr key={name.id}>
                <th scope="row">{name.id}</th>
                <td>{name.first_name}</td>
                <td>{name.last_name}</td>
                <td>{name.email}</td>
                <td>{name.gender}</td>
                <td>{name.ip_address}</td>
                <td>
                {/* <button
                    onClick={() => detailHandler(name.id)}
                    className="btn btn-primary"
                  >
                    Detail
                  </button>
                  <button
                    onClick={() => editHandler(name.id)}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteHandler(name.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
